#!/usr/bin/env python3
"""
CUBIG DS — FastAPI Server
파일 업로드 + 작업 상태 관리 + WebSocket 실시간 알림 + 정적 파일 서빙
여러 사용자 동시 접근 가능 (async + WebSocket broadcast)
"""

import asyncio
import json
import os
import time
import uuid
from pathlib import Path
from typing import Dict, List, Set

from fastapi import FastAPI, UploadFile, File, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

PROJECT_ROOT = Path(__file__).resolve().parent.parent
INPUT_DIR = PROJECT_ROOT / "input"
OUTPUT_DIR = PROJECT_ROOT / "output"
JOBS_DIR = PROJECT_ROOT / "server" / "jobs"

INPUT_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)
JOBS_DIR.mkdir(exist_ok=True)

app = FastAPI(title="CUBIG DS Server")

# CORS — 모든 origin 허용 (사내 다른 PC에서 접근)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ══════════════════════════════════════
# WebSocket Connection Manager
# ══════════════════════════════════════

class ConnectionManager:
    """여러 클라이언트에게 동시 broadcast"""

    def __init__(self):
        self.active: Set[WebSocket] = set()

    async def connect(self, ws: WebSocket):
        await ws.accept()
        self.active.add(ws)

    def disconnect(self, ws: WebSocket):
        self.active.discard(ws)

    async def broadcast(self, message: dict):
        dead = set()
        for ws in self.active:
            try:
                await ws.send_json(message)
            except Exception:
                dead.add(ws)
        self.active -= dead


manager = ConnectionManager()


# ══════════════════════════════════════
# Job Management
# ══════════════════════════════════════

def create_job(filename: str, filepath: Path) -> dict:
    job_id = str(uuid.uuid4())[:8]
    job = {
        "id": job_id,
        "filename": filename,
        "filepath": str(filepath),
        "status": "pending",
        "logs": [{"time": time.strftime("%H:%M:%S"), "stage": "upload", "message": f"File received: {filename}"}],
        "result": None,
        "created_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }
    (JOBS_DIR / f"{job_id}.json").write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding="utf-8")
    return job


def load_job(job_id: str) -> dict | None:
    path = JOBS_DIR / f"{job_id}.json"
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def list_jobs() -> list:
    jobs = []
    for p in sorted(JOBS_DIR.glob("*.json"), key=lambda x: x.stat().st_mtime, reverse=True):
        try:
            jobs.append(json.loads(p.read_text(encoding="utf-8")))
        except Exception:
            pass
    return jobs


# ══════════════════════════════════════
# API Routes
# ══════════════════════════════════════

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    filepath = INPUT_DIR / file.filename
    filepath.write_bytes(content)
    job = create_job(file.filename, filepath)

    # broadcast to all connected clients
    await manager.broadcast({
        "type": "job_created",
        "job": job,
    })

    # Auto-run pipeline in background
    import threading
    import importlib.util
    spec = importlib.util.spec_from_file_location("pipeline", Path(__file__).parent / "pipeline.py")
    pipeline_mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(pipeline_mod)
    run_pipeline = pipeline_mod.run_pipeline
    thread = threading.Thread(target=run_pipeline, args=(job["id"],), daemon=True)
    thread.start()

    return {"job_id": job["id"], "filename": file.filename, "message": "Pipeline started automatically."}


@app.get("/api/jobs")
async def get_jobs():
    return list_jobs()


@app.get("/api/job/{job_id}")
async def get_job(job_id: str):
    job = load_job(job_id)
    if not job:
        return JSONResponse(status_code=404, content={"error": "Job not found"})
    return job


@app.get("/api/files")
async def list_files():
    """output 디렉토리 실시간 스캔"""
    files = []
    for p in sorted(OUTPUT_DIR.rglob("*")):
        if p.is_file() and not p.name.startswith("."):
            rel = p.relative_to(PROJECT_ROOT)
            files.append({
                "path": str(rel),
                "name": p.name,
                "dir": str(rel.parent),
                "ext": p.suffix,
                "size": p.stat().st_size,
                "modified": time.strftime("%Y-%m-%d %H:%M", time.localtime(p.stat().st_mtime)),
            })
    return files


@app.get("/api/tree")
async def file_tree():
    """Input → Output 매핑 트리 반환"""

    def scan(directory):
        result = []
        for p in sorted(directory.rglob("*")):
            if p.is_file() and not p.name.startswith("."):
                rel = p.relative_to(PROJECT_ROOT)
                result.append({
                    "path": str(rel),
                    "name": p.name,
                    "ext": p.suffix,
                    "modified": time.strftime("%Y-%m-%d %H:%M", time.localtime(p.stat().st_mtime)),
                })
        return result

    inputs = scan(INPUT_DIR)
    outputs = scan(OUTPUT_DIR)

    # input 파일별로 output 매핑
    tree = []
    for inp in inputs:
        base = inp["name"].replace(".html", "")
        related = {"html": [], "tsx": [], "md": [], "preview": []}
        for out in outputs:
            oname = out["name"]
            opath = out["path"]
            # 파일명에 base가 포함되면 연결
            if base in oname or base.replace("A-", "").replace("cubig-", "") in opath:
                if out["ext"] in (".html",) and "preview" in oname:
                    related["preview"].append(out)
                elif out["ext"] in (".html",) and "framer" not in opath:
                    related["html"].append(out)
                elif out["ext"] in (".tsx",):
                    related["tsx"].append(out)
                elif out["ext"] in (".md",):
                    related["md"].append(out)
        # output이 하나라도 있는 input만 포함
        if any(related[k] for k in related):
            tree.append({"input": inp, "output": related})

    # 매핑 안 된 output (독립 파일)
    mapped_paths = set()
    for t in tree:
        for k in t["output"]:
            for f in t["output"][k]:
                mapped_paths.add(f["path"])
    orphans = {"html": [], "tsx": [], "md": [], "preview": []}
    for out in outputs:
        if out["path"] not in mapped_paths:
            if out["ext"] == ".tsx":
                orphans["tsx"].append(out)
            elif out["ext"] == ".md":
                orphans["md"].append(out)
            elif "preview" in out["name"]:
                orphans["preview"].append(out)
            elif out["ext"] == ".html":
                orphans["html"].append(out)
    has_orphans = any(orphans[k] for k in orphans)

    return {"tree": tree, "orphans": orphans if has_orphans else None}


