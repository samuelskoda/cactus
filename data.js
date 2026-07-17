/*
 * Cactus collection data.
 * One entry per specimen. Edit freely — the website reads this file.
 *
 * Fields:
 *   id        STABLE slug, independent of the photo filename. Used for QR deep-links
 *             (page.html#id). Keep it fixed even when you reshoot and swap the photo.
 *   file      image filename (same folder). Safe to change after a reshoot.
 *   name      best-guess accepted / likely species
 *   tag       exactly what the handwritten pot tag says
 *   genus     ARRAY of genera for the "browse by genus" filter. Usually one; a mixed
 *             bowl lists every genus planted in it, so it shows up under each. The
 *             special value "Mixed & offshoots" flags multi-plant bowls (shown first, styled apart).
 *   region    ARRAY of regions: "Mexico & SW USA", "Andes", "Southern South America".
 *   origin    native range (free text, shown on the card)
 *   species   (mixes only) array of the component species — listed in the detail view
 *   blurb     description
 *   uncertain true if the ID is doubtful (shown with a "?" badge)
 */

// Genus -> Wikipedia article. Shown as a link in the detail view.
window.GENUS_WIKI = {
  "Espostoa":       "https://en.wikipedia.org/wiki/Espostoa",
  "Coryphantha":    "https://en.wikipedia.org/wiki/Coryphantha",
  "Astrophytum":    "https://en.wikipedia.org/wiki/Astrophytum",
  "Echinopsis":     "https://en.wikipedia.org/wiki/Echinopsis",
  "Mammillaria":    "https://en.wikipedia.org/wiki/Mammillaria",
  "Stenocactus":    "https://en.wikipedia.org/wiki/Stenocactus",
  "Ferocactus":     "https://en.wikipedia.org/wiki/Ferocactus",
  "Matucana":       "https://en.wikipedia.org/wiki/Matucana",
  "Parodia":        "https://en.wikipedia.org/wiki/Parodia",
  "Gymnocalycium":  "https://en.wikipedia.org/wiki/Gymnocalycium",
  "Kroenleinia":    "https://en.wikipedia.org/wiki/Kroenleinia",
  "Cumulopuntia":   "https://en.wikipedia.org/wiki/Cumulopuntia",
  "Disocactus":     "https://en.wikipedia.org/wiki/Disocactus"
  // "Bowls & dish gardens" is a grouping, not a genus — no Wikipedia link.
};

// Species whose Wikipedia article doesn't exist — shown as plain text, no link.
window.NO_WIKI = ["Cumulopuntia boliviana"];

