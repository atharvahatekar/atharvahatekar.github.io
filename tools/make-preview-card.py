#!/usr/bin/env python3
"""Render content/preview-card.png — the 1200x630 Open Graph card.

This is the image social platforms show when the site is shared. Re-run it
after changing the name, role, focus lines or the portrait, then commit the
PNG. Requires Pillow (`pip install Pillow`).

    python tools/make-preview-card.py
    python tools/make-preview-card.py --photo content/img/profile/profile-03.webp
    python tools/make-preview-card.py --face-y 0.22
"""
import argparse
import os
import sys

try:
    from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter
except ImportError:
    sys.exit("Pillow is required:  pip install Pillow")

W, H = 1200, 630

BG = (8, 12, 8)
ACCENT = (204, 255, 0)
WHITE = (242, 244, 239)
SECOND = (154, 162, 149)
MUTED = (107, 114, 104)

# Georgia stands in for Playfair Display (the site's display face) and Consolas
# for Fira Code — neither webfont is installed locally, and these are the
# closest editorial-serif / terminal-mono pair available on Windows.
FONTS = os.path.join(os.environ.get("SystemRoot", r"C:\Windows"), "Fonts")
SERIF_BOLD = os.path.join(FONTS, "georgiab.ttf")
MONO = os.path.join(FONTS, "consola.ttf")
MONO_BOLD = os.path.join(FONTS, "consolab.ttf")


def font(path, size):
    if not os.path.exists(path):
        sys.exit("Font not found: %s" % path)
    return ImageFont.truetype(path, size)


def tracked(draw, xy, text, fnt, fill, spacing=0):
    """Draw text with extra letter spacing; Pillow has no tracking of its own."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + spacing
    return x - xy[0]


def draw_logo(img, x, y, size):
    """The AH monogram from content/icon.svg, redrawn with ImageDraw."""
    s = size / 512.0
    layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(104 * s),
                        fill=(13, 18, 13, 255))
    d.rounded_rectangle([int(4 * s), int(4 * s), size - int(4 * s), size - int(4 * s)],
                        radius=int(98 * s), outline=ACCENT + (56,), width=max(1, int(8 * s)))
    lw = max(2, int(52 * s))
    for pts in ([(84, 378), (156, 150), (228, 378)],
                [(116, 300), (196, 300)],
                [(292, 150), (292, 378)],
                [(428, 150), (428, 378)],
                [(292, 264), (428, 264)]):
        d.line([(px * s, py * s) for px, py in pts], fill=ACCENT, width=lw, joint="curve")
    img.alpha_composite(layer, (x, y))


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--photo", default="content/img/profile/profile-01.webp")
    ap.add_argument("--out", default="content/preview-card.png")
    ap.add_argument("--face-y", type=float, default=0.0,
                    help="vertical crop bias, 0=top .. 1=bottom (default 0 keeps "
                         "the headroom of an already-cropped portrait)")
    ap.add_argument("--face-x", type=float, default=0.55)
    args = ap.parse_args()

    card = Image.new("RGBA", (W, H), BG + (255,))

    # ── Background: a soft accent glow behind the type, built by blurring a
    #    blob rather than computing a gradient per pixel.
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse([-260, -300, 700, 470], fill=ACCENT + (26,))
    card.alpha_composite(glow.filter(ImageFilter.GaussianBlur(150)))

    # ── Portrait column, bleeding off the right edge.
    PHOTO_W = 470
    if not os.path.exists(args.photo):
        sys.exit("Photo not found: %s" % args.photo)
    photo = Image.open(args.photo).convert("RGB")
    photo = ImageOps.fit(photo, (PHOTO_W, H), method=Image.LANCZOS,
                         centering=(args.face_x, args.face_y))
    photo = photo.convert("RGBA")

    # Fade the inner edge into the background so it reads as one composition
    # rather than a pasted rectangle.
    mask = Image.new("L", (PHOTO_W, H), 255)
    md = ImageDraw.Draw(mask)
    FADE = 190
    for i in range(FADE):
        md.line([(i, 0), (i, H)], fill=int(255 * (i / FADE) ** 1.6))
    photo.putalpha(mask)
    card.alpha_composite(photo, (W - PHOTO_W, 0))

    d = ImageDraw.Draw(card)

    # ── Type column
    L = 80
    draw_logo(card, L, 66, 62)
    d = ImageDraw.Draw(card)

    f_eyebrow = font(MONO_BOLD, 21)
    f_name = font(SERIF_BOLD, 82)
    f_focus = font(MONO, 20)
    f_url = font(MONO, 19)

    d.ellipse([L, 168, L + 9, 177], fill=ACCENT)
    tracked(d, (L + 22, 160), "DATA SCIENTIST // AI ENGINEER", f_eyebrow, ACCENT, 2.0)

    d.text((L - 4, 200), "Atharva", font=f_name, fill=WHITE)
    d.text((L - 4, 288), "Hatekar", font=f_name, fill=ACCENT)

    d.line([(L, 424), (L + 430, 424)], fill=(38, 48, 31), width=2)

    d.text((L, 446), "> anomaly detection on industrial time-series",
           font=f_focus, fill=SECOND)
    d.text((L, 480), "> LLM & agentic systems in production",
           font=f_focus, fill=SECOND)

    tracked(d, (L, 552), "atharvahatekar.github.io", f_url, MUTED, 1.4)

    # ── Frame: hairline border with plus marks, echoing the site's cards.
    d.rectangle([28, 28, W - 29, H - 29], outline=(58, 74, 34), width=1)
    for cx, cy in ((28, 28), (W - 29, H - 29)):
        d.line([(cx - 9, cy), (cx + 9, cy)], fill=ACCENT, width=2)
        d.line([(cx, cy - 9), (cx, cy + 9)], fill=ACCENT, width=2)

    card.convert("RGB").save(args.out, "PNG", optimize=True)
    print("wrote %s  (%dx%d, %.0f KB)  photo=%s"
          % (args.out, W, H, os.path.getsize(args.out) / 1024, args.photo))


if __name__ == "__main__":
    main()
