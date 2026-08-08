# CLAUDE.md

## Project
Atharva Hatekar's personal portfolio — editorial dark aesthetic with terminal elements.
Data Scientist / AI Engineer based in Cottbus, Germany. No build step.

## Stack
- Vanilla HTML/CSS/JS
- GitHub API (projects) in `loader.js`
- Localized content (EN/DE) in `js/i18n.js`
- Deployed via GitHub Pages

## Dev
```bash
python -m http.server 8000
bash tests/run_tests.sh   # CI test suite
```

## Structure
- `index.html` / `js/index.js` / `css/index.css` — homepage (hero, skills, contact terminal)
- `projects.html` — curated cards hydrated from GitHub API
- `cv.html` — role timeline, skill heatmap, education/publication dossier (`cv-section/`),
  all data in `js/i18n.js` and `cv-section/data.js`
- `404.html` — terminal-styled not-found page
- `style.css` — global styles + light/dark themes + palette/terminal/aurora
- `loader.js` — GitHub integration, sessionStorage caching, theme toggle
- `js/palette.js` — ⌘K command palette
- `js/terminal.js` — interactive contact terminal

## Content sources
- Work history, education, publication, achievements, languages, and all project
  copy live in `js/i18n.js` (EN + DE side by side — update both).
- `FEATURED_ORDER` in `loader.js` controls which repos show on `projects.html`.
- Skill heatmap values are in `cv-section/data.js`.

## Conventions
- No frameworks, no build tools — keep it vanilla
- Editorial dark aesthetic: deep green-black bg (`#080c08`), neon yellow-green accent (`#ccff00`), serif display headings (`Playfair Display`) + monospace terminals (`Fira Code`)
- Theme toggle: `[data-theme="light"]` selector overrides in CSS
- Respect `prefers-reduced-motion` for every animation, with one documented
  exception: the hero typewriter always runs (see `initTypewriterCycle` in
  `js/i18n.js` for the reasoning). Freezing it left the hero looking broken on
  phones where the flag is set by Battery Saver rather than chosen.
- CSP: no inline `style=` attributes in HTML (blocked; tests enforce this).
  If you edit the JSON-LD block in `index.html`, recompute its sha256 CSP hash
  (`tests/run_tests.sh` verifies it).
- All `target="_blank"` links need `rel="noopener"` (tests enforce this)
- Branch prefix: `claude/`
