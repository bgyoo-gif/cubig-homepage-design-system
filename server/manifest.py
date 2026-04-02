#!/usr/bin/env python3
"""
output/manifest.json 생성기
output/ 디렉토리를 스캔하여 input → output 매핑 JSON 생성
파이프라인 완료 후, deploy 전에 실행
"""

import json
import time
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
INPUT_DIR = PROJECT_ROOT / "input"
OUTPUT_DIR = PROJECT_ROOT / "output"
MANIFEST_PATH = OUTPUT_DIR / "manifest.json"
GITHUB_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system"


def scan():
    inputs = {}
    orphans = {"html": [], "docs": [], "tsx": [], "preview": []}

    # Scan input files
    for p in sorted(INPUT_DIR.glob("*.html")):
        base = p.stem
        inputs[base] = {
            "input": {
                "name": p.name,
                "path": f"{GITHUB_BASE}/input/{p.name}",
                "modified": time.strftime("%Y-%m-%d", time.localtime(p.stat().st_mtime)),
            },
            "html": [],
            "docs": [],
            "tsx": [],
            "preview": [],
        }

    # Scan output files
    for p in sorted(OUTPUT_DIR.rglob("*")):
        if not p.is_file() or p.name.startswith(".") or p.name == "manifest.json":
            continue

        rel = str(p.relative_to(PROJECT_ROOT))
        url = f"{GITHUB_BASE}/{rel}"
        modified = time.strftime("%Y-%m-%d", time.localtime(p.stat().st_mtime))
        entry = {"name": p.name, "path": url, "modified": modified}

        # Match to input
        matched = False
        for base, group in inputs.items():
            # Match variants: base stem, without A- prefix, key product name
            clean_base = base.replace("A-", "").replace("cubig-", "")
            # Extract product key: llm, dts, proof, learn-prompt etc
            parts = clean_base.replace("-v3", "").replace("-v2", "").replace("-v1", "").split("-")
            product_key = parts[0] if parts else ""
            # Check if output path contains input base or product key in framer dir
            # Use boundary-aware matching to avoid partial overlaps (e.g., execution-state-layer vs execution-state-drift)
            path_match = (f"/{base}" in rel or f"/{base}." in rel or f"/{base}-" in rel or
                          f"/{clean_base}" in rel or f"/{clean_base}." in rel or
                          base in rel.split("/")[-1] or clean_base in rel.split("/")[-1])
            framer_match = "framer" in rel and (f"framer/{base}/" in rel or f"framer/cubig-{clean_base}/" in rel or f"framer/{clean_base}/" in rel)
            # Special: llm-capsule folder matches llm input
            if not path_match and not framer_match:
                if "llm-capsule" in rel and "llm" in base.lower():
                    framer_match = True
                elif "/dts/" in rel and "dts" in base.lower():
                    framer_match = True
            if path_match or framer_match:
                if p.suffix == ".tsx":
                    group["tsx"].append(entry)
                elif p.suffix == ".md":
                    group["docs"].append(entry)
                elif "preview" in p.name or ("framer" in rel and p.suffix == ".html"):
                    group["preview"].append(entry)
                elif p.suffix == ".html":
                    group["html"].append(entry)
                matched = True
                break

        if not matched:
            if p.suffix == ".tsx":
                orphans["tsx"].append(entry)
            elif p.suffix == ".md":
                orphans["docs"].append(entry)
            elif p.suffix == ".html":
                orphans["html"].append(entry)

    # Build result
    groups = []
    for base, group in inputs.items():
        total = len(group["html"]) + len(group["docs"]) + len(group["tsx"]) + len(group["preview"])
        if total > 0:
            groups.append(group)

    # Add orphans as standalone
    orphan_total = sum(len(v) for v in orphans.values())
    if orphan_total > 0:
        groups.append({
            "input": {"name": "(standalone)", "path": "", "modified": ""},
            **orphans,
        })

    manifest = {
        "generated": time.strftime("%Y-%m-%d %H:%M:%S"),
        "github_base": GITHUB_BASE,
        "groups": groups,
    }

    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"manifest.json generated: {len(groups)} groups, {sum(len(g.get('tsx',[])) + len(g.get('html',[])) + len(g.get('docs',[])) for g in groups)} files")
    return manifest


if __name__ == "__main__":
    scan()