@app.get("/api/file-content")
async def get_file_content(path: str):
    """파일 내용을 텍스트로 반환 (보안: PROJECT_ROOT 내부만 허용)"""
    target = (PROJECT_ROOT / path).resolve()
    if not str(target).startswith(str(PROJECT_ROOT)):
        return JSONResponse(status_code=403, content={"error": "Access denied"})
    if not target.exists():
        return JSONResponse(status_code=404, content={"error": "File not found"})
    try:
        text = target.read_text(encoding="utf-8")
        return {"path": path, "content": text}
    except UnicodeDecodeError:
        return JSONResponse(status_code=415, content={"error": "Binary file"})


# ══════════════════════════════════════
# WebSocket — 실시간 알림
# ══════════════════════════════════════

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await manager.connect(ws)
    try:
        while True:
            # 클라이언트에서 메시지를 보낼 수 있음 (ping 등)
            data = await ws.receive_text()
            if data == "ping":
                await ws.send_json({"type": "pong"})
    except WebSocketDisconnect:
        manager.disconnect(ws)


# ══════════════════════════════════════
# File Watcher — output 변경 감지 → broadcast
# ══════════════════════════════════════

async def watch_output_dir():
    """output 디렉토리를 주기적으로 스캔, 변경 시 broadcast"""
    known: Dict[str, float] = {}

    # 초기 스캔
    for p in OUTPUT_DIR.rglob("*"):
        if p.is_file() and not p.name.startswith("."):
            known[str(p)] = p.stat().st_mtime

    while True:
        await asyncio.sleep(3)
        current: Dict[str, float] = {}
        for p in OUTPUT_DIR.rglob("*"):
            if p.is_file() and not p.name.startswith("."):
                current[str(p)] = p.stat().st_mtime

        # 새 파일
        new_files = set(current) - set(known)
        # 수정된 파일
        modified_files = {k for k in set(current) & set(known) if current[k] != known[k]}
        # 삭제된 파일
        deleted_files = set(known) - set(current)

        if new_files or modified_files or deleted_files:
            changes = []
            for f in new_files:
                rel = str(Path(f).relative_to(PROJECT_ROOT))
                changes.append({"action": "created", "path": rel, "name": Path(f).name})
            for f in modified_files:
                rel = str(Path(f).relative_to(PROJECT_ROOT))
                changes.append({"action": "modified", "path": rel, "name": Path(f).name})
            for f in deleted_files:
                rel = str(Path(f).relative_to(PROJECT_ROOT))
                changes.append({"action": "deleted", "path": rel, "name": Path(f).name})

            await manager.broadcast({
                "type": "files_changed",
                "changes": changes,
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            })

        known = current


@app.on_event("startup")
async def startup():
    asyncio.create_task(watch_output_dir())


# ══════════════════════════════════════
# 정적 파일 서빙 (맨 마지막에 마운트)
# ══════════════════════════════════════

app.mount("/", StaticFiles(directory=str(PROJECT_ROOT), html=True), name="static")


if __name__ == "__main__":
    import uvicorn
    import sys

    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3333
    cert_dir = Path(__file__).parent / "certs"
    ssl_cert = cert_dir / "localhost+1.pem"
    ssl_key = cert_dir / "localhost+1-key.pem"
    use_ssl = ssl_cert.exists() and ssl_key.exists()

    proto = "https" if use_ssl else "http"
    ws_proto = "wss" if use_ssl else "ws"
    print(f"\n  CUBIG DS Server @ {proto}://localhost:{port}")
    print(f"  Viewer: {proto}://localhost:{port}/reference/design-system-viewer.html")
    print(f"  API:    {proto}://localhost:{port}/api/files")
    print(f"  WS:     {ws_proto}://localhost:{port}/ws")
    print(f"  SSL:    {'ON' if use_ssl else 'OFF (run: mkcert -install && mkcert localhost 127.0.0.1)'}")
    print(f"  Ctrl+C to stop\n")

    kwargs = {"host": "0.0.0.0", "port": port, "log_level": "info"}
    if use_ssl:
        kwargs["ssl_certfile"] = str(ssl_cert)
        kwargs["ssl_keyfile"] = str(ssl_key)
    uvicorn.run(app, **kwargs)
