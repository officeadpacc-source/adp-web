#!/usr/bin/env python3
"""
Generate English blog content for the fresh site from the mirror's scraped pages.

    python3 scripts/gen_blog_en.py

For each EN blog post in ../adpacc-nextjs:
- extracts the article body (theme-post-content widget), strips styles/ids
- copies referenced /wp-content/uploads images into public/ (same paths)
- writes cleaned HTML to src/content/posts/<slug>.html
- writes the post index (slug/title/description/image/date) to
  src/content/blog.en.json
"""

import json
import re
import shutil
from pathlib import Path

FRESH = Path(__file__).resolve().parent.parent
MIRROR = FRESH.parent / "adpacc-nextjs"
OUT = FRESH / "src" / "content" / "posts"
OUT.mkdir(parents=True, exist_ok=True)

EN_POSTS = [
    "current-legislative-changes-in-accounting-and-taxes-for-2025",
    "e-invoicing-and-accounting-digitalization-how-to-prepare-for-mandatory-changes",
    "instant-payments-and-iban-verification-will-be-mandatory-from-october-9",
    "practical-advice-for-entrepreneurs-tax-optimization-and-effective-accounting",
    "vat-deduction-on-passengers-cars-from-1-january-2026",
]


def balanced_div(html: str, start: int) -> str:
    """Return the full <div>…</div> block starting at `start`."""
    depth = 0
    for m in re.finditer(r"<div\b|</div>", html[start:]):
        depth += 1 if m.group(0).startswith("<div") else -1
        if depth == 0:
            return html[start : start + m.end()]
    return html[start:]


def clean(body: str) -> str:
    body = re.sub(r"<style[^>]*>.*?</style>", "", body, flags=re.S)
    body = re.sub(r"<script[^>]*>.*?</script>", "", body, flags=re.S)
    body = re.sub(r'\s(?:data-[\w-]+|aria-hidden)="[^"]*"', "", body)
    body = re.sub(r'\sclass="[^"]*"', "", body)
    body = re.sub(r'\sid="[^"]*"', "", body)
    body = re.sub(r"<(/?)div[^>]*>", "", body)  # drop layout divs entirely
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def copy_images(body: str) -> None:
    for src in set(re.findall(r'(?:src|href)="(/wp-content/uploads/[^"]+?\.(?:png|jpe?g|webp|avif|gif|svg|pdf))"', body)):
        s = MIRROR / "public" / src.lstrip("/")
        d = FRESH / "public" / src.lstrip("/")
        if s.exists():
            d.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(s, d)


pages = json.loads((MIRROR / "content" / "pages.json").read_text())
meta = {p["route"].strip("/"): p for p in pages}

index = []
for slug in EN_POSTS:
    html = (MIRROR / "content" / "html" / f"en__{slug}.html").read_text(encoding="utf-8")
    m = re.search(r'<div[^>]*data-widget_type="theme-post-content[^"]*"', html)
    if not m:
        print("✗ no content widget:", slug)
        continue
    block = balanced_div(html, m.start())
    body = clean(block)
    copy_images(block)
    (OUT / f"{slug}.html").write_text(body, encoding="utf-8")

    p = meta.get("en/" + slug, {})
    og = p.get("og", {})
    img = og.get("image", "")
    if img:
        copy_images(f'src="{img}"')
    
    # Clean Title: Remove the '| ADP Accounting...' suffix if it's there
    title = p.get("title") or slug
    if " | " in title:
        title = title.split(" | ")[0]
    title = title.strip()

    index.append(
        {
            "slug": slug,
            "title": title,
            "description": p.get("description", ""),
            "image": img,
            "date": (og.get("updated_time") or "")[:10],
        }
    )
    print(f"✓ {slug} ({len(body):,}b)")

# newest first
index.sort(key=lambda x: x["date"], reverse=True)
(FRESH / "src" / "content" / "blog.en.json").write_text(
    json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8"
)
print(f"\nblog.en.json: {len(index)} posts")
