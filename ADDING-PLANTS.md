# Adding a plant

Everything lives in [`data.js`](data.js) — no build step. Edit it, reload the page to check,
then commit & push to publish.

## Quick checklist
1. **Add the photo** to a folder named after the plant's `id` (its tag), e.g.
   `photos/mammillaria-elongata/IMG_9600.jpeg`. One folder per plant — it can hold several
   photos (only the one named in `file` is shown for now).
2. **Copy the template below** into the `window.CACTI = [ … ]` array in `data.js` (anywhere;
   the site sorts alphabetically on its own).
3. **Fill in the fields** (see reference below). Give it a **unique `id`**.
4. **New genus?** Add it to the `window.GENUS_WIKI` map at the top of `data.js`, or its tag
   won't link to Wikipedia.
5. **Reload** the local page (or `python3 -m http.server` then open `localhost:8000`) to check.
6. **Publish:** commit and push — GitHub Pages rebuilds in ~1 minute.
   ```
   git -C . add -A && git commit -m "Add <plant>" && git push
   ```

## Template
```js
{ id: "genus-species", file: "photos/genus-species/IMG_XXXX.jpeg", name: "Genus species",
  tag: "Genus species", genus: ["Genus"], region: ["Mexico & SW USA"],
  origin: "Central Mexico",
  blurb: "One or two sentences: what it looks like, flowers, and basic care." },
```

Add `uncertain: true` at the end if the ID is a guess (shows a yellow **tentative** tag).

## Field reference
| Field | What to put |
|---|---|
| `id` | **Unique, stable** slug — this is the plant's `#tag` (QR target). Use `genus-species`; add `-1`, `-2` for duplicates of the same species. **Never reuse or rename an existing id** once QR codes are printed. |
| `file` | Path to the photo inside the plant's own folder: `photos/<id>/IMG_XXXX.jpeg`. Safe to swap later (e.g. after a reshoot) — the `id` stays fixed. |
| `name` | The species (shown as the title, italicised). Its Wikipedia link is auto-built from the first two words. |
| `tag` | The handwritten pot label text. Used for search; not shown on screen (the visible **Tag** row shows the `#id`). |
| `genus` | **Array.** Normally one, e.g. `["Mammillaria"]`. Drives the green genus filter tag. |
| `region` | **Array.** Use the existing three: `"Mexico & SW USA"`, `"Andes"`, `"Southern South America"`. Drives the grey region tag. A new value just adds a new filter chip. |
| `origin` | Free text native range shown on the card, e.g. `"S Brazil"`. |
| `blurb` | Description paragraph shown in the detail view. To point at another plant, reference its `#id` (e.g. `#mammillaria-compressa-1`). |
| `uncertain` | `true` → yellow **tentative** tag. Omit if confident. |
| `species` | **Mixes only.** Array of the component species (see below). |

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
  member genus, and add a `species` array listing the plants inside:
  ```js
  { id: "my-mixed-bowl", file: "photos/IMG_XXXX.jpeg", name: "Mixed bowl",
    genus: ["Mixed & offshoots", "Mammillaria", "Echinopsis"],
    species: ["Mammillaria bombycina", "Echinopsis oxygona"],
    region: ["Mexico & SW USA", "Southern South America"], origin: "Various",
    blurb: "…" },
  ```
  It then shows up under **Mixed & offshoots** and under each member genus/region, and its
  detail view lists every species and genus in the pot.

## Removing or renaming
- **Remove a plant:** delete its `{ … }` block. (Optionally delete the photo from `photos/`.)
- **Fix an ID:** just edit `name`, `genus`, `blurb`, etc. Leave `id` alone if possible so
  existing links/QR codes keep working.
