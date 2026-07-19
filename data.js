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
 *   blurb_sk  Slovak translation of blurb. name_sk likewise, for the two non-Latin names
 *             (the mixed bowls); everything else is a Latin name and stays as is.
 *   flower    true if one of the photos shows it in flower. Drives the 🌸 marker on the card,
 *             the "In flower" tag in the detail view, and the matching filter. Kept as its own
 *             field rather than inferred from files.length: today every multi-photo plant is a
 *             flower shot, but a second photo could just as well be a detail or a reshoot.
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
  { id: "13-espostoa-melanostele", file: "photos/13-espostoa-melanostele/IMG_9554.webp", files: ["photos/13-espostoa-melanostele/IMG_9554.webp", "photos/13-espostoa-melanostele/IMG_9481.webp"], name: "Espostoa melanostele", tag: "Espostoa melanostele", genus: ["Espostoa"], region: ["Andes"], origin: "Peru (Andes)",
    blurb: "A slow-growing columnar cactus from the Peruvian Andes, wrapped head to foot in dense white wool and fine hair-like spines that shade it from fierce high-altitude sun. Over many years it builds a tall silvery column and, when mature, a woolly flowering cephalium with nocturnal white-pink blooms. Wants bright light and a very free-draining mix.",
    blurb_sk: "Pomaly rastúci stĺpovitý kaktus z peruánskych Ánd, od päty po vrchol zahalený v hustej bielej vlne a jemných vláskovitých tŕňoch, ktoré ho tienia pred ostrým vysokohorským slnkom. Za mnoho rokov vybuduje vysoký strieborný stĺp a v dospelosti aj vlnaté kvetné cefálium s nočnými bielo-ružovými kvetmi. Chce jasné svetlo a veľmi priepustný substrát." },

  { id: "4-coryphantha-cornifera", file: "photos/4-coryphantha-cornifera/IMG_9541.webp", files: ["photos/4-coryphantha-cornifera/IMG_9541.webp", "photos/4-coryphantha-cornifera/IMG_9482.webp"], name: "Coryphantha cornifera", tag: "Coryphantha cornifera", genus: ["Coryphantha"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A small tubercled globe with curved amber spines. The ID is doubtful: the many spreading, hooked spines don't clearly show C. cornifera's single stout 'horn', so it could equally be a different Coryphantha, an Escobaria, or a hook-spined Mammillaria — worth confirming when it flowers (Coryphantha open large yellow blooms from the growing tip). Coryphantha in general want full sun, warmth and a dry winter.",
    blurb_sk: "Malá bradavkatá guľa so zahnutými jantárovými tŕňmi. Určenie je pochybné: mnohé odstávajúce háčikovité tŕne jasne nezodpovedajú jedinému mohutnému „rohu“ druhu C. cornifera, takže by rovnako dobre mohlo ísť o inú koryfantu, escobáriu alebo mamilárku s háčikovitými tŕňmi — potvrdí sa to pri kvitnutí (koryfanty otvárajú veľké žlté kvety z vrcholu). Koryfanty vo všeobecnosti chcú plné slnko, teplo a suchú zimu.", uncertain: true },

  { id: "1-astrophytum-asterias", file: "photos/1-astrophytum-asterias/IMG_9542.webp", files: ["photos/1-astrophytum-asterias/IMG_9542.webp", "photos/1-astrophytum-asterias/IMG_9483.webp"], name: "Astrophytum asterias", tag: "Astrophytum asterias", genus: ["Astrophytum"], region: ["Mexico & SW USA"], origin: "N Mexico & S Texas",
    blurb: "The famous spineless 'sand dollar' cactus — a low, flattened disc divided into neat ribbed segments and dusted with tiny white woolly flecks. It bears big yellow flowers with an orange-red throat. Slow, coveted and a little fussy: give it gritty soil, sun and cautious watering to avoid rot.",
    blurb_sk: "Slávny beztŕňový kaktus prezývaný „morský dolár“ — nízky sploštený disk rozdelený na úhľadné rebrovité segmenty a poprášený drobnými bielymi vlnatými vločkami. Nesie veľké žlté kvety s oranžovočerveným stredom. Pomalý, vyhľadávaný a trochu chúlostivý: doprajte mu štrkovitú zeminu, slnko a opatrnú zálievku, aby nezahnil." },

  { id: "8-echinopsis-ancistrophora", file: "photos/8-echinopsis-ancistrophora/IMG_9548.webp", files: ["photos/8-echinopsis-ancistrophora/IMG_9548.webp", "photos/8-echinopsis-ancistrophora/IMG_9484.webp"], name: "Echinopsis ancistrophora", tag: "Lobivia ancistrophora", genus: ["Echinopsis"], region: ["Andes"], origin: "Argentina & Bolivia (E Andes)",
    blurb: "A small, unassuming green globe with soft white areoles that hides a spectacular trick: it throws large, funnel-shaped flowers far bigger than the plant itself, often opening at dusk. Quick and easy, from the eastern Andean foothills of Bolivia and northern Argentina. (Lobivia is now folded into Echinopsis.)",
    blurb_sk: "Malá nenápadná zelená guľa s mäkkými bielymi areolami, ktorá skrýva veľkolepý trik: vyháňa veľké lievikovité kvety oveľa väčšie, než je sama rastlina, často sa otvárajúce za súmraku. Rýchly a nenáročný, z východného podhoria Ánd v Bolívii a severnej Argentíne. (Rod Lobivia je dnes zahrnutý do rodu Echinopsis.)" },

  { id: "26-mammillaria-spinosissima", file: "photos/26-mammillaria-spinosissima/IMG_9545.webp", files: ["photos/26-mammillaria-spinosissima/IMG_9545.webp", "photos/26-mammillaria-spinosissima/IMG_9485.webp"], name: "Mammillaria spinosissima", tag: "Mammillaria spinosissima", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A cylindrical pincushion so densely clothed in fine radiating spines that the body almost vanishes beneath them — the 'very spiny' Mammillaria. In spring a tidy ring of deep-pink flowers encircles the woolly crown. Undemanding given sun and sharp drainage.",
    blurb_sk: "Valcovitá mamilárka tak husto odetá jemnými lúčovitými tŕňmi, že telo pod nimi takmer mizne — „najtŕnistejšia“ mamilárka. Na jar obopne vlnaté temeno úhľadný veniec sýtoružových kvetov. Nenáročná, ak dostane slnko a výbornú drenáž." },

  { id: "35-stenocactus-multicostatus", file: "photos/35-stenocactus-multicostatus/IMG_9560.webp", files: ["photos/35-stenocactus-multicostatus/IMG_9560.webp", "photos/35-stenocactus-multicostatus/IMG_9486.webp"], name: "Stenocactus multicostatus", tag: "Stenocactus multicostatus", genus: ["Stenocactus"], region: ["Mexico & SW USA"], origin: "N & Central Mexico",
    blurb: "The classic 'brain cactus', its small body pleated into dozens of thin, crowded, wavy ribs. Pale flowers with a purple midstripe sit low on the crown in late winter. A hardy, easy Mexican species that appreciates a cool, dry winter.",
    blurb_sk: "Klasický „mozgový kaktus“, ktorého malé telo je poskladané do desiatok tenkých, natesno usporiadaných vlnitých rebier. Bledé kvety s fialovým stredovým pruhom sadajú nízko na temeno koncom zimy. Otužilý, nenáročný mexický druh, ktorému svedčí chladná a suchá zima." },

  { id: "10-echinopsis-aurea", file: "photos/10-echinopsis-aurea/IMG_9487.webp", name: "Echinopsis aurea", tag: "Echinopsis aurea", genus: ["Echinopsis"], region: ["Southern South America"], origin: "Argentina",
    blurb: "A small clustering cactus armed with stiff radial spines and topped, in season, by brilliant golden-yellow flowers that look outsized for the plant. From the dry hills of central Argentina; free-flowering and easy in sun.",
    blurb_sk: "Malý trsovitý kaktus vyzbrojený tuhými lúčovitými tŕňmi a v sezóne korunovaný žiarivo zlatožltými kvetmi, ktoré na rastlinu pôsobia predimenzovane. Zo suchých kopcov strednej Argentíny; kvitne ochotne a na slnku je nenáročný.", uncertain: true },

  { id: "2-astrophytum-myriostigma", file: "photos/2-astrophytum-myriostigma/IMG_9557.webp", files: ["photos/2-astrophytum-myriostigma/IMG_9557.webp", "photos/2-astrophytum-myriostigma/IMG_9488.webp"], name: "Astrophytum myriostigma", tag: "Astrophytum myriostigma", genus: ["Astrophytum"], region: ["Mexico & SW USA"], origin: "N Mexico",
    blurb: "The 'bishop's cap' — spineless and powdered all over with tiny white scales for a marbled, silvery look. This is the paler specimen and an unusual 3-ribbed (three-lobed) form; the classic myriostigma has five ribs. Glossy yellow flowers rise from the crown in summer.",
    blurb_sk: "„Biskupská čiapka“ — beztŕňová a po celom povrchu poprášená drobnými bielymi šupinkami, čo jej dodáva mramorovaný strieborný vzhľad. Toto je svetlejší exemplár a nezvyčajná trojrebrová (trojlaločná) forma; klasická myriostigma má päť rebier. V lete z temena vyrastajú lesklé žlté kvety." },

  { id: "3-astrophytum-myriostigma", file: "photos/3-astrophytum-myriostigma/IMG_9559.webp", files: ["photos/3-astrophytum-myriostigma/IMG_9559.webp", "photos/3-astrophytum-myriostigma/IMG_9489.webp"], name: "Astrophytum myriostigma", tag: "Astrophytum myriostigma", genus: ["Astrophytum"], region: ["Mexico & SW USA"], origin: "N Mexico",
    blurb: "A second bishop's cap, greener-bodied with woolly areoles running down the rib edges. This one shows the typical 5 ribs, reading as a neat five-pointed star from above. Reliable cup-shaped yellow flowers in summer; spineless and sculptural, grown for its geometry rather than its spines.",
    blurb_sk: "Druhá biskupská čiapka, zelenšia, s vlnatými areolami zbiehajúcimi po hranách rebier. Táto má typických 5 rebier a zhora pôsobí ako úhľadná päťcípa hviezda. V lete spoľahlivo otvára miskovité žlté kvety; beztŕňová a sochárska, pestuje sa pre geometriu, nie pre tŕne." },

  { id: "24-mammillaria-karwinskiana", file: "photos/24-mammillaria-karwinskiana/IMG_9556.webp", files: ["photos/24-mammillaria-karwinskiana/IMG_9556.webp", "photos/24-mammillaria-karwinskiana/IMG_9490.webp"], name: "Mammillaria karwinskiana", tag: "Mammillaria karwinskiana", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "S Mexico (Oaxaca)",
    blurb: "A green pincushion with sparse, long pale spines and stout tubercles. The ID isn't certain — it may be the same species as the single-headed compressa, #20-mammillaria-compressa. To separate M. karwinskiana from M. compressa, watch how it clumps (karwinskiana splits its head in two; compressa offsets into a dense mound) and the flower colour (karwinskiana cream with a red midstripe; compressa purple-pink); both bleed milky latex when cut.",
    blurb_sk: "Zelená mamilárka s riedkymi dlhými svetlými tŕňmi a mohutnými bradavkami. Určenie nie je isté — môže ísť o ten istý druh ako jednohlavá compressa, #20-mammillaria-compressa. M. karwinskiana od M. compressa odlíšite podľa spôsobu trsnatenia (karwinskiana rozdeľuje hlavu na dve, compressa odnožuje do hustého vankúša) a podľa farby kvetu (karwinskiana krémová s červeným stredovým pruhom, compressa purpurovoružová); obe pri poranení roní mliečny latex.", uncertain: true },

  { id: "14-ferocactus-emoryi", file: "photos/14-ferocactus-emoryi/IMG_9491.webp", name: "Ferocactus emoryi", tag: "Ferocactus emoryi", genus: ["Ferocactus"], region: ["Mexico & SW USA"], origin: "Mexico / SW USA",
    blurb: "A stout, ribbed barrel cactus with heavy spines, caught here in bud. Most likely Ferocactus emoryi, a Sonoran Desert barrel with a single hooked central spine, though young barrels are hard to pin to species, so it could be misidentified. Ferocactus grow slowly into big, sun-loving barrels.",
    blurb_sk: "Mohutný rebrovitý súdkovitý kaktus s ťažkými tŕňmi, tu zachytený s púčikom. Najpravdepodobnejšie Ferocactus emoryi, sonorský súdok s jediným háčikovitým stredovým tŕňom, no mladé súdky sa určujú ťažko, takže určenie môže byť nesprávne. Ferokaktusy rastú pomaly a menia sa na veľké slnkomilné súdky.", uncertain: true },

  { id: "34-stenocactus-crispatus", file: "photos/34-stenocactus-crispatus/IMG_9492.webp", name: "Stenocactus crispatus", tag: "Stenocactus crispatus", genus: ["Stenocactus"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "Another wavy-ribbed Stenocactus, this one armed with longer, flattened, upright spines that arch over the crown. Small purple-striped flowers appear in late winter. Tough and forgiving with a cool, dry rest.",
    blurb_sk: "Ďalší stenokaktus s vlnitými rebrami, tento vyzbrojený dlhšími, sploštenými, vzpriamenými tŕňmi, ktoré sa klenú ponad temeno. Koncom zimy sa objavujú malé kvety s fialovým pruhom. Odolný a odpúšťajúci, ak dostane chladný a suchý odpočinok." },

  { id: "30-parodia-leninghausii", file: "photos/30-parodia-leninghausii/IMG_9493.webp", name: "Parodia leninghausii", tag: "Parodia leninghausii", genus: ["Parodia"], region: ["Southern South America"], origin: "S Brazil",
    blurb: "The 'golden ball' or 'lemon ball' cactus — a soft-looking globe bristling with fine golden spines that turns columnar with age. Older plants crown themselves with lemon-yellow flowers. Easy, fast and cheerful; it enjoys more water than most cacti in growth.",
    blurb_sk: "„Zlatá guľa“ alebo „citrónová guľa“ — mäkko pôsobiace telo naježené jemnými zlatými tŕňmi, ktoré s vekom prechádza do stĺpovitého tvaru. Staršie rastliny sa korunujú citrónovožltými kvetmi. Nenáročná, rýchla a veselá; počas rastu znesie viac vody než väčšina kaktusov." },

  { id: "28-matucana-aureiflora", file: "photos/28-matucana-aureiflora/IMG_9494.webp", name: "Matucana aureiflora", tag: "Matucana aureiflora", genus: ["Matucana"], region: ["Andes"], origin: "N Peru (Andes)",
    blurb: "A flattened, disc-shaped Andean cactus with interlacing yellowish spines pressed close to the body. Unusually for the genus — most Matucana bear tubular red or orange flowers — M. aureiflora opens golden-yellow, near-symmetrical blooms, hence the name. From high grassland in northern Peru; give it sun and gritty, very free-draining soil.",
    blurb_sk: "Sploštený diskovitý andský kaktus s prepletenými žltkastými tŕňmi pritlačenými k telu. Na rod nezvyčajne — väčšina matukán nesie rúrkovité červené či oranžové kvety — M. aureiflora otvára zlatožlté, takmer súmerné kvety, odtiaľ jej meno. Z vysokohorských trávnatých plání severného Peru; doprajte jej slnko a štrkovitý, veľmi priepustný substrát." },

  { id: "20-mammillaria-compressa", file: "photos/20-mammillaria-compressa/IMG_9495.webp", name: "Mammillaria compressa", tag: "Mammillaria compressa", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A single green head with dense white radial spines. Being solitary, it's hard to call for certain — it could be a young Mammillaria compressa, or the same species as #24-mammillaria-karwinskiana. Useful clues when it matures: flower colour (compressa purple-pink vs karwinskiana cream with a red stripe), the wool and bristles in the axils, and the spine count per areole.",
    blurb_sk: "Jediná zelená hlava s hustými bielymi lúčovitými tŕňmi. Keďže je samostatná, ťažko ju s istotou určiť — môže ísť o mladú Mammillaria compressa alebo o ten istý druh ako #24-mammillaria-karwinskiana. Užitočné vodidlá, keď dospeje: farba kvetu (compressa purpurovoružová oproti krémovej s červeným pruhom u karwinskiana), vlna a štetiny v paždiach a počet tŕňov na areolu.", uncertain: true },

  { id: "17-kroenleinia-grusonii", file: "photos/17-kroenleinia-grusonii/IMG_9496.webp", name: "Kroenleinia grusonii", tag: "Kroenleinia grusonii", genus: ["Kroenleinia"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A young golden barrel, its ribs already lined with dense, translucent golden spines. Famously slow — this small plant is the start of the show-piece 'golden barrel', and the big mature one elsewhere in the collection shows where it's heading. Long known as Echinocactus grusonii.",
    blurb_sk: "Mladý zlatý súdok, ktorého rebrá už lemujú husté priesvitné zlaté tŕne. Povestne pomalý — táto malá rastlina je začiatkom výstavného „zlatého súdka“ a veľký dospelý kus inde v zbierke ukazuje, kam smeruje. Dlho známy ako Echinocactus grusonii." },

  { id: "33-stenocactus-coptonogonus", file: "photos/33-stenocactus-coptonogonus/IMG_9497.webp", name: "Stenocactus coptonogonus", tag: "Stenocactus coptonogonus", genus: ["Stenocactus"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "The odd one out among Stenocactus: instead of many wavy ribs it has fewer, straight, sharp-edged ribs and stout curved spines. White flowers striped magenta open in late winter. A distinctive, collectable Mexican species.",
    blurb_sk: "Výnimka medzi stenokaktusmi: namiesto mnohých vlnitých rebier má menej rovných, ostro hranatých rebier a mohutné zahnuté tŕne. Koncom zimy otvára biele kvety s purpurovými pruhmi. Osobitý, zberateľsky cenený mexický druh." },

  { id: "29-parodia-erubescens", file: "photos/29-parodia-erubescens/IMG_9498.webp", files: ["photos/29-parodia-erubescens/IMG_9498.webp", "photos/29-parodia-erubescens/IMG_9526.webp"], flower: true, name: "Parodia × erubescens", tag: "Parodia × erubescens", genus: ["Parodia"], region: ["Southern South America"], origin: "Uruguay (hybrid)",
    blurb: "A ribbed green globe with reddish spines, here pushing out a bright bud. This is a documented natural hybrid — Parodia × erubescens (Osten) D.R.Hunt, a cross of P. mammulosa × P. concinna from Uruguay (both formerly Notocactus). Like its parents it's an easy, generous flowerer that enjoys bright light and a little more water than desert cacti.",
    blurb_sk: "Rebrovitá zelená guľa s červenkastými tŕňmi, tu práve vyháňajúca jasný púčik. Ide o zdokumentovaného prirodzeného krížanca — Parodia × erubescens (Osten) D.R.Hunt, kríženca P. mammulosa × P. concinna z Uruguaja (oba kedysi patrili do rodu Notocactus). Podobne ako rodičia je to nenáročný, štedro kvitnúci kaktus, ktorému svedčí jasné svetlo a o niečo viac vody než púštnym druhom." },

  { id: "5-coryphantha-elephantidens", file: "photos/5-coryphantha-elephantidens/IMG_9499.webp", files: ["photos/5-coryphantha-elephantidens/IMG_9499.webp", "photos/5-coryphantha-elephantidens/IMG_7042.webp"], flower: true, name: "Coryphantha elephantidens", tag: "Coryphantha elephantidens", genus: ["Coryphantha"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A fat, glossy dark-green plant with big rounded tubercles that give it its name — the 'elephant's tooth' cactus. From a woolly crown it opens large, silky pink flowers in late summer. Wants warmth, sun and a dry winter.",
    blurb_sk: "Tučná lesklá tmavozelená rastlina s veľkými zaoblenými bradavkami, ktoré jej dali meno — „sloní zub“. Z vlnatého temena otvára koncom leta veľké hodvábne ružové kvety. Chce teplo, slnko a suchú zimu." },

  { id: "21-mammillaria-compressa", file: "photos/21-mammillaria-compressa/IMG_9500.webp", name: "Mammillaria compressa", tag: "— (tag not legible; identified by owner)", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A broad, low mound of many heads bristling with white spines — the 'bunch' of the collection. Its dense clustering habit fits Mammillaria compressa ('mother of hundreds') well, so this is the more confident of the two compressa. Small purple-pink flowers ring the crowns in spring; very easy.",
    blurb_sk: "Široký nízky vankúš z mnohých hláv naježených bielymi tŕňmi — „trs“ zbierky. Jej hustý trsovitý rast dobre zodpovedá druhu Mammillaria compressa („matka stoviek“), takže z dvoch compressa je toto to istejšie určenie. Na jar obopínajú temená malé purpurovoružové kvety; veľmi nenáročná." },

  { id: "15-gymnocalycium-saglionis", file: "photos/15-gymnocalycium-saglionis/IMG_9501.webp", name: "Gymnocalycium saglionis", tag: "Gymnocalycium saglionis", genus: ["Gymnocalycium"], region: ["Southern South America"], origin: "N Argentina",
    blurb: "A grey-green 'chin cactus' with broad tubercles and strong, curved spines. Gymnocalyciums tolerate a little more shade than most cacti and open naked-tubed flowers (the name means 'naked calyx'). Slow, tough and long-lived — the smaller of the two saglionis here.",
    blurb_sk: "Sivozelený „bradový kaktus“ so širokými bradavkami a silnými zahnutými tŕňmi. Gymnokalýciá znesú o niečo viac tieňa než väčšina kaktusov a otvárajú kvety s holou kvetnou rúrkou (meno znamená „holý kalich“). Pomalý, odolný a dlhoveký — menší z dvoch tunajších saglionis." },

  { id: "9-echinopsis-ancistrophora", file: "photos/9-echinopsis-ancistrophora/IMG_9502.webp", files: ["photos/9-echinopsis-ancistrophora/IMG_9502.webp", "photos/9-echinopsis-ancistrophora/IMG_7141.webp"], flower: true, name: "Echinopsis ancistrophora", tag: "Lobivia ancistrophora", genus: ["Echinopsis"], region: ["Andes"], origin: "Argentina & Bolivia (E Andes)",
    blurb: "A second ancistrophora — a ribbed globe with spines pressed close to the body and, in season, big pale funnel flowers on long tubes. Quick and easy in sun.",
    blurb_sk: "Druhá ancistrophora — rebrovitá guľa s tŕňmi pritlačenými k telu a v sezóne s veľkými bledými lievikovitými kvetmi na dlhých rúrkach. Na slnku rýchla a nenáročná." },

  { id: "25-mammillaria-matudae", file: "photos/25-mammillaria-matudae/IMG_9503.webp", name: "Mammillaria matudae", tag: "Mammillaria matudae", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico (Guerrero)",
    blurb: "The 'thumb cactus' — slender stems that elongate, lean over and offset, neatly sheathed in white radial spines. Small pink flowers form rings near the tips. Fast and easy, and happy to trail over a pot edge.",
    blurb_sk: "„Palcový kaktus“ — štíhle stonky, ktoré sa predlžujú, nakláňajú a odnožujú, úhľadne opláštené bielymi lúčovitými tŕňmi. Malé ružové kvety tvoria venčeky blízko vrcholov. Rýchly a nenáročný, rád prevísa cez okraj kvetináča." },

  { id: "11-echinopsis-oxygona", file: "photos/11-echinopsis-oxygona/IMG_9504.webp", name: "Echinopsis oxygona", tag: "Echinopsis oxygona", genus: ["Echinopsis"], region: ["Southern South America"], origin: "S Brazil / Uruguay / Argentina",
    blurb: "The classic 'Easter lily cactus' — a ribbed green globe that clusters freely and produces enormous, fragrant pink flowers on long tubes, usually opening overnight. Vigorous, hardy and forgiving; a pass-along favourite for good reason.",
    blurb_sk: "Klasický „veľkonočný ľaliový kaktus“ — rebrovitá zelená guľa, ktorá ochotne trsnatie a vytvára obrovské voňavé ružové kvety na dlhých rúrkach, otvárajúce sa zvyčajne cez noc. Bujný, otužilý a odpúšťajúci; nie bezdôvodne obľúbený kúsok, ktorý si pestovatelia navzájom rozdávajú." },

  { id: "16-gymnocalycium-saglionis", file: "photos/16-gymnocalycium-saglionis/IMG_9505.webp", name: "Gymnocalycium saglionis", tag: "Gymnocalycium saglionis", genus: ["Gymnocalycium"], region: ["Southern South America"], origin: "N Argentina",
    blurb: "A large, solitary globe with broad tubercles and stout, curved spines — a well-grown chin cactus. Small pink-white flowers ring the top in summer. Slow but very long-lived and undemanding.",
    blurb_sk: "Veľká samostatná guľa so širokými bradavkami a mohutnými zahnutými tŕňmi — dobre odchovaný bradový kaktus. V lete obopínajú vrchol malé ružovobiele kvety. Pomalý, ale veľmi dlhoveký a nenáročný." },

  { id: "23-mammillaria-hahniana", file: "photos/23-mammillaria-hahniana/IMG_9506.webp", files: ["photos/23-mammillaria-hahniana/IMG_9506.webp", "photos/23-mammillaria-hahniana/IMG_9258.webp"], flower: true, name: "Mammillaria hahniana", tag: "Mammillaria hahniana", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "The 'old lady cactus' — a globe wrapped in long white hairs and short spines that give it a soft, whiskery look. A ring of deep magenta flowers crowns it in spring. Loves sun; keep the hairs dry to stay white.",
    blurb_sk: "„Stará dáma“ — guľa zahalená v dlhých bielych vlasoch a krátkych tŕňoch, ktoré jej dodávajú mäkký, fúzatý vzhľad. Na jar ju korunuje veniec sýtopurpurových kvetov. Miluje slnko; vlasy udržujte suché, aby zostali biele." },

  { id: "19-mammillaria-bombycina", file: "photos/19-mammillaria-bombycina/IMG_9507.webp", name: "Mammillaria bombycina", tag: "Mammillaria bombycina", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A clustering pincushion with silky white spines and hooked amber central spines, building neat mounds of heads. Bright pink flowers ring the crowns in spring. Attractive year-round for its spine pattern alone.",
    blurb_sk: "Trsovitá mamilárka s hodvábne bielymi tŕňmi a háčikovitými jantárovými stredovými tŕňmi, ktorá tvorí úhľadné vankúše hláv. Na jar obopínajú temená jasnoružové kvety. Príťažlivá po celý rok už len vďaka kresbe tŕňov." },

  { id: "12-echinopsis-oxygona", file: "photos/12-echinopsis-oxygona/IMG_9508.webp", name: "Echinopsis oxygona", tag: "Echinopsis oxygona", genus: ["Echinopsis"], region: ["Southern South America"], origin: "S Brazil / Uruguay / Argentina",
    blurb: "A dark-green ribbed, offsetting globe with relatively short spines. It was long grown as Echinopsis eyriesii, a small-spined form once treated as a separate species but now regarded as the same as E. oxygona — the Easter lily cactus, which clusters freely and bears huge, fragrant pink night flowers.",
    blurb_sk: "Tmavozelená rebrovitá odnožujúca guľa s pomerne krátkymi tŕňmi. Dlho sa pestovala ako Echinopsis eyriesii, drobnotŕňová forma kedysi považovaná za samostatný druh, dnes však stotožnená s E. oxygona — veľkonočným ľaliovým kaktusom, ktorý ochotne trsnatie a nesie obrovské voňavé ružové nočné kvety." },

  { id: "31-parodia-magnifica", file: "photos/31-parodia-magnifica/IMG_9509.webp", name: "Parodia magnifica", tag: "Parodia magnifica", genus: ["Parodia"], region: ["Southern South America"], origin: "S Brazil",
    blurb: "The 'ball cactus' — a green ribbed body edged in soft golden spines, with a woolly crown and sulphur-yellow flowers. One of the collection's two magnifica; likes bright light and summer water.",
    blurb_sk: "„Guľový kaktus“ — zelené rebrovité telo lemované mäkkými zlatými tŕňmi, s vlnatým temenom a sírovožltými kvetmi. Jedna z dvoch magnific v zbierke; má rada jasné svetlo a letnú zálievku." },

  { id: "32-parodia-magnifica", file: "photos/32-parodia-magnifica/IMG_9513.webp", files: ["photos/32-parodia-magnifica/IMG_9513.webp", "photos/32-parodia-magnifica/IMG_7170.webp"], flower: true, name: "Parodia magnifica", tag: "Parodia magnifica", genus: ["Parodia"], region: ["Southern South America"], origin: "S Brazil",
    blurb: "The second 'ball cactus' of the collection — a green ribbed body clothed in soft golden spines with a woolly crown and sulphur-yellow flowers. Bright light and summer water suit it.",
    blurb_sk: "Druhý „guľový kaktus“ zbierky — zelené rebrovité telo odeté mäkkými zlatými tŕňmi, s vlnatým temenom a sírovožltými kvetmi. Svedčí mu jasné svetlo a letná zálievka." },

  { id: "27-mammillaria-vetula", file: "photos/27-mammillaria-vetula/IMG_9510.webp", name: "Mammillaria vetula", tag: "— (tag not legible; identified by owner)", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A dense mat of tiny cylindrical 'thimble' heads in fine white spines; the little offsets detach at the lightest touch and root wherever they land. Small cream flowers dot the mound in spring. Charming, fast and almost too easy to propagate.",
    blurb_sk: "Hustý koberec drobných valcovitých „náprstkových“ hláv v jemných bielych tŕňoch; malé odnože sa oddelia pri najľahšom dotyku a zakorenia, kdekoľvek dopadnú. Na jar posiavajú vankúš malé krémové kvety. Pôvabná, rýchla a takmer priľahko sa množí." },

  { id: "22-mammillaria-elongata", file: "photos/22-mammillaria-elongata/IMG_9511.webp", name: "Mammillaria elongata", tag: "Mammillaria elongata", genus: ["Mammillaria"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "The 'ladyfinger cactus' — mounds of slender, finger-like stems laced with interlocking golden spines. It forms a big, spreading clump over time and carries small cream-to-yellow flowers. Undemanding and quick; a reliable, decorative filler.",
    blurb_sk: "„Dámske prstíky“ — vankúše štíhlych prstovitých stoniek prepletených zlatými tŕňmi. Časom vytvorí veľký rozložitý trs a nesie malé krémové až žlté kvety. Nenáročná a rýchla; spoľahlivá dekoratívna výplň." },

  { id: "x2-mixed-dish-bowl", file: "photos/x2-mixed-dish-bowl/IMG_9514.webp", name: "Mixed offshoots bowl", name_sk: "Miešaná miska odnoží", tag: "— (dish planting)",
    genus: ["Mixed & offshoots", "Kroenleinia", "Mammillaria", "Echinopsis", "Coryphantha"],
    species: ["Kroenleinia grusonii", "Mammillaria bombycina", "Echinopsis ancistrophora", "Coryphantha elephantidens"],
    region: ["Mexico & SW USA", "Andes"], origin: "Mexico & S America",
    blurb: "A shallow bowl grown up with six young cacti together: a golden barrel (Kroenleinia grusonii), a silky Mammillaria bombycina, an Echinopsis ancistrophora and three Coryphantha elephantidens. A living sampler that mixes Mexican and South American species in one dish — so it's listed here under each of its members' genera and regions.",
    blurb_sk: "Plytká miska osadená šiestimi mladými kaktusmi naraz: zlatý súdok (Kroenleinia grusonii), hodvábna Mammillaria bombycina, Echinopsis ancistrophora a tri Coryphantha elephantidens. Živá vzorkovnica, ktorá v jednej miske mieša mexické a juhoamerické druhy — preto je tu uvedená pod rodmi a oblasťami všetkých svojich členov." },

  { id: "7-disocactus-ackermannii", file: "photos/7-disocactus-ackermannii/IMG_9515.webp", name: "Disocactus ackermannii", tag: "Disocactus ackermannii", genus: ["Disocactus"], region: ["Mexico & SW USA"], origin: "SE Mexico (forests)",
    blurb: "An 'orchid cactus' — here a rooting cutting of flat, notched, strap-like stems. Unlike the desert species around it, this is a forest epiphyte that grows on trees; it repays humidity, some shade and richer soil with large, brilliant red day-flowers.",
    blurb_sk: "„Orchideový kaktus“ — tu ako zakoreňujúci odrezok plochých, zúbkatých, remeňovitých stoniek. Na rozdiel od púštnych druhov okolo neho je to lesný epifyt rastúci na stromoch; za vlhkosť, trochu tieňa a výživnejší substrát sa odvďačí veľkými, žiarivo červenými dennými kvetmi." },

  { id: "6-cumulopuntia-boliviana", file: "photos/6-cumulopuntia-boliviana/IMG_9516.webp", name: "Cumulopuntia boliviana", tag: "Cumulopuntia boliviana", genus: ["Cumulopuntia"], region: ["Andes"], origin: "Bolivia / Peru / Argentina (Andes)",
    blurb: "A high-altitude jointed cactus from the Andes that builds low, tight chains of knobbly segments armed with papery, flexible spines. Slow and very cold-hardy in habitat; it wants sharp drainage and lots of sun, with small yellow-orange flowers in summer.",
    blurb_sk: "Vysokohorský článkovaný kaktus z Ánd, ktorý tvorí nízke tesné reťaze hrbolatých článkov vyzbrojených papierovými ohybnými tŕňmi. Pomalý a v prirodzenom prostredí veľmi mrazuvzdorný; vyžaduje výbornú drenáž a veľa slnka, v lete má malé žltooranžové kvety." },

  { id: "x1-echinopsis-oxygona-bowl", file: "photos/x1-echinopsis-oxygona-bowl/IMG_9517.webp", name: "Echinopsis offshoots", name_sk: "Odnože echinopsisu", tag: "— (no tag; identified by owner)",
    genus: ["Mixed & offshoots", "Echinopsis"], species: ["Echinopsis oxygona"], region: ["Southern South America"], origin: "S Brazil / Uruguay / Argentina",
    blurb: "An outdoor bowl brimming with clustering Easter lily cactus (Echinopsis oxygona) pups — hardy, free-flowering garden survivors that erupt with huge, fragrant pink flowers in early summer. Tough enough to live in the ground here.",
    blurb_sk: "Vonkajšia misa preplnená odnožami trsovitého veľkonočného ľaliového kaktusa (Echinopsis oxygona) — otužilé, ochotne kvitnúce záhradné prežívače, ktoré začiatkom leta vybuchnú obrovskými voňavými ružovými kvetmi. Dosť odolné na to, aby tu žili priamo v zemi." },

  { id: "18-kroenleinia-grusonii", file: "photos/18-kroenleinia-grusonii/IMG_9518.webp", name: "Kroenleinia grusonii", tag: "— (no tag; identified by owner)", genus: ["Kroenleinia"], region: ["Mexico & SW USA"], origin: "Central Mexico",
    blurb: "A mature 'golden barrel' — a big, near-spherical ribbed body armoured in dense golden spines, the show-piece 'mother-in-law's cushion'. Decades in the making and endangered in the wild, though widely grown. Full sun and a dry winter keep it fat and firm.",
    blurb_sk: "Dospelý „zlatý súdok“ — veľké, takmer guľovité rebrovité telo obrnené hustými zlatými tŕňmi, výstavný kus prezývaný „svokrin vankúš“. Desaťročia v raste a vo voľnej prírode ohrozený, hoci je široko pestovaný. Plné slnko a suchá zima ho udržia tučný a pevný." }
];
