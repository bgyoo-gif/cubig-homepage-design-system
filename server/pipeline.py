"""
CUBIG DS — Conversion Pipeline
Anthropic API로 product-designer → frontend-dev → qa 자동 실행
서버에서 직접 호출하여 완전 자동화
"""

import json
import os
import time
import subprocess
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
INPUT_DIR = PROJECT_ROOT / "input"
OUTPUT_DIR = PROJECT_ROOT / "output"
JOBS_DIR = PROJECT_ROOT / "server" / "jobs"
SKILLS_DIR = PROJECT_ROOT / ".claude" / "skills"

# Design system excerpt (for context)
def load_ds_excerpt(max_chars=6000):
    ds_path = SKILLS_DIR / "design-system.md"
    if ds_path.exists():
        return ds_path.read_text(encoding="utf-8")[:max_chars]
    return ""


def update_job(job_id, stage, message, status=None, result=None):
    path = JOBS_DIR / f"{job_id}.json"
    job = json.loads(path.read_text(encoding="utf-8"))
    job["logs"].append({"time": time.strftime("%H:%M:%S"), "stage": stage, "message": message})
    if status:
        job["status"] = status
    if result:
        job["result"] = result
    path.write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding="utf-8")
    return job


def call_claude(system_prompt, user_prompt, max_tokens=8000):
    """Call Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not api_key:
        return None, "ANTHROPIC_API_KEY not set"

    try:
        import anthropic
    except ImportError:
        # Try venv
        import sys
        venv_path = PROJECT_ROOT / ".venv" / "lib"
        for p in venv_path.glob("python*/site-packages"):
            if str(p) not in sys.path:
                sys.path.insert(0, str(p))
        import anthropic

    client = anthropic.Anthropic(api_key=api_key)
    try:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=max_tokens,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
        )
        return response.content[0].text, None
    except Exception as e:
        return None, str(e)


def run_pipeline(job_id):
    """Run full conversion pipeline for a job."""
    path = JOBS_DIR / f"{job_id}.json"
    job = json.loads(path.read_text(encoding="utf-8"))
    filename = job["filename"]
    filepath = Path(job["filepath"])
    basename = filepath.stem

    update_job(job_id, "orchestrator", "Pipeline started", "running")

    # Read input
    try:
        input_html = filepath.read_text(encoding="utf-8")
    except Exception as e:
        update_job(job_id, "error", f"Cannot read input: {e}", "error")
        return

    update_job(job_id, "upload", f"File loaded: {len(input_html):,} chars")
    ds_excerpt = load_ds_excerpt()

    # ── Step 1: Product Designer ──
    update_job(job_id, "product-designer", "Analyzing A-type HTML...")

    pd_system = (
        "You are a product designer for CUBIG homepage. Analyze HTML and create a layout specification. "
        "Output ONLY the spec in markdown, no explanation. Follow these rules strictly: "
        "No eyebrow in any section. FAQ must use accordion. Steps must use step-tabs. "
        "Cert/partner must use official DS components. Section headers center-aligned by default."
    )
    pd_prompt = f"Create a B-type conversion spec for this A-type HTML.\n\nHTML:\n{input_html[:12000]}\n\nDesign System:\n{ds_excerpt[:4000]}"

    spec_result, err = call_claude(pd_system, pd_prompt, max_tokens=6000)
    if err:
        update_job(job_id, "product-designer", f"API error: {err}", "error")
        return

    spec_path = OUTPUT_DIR / "docs" / f"{basename}-spec.md"
    spec_path.parent.mkdir(exist_ok=True)
    spec_path.write_text(spec_result, encoding="utf-8")
    update_job(job_id, "product-designer", f"Spec saved ({len(spec_result):,} chars)")

    # ── Step 2: Frontend Dev ──
    update_job(job_id, "frontend-dev", "Generating B-type HTML...")

    fe_system = (
        "You are a senior frontend developer. Generate a complete B-type HTML file following the design system. "
        "Output ONLY the HTML file, no explanation. Rules: "
        "No eyebrow. text-wrap: balance (headings) / pretty (body). "
        "description max-width responsive (100% → 720px → 860px). "
        "Image paths: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/ "
        "brand-purple: #725bea. brand gradient: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%). "
        "FAQ: ds-ac-card accordion. KPI overlay: rgba(0,0,0,0.35). banner-full padding: space-xl."
    )
    fe_prompt = (
        f"Convert this spec into B-type HTML.\n\n"
        f"SPEC:\n{spec_result[:6000]}\n\n"
        f"ORIGINAL HTML (for text):\n{input_html[:8000]}\n\n"
        f"DESIGN SYSTEM:\n{ds_excerpt[:4000]}"
    )

    html_result, err = call_claude(fe_system, fe_prompt, max_tokens=16000)
    if err:
        update_job(job_id, "frontend-dev", f"API error: {err}", "error")
        return

    html_path = OUTPUT_DIR / "html" / f"{basename}-b-type.html"
    html_path.parent.mkdir(exist_ok=True)
    html_path.write_text(html_result, encoding="utf-8")
    update_job(job_id, "frontend-dev", f"B-type HTML saved ({len(html_result):,} chars)")

    # ── Step 3: QA ──
    update_job(job_id, "qa", "Running validation...")

    qa_system = (
        "You are a QA engineer. Validate this B-type HTML against design system rules. "
        "Check: content integrity, DS compliance, code quality, responsiveness. "
        "Output a brief QA report with PASS/CONDITIONAL PASS/FAIL verdict."
    )
    qa_prompt = f"Validate this B-type HTML.\n\nHTML:\n{html_result[:10000]}"

    qa_result, err = call_claude(qa_system, qa_prompt, max_tokens=4000)
    if not err and qa_result:
        qa_path = OUTPUT_DIR / "docs" / f"{basename}-qa-report.md"
        qa_path.write_text(qa_result, encoding="utf-8")

        if "FAIL" in qa_result.upper() and "CONDITIONAL" not in qa_result.upper().split("FAIL")[0][-30:]:
            update_job(job_id, "qa", "FAIL — defects found")
        else:
            update_job(job_id, "qa", "PASS")
    else:
        update_job(job_id, "qa", f"QA skipped: {err or 'no result'}")

    # ── Step 4: Deploy ──
    update_job(job_id, "deploy", "Pushing to GitHub Pages...")
    try:
        subprocess.run(
            ["git", "add", "-A"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=30
        )
        subprocess.run(
            ["git", "commit", "-m", f"Auto-deploy: {basename} pipeline complete"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=30
        )
        push_result = subprocess.run(
            ["git", "push", "origin", "gh-pages"],
            cwd=str(PROJECT_ROOT), capture_output=True, timeout=60
        )
        if push_result.returncode == 0:
            update_job(job_id, "deploy", "GitHub Pages updated")
        else:
            update_job(job_id, "deploy", f"Push failed: {push_result.stderr.decode()[:200]}")
    except Exception as e:
        update_job(job_id, "deploy", f"Deploy error: {str(e)}")

    # ── Complete ──
    update_job(job_id, "complete", "Pipeline complete", "done", {
        "spec": f"output/docs/{basename}-spec.md",
        "html": f"output/html/{basename}-b-type.html",
        "qa": f"output/docs/{basename}-qa-report.md",
    })
