# Adding a plant

Everything lives in [`data.js`](data.js) — no build step. Edit it, reload the page to check,
then commit & push to publish.

## Quick checklist
1. **Pick the next number.** Find the highest number currently used across all `id`s in
   `data.js` (or the highest-numbered folder in `photos/`) and use the next one up — e.g. if
   `37-...` is the highest, the new plant is `38-...`. **Mixed bowls use a separate `x1`,
   `x2`, … sequence** (see "mixed bowl" below) — don't mix the two. Numbers are assigned
   once, in the order plants are added, and never get reused or reshuffled even if the plant
   would otherwise sort earlier in the alphabetical grid.
2. **Add the photo** to a folder named `<number>-<slug>` after the plant's `id`, e.g.
   `photos/38-mammillaria-elongata/IMG_9600.webp`. One folder per plant — it can hold several
   photos. The one named in `file` is the thumbnail; to show the others too, list them all in
   a `files` array (see field reference) and the detail view gets ‹ › arrows to flip through.
3. **Copy the template below** into the `window.CACTI = [ … ]` array in `data.js` (anywhere;
   the site sorts alphabetically on its own).
4. **Fill in the fields** (see reference below). Give it the **numbered `id`** from step 1.
5. **New genus?** Add it to the `window.GENUS_WIKI` map at the top of `data.js`, or its tag
   won't link to Wikipedia.
6. **Reload** the local page (or `python3 -m http.server` then open `localhost:8000`) to check.
7. **Publish:** commit and push — GitHub Pages rebuilds in ~1 minute.
   ```
   git -C . add -A && git commit -m "Add <plant>" && git push
   ```

## Template
```js
{ id: "38-genus-species", file: "photos/38-genus-species/IMG_XXXX.webp", name: "Genus species",
  tag: "Genus species", genus: ["Genus"], region: ["Mexico & SW USA"],
  origin: "Central Mexico",
  blurb: "One or two sentences: what it looks like, flowers, and basic care." },
```

Add `uncertain: true` at the end if the ID is a guess (shows a yellow **tentative** tag).

## Field reference
| Field | What to put |
|---|---|
| `id` | **Unique, stable, numbered** slug — `<number>-<genus-species>`, e.g. `38-mammillaria-elongata`. This is the plant's `#tag` (its permanent display **Catalog #**, e.g. `38`). Its page URL is `?p=<id>`; the older `#<id>` form still resolves too. The number alone disambiguates duplicate species now, so **don't** add a trailing `-1`/`-2` to the slug — two Astrophytum myriostigma are simply `2-astrophytum-myriostigma` and `3-astrophytum-myriostigma`. **Avoid reusing or renaming an existing id** — any link already shared for that plant would stop resolving. |
| `file` | Path to the photo inside the plant's own folder: `photos/<id>/IMG_XXXX.webp`. Safe to swap later (e.g. after a reshoot) — the `id` stays fixed. Photos are **WebP**: export from Photos as JPEG (sRGB, long edge 1600), then convert with `cwebp -q 82 in.jpeg -o out.webp`. Convert from the export, never from an already-web-sized file, so you are not stacking two lossy passes. |
| `name` | The species (shown as the title, italicised). Its Wikipedia link is auto-built from the first two words. |
| `tag` | The handwritten pot label text. Used for search; not shown on screen (the visible **Number** row shows `#<the id's leading number>`). |
| `genus` | **Array.** Normally one, e.g. `["Mammillaria"]`. Drives the green genus filter tag. For a mixed bowl, put `"Mixed & offshoots"` first — see below, it also changes the numbering prefix. |
| `region` | **Array.** Use the existing three: `"Mexico & SW USA"`, `"Andes"`, `"Southern South America"`. Drives the grey region tag. A new value just adds a new filter chip. |
| `origin` | Free text native range shown on the card, e.g. `"S Brazil"`. |
| `blurb` | Description paragraph shown in the detail view. To point at another plant, reference its `#id` (e.g. `#20-mammillaria-compressa`) — it renders as a clickable link showing just that plant's number — `#20` in English, `č. 20` in Slovak. |
| `uncertain` | `true` → yellow **tentative** tag. Omit if confident. |
| `species` | **Mixes only.** Array of the component species (see below). |
| `files` | **Optional.** Array of photo paths when the plant has more than one — put the `file` photo first (it stays the grid thumbnail). The detail view shows ‹ › arrows and a photo counter. Omit for single-photo plants. |

## Special cases
- **New genus** → also add a line to `window.GENUS_WIKI` (top of `data.js`):
  ```js
  "Newgenus": "https://en.wikipedia.org/wiki/Newgenus",
  ```
- **A hybrid** (name contains `×`) or a **genus-only / grouping name** (`sp.`, "dish",
  "offshoots") gets no species Wikipedia link automatically — that's intentional.
- **A species with no Wikipedia article** → add its name to `window.NO_WIKI` (top of
  `data.js`) so it shows as plain text instead of a dead link.
- **A mixed bowl / multi-plant pot** → put `"Mixed & offshoots"` first in `genus`, then each
  member genus, and add a `species` array listing the plants inside. Mixed bowls get their
  **own `x`-numbered sequence** instead of a plain number — the next one is `x3` (find the
  highest existing `xN` the same way you'd find the highest plain number):
  ```js
  { id: "x3-my-mixed-bowl", file: "photos/x3-my-mixed-bowl/IMG_XXXX.webp", name: "Mixed bowl",
    genus: ["Mixed & offshoots", "Mammillaria", "Echinopsis"],
    species: ["Mammillaria bombycina", "Echinopsis oxygona"],
    region: ["Mexico & SW USA", "Southern South America"], origin: "Various",
    blurb: "…" },
  ```
  It then shows up under **Mixed & offshoots** and under each member genus/region, and its
  detail view lists every species and genus in the pot.

## Removing or renaming
- **Remove a plant:** delete its `{ … }` block. (Optionally delete its `photos/<id>/` folder.)
  Don't reuse its number for a different plant later.
- **Fix a mistake:** edit `name`, `genus`, `blurb`, etc. freely. Leave `id` (and its number)
  alone if at all possible so existing links keep working.