window.CACTI = [
  { id: "13-espostoa-melanostele", file: "photos/13-espostoa-melanostele/IMG_9481.jpeg", name: "Espostoa melanostele", tag: "Espostoa melanostele", genus: ["Espostoa"], region: ["Andes"], origin: "Peru (Andes)",
    blurb: "A slow-growing columnar cactus from the Peruvian Andes, wrapped head to foot in dense white wool and fine hair-like spines that shade it from fierce high-altitude sun. Over many years it builds a tall silvery column and, when mature, a woolly flowering cephalium with nocturnal white-pink blooms. Wants bright light and a very free-draining mix." },

  { id: "4-coryphantha-cornifera", file: "photos/4-coryphantha-cornifera/IMG_9482.jpeg", name: "Coryphantha cornifera", tag: "Coryphantha cornifera", genus: ["Coryphantha"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A small tubercled globe with curved amber spines. The ID is doubtful: the many spreading, hooked spines don't clearly show C. cornifera's single stout 'horn', so it could equally be a different Coryphantha, an Escobaria, or a hook-spined Mammillaria — worth confirming when it flowers (Coryphantha open large yellow blooms from the growing tip). Coryphantha in general want full sun, warmth and a dry winter.", uncertain: true },

  { id: "1-astrophytum-asterias", file: "photos/1-astrophytum-asterias/IMG_9483.jpeg", name: "Astrophytum asterias", tag: "Astrophytum asterias", genus: ["Astrophytum"], region: ["Mexico & SW USA"], origin: "N Mexico & S Texas",
    blurb: "The famous spineless 'sand dollar' cactus — a low, flattened disc divided into neat ribbed segments and dusted with tiny white woolly flecks. It bears big yellow flowers with an orange-red throat. Slow, coveted and a little fussy: give it gritty soil, sun and cautious watering to avoid rot." },

  { id: "8-echinopsis-ancistrophora", file: "photos/8-echinopsis-ancistrophora/IMG_9484.jpeg", name: "Echinopsis ancistrophora", tag: "Lobivia ancistrophora", genus: ["Echinopsis"], region: ["Andes"], origin: "Argentina & Bolivia (E Andes)",
    blurb: "A small, unassuming green globe with soft white areoles that hides a spectacular trick: it throws large, funnel-shaped flowers far bigger than the plant itself, often opening at dusk. Quick and easy, from the eastern Andean foothills of Bolivia and northern Argentina. (Lobivia is now folded into Echinopsis.)" },

  { id: "26-mammillaria-spinosissima", file: "photos/26-mammillaria-spinosissima/IMG_9485.jpeg", name: "Mammillaria spinosissima", tag: "Mammillaria spinosissima", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A cylindrical pincushion so densely clothed in fine radiating spines that the body almost vanishes beneath them — the 'very spiny' Mammillaria. In spring a tidy ring of deep-pink flowers encircles the woolly crown. Undemanding given sun and sharp drainage." },

  { id: "35-stenocactus-multicostatus", file: "photos/35-stenocactus-multicostatus/IMG_9486.jpeg", name: "Stenocactus multicostatus", tag: "Stenocactus multicostatus", genus: ["Stenocactus"], region: ["Mexico & SW USA"], origin: "N & Central Mexico",
    blurb: "The classic 'brain cactus', its small body pleated into dozens of thin, crowded, wavy ribs. Pale flowers with a purple midstripe sit low on the crown in late winter. A hardy, easy Mexican species that appreciates a cool, dry winter." },

  { id: "10-echinopsis-aurea", file: "photos/10-echinopsis-aurea/IMG_9487.jpeg", name: "Echinopsis aurea", tag: "Echinopsis aurea", genus: ["Echinopsis"], region: ["Southern South America"], origin: "Argentina",
    blurb: "A small clustering cactus armed with stiff radial spines and topped, in season, by brilliant golden-yellow flowers that look outsized for the plant. From the dry hills of central Argentina; free-flowering and easy in sun.", uncertain: true },

  { id: "2-astrophytum-myriostigma", file: "photos/2-astrophytum-myriostigma/IMG_9488.jpeg", name: "Astrophytum myriostigma", tag: "Astrophytum myriostigma", genus: ["Astrophytum"], region: ["Mexico & SW USA"], origin: "N Mexico",
    blurb: "The 'bishop's cap' — spineless and powdered all over with tiny white scales for a marbled, silvery look. This is the paler specimen and an unusual 3-ribbed (three-lobed) form; the classic myriostigma has five ribs. Glossy yellow flowers rise from the crown in summer." },

  { id: "3-astrophytum-myriostigma", file: "photos/3-astrophytum-myriostigma/IMG_9489.jpeg", name: "Astrophytum myriostigma", tag: "Astrophytum myriostigma", genus: ["Astrophytum"], region: ["Mexico & SW USA"], origin: "N Mexico",
    blurb: "A second bishop's cap, greener-bodied with woolly areoles running down the rib edges. This one shows the typical 5 ribs, reading as a neat five-pointed star from above. Reliable cup-shaped yellow flowers in summer; spineless and sculptural, grown for its geometry rather than its spines." },

  { id: "24-mammillaria-karwinskiana", file: "photos/24-mammillaria-karwinskiana/IMG_9490.jpeg", name: "Mammillaria karwinskiana", tag: "Mammillaria karwinskiana", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "S Mexico (Oaxaca)",
    blurb: "A green pincushion with sparse, long pale spines and stout tubercles. The ID isn't certain — it may be the same species as the single-headed compressa, #20-mammillaria-compressa. To separate M. karwinskiana from M. compressa, watch how it clumps (karwinskiana splits its head in two; compressa offsets into a dense mound) and the flower colour (karwinskiana cream with a red midstripe; compressa purple-pink); both bleed milky latex when cut.", uncertain: true },

  { id: "14-ferocactus-emoryi", file: "photos/14-ferocactus-emoryi/IMG_9491.jpeg", name: "Ferocactus emoryi", tag: "Ferocactus emoryi", genus: ["Ferocactus"], region: ["Mexico & SW USA"], origin: "Mexico / SW USA",
    blurb: "A stout, ribbed barrel cactus with heavy spines, caught here in bud. Most likely Ferocactus emoryi, a Sonoran Desert barrel with a single hooked central spine, though young barrels are hard to pin to species, so it could be misidentified. Ferocactus grow slowly into big, sun-loving barrels.", uncertain: true },

  { id: "34-stenocactus-crispatus", file: "photos/34-stenocactus-crispatus/IMG_9492.jpeg", name: "Stenocactus crispatus", tag: "Stenocactus crispatus", genus: ["Stenocactus"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "Another wavy-ribbed Stenocactus, this one armed with longer, flattened, upright spines that arch over the crown. Small purple-striped flowers appear in late winter. Tough and forgiving with a cool, dry rest." },

  { id: "30-parodia-leninghausii", file: "photos/30-parodia-leninghausii/IMG_9493.jpeg", name: "Parodia leninghausii", tag: "Parodia leninghausii", genus: ["Parodia"], region: ["Southern South America"], origin: "S Brazil",
    blurb: "The 'golden ball' or 'lemon ball' cactus — a soft-looking globe bristling with fine golden spines that turns columnar with age. Older plants crown themselves with lemon-yellow flowers. Easy, fast and cheerful; it enjoys more water than most cacti in growth." },

  { id: "28-matucana-aureiflora", file: "photos/28-matucana-aureiflora/IMG_9494.jpeg", name: "Matucana aureiflora", tag: "Matucana aureiflora", genus: ["Matucana"], region: ["Andes"], origin: "N Peru (Andes)",
    blurb: "A flattened, disc-shaped Andean cactus with interlacing yellowish spines pressed close to the body. Unusually for the genus — most Matucana bear tubular red or orange flowers — M. aureiflora opens golden-yellow, near-symmetrical blooms, hence the name. From high grassland in northern Peru; give it sun and gritty, very free-draining soil." },

  { id: "20-mammillaria-compressa", file: "photos/20-mammillaria-compressa/IMG_9495.jpeg", name: "Mammillaria compressa", tag: "Mammillaria compressa", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A single green head with dense white radial spines. Being solitary, it's hard to call for certain — it could be a young Mammillaria compressa, or the same species as #24-mammillaria-karwinskiana. Useful clues when it matures: flower colour (compressa purple-pink vs karwinskiana cream with a red stripe), the wool and bristles in the axils, and the spine count per areole.", uncertain: true },

  { id: "17-kroenleinia-grusonii", file: "photos/17-kroenleinia-grusonii/IMG_9496.jpeg", name: "Kroenleinia grusonii", tag: "Kroenleinia grusonii", genus: ["Kroenleinia"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A young golden barrel, its ribs already lined with dense, translucent golden spines. Famously slow — this small plant is the start of the show-piece 'golden barrel', and the big mature one elsewhere in the collection shows where it's heading. Long known as Echinocactus grusonii." },

  { id: "33-stenocactus-coptonogonus", file: "photos/33-stenocactus-coptonogonus/IMG_9497.jpeg", name: "Stenocactus coptonogonus", tag: "Stenocactus coptonogonus", genus: ["Stenocactus"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "The odd one out among Stenocactus: instead of many wavy ribs it has fewer, straight, sharp-edged ribs and stout curved spines. White flowers striped magenta open in late winter. A distinctive, collectable Mexican species." },

  { id: "29-parodia-erubescens", file: "photos/29-parodia-erubescens/IMG_9498.jpeg", name: "Parodia × erubescens", tag: "Parodia × erubescens", genus: ["Parodia"], region: ["Southern South America"], origin: "Uruguay (hybrid)",
    blurb: "A ribbed green globe with reddish spines, here pushing out a bright bud. This is a documented natural hybrid — Parodia × erubescens (Osten) D.R.Hunt, a cross of P. mammulosa × P. concinna from Uruguay (both formerly Notocactus). Like its parents it's an easy, generous flowerer that enjoys bright light and a little more water than desert cacti." },

  { id: "5-coryphantha-elephantidens", file: "photos/5-coryphantha-elephantidens/IMG_9499.jpeg", files: ["photos/5-coryphantha-elephantidens/IMG_9499.jpeg", "photos/5-coryphantha-elephantidens/IMG_7042.jpeg"], name: "Coryphantha elephantidens", tag: "Coryphantha elephantidens", genus: ["Coryphantha"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A fat, glossy dark-green plant with big rounded tubercles that give it its name — the 'elephant's tooth' cactus. From a woolly crown it opens large, silky pink flowers in late summer. Wants warmth, sun and a dry winter." },

  { id: "21-mammillaria-compressa", file: "photos/21-mammillaria-compressa/IMG_9500.jpeg", name: "Mammillaria compressa", tag: "— (tag not legible; identified by owner)", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A broad, low mound of many heads bristling with white spines — the 'bunch' of the collection. Its dense clustering habit fits Mammillaria compressa ('mother of hundreds') well, so this is the more confident of the two compressa. Small purple-pink flowers ring the crowns in spring; very easy." },

  { id: "15-gymnocalycium-saglionis", file: "photos/15-gymnocalycium-saglionis/IMG_9501.jpeg", name: "Gymnocalycium saglionis", tag: "Gymnocalycium saglionis", genus: ["Gymnocalycium"], region: ["Southern South America"], origin: "N Argentina",
    blurb: "A grey-green 'chin cactus' with broad tubercles and strong, curved spines. Gymnocalyciums tolerate a little more shade than most cacti and open naked-tubed flowers (the name means 'naked calyx'). Slow, tough and long-lived — the smaller of the two saglionis here." },

  { id: "9-echinopsis-ancistrophora", file: "photos/9-echinopsis-ancistrophora/IMG_9502.jpeg", files: ["photos/9-echinopsis-ancistrophora/IMG_9502.jpeg", "photos/9-echinopsis-ancistrophora/IMG_7141.jpeg"], name: "Echinopsis ancistrophora", tag: "Lobivia ancistrophora", genus: ["Echinopsis"], region: ["Andes"], origin: "Argentina & Bolivia (E Andes)",
    blurb: "A second ancistrophora — a ribbed globe with spines pressed close to the body and, in season, big pale funnel flowers on long tubes. Quick and easy in sun." },

  { id: "25-mammillaria-matudae", file: "photos/25-mammillaria-matudae/IMG_9503.jpeg", name: "Mammillaria matudae", tag: "Mammillaria matudae", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico (Guerrero)",
    blurb: "The 'thumb cactus' — slender stems that elongate, lean over and offset, neatly sheathed in white radial spines. Small pink flowers form rings near the tips. Fast and easy, and happy to trail over a pot edge." },

  { id: "11-echinopsis-oxygona", file: "photos/11-echinopsis-oxygona/IMG_9504.jpeg", name: "Echinopsis oxygona", tag: "Echinopsis oxygona", genus: ["Echinopsis"], region: ["Southern South America"], origin: "S Brazil / Uruguay / Argentina",
    blurb: "The classic 'Easter lily cactus' — a ribbed green globe that clusters freely and produces enormous, fragrant pink flowers on long tubes, usually opening overnight. Vigorous, hardy and forgiving; a pass-along favourite for good reason." },

  { id: "16-gymnocalycium-saglionis", file: "photos/16-gymnocalycium-saglionis/IMG_9505.jpeg", name: "Gymnocalycium saglionis", tag: "Gymnocalycium saglionis", genus: ["Gymnocalycium"], region: ["Southern South America"], origin: "N Argentina",
    blurb: "A large, solitary globe with broad tubercles and stout, curved spines — a well-grown chin cactus. Small pink-white flowers ring the top in summer. Slow but very long-lived and undemanding." },

  { id: "23-mammillaria-hahniana", file: "photos/23-mammillaria-hahniana/IMG_9506.jpeg", files: ["photos/23-mammillaria-hahniana/IMG_9506.jpeg", "photos/23-mammillaria-hahniana/IMG_9258.jpeg"], name: "Mammillaria hahniana", tag: "Mammillaria hahniana", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "The 'old lady cactus' — a globe wrapped in long white hairs and short spines that give it a soft, whiskery look. A ring of deep magenta flowers crowns it in spring. Loves sun; keep the hairs dry to stay white." },

  { id: "19-mammillaria-bombycina", file: "photos/19-mammillaria-bombycina/IMG_9507.jpeg", name: "Mammillaria bombycina", tag: "Mammillaria bombycina", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A clustering pincushion with silky white spines and hooked amber central spines, building neat mounds of heads. Bright pink flowers ring the crowns in spring. Attractive year-round for its spine pattern alone." },

  { id: "12-echinopsis-oxygona", file: "photos/12-echinopsis-oxygona/IMG_9508.jpeg", name: "Echinopsis oxygona", tag: "Echinopsis oxygona", genus: ["Echinopsis"], region: ["Southern South America"], origin: "S Brazil / Uruguay / Argentina",
    blurb: "A dark-green ribbed, offsetting globe with relatively short spines. It was long grown as Echinopsis eyriesii, a small-spined form once treated as a separate species but now regarded as the same as E. oxygona — the Easter lily cactus, which clusters freely and bears huge, fragrant pink night flowers." },

  { id: "31-parodia-magnifica", file: "photos/31-parodia-magnifica/IMG_9509.jpeg", name: "Parodia magnifica", tag: "Parodia magnifica", genus: ["Parodia"], region: ["Southern South America"], origin: "S Brazil",
    blurb: "The 'ball cactus' — a green ribbed body edged in soft golden spines, with a woolly crown and sulphur-yellow flowers. One of the collection's two magnifica; likes bright light and summer water." },

  { id: "32-parodia-magnifica", file: "photos/32-parodia-magnifica/IMG_9513.jpeg", files: ["photos/32-parodia-magnifica/IMG_9513.jpeg", "photos/32-parodia-magnifica/IMG_7170.jpeg"], name: "Parodia magnifica", tag: "Parodia magnifica", genus: ["Parodia"], region: ["Southern South America"], origin: "S Brazil",
    blurb: "The second 'ball cactus' of the collection — a green ribbed body clothed in soft golden spines with a woolly crown and sulphur-yellow flowers. Bright light and summer water suit it." },

  { id: "27-mammillaria-vetula", file: "photos/27-mammillaria-vetula/IMG_9510.jpeg", name: "Mammillaria vetula", tag: "— (tag not legible; identified by owner)", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A dense mat of tiny cylindrical 'thimble' heads in fine white spines; the little offsets detach at the lightest touch and root wherever they land. Small cream flowers dot the mound in spring. Charming, fast and almost too easy to propagate." },

  { id: "22-mammillaria-elongata", file: "photos/22-mammillaria-elongata/IMG_9511.jpeg", name: "Mammillaria elongata", tag: "Mammillaria elongata", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "The 'ladyfinger cactus' — mounds of slender, finger-like stems laced with interlocking golden spines. It forms a big, spreading clump over time and carries small cream-to-yellow flowers. Undemanding and quick; a reliable, decorative filler." },

  { id: "x2-mixed-dish-bowl", file: "photos/x2-mixed-dish-bowl/IMG_9514.jpeg", name: "Mixed seedling dish", tag: "— (dish planting)",
    genus: ["Mixed & offshoots", "Kroenleinia", "Mammillaria", "Echinopsis", "Coryphantha"],
    species: ["Kroenleinia grusonii", "Mammillaria bombycina", "Echinopsis ancistrophora", "Coryphantha elephantidens"],
    region: ["Mexico & SW USA", "Andes"], origin: "Mexico & S America",
    blurb: "A shallow bowl grown up with six young cacti together: a golden barrel (Kroenleinia grusonii), a silky Mammillaria bombycina, an Echinopsis ancistrophora and three Coryphantha elephantidens. A living sampler that mixes Mexican and South American species in one dish — so it's listed here under each of its members' genera and regions." },

  { id: "7-disocactus-ackermannii", file: "photos/7-disocactus-ackermannii/IMG_9515.jpeg", name: "Disocactus ackermannii", tag: "Disocactus ackermannii", genus: ["Disocactus"], region: ["Mexico & SW USA"], origin: "SE Mexico (forests)",
    blurb: "An 'orchid cactus' — here a rooting cutting of flat, notched, strap-like stems. Unlike the desert species around it, this is a forest epiphyte that grows on trees; it repays humidity, some shade and richer soil with large, brilliant red day-flowers." },

  { id: "6-cumulopuntia-boliviana", file: "photos/6-cumulopuntia-boliviana/IMG_9516.jpeg", name: "Cumulopuntia boliviana", tag: "Cumulopuntia boliviana", genus: ["Cumulopuntia"], region: ["Andes"], origin: "Bolivia / Peru / Argentina (Andes)",
    blurb: "A high-altitude jointed cactus from the Andes that builds low, tight chains of knobbly segments armed with papery, flexible spines. Slow and very cold-hardy in habitat; it wants sharp drainage and lots of sun, with small yellow-orange flowers in summer." },

  { id: "x1-echinopsis-oxygona-bowl", file: "photos/x1-echinopsis-oxygona-bowl/IMG_9517.jpeg", name: "Echinopsis offshoots", tag: "— (no tag; identified by owner)",
    genus: ["Mixed & offshoots", "Echinopsis"], species: ["Echinopsis oxygona"], region: ["Southern South America"], origin: "S Brazil / Uruguay / Argentina",
    blurb: "An outdoor bowl brimming with clustering Easter lily cactus (Echinopsis oxygona) pups — hardy, free-flowering garden survivors that erupt with huge, fragrant pink flowers in early summer. Tough enough to live in the ground here." },

  { id: "18-kroenleinia-grusonii", file: "photos/18-kroenleinia-grusonii/IMG_9518.jpeg", name: "Kroenleinia grusonii", tag: "— (no tag; identified by owner)", genus: ["Kroenleinia"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A mature 'golden barrel' — a big, near-spherical ribbed body armoured in dense golden spines, the show-piece 'mother-in-law's cushion'. Decades in the making and endangered in the wild, though widely grown. Full sun and a dry winter keep it fat and firm." }
];
