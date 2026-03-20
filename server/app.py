#!/usr/bin/env python3
"""
CUBIG DS — Local File Server
파일 업로드 수신 + 작업 상태 관리 + 정적 파일 서빙
실제 변환은 Claude Code가 로컬에서 직접 실행
"""

import http.server
import json
import os
import time
import uuid
from pathlib import Path
from urllib.parse import urlparse

PROJECT_ROOT = Path(__file__).resolve().parent.parent
INPUT_DIR = PROJECT_ROOT / "input"
OUTPUT_DIR = PROJECT_ROOT / "output"
JOBS_DIR = PROJECT_ROOT / "server" / "jobs"

INPUT_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)
JOBS_DIR.mkdir(exist_ok=True)


def create_job(filename, filepath):
    """Create a job manifest file for Claude Code to pick up."""
    job_id = str(uuid.uuid4())[:8]
    job = {
        "id": job_id,
        "filename": filename,
        "filepath": str(filepath),
        "status": "pending",  # pending → running → done → error
        "logs": [{"time": time.strftime("%H:%M:%S"), "stage": "upload", "message": f"File received: {filename}"}],
        "result": None,
        "created_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }
    job_path = JOBS_DIR / f"{job_id}.json"
    job_path.write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding="utf-8")
    return job


def load_job(job_id):
    job_path = JOBS_DIR / f"{job_id}.json"
    if not job_path.exists():
        return None
    return json.loads(job_path.read_text(encoding="utf-8"))


def list_jobs():
    jobs = []
    for p in sorted(JOBS_DIR.glob("*.json"), key=lambda x: x.stat().st_mtime, reverse=True):
        jobs.append(json.loads(p.read_text(encoding="utf-8")))
    return jobs


class Handler(http.server.SimpleHTTPRequestHandler):

    def do_POST(self):
        if self.path == "/api/upload":
            self.handle_upload()
        else:
            self.send_error(404)

    def do_GET(self):
        parsed = urlparse(self.path)

        if parsed.path == "/api/jobs":
            self.send_json(200, list_jobs())
        elif parsed.path.startswith("/api/job/"):
            job_id = parsed.path.split("/")[-1]
            job = load_job(job_id)
            if job:
                self.send_json(200, job)
            else:
                self.send_json(404, {"error": "Job not found"})
        elif parsed.path == "/api/files":
            self.handle_list_files()
        elif parsed.path.startswith("/api/sse/"):
            self.handle_sse(parsed.path.split("/")[-1])
        else:
            self.directory = str(PROJECT_ROOT)
            super().do_GET()

    def handle_upload(self):
        content_type = self.headers.get("Content-Type", "")
        if "multipart/form-data" not in content_type:
            self.send_json(400, {"error": "Expected multipart/form-data"})
            return

        boundary = content_type.split("boundary=")[1].encode()
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        parts = body.split(b"--" + boundary)
        file_data = None
        filename = None

        for part in parts:
            if b'filename="' in part:
                header_end = part.find(b"\r\n\r\n")
                header = part[:header_end].decode("utf-8", errors="replace")
                fn_start = header.find('filename="') + 10
                fn_end = header.find('"', fn_start)
                filename = header[fn_start:fn_end]
                file_data = part[header_end + 4:].rstrip(b"\r\n--")
                break

        if not filename or not file_data:
            self.send_json(400, {"error": "No file found"})
            return

        filepath = INPUT_DIR / filename
        filepath.write_bytes(file_data)

        job = create_job(filename, filepath)

        self.send_json(200, {"job_id": job["id"], "filename": filename, "message": "File uploaded. Waiting for Claude Code to process."})

    def handle_sse(self, job_id):
        """SSE stream — polls job file for updates."""
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("Connection", "keep-alive")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        last_log_count = 0
        while True:
            try:
                job = load_job(job_id)
                if not job:
                    break

                if len(job["logs"]) > last_log_count:
                    for entry in job["logs"][last_log_count:]:
                        self.wfile.write(f"data: {json.dumps(entry)}\n\n".encode())
                    self.wfile.flush()
                    last_log_count = len(job["logs"])

                if job["status"] in ("done", "error"):
                    data = json.dumps({"stage": "status", "message": job["status"], "result": job.get("result")})
                    self.wfile.write(f"data: {data}\n\n".encode())
                    self.wfile.flush()
                    break

                time.sleep(1)
            except (BrokenPipeError, ConnectionResetError):
                break

    def handle_list_files(self):
        files = []
        for p in sorted(OUTPUT_DIR.rglob("*")):
            if p.is_file() and not p.name.startswith("."):
                files.append({
                    "path": str(p.relative_to(PROJECT_ROOT)),
                    "name": p.name,
                    "size": p.stat().st_size,
                    "modified": time.strftime("%Y-%m-%d %H:%M", time.localtime(p.stat().st_mtime)),
                })
        self.send_json(200, files)

    def send_json(self, code, data):
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))

    def log_message(self, format, *args):
        pass  # suppress access logs


def main():
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3333
    server = http.server.HTTPServer(("0.0.0.0", port), Handler)
    print(f"\n  CUBIG DS File Server @ http://localhost:{port}")
    print(f"  Viewer: http://localhost:{port}/reference/design-system-viewer.html")
    print(f"  Jobs dir: {JOBS_DIR}")
    print(f"  Ctrl+C to stop\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
