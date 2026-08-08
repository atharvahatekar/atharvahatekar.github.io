#!/usr/bin/env python3
"""Resize and convert hero photos to web-sized WebP.

The site ships only the generated .webp files — this is a one-off authoring
tool, not a build step. Run it whenever you add a photo, then commit the
.webp output.

    pip install Pillow
    python tools/optimize-photos.py            # convert any .jpg/.png in the profile dir
    python tools/optimize-photos.py --width 1080 --quality 86
    python tools/optimize-photos.py --keep     # don't delete the source files

Sources should already be cropped to 9:16 — this only scales, it never crops.
Anything off-ratio is reported so you can fix the crop rather than have the
browser silently cut it off.
"""
import argparse
import os
import sys
from glob import glob

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  pip install Pillow")

PROFILE_DIR = os.path.join("content", "img", "profile")
TARGET_RATIO = 9 / 16
# .webp is included so an already-converted but oversized file can be
# re-encoded in place; the source is never deleted in that case.
SOURCE_EXTS = (".jpg", ".jpeg", ".png", ".webp")


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dir", default=PROFILE_DIR, help="folder to process")
    ap.add_argument("--width", type=int, default=900,
                    help="output width in px (default 900 — the frame renders "
                         "~385 CSS px, so this covers ~2.3x DPI)")
    ap.add_argument("--quality", type=int, default=80, help="WebP quality (default 80)")
    ap.add_argument("--keep", action="store_true", help="keep the source files")
    args = ap.parse_args()

    sources = sorted(p for p in glob(os.path.join(args.dir, "*"))
                     if os.path.splitext(p)[1].lower() in SOURCE_EXTS)
    if not sources:
        sys.exit("No image sources found in %s" % args.dir)

    old_total = new_total = 0
    for src in sources:
        im = Image.open(src).convert("RGB")      # also drops any alpha channel
        ratio = im.width / im.height
        note = ""
        if abs(ratio - TARGET_RATIO) > 0.01:
            note = "  <-- not 9:16 (%.3f), the frame will crop it" % ratio

        so_pre = os.path.getsize(src)

        # Never upscale: enlarging a small source only adds bytes and softness.
        width = min(args.width, im.width)
        if width < args.width:
            note += "  (source is only %dpx wide, kept native)" % im.width
        height = round(im.height * width / im.width)
        out = im.resize((width, height), Image.LANCZOS) if width != im.width else im

        dst = os.path.splitext(src)[0] + ".webp"
        if os.path.abspath(dst) == os.path.abspath(src) and width == im.width:
            print("%-20s %7.0f KB  ->  already %dpx wide, skipped"
                  % (os.path.basename(src), so_pre / 1024, im.width))
            old_total += so_pre
            new_total += so_pre
            continue
        # Passing no exif=/icc_profile= means camera metadata (incl. any GPS)
        # is dropped rather than published.
        out.save(dst, "WEBP", quality=args.quality, method=6)

        # so_pre, not getsize(src): an in-place .webp rewrite has already
        # replaced the source by this point, which would report 0% saved.
        so, sn = so_pre, os.path.getsize(dst)
        old_total += so
        new_total += sn
        print("%-20s %7.0f KB  ->  %-20s %6.0f KB   %dx%d%s"
              % (os.path.basename(src), so / 1024, os.path.basename(dst),
                 sn / 1024, width, height, note))

        # A .webp source is rewritten in place, so there is nothing to delete.
        if not args.keep and os.path.abspath(dst) != os.path.abspath(src):
            os.remove(src)

    print("-" * 84)
    print("TOTAL %.2f MB -> %.0f KB  (%.1f%% smaller)"
          % (old_total / 1048576, new_total / 1024,
             (1 - new_total / old_total) * 100))
    print("\nRemember: set width/height on each <img> in index.html to the "
          "dimensions printed above.")


if __name__ == "__main__":
    main()
