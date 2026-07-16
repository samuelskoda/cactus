# My Cactus Collection

A small static photo catalogue of my potted cacti. Each plant has a photo, a short
description, and its genus/region, and you can browse by genus or region or search by name.

## Files
- `index.html` — the site (self-contained; plain HTML/CSS/JS, no build step)
- `data.js` — the collection data; edit this to add plants or fix names/descriptions
- `photos/` — the photos (`photos/IMG_*.jpeg`)
- `SUMMARY.md` — a written summary of the collection and open ID questions

## Running locally
Because browsers block `file://` for some features, serve the folder over HTTP:

```
python3 -m http.server
```

then open <http://localhost:8000>.

## Hosting
Served as a GitHub Pages project site at <https://samuelskoda.github.io/cactus/>.
The `.nojekyll` file tells Pages to serve the files as-is (no Jekyll build).
