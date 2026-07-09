#!/usr/bin/env python3
"""
Extract the legal pages (ochrana-osobnych-udajov, cookies) from the mirror
into src/content/legal/<slug>.html — same cleaning approach as gen_blog.py.

    python3 scripts/gen_legal.py
"""

import re
from pathlib import Path

FRESH = Path(__file__).resolve().parent.parent
MIRROR = FRESH.parent / "adpacc-nextjs"
OUT = FRESH / "src" / "content" / "legal"
OUT.mkdir(parents=True, exist_ok=True)

PAGES = ["ochrana-osobnych-udajov", "cookies"]


def clean(body: str) -> str:
    body = re.sub(r"<style[^>]*>.*?</style>", "", body, flags=re.S)
    body = re.sub(r"<script[^>]*>.*?</script>", "", body, flags=re.S)
    body = re.sub(r"<svg.*?</svg>", "", body, flags=re.S)
    body = re.sub(r'\s(?:data-[\w-]+|aria-hidden)="[^"]*"', "", body)
    body = re.sub(r'\sclass="[^"]*"', "", body)
    body = re.sub(r'\sid="[^"]*"', "", body)
    body = re.sub(r"<(/?)div[^>]*>", "", body)
    body = re.sub(r"<h1[^>]*>.*?</h1>", "", body, flags=re.S)  # page renders its own h1
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def balanced_div(html: str, start: int) -> str:
    depth = 0
    for m in re.finditer(r"<div\b|</div>", html[start:]):
        depth += 1 if m.group(0).startswith("<div") else -1
        if depth == 0:
            return html[start : start + m.end()]
    return html[start:]


for slug in PAGES:
    html = (MIRROR / "content" / "html" / f"{slug}.html").read_text(encoding="utf-8")
    m = re.search(r'<div[^>]*data-widget_type="theme-post-content[^"]*"', html)
    if not m:
        print("✗ no content widget:", slug)
        continue
    body = clean(balanced_div(html, m.start()))
    (OUT / f"{slug}.html").write_text(body, encoding="utf-8")
    print(f"✓ {slug} ({len(body):,}b)")
