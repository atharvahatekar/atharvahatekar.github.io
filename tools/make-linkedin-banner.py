#!/usr/bin/env python3
"""Render a 1584x396 LinkedIn banner in the portfolio's visual language.

Dark green-black ground, neon-lime accent, editorial serif + terminal mono —
with a neural-network motif instead of a photograph.

    pip install Pillow
    python tools/make-linkedin-banner.py
    python tools/make-linkedin-banner.py --out banner.png --seed 7

Layout note: on desktop LinkedIn overlays the profile picture across the
banner's bottom-left corner, and mobile crops the sides. The network graphic
lives on the left where being partly covered does no harm; all text sits in
the right-centre, clear of both.
"""
import argparse
import math
import os
import random
import sys

try:
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
except ImportError:
    sys.exit("Pillow is required:  pip install Pillow")

W, H = 1584, 396
SS = 3                      # supersample factor: ImageDraw lines are aliased

BG = (8, 12, 8)
ACCENT = (204, 255, 0)
WHITE = (242, 244, 239)
SECOND = (154, 162, 149)
MUTED = (107, 114, 104)

FONTS = os.path.join(os.environ.get("SystemRoot", r"C:\Windows"), "Fonts")
SERIF_BOLD = os.path.join(FONTS, "georgiab.ttf")
MONO = os.path.join(FONTS, "consola.ttf")
MONO_BOLD = os.path.join(FONTS, "consolab.ttf")

LAYERS = [4, 6, 6, 3]
LAYER_X = [168, 366, 564, 726]
NET_CY = 198
NODE_GAP = 50


def font(path, size):
    if not os.path.exists(path):
        sys.exit("Font not found: %s" % path)
    return ImageFont.truetype(path, size)


def tracked(draw, xy, text, fnt, fill, spacing=0.0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + spacing
    return x - xy[0]


def node_positions():
    pos = []
    for xi, count in zip(LAYER_X, LAYERS):
        span = (count - 1) * NODE_GAP
        pos.append([(xi, NET_CY - span / 2 + i * NODE_GAP) for i in range(count)])
    return pos


def draw_network(seed):
    """Return an RGBA layer, already downsampled, holding the network."""
    rnd = random.Random(seed)
    layer = Image.new("RGBA", (W * SS, H * SS), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    pos = node_positions()

    def S(p):
        return (p[0] * SS, p[1] * SS)

    # One path lit end to end, suggesting a single inference passing through.
    hot = [rnd.randrange(len(l)) for l in pos]

    # ── Edges. Most are faint; a few carry more "weight"; the hot path is lit.
    for li in range(len(pos) - 1):
        for a, pa in enumerate(pos[li]):
            for b, pb in enumerate(pos[li + 1]):
                on_hot = (a == hot[li] and b == hot[li + 1])
                if on_hot:
                    col, wd = ACCENT + (215,), 3
                elif rnd.random() < 0.16:
                    col, wd = ACCENT + (90,), 2
                else:
                    col, wd = ACCENT + (30,), 1
                d.line([S(pa), S(pb)], fill=col, width=wd * SS)

    # ── Nodes
    for li, layer_nodes in enumerate(pos):
        for i, p in enumerate(layer_nodes):
            r = 9
            x, y = p
            box = [(x - r) * SS, (y - r) * SS, (x + r) * SS, (y + r) * SS]
            if i == hot[li]:
                d.ellipse(box, fill=ACCENT + (255,))
            elif rnd.random() < 0.34:
                d.ellipse(box, fill=ACCENT + (120,))
            else:
                d.ellipse(box, fill=BG + (255,), outline=ACCENT + (150,), width=2 * SS)

    layer = layer.resize((W, H), Image.LANCZOS)

    # Glow: a blurred copy underneath the crisp lines.
    glow = layer.filter(ImageFilter.GaussianBlur(9))
    glow.putalpha(glow.getchannel("A").point(lambda a: int(a * 0.55)))
    out = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    out.alpha_composite(glow)
    out.alpha_composite(layer)

    # Fade the network out toward the text so it never competes with it.
    mask = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(mask)
    for x in range(W):
        if x < 620:
            a = 255
        elif x > 900:
            a = 0
        else:
            a = int(255 * (1 - (x - 620) / 280.0) ** 1.5)
        md.line([(x, 0), (x, H)], fill=a)
    out.putalpha(Image.composite(out.getchannel("A"), Image.new("L", (W, H), 0), mask))
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--out", default="content/linkedin-banner.png")
    ap.add_argument("--seed", type=int, default=11,
                    help="changes which nodes light up (default 11)")
    args = ap.parse_args()

    img = Image.new("RGBA", (W, H), BG + (255,))

    # Ambient glow behind the network.
    amb = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(amb).ellipse([-220, -260, 780, 640], fill=ACCENT + (17,))
    img.alpha_composite(amb.filter(ImageFilter.GaussianBlur(160)))

    img.alpha_composite(draw_network(args.seed))

    d = ImageDraw.Draw(img)

    # ── Text block, right of centre and clear of the profile-photo overlay.
    TX = 812
    f_name = font(SERIF_BOLD, 58)
    f_role = font(MONO_BOLD, 19)
    f_url = font(MONO, 16)

    d.text((TX - 3, 118), "Atharva Hatekar", font=f_name, fill=WHITE)

    d.line([(TX, 205), (TX + 92, 205)], fill=ACCENT, width=3)

    tracked(d, (TX, 228), "DATA SCIENTIST  //  AI ENGINEER", f_role, ACCENT, 2.2)
    tracked(d, (TX, 262), "LLMs from scratch  ·  Agentic RAG  ·  Time-series anomaly detection",
            f_url, SECOND, 0.4)
    tracked(d, (TX, 296), "atharvahatekar.github.io", f_url, MUTED, 1.2)

    # ── Frame, matching the site's cards and the OG image.
    d.rectangle([22, 22, W - 23, H - 23], outline=(46, 60, 28), width=1)
    for cx, cy in ((22, 22), (W - 23, H - 23)):
        d.line([(cx - 8, cy), (cx + 8, cy)], fill=ACCENT, width=2)
        d.line([(cx, cy - 8), (cx, cy + 8)], fill=ACCENT, width=2)

    out = os.path.abspath(args.out)
    img.convert("RGB").save(out, "PNG", optimize=True)
    print("wrote %s  (%dx%d, %.0f KB)" % (args.out, W, H, os.path.getsize(out) / 1024))


if __name__ == "__main__":
    main()
