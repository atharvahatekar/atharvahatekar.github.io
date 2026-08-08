<p align="center">
  <img src="content/icon.svg" width="80" alt="AH">
</p>

<h3 align="center">atharvahatekar.github.io</h3>
<p align="center">Personal portfolio — Data Scientist &amp; AI Engineer based in Cottbus, Germany</p>

<p align="center">
  <a href="https://atharvahatekar.github.io">Live Site</a> &middot;
  <a href="https://github.com/atharvahatekar">GitHub</a> &middot;
  <a href="https://linkedin.com/in/atharvahatekar">LinkedIn</a>
</p>

---

## Stack

| Layer | Tech |
|-------|------|
| Markup | Vanilla HTML / CSS / JS — no build step |
| Fonts | Playfair Display, Fira Code, DM Sans (Google Fonts) |
| Data | GitHub API (projects), localized content in `js/i18n.js` |
| i18n | EN / DE, persisted in `localStorage` |
| Hosting | GitHub Pages |

## Pages

```
index.html      Hero, skills grid, featured projects, interactive contact terminal
projects.html   Curated project cards, hydrated live from the GitHub API
cv.html         Role timeline, skill density heatmap, education & publication dossier
404.html        Terminal-styled not-found page
```

## Quick Start

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Structure

```
├── index.html / cv.html / projects.html / 404.html
├── style.css                 # Global styles, themes, palette/terminal/aurora
├── css/index.css             # Homepage-specific styles
├── js/
│   ├── i18n.js               # Translations, CV/project content, language switcher, typewriter
│   ├── index.js              # Homepage interactions (reveal, rotation, stagger)
│   ├── palette.js            # ⌘K command palette
│   └── terminal.js           # Interactive contact terminal
├── cv-section/               # CV renderer: role timeline, heatmap, dossier
├── theme-init.js             # Blocks FOUC — sets saved theme before paint
├── loader.js                 # GitHub integration, caching, theme toggle, nav
├── tests/run_tests.sh        # CI checks: structure, assets, SEO, contrast
├── tools/optimize-photos.py  # Authoring helper: resize + WebP the hero photos
└── content/
    ├── icon.svg              # Favicon (AH monogram)
    ├── preview-card.png      # Open Graph / social preview card
    ├── Atharva_Hatekar_CV_2026.pdf
    ├── company-logos/        # Employer wordmarks used in the CV timeline
    └── img/profile/          # Hero portraits (profile-01.webp, …)
```

## Features

- **⌘K command palette** — keyboard-first navigation, theme & language switching
- **Interactive contact terminal** — type `help` on the homepage
- **Session caching** — GitHub responses cached 1h in `sessionStorage`; project
  cards render instantly from curated metadata even if the API is down
- **Dark / light themes** — WCAG-checked contrast, `prefers-reduced-motion` respected

## Theming

Two themes controlled via the `data-theme` attribute on `<html>`:

| | Dark (default) | Light |
|---|---|---|
| Background | `#080c08` | `#f5f2eb` |
| Accent | `#ccff00` | `#1a5c00` |
| Display font | Playfair Display | Playfair Display |
| Code font | Fira Code | Fira Code |

Edit CSS variables in `:root` and `[data-theme="light"]` in `style.css`.

## Configuration

`CONFIG` in `loader.js` holds the account and resume paths:

```js
const CONFIG = {
    githubUser: 'atharvahatekar',
    resumeFile: 'content/Atharva_Hatekar_CV_2026.pdf',
    resumeDownloadName: 'Atharva_Hatekar_CV_2026.pdf',
};
```

Which repos appear on `projects.html`, and in what order, is set by
`FEATURED_ORDER` / `PROJECT_META` / `REPO_TAGS` in the same file.

Work history, education, project copy and every UI string (EN + DE) live in
`js/i18n.js`. The skill heatmap grid is `cv-section/data.js`.

### Hero photos

`content/img/profile/` holds the rotating hero portraits — currently five WebP
files. The frame is `aspect-ratio: 9/16` with `object-fit: cover` on desktop
(`3/4` on mobile), so **crop sources to 9:16** and nothing is cut on desktop.

To add one:

1. Crop to 9:16 and save it into `content/img/profile/` as `profile-05.jpg`.
2. Convert and shrink it:

   ```bash
   pip install Pillow          # once
   python tools/optimize-photos.py
   ```

   That resizes to 900px wide, writes WebP at quality 80, strips camera
   metadata (including any GPS), and deletes the source. Pass `--keep` to
   retain it, or `--width` / `--quality` to override. Off-ratio sources are
   flagged rather than silently cropped, and a source narrower than the target
   is kept at native size rather than upscaled — so feed it the largest
   original you have.
3. Add it in `index.html` as another `<img class="profile-img">` sibling, with
   `width`/`height` set to the dimensions the script printed, plus
   `loading="lazy" decoding="async"`. Only the first image carries `active` and
   `fetchpriority="high"`. Sizes may differ between images; the frame scales
   them all to fit.

The photos cross-fade every 4.2s with a 900ms blend, and the rotation is
skipped entirely for visitors who prefer reduced motion. If you change the fade
length, `PROFILE_FADE_MS` in `js/index.js` must match the `opacity` transition
on `.video-frame img` in `style.css`, or the outgoing frame will drop out early
and flash.

Why WebP-only with no JPEG fallback: the stylesheet already relies on
`color-mix()`, which has narrower browser support than WebP, so a fallback
would buy nothing.

### Adding the publication link

`DOSSIER.common.publication.url` in `js/i18n.js` is `null`. Set it to the
IJARESM paper URL and a `read_paper ↗` link appears on the CV page.

## Tests

```bash
bash tests/run_tests.sh
```

Runs in CI on every push/PR: HTML structure, asset references, SEO metadata,
CSP regressions (inline styles, JSON-LD hash), and light-theme contrast ratios.

> If you edit the JSON-LD block in `index.html`, its sha256 must be re-added to
> the CSP `script-src` in the same file — the test suite verifies this.

---

Built by [Atharva Hatekar](https://github.com/atharvahatekar)
