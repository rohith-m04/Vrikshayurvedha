export const PLANTS_DATA = [
  {
    id: "neem",
    name: "Neem",
    sanskritName: "अरिष्ट / निम्ब",
    transliteration: "Ariṣṭa · Nimba",
    regionalNames: ["Veppu (വേപ്പ്)", "Bevu (ಬೇವು)", "Vepa (వేప)"],
    botanicalName: "Azadirachta indica",
    family: "Meliaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Medicinal & Homestead",
    summary: "One of the fundamental pillars of Vrikshayurveda. Prescribed by Varahamihira as an essential initial tree for parks and dwellings. Its leaves, bark, and seeds serve as universal bio-pesticides and soil purifiers.",
    characteristics: "Hardy, medium-to-large evergreen tree with dense foliage, highly resistant to drought and poor soils. Possesses bitter alkaloids (azadirachtin) that naturally repel pests and fungal infections.",
    habitat: "Adaptable to diverse soils, thriving especially in mellow and well-drained loams. Tolerant of high heat.",
    cultivation: {
      soil: "Mellow soil pre-treated with sesame green manuring.",
      spacing: "Utthama spacing of 20 cubits (~30 feet / 14.5m) to avoid canopy intertwining.",
      seedTreatment: "Seeds soaked daily in milk, handled with ghee-coated hands, coated in fresh cow dung, and fumigated with deer/boar fat smoke over a 10-day cycle.",
      irrigation: "Twice daily (morning and evening) in hot summers; alternate days in winter; as needed during rains."
    },
    propagation: "Seed propagation and clonal stem transplants smeared with ghee, ushira, sesame, and cow dung paste.",
    uses: [
      "Key component of traditional bio-pesticides and antimicrobial soil washes",
      "Bark decoction used to treat oozing wounds and chlorosis in other trees",
      "Auspicious planting for civic parks and residential groves"
    ],
    plantHealth: "Leaves and seed decoctions are used to treat Tridosha afflictions in neighbouring trees, preventing rot and fungal contamination.",
    formulations: ["10-Day Seed Priming Protocol", "Vidanga-Mud Wound Paste Companion"],
    vastuHomestead: {
      placement: "Parks, front dwellings, and perimeter groves.",
      direction: "Suitable for North-West and general perimeter; confers protection from noxious winds.",
      dentalTwig: "Dantakashta (dental stick) made from Neem branch confers 'Victory over enemies' (Śatru-vijaya) and oral strength."
    },
    astrometeorology: {
      nakshatra: "Associated with Uttara Bhadrapada",
      bioIndicator: "Healthy, vibrant budding indicates steady seasonal balance."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.3, 55.11", note: "Recommended for initial planting in parks and dwellings ('Ariṣṭāśoka-punnāga-śirīṣāḥ sapriyaṅgavaḥ')." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 13, 23", note: "Planting three Neem trees grants 3,000 years in the realm of the Sun (Surya-loka)." },
      { bookId: "ouseph", ref: "Ethnobotany & Dental Sticks Sec. 5", note: "Dantakashta twig hierarchy: Neem confers victory over enemies." }
    ],
    researchNotes: "While commonly termed 'Nimba' in general Ayurveda, Varahamihira prominently refers to it as 'Arishta' in verse 55.3, underscoring its traditional status as an indestructible purifier."
  },
  {
    id: "asoka",
    name: "Asoka",
    sanskritName: "अशोक",
    transliteration: "Aśoka",
    regionalNames: ["Asokam (അശോകം)", "Achenge (ಅಶೋಕ)", "Asokamu (అశోకము)"],
    botanicalName: "Saraca asoca",
    family: "Fabaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Aesthetic & Bio-Indicator",
    summary: "The celebrated sorrow-less tree of classical India. Renowned in Vrikshayurveda for both its ornamental presence in royal pleasure gardens and its remarkable role as a 10-month lead-time floral bio-indicator.",
    characteristics: "Medium evergreen tree with glorious, dense clusters of fragrant orange-yellow to scarlet flowers and lush pinnate leaves.",
    habitat: "Moist, shady garden quadrants, near water bodies and shaded homestead corners.",
    cultivation: {
      soil: "Moist, humic, well-conditioned loam enriched with decomposed organic matter.",
      spacing: "16 cubits (~24 feet / 11.5m) or 20 cubits in expansive groves.",
      seedTreatment: "Milk immersion followed by shade drying and moisture-priming.",
      irrigation: "Regular moistening; highly sensitive to prolonged arid spells."
    },
    propagation: "Seeds and branch layering smeared with herbal ghee-honey-cow dung paste.",
    uses: [
      "Primary ornamental shade tree for pleasure groves (Upavana)",
      "Astrological and ecological harmonizer",
      "Bark decoctions prized in classical health preparations"
    ],
    plantHealth: "Susceptible to cold air disturbances and heat-wilting; treated with milk-water root drenching and kunapa broth.",
    formulations: ["Kunapajala Flowering Stimulant"],
    vastuHomestead: {
      placement: "Pleasure gardens, temples, and residential courtyards.",
      direction: "East and South-East borders of pleasure pavilions."
    },
    astrometeorology: {
      nakshatra: "Associated with Punarvasu",
      bioIndicator: "The profuse, luxuriant flowering of Asoka provides a 10-month agricultural lead time predicting an abundant yield of red rice (Summary, Ouseph)."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.3, 55.4", note: "Mandated for early planting in gardens alongside Neem, Punnaga, and Sirisha." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 10", note: "Taru-mahatmya eulogy of royal garden trees." },
      { bookId: "ouseph", ref: "Astrometeorology Sec. 6", note: "Floral indicator for red rice yield with 10-month lead time." }
    ],
    researchNotes: "Modern botanical synonym Saraca indica is often cited, though taxonomically Saraca asoca (Roxb.) de Wilde is the genuine indigenous species described in classical treatises."
  },
  {
    id: "punnaga",
    name: "Punnaga",
    sanskritName: "पुन्नाग",
    transliteration: "Punnāga",
    regionalNames: ["Punna (പുന്ന)", "Honne (ಹೊನ್ನೆ)", "Pinnai (புன்னை)"],
    botanicalName: "Calophyllum inophyllum",
    family: "Calophyllaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Aesthetic & Medicinal",
    summary: "The Alexandrian Laurel / Cobra Saffron tree. Highly praised in ancient arboriculture for its glossy evergreen foliage, sweet aromatic white blossoms, and valuable medicinal oil.",
    characteristics: "Spreading evergreen tree with handsome deep green leathery leaves and fragrant white flowers with prominent yellow stamens.",
    habitat: "Coastal zones, riverbanks, and moist, deep, well-drained soils.",
    cultivation: {
      soil: "Sandy loam or moisture-retentive mellow soil enriched with organic matter.",
      spacing: "20 cubits (~30 feet) to accommodate its broad spreading canopy.",
      seedTreatment: "Seed decortication followed by immersion in milk broth.",
      irrigation: "Plentiful watering during sapling stages."
    },
    propagation: "Fresh seeds and vegetative layering.",
    uses: [
      "Aromatic blossom source for temple rituals and public parks",
      "Seed oil used for lighting, wood preservation, and skin applications",
      "Shade canopy along public waterways"
    ],
    plantHealth: "Treated with Vidanga pastes when stem borer holes appear.",
    formulations: ["Kashaya Root Rejuvenator"],
    vastuHomestead: {
      placement: "Water edges, garden lakes, and southern/western domestic groves.",
      direction: "Near water bodies (Jalaprantheshu)."
    },
    astrometeorology: {
      nakshatra: "Associated with Anuradha",
      bioIndicator: "Flowering rhythms synchronized with pre-monsoon coastal humidity."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.3", note: "Included among the core auspicious foundation trees for parks and dwellings." },
      { bookId: "ouseph", ref: "Vedic Arboriculture Sec. 3", note: "Traditional coastal homestead keystone." }
    ]
  },
  {
    id: "sirisha",
    name: "Sirisha",
    sanskritName: "शिरीष",
    transliteration: "Śirīṣa",
    regionalNames: ["Nenmeni Vaka (നെന്മേനി വാക)", "Bage (ಬಾಗೆ)", "Vagai (வாகை)"],
    botanicalName: "Albizia lebbeck",
    family: "Fabaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Waysides & Nitrogen Fixing",
    summary: "The noble East Indian Walnut. Celebrated for its delicate, intensely fragrant brush-like flowers, extensive shade canopy, and soil-enriching root nodulation.",
    characteristics: "Large deciduous tree with spreading umbrella canopy, bipinnate leaves, and pale green-yellow tassel blossoms.",
    habitat: "Tolerant of diverse soils, arid conditions, and saline winds.",
    cultivation: {
      soil: "Adaptable, thrives even in degraded soils; enhances soil nitrogen.",
      spacing: "20 cubits (~30 feet) to grant room for its sprawling branch structure.",
      seedTreatment: "Hot water / milk soaking to soften tough pod seeds.",
      irrigation: "Moderate watering; drought-hardy once established."
    },
    propagation: "Seeds and root cuttings.",
    uses: [
      "Wayside shade tree for travelers and cattle",
      "Leaves and bark possess celebrated anti-toxic (Vishaghna) properties",
      "High quality timber for wheels and agricultural implements"
    ],
    plantHealth: "Resistant to most pests; responds to green gram (Mudga) decoction sprays.",
    formulations: ["Legume Root Nourishment Decoction"],
    vastuHomestead: {
      placement: "Public roadsides, outer grove perimeter, and pasture borders.",
      direction: "North-West and West."
    },
    astrometeorology: {
      nakshatra: "Associated with Rohini",
      bioIndicator: "Pod rattling in pre-monsoon winds marks impending thunderstorm cycles."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.3", note: "Essential dwelling and park recommendation." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 16", note: "Planting six Sirisha trees by the wayside attains the heavenly realm of Garuda." }
    ]
  },
  {
    id: "tamarind",
    name: "Tamarind",
    sanskritName: "तिन्तिडीक / चिञ्चा",
    transliteration: "Tintiḍīka · Ciñcā",
    regionalNames: ["Puli (പുളി)", "Hunase (ಹುಣಸೆ)", "Chinta (చింత)"],
    botanicalName: "Tamarindus indica",
    family: "Fabaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Homestead & Solar Shield",
    summary: "A tree of singular architectural and Vastu importance in Vrikshayurveda. While strictly prohibited for building timber due to its inherent 'heat', it is actively mandated in the South of homesteads to absorb harsh solar radiation.",
    characteristics: "Massive, long-lived evergreen tree with dense, finely feathered leaves and acidic, podded fruits.",
    habitat: "Dry to semi-arid tropical soils; extraordinarily drought-resistant.",
    cultivation: {
      soil: "Deep, well-drained loam or alluvial soil.",
      spacing: "20 cubits or more (~30-40 feet) due to immense eventual crown width.",
      seedTreatment: "Varahamihira's hard-coat protocol: seeds treated with a mixture of boiled rice, sesame, black gram, and barley in milk, accompanied by carrion meat and fumigated continuously with turmeric root smoke.",
      irrigation: "Deep soaking during initial months; rainfed thereafter."
    },
    propagation: "Seeds treated with specialized fumigation and seed coat priming.",
    uses: [
      "Homestead microclimate regulation (UV/infrared solar shield)",
      "Acidic culinary pulp preserving food and medicines",
      "Charcoal and heavy-wear implements"
    ],
    plantHealth: "Extremely rugged; rarely suffers pests when properly primed.",
    formulations: ["Tamarind Sprouting Priming Broth", "Continuous Turmeric Fumigation"],
    vastuHomestead: {
      placement: "Strictly located in the **South** of the homestead compound.",
      direction: "South: its high-density foliage absorbs harsh ultraviolet rays during the sun's southern transit (Dakshinayana), shielding residential quarters.",
      timberNote: "Categorized as **Nissara** (unfit/impure for residential architecture) despite being physically dense (Sarvasara), because of its intense inherent 'heat' detrimental to domestic Vastu."
    },
    astrometeorology: {
      nakshatra: "Associated with Hasta",
      bioIndicator: "New shoot flush signals the approach of the hot summer solstice."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.13", note: "Unique seed-sprouting formula using boiled grains, milk, carrion, and continuous turmeric smoking." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 23", note: "Included in the ten-tree virtue planting formula preventing misfortune." },
      { bookId: "ouseph", ref: "Vastu & Structural Timber Sec. 3, 4", note: "Directional mandate in the South and structural exclusion from house framing." }
    ],
    researchNotes: "The contrast between its botanical wood density (very hard) and its Vastu classification (Nissara) is a quintessential example of ancient functional taxonomy prioritizing biological-energetic impact over simple mechanical hardness."
  },
  {
    id: "jackfruit",
    name: "Jackfruit",
    sanskritName: "पनस",
    transliteration: "Panasa",
    regionalNames: ["Plavu (പ്ലാവ്)", "Halasu (ಹಲಸು)", "Panasa (పనస)"],
    botanicalName: "Artocarpus heterophyllus",
    family: "Moraceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Fruit & Interior Timber",
    summary: "A keystone orchard and timber tree across classical South India. Recorded in Varahamihira for moist irrigated tracts, and classified by Dr. Ouseph as the premier Antarsara (interior-density) structural timber.",
    characteristics: "Substantial evergreen tree bearing immense cauliflorous fruits directly from trunk and mature limbs; dense deep-green foliage.",
    habitat: "Low-lying, moist, deep, well-drained soils; sensitive to waterlogging around root flare.",
    cultivation: {
      soil: "Fertile laterite or alluvial loam conditioned with compost.",
      spacing: "16 to 20 cubits (~24-30 feet).",
      seedTreatment: "Fresh seed sowing; clonal branches smeared with cow dung before planting.",
      irrigation: "Regular watering during dry months; highly responsive to Kunapa broth applied to root basin."
    },
    propagation: "Seeds sown immediately (recalcitrant) and vegetative trunk-cuttings (Kandaropya).",
    uses: [
      "Staple fruit, seeds, and culinary timber",
      "Premier wood for temple altars, traditional house framing, and classical musical instruments (Mridangam, Veena)",
      "Latex used in wound sealing and adhesive preparations"
    ],
    plantHealth: "Bark wounds treated with mud, vidanga, and ghee pastes; fruit shedding prevented by cooling horse-gram decoction.",
    formulations: ["Kunapajala Fermented Liquid Manure", "Dolichos Rejuvenation Broth"],
    vastuHomestead: {
      placement: "East, South-East, and inner homestead orchards.",
      direction: "East and South quadrants.",
      timberNote: "Classified as **Antarsara** (interior heartwood density) — supremely auspicious and durable for domestic beams, doors, and furniture."
    },
    astrometeorology: {
      nakshatra: "Associated with Uttara Phalguni",
      bioIndicator: "Prolific cauliflory flowering indicates stable groundwater table."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.4, 55.10", note: "Propagated via stem cuttings smeared with cow dung; thrives in low-lying moist soils." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 20", note: "Planting alongside other orchard species protects from lifelong infirmities." },
      { bookId: "ouseph", ref: "Timber Physics Sec. 4", note: "Defined as standard exemplar of Antarsara timber." }
    ]
  },
  {
    id: "banyan",
    name: "Banyan",
    sanskritName: "न्यग्रोध / वट",
    transliteration: "Nyagrodha · Vaṭa",
    regionalNames: ["Peral (പേരാൽ)", "Aala (ಆಲ)", "Marri (మర్రి)"],
    botanicalName: "Ficus benghalensis",
    family: "Moraceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Nalpamaram & Keystone Sacred",
    summary: "The colossal aerial-rooting fig tree. One of the venerated Nalpamaram (four milky trees), functioning as a primary daytime oxygen generator (Pranan) and community gathering sanctuary.",
    characteristics: "Vast spreading tree sending down prop roots that become auxiliary trunks; produces milky latex and crimson fig fruits.",
    habitat: "All tropical soils; can withstand drought once root system touches deep subterranean water tables.",
    cultivation: {
      soil: "Mellow, deep soil; needs vast physical perimeter.",
      spacing: "30+ cubits; never crowded near residential foundations.",
      seedTreatment: "Bird-passed seed or clonal cutting primed with milk and cow dung.",
      irrigation: "Watered during early years; develops deep self-sufficient root network."
    },
    propagation: "Cuttings and natural bird-disseminated seed.",
    uses: [
      "Nalpamaram medicinal bark quartet for skin therapeutics",
      "Vast ecological refuge for birds, mammals, and insects",
      "Aerial root fibers and dental twigs"
    ],
    plantHealth: "Tolerates severe pruning; wounds sealed with clay-vidanga plaster.",
    formulations: ["Nalpamaram Bark Decoction", "Cow Dung Protective Wash"],
    vastuHomestead: {
      placement: "East of settlement / temple perimeter, never directly touching house walls due to powerful exploratory roots.",
      direction: "East.",
      dentalTwig: "Dental twig yields **Prosperity** (Aiśvarya) and spiritual stability (Summary, Ouseph)."
    },
    astrometeorology: {
      nakshatra: "Associated with Magha",
      bioIndicator: "Fruiting cycles attract migratory birds signifying rain shifts."
    },
    sources: [
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 12, 23", note: "Planting two Banyan trees properly leads to the abode of Shiva." },
      { bookId: "ouseph", ref: "Nalpamaram & Ethnobotany Sec. 3, 5", note: "Chief Nalpamaram tree for Pranan production and dental stick for prosperity." }
    ]
  },
  {
    id: "peepal",
    name: "Peepal / Sacred Fig",
    sanskritName: "अश्वत्थ",
    transliteration: "Aśvattha · Aśvatī",
    regionalNames: ["Arayal (അരയാൽ)", "Arali (ಅರಳಿ)", "Ravi (రావి)"],
    botanicalName: "Ficus religiosa",
    family: "Moraceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Nalpamaram & Nakshatra Tree",
    summary: "The divine king of trees in Indic philosophy. Core Nalpamaram species and sovereign Nakshatra tree for the Ashwini lunar mansion. Renowned for its round-the-clock oxygen exchange and spiritual sanctity.",
    characteristics: "Large deciduous tree with distinctive fluttering heart-shaped leaves with an elongated tail; produces copious aerial latex.",
    habitat: "Tolerates poor, rocky soils; commonly germinates in masonry or rocky crevices.",
    cultivation: {
      soil: "Deep, well-aerated soil; given generous open clearance.",
      spacing: "25 to 30 cubits.",
      seedTreatment: "Milk immersion followed by cow dung coating.",
      irrigation: "Deep infrequent watering."
    },
    propagation: "Cuttings and sapling transplantation.",
    uses: [
      "Key component of Nalpamaram skin and water purification formulas",
      "Atmospheric purification and oxygenation",
      "Sacred circumambulation and meditative tranquility"
    ],
    plantHealth: "Root exposure treated with ghee-mud plaster.",
    formulations: ["Nalpamaram Compound", "Tridosha Bark Wash"],
    vastuHomestead: {
      placement: "East of temple or village green; strictly kept away from domestic house foundations.",
      direction: "East (Al).",
      nakshatraTree: "Sovereign Nakshatra tree for **Ashwini** (Summary, Ouseph)."
    },
    astrometeorology: {
      nakshatra: "Ashwini",
      bioIndicator: "Trembling of leaves in still air signals minute microclimatic humidity fluctuations."
    },
    sources: [
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 10, 23", note: "Planting an Asvattha tree leads directly to Vaikuntha (abode of Vishnu)." },
      { bookId: "ouseph", ref: "Nakshatra Arboriculture Sec. 1, 2, 3", note: "Dedicated Ashwini Nakshatra tree and vital Nalpamaram oxygen source." }
    ]
  },
  {
    id: "cluster-fig",
    name: "Cluster Fig (Udumbara)",
    sanskritName: "उदुम्बर",
    transliteration: "Udumbara",
    regionalNames: ["Atthi (അത്തി)", "Atti (ಅತ್ತಿ)", "Atti (అత్తి)"],
    botanicalName: "Ficus racemosa",
    family: "Moraceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Nalpamaram & Low-Lying",
    summary: "The third sacred fig of the Nalpamaram quartet. Known in Varahamihira and Kashyapa as an ideal tree for moist, low-lying tracts and a potent groundwater indicator.",
    characteristics: "Large tree with smooth greenish-grey bark; produces abundant clusters of figs directly upon trunk and larger branches.",
    habitat: "Stream banks, low-lying wetlands, moist gullies, and irrigated homesteads.",
    cultivation: {
      soil: "Moist, rich, alluvial loam.",
      spacing: "16 to 20 cubits.",
      seedTreatment: "Seed washing with milk; stem cuttings smeared with cow dung.",
      irrigation: "Requires damp root zone; naturally seeks underground water."
    },
    propagation: "Vegetative stem cuttings and seeds.",
    uses: [
      "Nalpamaram medicinal bark",
      "Aquifer detection in botanical hydrology",
      "Fruit clusters harvested for traditional preparations"
    ],
    plantHealth: "Protected from insect bores with Vidanga ash paste.",
    formulations: ["Hydrological Aquifer Indicator Array", "Nalpamaram Blend"],
    vastuHomestead: {
      placement: "Near wells, domestic water tanks, and eastern/northern gardens.",
      direction: "North and East."
    },
    astrometeorology: {
      nakshatra: "Associated with Krittika",
      bioIndicator: "Profuse lower-trunk fruiting indicates high water table at shallow cubit depths."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.10", note: "Categorized under Anupaja (low-lying irrigated lands)." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 18", note: "Planting eight Udumbara trees attains the celestial realm of the Moon." },
      { bookId: "ouseph", ref: "Nalpamaram & Hydrology Sec. 3", note: "Third pillar of the Nalpamaram milky trees." }
    ]
  },
  {
    id: "white-fig",
    name: "White Fig (Plaksha)",
    sanskritName: "प्लक्ष",
    transliteration: "Plakṣa",
    regionalNames: ["Ithi / Kallal (ഇത്തി / കല്ലാൽ)", "Basari (ಬಸರಿ)", "Juvvi (జువ్వి)"],
    botanicalName: "Ficus microcarpa",
    family: "Moraceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Nalpamaram & Sacred Quadrangle",
    summary: "The fourth member of the Nalpamaram. Valued for its dense, glossy canopy, exceptional air-filtering capacity, and esteemed astringent medicinal bark.",
    characteristics: "Stout evergreen tree with shiny elliptical leaves and small paired figs turning purple-black when ripe.",
    habitat: "Rocky outcrops, tropical woodlands, and garden perimeters.",
    cultivation: {
      soil: "Hardy; thrives in poor soils once established.",
      spacing: "16 to 20 cubits.",
      seedTreatment: "Milk soaking and cow dung smearing.",
      irrigation: "Moderate watering in establishment year."
    },
    propagation: "Branch cuttings and seeds.",
    uses: [
      "Final member of Nalpamaram bark formula",
      "Shade and microclimate cooling",
      "Bonsai / dwarf cultivation in Adbhuta-utpadana traditions"
    ],
    plantHealth: "Foliage scales treated with dilute milk spray and wood ash.",
    formulations: ["Nalpamaram Decoction"],
    vastuHomestead: {
      placement: "North-Eastern and Eastern domestic sectors.",
      direction: "North-East."
    },
    astrometeorology: {
      nakshatra: "Associated with Purva Ashadha",
      bioIndicator: "Glossy leaf flush marks pre-monsoon atmospheric moisture accumulation."
    },
    sources: [
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 14", note: "Planting four Plaksha trees yields the spiritual fruits of a Rajasuya sacrifice." },
      { bookId: "ouseph", ref: "Nalpamaram Classification Sec. 3", note: "Fourth tree completing the Nalpamaram oxygen-producing shield." }
    ]
  },
  {
    id: "bilva",
    name: "Bilva / Bael",
    sanskritName: "बिल्व",
    transliteration: "Bilva · Vilva",
    regionalNames: ["Koovalam (കൂവളം)", "Bilvapatre (ಬಿಲ್ವపತ್ರೆ)", "Maredu (మారేడు)"],
    botanicalName: "Aegle marmelos",
    family: "Rutaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Sacred Homestead & Medicinal",
    summary: "The sacred Golden Apple tree beloved of Lord Shiva. Celebrated for bringing enduring prosperity (Lakshmi) to domestic dwellings and offering unparalleled therapeutic fruit and foliage.",
    characteristics: "Slender aromatic tree with trifoliate leaves, sharp axillary spines, fragrant greenish-white flowers, and large globose hard-shelled fruits.",
    habitat: "Dry open forests, homestead gardens, and temple grounds; highly drought-tolerant.",
    cultivation: {
      soil: "Well-drained sandy loam or stony soil.",
      spacing: "16 cubits (~24 feet).",
      seedTreatment: "Extracted from pulp, washed, dried in shade, primed with milk.",
      irrigation: "Moderate; thrives in warm dry seasons."
    },
    propagation: "Fresh seeds and root suckers.",
    uses: [
      "Leaves essential for sacred rituals and air disinfection",
      "Fruit pulp cures acute intestinal and metabolic imbalances",
      "Homestead tree ensuring domestic prosperity"
    ],
    plantHealth: "Resistant to fungal blight; root rot countered with horse-gram and black-gram Kashaya.",
    formulations: ["Ten-Tree Merit Formula", "Pitta-pacifying Leaf Infusion"],
    vastuHomestead: {
      placement: "Central or North-Western residential garden quadrant.",
      direction: "North-West and East."
    },
    astrometeorology: {
      nakshatra: "Associated with Uttara Ashadha",
      bioIndicator: "Trifoliate leaf gloss indicates groundwater stability."
    },
    sources: [
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 9, 23", note: "Lakshmi lives for generations in the house of one who plants the Bilva tree." },
      { bookId: "ouseph", ref: "Sacred Trees Sec. 2", note: "Classical sacred tree in residential arboriculture." }
    ]
  },
  {
    id: "amalaka",
    name: "Amalaka / Indian Gooseberry",
    sanskritName: "आमलकी / धात्री",
    transliteration: "Āmalakī · Dhātrī",
    regionalNames: ["Nelli (നെല്ലി)", "Nellikayi (ನೆಲ್ಲಿಕಾಯಿ)", "Usiri (ఉసిరి)"],
    botanicalName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Medicinal & Seed Science",
    summary: "The divine nurse of Ayurveda. In Vrikshayurveda, its roots are an irreplaceable active ingredient in the famous Kapittha germination decoction, while planting it confers the merits of lifelong Tapas.",
    characteristics: "Small-to-medium deciduous tree with feathery light-green branchlets resembling pinnate leaves and round, striated greenish-yellow acidic fruits.",
    habitat: "Dry deciduous woodlands, home gardens, and orchards.",
    cultivation: {
      soil: "Light loam, laterite, or alluvial soil.",
      spacing: "12 to 16 cubits.",
      seedTreatment: "Seed coat cracking followed by immersion in milk-ghee mixture.",
      irrigation: "Regular watering during flowering and fruit setting."
    },
    propagation: "Seeds and patch budding.",
    uses: [
      "Root decoctions used as active hormonal catalyst in Kapittha seed priming",
      "Supreme Rasayana fruit rich in organic acids and antioxidants",
      "Sacred domestic planting confering spiritual merit"
    ],
    plantHealth: "Leaf rust treated with fermented sour rice gruel and wood ash.",
    formulations: ["Kapittha Eight-Root Priming Decoction", "Kashaya Fruit Revitalizer"],
    vastuHomestead: {
      placement: "East and North-East garden quadrants.",
      direction: "North-East."
    },
    astrometeorology: {
      nakshatra: "Associated with Bharani",
      bioIndicator: "Fruit retention into deep winter indicates severe impending dry season."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.14", note: "Dhatri roots are essential in the Kapittha seed activation liquor." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 11, 23", note: "Planting Amalaka earns the fruits of constant asceticism and yajnas." }
    ]
  },
  {
    id: "mango",
    name: "Mango",
    sanskritName: "आम्र / चूत",
    transliteration: "Āmra · Cūta",
    regionalNames: ["Mavu (മാവ്)", "Mavu (ಮಾವು)", "Mamidi (మామిడి)"],
    botanicalName: "Mangifera indica",
    family: "Anacardiaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Orchard & Solar Shield",
    summary: "The sovereign fruit tree of India. Classified by Dr. Ouseph as an essential component of the northern solar-protective shield in homestead Vastu, and celebrated by Sarngadhara for securing generational salvation.",
    characteristics: "Magnificent evergreen tree with dense dome-shaped canopy, leathery lanceolate leaves, and fragrant panicles of flowers yielding succulent fruits.",
    habitat: "Deep, well-drained loams; sensitive to frost and waterlogging during flowering.",
    cultivation: {
      soil: "Deep alluvial loam or well-conditioned red laterite.",
      spacing: "20 cubits (~30 feet) minimum to ensure full sunlight capture.",
      seedTreatment: "Fresh stone sowing or inarching/grafting during Sisira and Varsha.",
      irrigation: "Withhold watering prior to flowering; regular watering during fruit swelling."
    },
    propagation: "Grafting (Sisira branchless, Hemantha sprouted, Varsha sturdy) and stone seedling.",
    uses: [
      "North directional boundary protective barrier",
      "Fruit and timber production",
      "Leaves for festive and ritual Torana purifications"
    ],
    plantHealth: "Panicle blight and sap bleeding treated by excising infected twigs, smearing with Vidanga-mud paste, and spraying with cow milk.",
    formulations: ["Kunapajala Fruit Enhancer", "Vidanga Wound Plaster"],
    vastuHomestead: {
      placement: "Mandated in the **North** of the dwelling compound alongside Nagmaram.",
      direction: "North: forms a biological canopy shield protecting the homestead from cold northerly gusts while inviting gentle ambient breezes."
    },
    astrometeorology: {
      nakshatra: "Associated with Revati",
      bioIndicator: "Early profuse flowering indicates a severe, scorching summer ahead."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.4, 55.8", note: "Propagation through seasonal grafting smeared with herbal milk paste." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 15, 23", note: "Planting five Mango trees secures salvation for fourteen generations." },
      { bookId: "ouseph", ref: "Directional Layouts Sec. 3", note: "North directional mandate for homestead microclimate integrity." }
    ]
  },
  {
    id: "kapittha",
    name: "Kapittha / Wood Apple",
    sanskritName: "कपित्थ",
    transliteration: "Kapittha",
    regionalNames: ["Vilamaram (വിളാമരം)", "Belada Mara (ಬೇಲದ ಮರ)", "Velaga (వెలగ)"],
    botanicalName: "Limonia acidissima",
    family: "Rutaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Seed Technology & Orchard",
    summary: "Famed in ancient seed technology for having one of the hardest and most recalcitrant seed coats in nature. Varahamihira dedicates a celebrated multi-stage chemical and hormonal priming technique specifically to crack its dormancy.",
    characteristics: "Slow-growing, spiny deciduous tree with aromatic pinnate leaves and round, woody, grey-white hard-shelled fruits containing fragrant tart pulp.",
    habitat: "Dry, rocky, and semi-arid terrain; resistant to drought and poor soils.",
    cultivation: {
      soil: "Light loam or conditioned soil pit enriched with ash and fish infusions.",
      spacing: "16 to 20 cubits.",
      seedTreatment: "Varahamihira's 8-root decoction protocol: boiled in milk with Asphota, Dhatri, Dhava, Vasika, Palasini, Vetasa, Suryavalli, and Syama. Seeds immersed for 100 seconds daily, sun-dried, repeated for 30 days.",
      irrigation: "Light watering; highly drought-resilient once rooted."
    },
    propagation: "Scientifically primed seeds sown in deep pits conditioned by fire, ash, honey, and ghee.",
    uses: [
      "Digestive fruit pulp, culinary chutneys, and sherbets",
      "Benchmarking ancient seed hormone and dormancy research",
      "Essential sacred grove and domestic garden tree"
    ],
    plantHealth: "Extremely robust; naturally immune to most common plant parasites.",
    formulations: ["Kapittha Eight-Root Germination Decoction", "Ash-Honey-Ghee Soil Pit Conditioner"],
    vastuHomestead: {
      placement: "Outer domestic orchards and dry southern/western borders.",
      direction: "South-West."
    },
    astrometeorology: {
      nakshatra: "Associated with Vishakha",
      bioIndicator: "Woody fruit maturation marks the peak of autumn harvesting."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.14-16", note: "Detailed multi-step protocol for germinating Kapittha seeds using an eight-root milk decoction and ash-lined pits." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda v. 23", note: "Included in the virtuous planting formula." }
    ]
  },
  {
    id: "vidanga",
    name: "Vidanga / False Black Pepper",
    sanskritName: "विडङ्ग",
    transliteration: "Viḍaṅga",
    regionalNames: ["Vizhalari / Vayuvilanga (വിഴാലരി)", "Vayu-vilanga (ವಾಯುವಿಳಂಗ)", "Vayu-vidangalu (వాయువిడంగాలు)"],
    botanicalName: "Embelia ribes",
    family: "Primulaceae",
    plantType: "Woody Climber (Latā)",
    category: "Phytomedical Super-Agent",
    summary: "The supreme bio-antibiotic, antifungal, and anthelmintic plant in Vrikshayurveda. Consistently compounded with ghee, milk, and mud to dress excised plant lesions and eradicate pathogenic infestations.",
    characteristics: "Large woody scandent climbing shrub with long, slender, flexible branches, elliptic leaves, and clusters of small globular berries resembling peppercorns.",
    habitat: "Moist semi-evergreen and evergreen forests at middle elevations.",
    cultivation: {
      soil: "Rich, moist forest loam with adequate organic humus.",
      spacing: "Planted alongside sturdy host trees to provide climbing support.",
      seedTreatment: "Seed cleaning in cow milk.",
      irrigation: "Steady moisture; partial canopy shade required."
    },
    propagation: "Seeds and semi-hardwood stem cuttings.",
    uses: [
      "Universal antimicrobial ingredient in tree surgical dressings",
      "Component of clonal transgrafting medication",
      "Removes internal wood worms and fungal rot"
    ],
    plantHealth: "Acts as the physician's scalpel paste: smeared on freshly cut branches to prevent secondary infection and promote rapid cambium healing.",
    formulations: ["Vidanga-Ghee-Mud Wound Dressing", "Transgrafting Protective Paste"],
    vastuHomestead: {
      placement: "Cultivated on pergolas, arbors, and boundary trees.",
      direction: "North-East and shaded garden quadrants."
    },
    astrometeorology: {
      nakshatra: "Associated with Pushya",
      bioIndicator: "Berry ripening coincides with the onset of dry winter breezes."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.7, 55.12", note: "Essential ingredient in wound healing paste applied after surgical excision of diseased wood." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda (Taru-cikitsā)", note: "Prescribed in every Tridosha wound remedy." },
      { bookId: "ouseph", ref: "Surgical Therapeutics Sec. 6", note: "Identified as pre-modern herbal antibiotic." }
    ]
  },
  {
    id: "sesame",
    name: "Sesame / Gingelly",
    sanskritName: "तिल",
    transliteration: "Tila",
    regionalNames: ["Ellu (എള്ള്)", "Ellu (ಎಳ್ಳು)", "Nuvvulu (నువ్వులు)"],
    botanicalName: "Sesamum indicum",
    family: "Pedaliaceae",
    plantType: "Annual Crop (Oṣadhi)",
    category: "Edaphology & Green Manure",
    summary: "The primary biological soil-conditioning agent of Vrikshayurveda. Varahamihira establishes that sowing sesame to flowering and plowing it under transforms hard laterite soil into mellow, fertile Mrudvee Bhoo.",
    characteristics: "Erect annual herb with bell-shaped flowers and seed capsules containing oil-rich seeds.",
    habitat: "Warm tropical plains; thrives in well-aerated light soils.",
    cultivation: {
      soil: "Hard laterite, dry loam, or unbroken plantation soil.",
      spacing: "Broadcast densely across planting fields.",
      seedTreatment: "Untreated raw sowing for green manure; primed seeds for oil crops.",
      irrigation: "Light rainfed or initial irrigation to spark uniform germination."
    },
    propagation: "Direct broadcasting of seeds.",
    uses: [
      "Green manuring agent: mucilage binds sandy particles and loosens stiff clays, drastically increasing water retention",
      "Key ingredient in Kunapajala liquid fertilizer",
      "Component of pre-graft clonal protective pastes"
    ],
    plantHealth: "Suppresses soil-borne nematodes and enriches microbial biomass.",
    formulations: ["Sesame Green Manuring Protocol", "Kunapa Broth Nitrogen Base", "Transgrafting Paste"],
    vastuHomestead: {
      placement: "Sown comprehensively across the entire site prior to any building or orchard establishment.",
      direction: "Site-wide preparation."
    },
    astrometeorology: {
      nakshatra: "Associated with Chitra",
      bioIndicator: "Flowering stage is the precise biological signal to plow the crop back into the soil."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.2, 55.7, 55.11", note: "'Mrudvee bhooḥ sarvavṛkṣāṇāṁ hitā tasyāṁ tilān vapet...' — Sowing sesame to bloom creates soft soil." },
      { bookId: "infographic", ref: "Infographic: Biological Soil Conditioning", note: "Soften hard soil by incorporating flowered sesame back into the earth." }
    ]
  },
  {
    id: "arjuna",
    name: "Arjuna",
    sanskritName: "अर्जुन",
    transliteration: "Arjuna",
    regionalNames: ["Maruthu / Neermathal (മരുforce / മരുത്)", "Bili Mathi (ಬಿಳಿ ಮತ್ತಿ)", "Tella Maddi (తెల్ల మద్ది)"],
    botanicalName: "Terminalia arjuna",
    family: "Combretaceae",
    plantType: "Riparian Tree (Vṛkṣa)",
    category: "Hydrology & Low-Lying",
    summary: "The majestic riverine sentinel. Classified by Varahamihira as an Anupaja species suited for low-lying irrigated lands, and highlighted by Dr. Ouseph as a primary botanical indicator detecting underground water tables.",
    characteristics: "Massive tree with buttressed trunk, smooth pinkish-grey peeling bark, and narrow coriaceous leaves.",
    habitat: "Riverbanks, stream beds, marshy depressions, and low-lying alluvial plains.",
    cultivation: {
      soil: "Moist alluvial or clayey loam with abundant moisture.",
      spacing: "20 cubits (~30 feet).",
      seedTreatment: "Seed soaking in water for 48 hours.",
      irrigation: "Abundant water; tolerant of seasonal inundation."
    },
    propagation: "Seeds and stump sprouts.",
    uses: [
      "Botanical hydrology: presence indicates subterranean aquifers at precise cubit depths",
      "Cardioprotective and astringent bark prized in Ayurveda",
      "Stream bank stabilization and erosion prevention"
    ],
    plantHealth: "Fungus on wet bark treated with vidanga and wood ash paste.",
    formulations: ["Subterranean Aquifer Indicator Table"],
    vastuHomestead: {
      placement: "Riparian perimeters, water reservoirs, and southern/eastern drainage sectors.",
      direction: "South and East near water bodies."
    },
    astrometeorology: {
      nakshatra: "Associated with Swati",
      bioIndicator: "Bark peeling cycles correspond to the onset of the Southwest monsoon."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.10", note: "Listed foremost among low-lying well-irrigated species (Anupaja)." },
      { bookId: "ouseph", ref: "Botanical Hydrology Sec. 2", note: "Sensing array indicator detecting groundwater depth and direction." }
    ]
  },
  {
    id: "kadamba",
    name: "Kadamba",
    sanskritName: "कदम्ब",
    transliteration: "Kadamba",
    regionalNames: ["Kadambam (കടമ്പ്)", "Kadamba (ಕದಂಬ)", "Kadambamu (కదంబము)"],
    botanicalName: "Neolamarckia cadamba",
    family: "Rubiaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Hydrology & Sacred Park",
    summary: "The sacred flowering tree of Lord Krishna. Celebrated for its unique spherical, orange, pin-cushion blossoms, rapid growth, and reliable indication of subterranean freshwater streams.",
    characteristics: "Large tree with broad spreading branches, large glossy leaves, and sweet-scented globular inflorescences blooming at the first monsoon thunder.",
    habitat: "Low-lying, moist deciduous forests, near ponds, lakes, and irrigated gardens.",
    cultivation: {
      soil: "Deep moist alluvial loam.",
      spacing: "20 cubits (~30 feet).",
      seedTreatment: "Minute seeds mixed with fine sand and sown under light shade.",
      irrigation: "Copious watering in dry weather."
    },
    propagation: "Seeds and branch cuttings.",
    uses: [
      "Hydrological bio-indicator detecting sweet water veins for well digging",
      "Auspicious shade and ornamental tree for civic parks",
      "Timber used for light carpentry and wood pulp"
    ],
    plantHealth: "Leaf caterpillars controlled with dilute neem and cow dung washes.",
    formulations: ["Dakargala Groundwater Matrix"],
    vastuHomestead: {
      placement: "Water reservoir banks, northern and eastern homestead borders.",
      direction: "North-East and North."
    },
    astrometeorology: {
      nakshatra: "Associated with Shatabhisha",
      bioIndicator: "Bursting of globe flowers is the classic botanical herald of the Southwest monsoon."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.10", note: "Low-lying and reservoir garden tree." },
      { bookId: "ouseph", ref: "Botanical Hydrology Sec. 2", note: "Key bio-indicator for groundwater depth." }
    ]
  },
  {
    id: "chandana",
    name: "Chandana / Sandalwood",
    sanskritName: "चन्दन",
    transliteration: "Candana",
    regionalNames: ["Chandanam (ചന്ദനം)", "Gandhada Mara (ಗಂಧದ ಮರ)", "Chandanamu (చందనము)"],
    botanicalName: "Santalum album",
    family: "Santalaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Aromatic & Hydrology",
    summary: "The peerless aromatic timber of South India. Celebrated in Vrikshayurveda as an indicator of Bhadra (most auspicious) lands and subterranean aquifers, as well as a premier fragrant cooling agent.",
    characteristics: "Small-to-medium hemi-parasitic evergreen tree with slender drooping branches, opposite leaves, and prized aromatic heartwood.",
    habitat: "Dry deciduous and scrub forests; requires secondary host plants for root haustorial nourishment.",
    cultivation: {
      soil: "Well-drained red loam, rocky or sandy soil with host plants nearby.",
      spacing: "16 cubits (~24 feet).",
      seedTreatment: "Seed coat decortication, soaked in water, primed with cow milk.",
      irrigation: "Light watering; cannot tolerate water stagnation."
    },
    propagation: "Seeds sown alongside Cajanus cajan or Casuarina host companions.",
    uses: [
      "Subterranean water and sweet groundwater indicator",
      "Aromatic heartwood for sacred pastes, medicines, and essential oil",
      "Pitta-pacifying cooling preparations for plants and humans"
    ],
    plantHealth: "Protected from spike disease by balancing companion host nutrition.",
    formulations: ["Pitta-Cooling Fragrant Wash"],
    vastuHomestead: {
      placement: "Inner domestic pleasure gardens and elevated dry knolls.",
      direction: "South-East and East."
    },
    astrometeorology: {
      nakshatra: "Associated with Ardra",
      bioIndicator: "Heartwood fragrance intensity increases with sustained atmospheric humidity."
    },
    sources: [
      { bookId: "ouseph", ref: "Botanical Hydrology & Bhadra Lands Sec. 2", note: "Floral indicator signifying subterranean water and classifying optimal Bhadra lands." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda (Taru-Mahatmya)", note: "Fragrant garden species." }
    ]
  },
  {
    id: "vetiver",
    name: "Ramacham / Vetiver (Ushira)",
    sanskritName: "उशीर",
    transliteration: "Uśīra · Ramacham",
    regionalNames: ["Ramacham (രാമച്ചം)", "Lavancha (ಲಾವಂಚ)", "Vattiveru (వట్టివేరు)"],
    botanicalName: "Chrysopogon zizanioides",
    family: "Poaceae",
    plantType: "Perennial Grass (Tṛṇa)",
    category: "Soil Indicator & Clonal Care",
    summary: "The fragrant khus-khus grass. Noted by Varahamihira and Kashyapa as an infallible indicator of soft, mellow, fertile soil, and an indispensable aromatic binder in pre-graft clonal medications.",
    characteristics: "Dense clumping perennial grass with spongy, fibrous, intensely aromatic roots extending vertically 2-4 meters deep.",
    habitat: "Riverbanks, marsh margins, and alluvial soils.",
    cultivation: {
      soil: "Moist sandy or alluvial loam; indicates naturally fertile mellow soils.",
      spacing: "Planted closely along contours and around tree basins.",
      seedTreatment: "Vegetative root slip division.",
      irrigation: "Tolerant of waterlogging as well as seasonal aridity."
    },
    propagation: "Root slips (tillers).",
    uses: [
      "Essential component of clonal pre-graft smearing paste (with ghee, milk, cow dung, and sesame)",
      "Soil moisture conservation and erosion prevention",
      "Cooling, aromatic root mats and traditional medicinal extracts"
    ],
    plantHealth: "Root exudates act as natural bio-nematicide protecting tree root zones.",
    formulations: ["Transgrafting Clonal Paste", "Soft Soil Diagnostic Indicator"],
    vastuHomestead: {
      placement: "Contours, well surroundings, and moisture drains.",
      direction: "South and East water runoff borders."
    },
    astrometeorology: {
      nakshatra: "Associated with Sravana",
      bioIndicator: "Vibrant lush growth marks high groundwater table and sweet soil chemistry."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.7, 55.19", note: "'Ghrutośīratilakṣaudravidaṅgakṣīragomayaiḥ...' — Ushira compounded with ghee, milk, and cow dung for clonal wounds." },
      { bookId: "kashyapa", ref: "Kāśyapa Vṛkṣāyurveda citation in Varahamihira p. 18", note: "Flourishing virana / cuscus grass proves soft mellow soil." }
    ]
  },
  {
    id: "ankola",
    name: "Angola / Sage-Leaved Alangium",
    sanskritName: "अङ्कोल",
    transliteration: "Aṅkola · Angola",
    regionalNames: ["Ankolam (അങ്കോലം)", "Ankole (ಅಂಕೋಲೆ)", "Udagu (ఉడగు)"],
    botanicalName: "Alangium salviifolium",
    family: "Cornaceae",
    plantType: "Shrub / Small Tree",
    category: "Advanced Seed Shock Science",
    summary: "The legendary catalytic agent of ancient seed priming. Varahamihira describes using the pulp and extract of Ankola fruit in 100-cycle immersions to unlock immediate seed sprouting when watered with melted hailstones.",
    characteristics: "Thorny small deciduous tree with oblong leathery leaves, fragrant yellowish-white blossoms, and fleshy globular berries.",
    habitat: "Dry rocky plains, riverbed gravels, and dry deciduous scrub.",
    cultivation: {
      soil: "Rocky, sandy, or dry loam.",
      spacing: "12 to 16 cubits.",
      seedTreatment: "Fresh seed germination in sand.",
      irrigation: "Minimal; extremely drought-hardy."
    },
    propagation: "Seeds and root cuttings.",
    uses: [
      "Fruit juice and pulp used in 100-cycle dormancy-breaking seed baths",
      "Oil from seeds used in traditional pest repellents",
      "Roots prized for counter-irritant and antimicrobial applications"
    ],
    plantHealth: "Extracts possess strong antifungal alkaloids that sterilize seed coats.",
    formulations: ["Hundred-Cycle Ankola Pulp Seed Treatment", "Hailstone Shock Catalyst"],
    vastuHomestead: {
      placement: "Perimeter borders and dry hedge quadrants.",
      direction: "South-West."
    },
    astrometeorology: {
      nakshatra: "Associated with Mula",
      bioIndicator: "Leafless blooming in deep summer precedes early monsoon clouds."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.16-17", note: "'Śataśo'ṅgolasambhūtaphalakalkena bhāvitam...' — Seeds treated 100 times with Ankola pulp sprout instantaneously with melted hailstones." }
    ]
  },
  {
    id: "sleshmataka",
    name: "Shleshmataka / Sebastian Plum",
    sanskritName: "श्लेष्मातक",
    transliteration: "Śleṣmātaka",
    regionalNames: ["Naruvari (നറുവേരി)", "Chikke (ಚಿಕ್ಕೆ)", "Bankanakka (బంకనక్క)"],
    botanicalName: "Cordia dichotoma",
    family: "Boraginaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Seed Technology & Mucilage",
    summary: "The mucilaginous plum tree. In Varahamihira's seed science, decorticated Shleshmataka seeds are repeatedly bathed in Ankola juice and germinated in buffalo dung under hailstone cold-shock.",
    characteristics: "Medium deciduous tree with crooked trunk, ovate leaves, and small yellowish-white flowers yielding sticky, mucilaginous, edible drupes.",
    habitat: "Sub-Himalayan tracts, moist valleys, and tropical plains.",
    cultivation: {
      soil: "Adaptable; thrives in moist loam and riverside gravels.",
      spacing: "16 cubits (~24 feet).",
      seedTreatment: "Decortication, 7-cycle Ankola pulp bathing, shade drying, buffalo dung coating.",
      irrigation: "Moderate watering."
    },
    propagation: "Decorticated primed seeds and vegetative layering.",
    uses: [
      "High mucilage pulp used in seed coatings and natural binders",
      "Fruits eaten as pickles and demulcent remedies",
      "Fibrous inner bark utilized for ropes and horticultural tying"
    ],
    plantHealth: "Treated with milk sprays when aphids attack tender leaves.",
    formulations: ["Seven-Cycle Decortication Priming", "Buffalo Dung Hotbed Germination"],
    vastuHomestead: {
      placement: "Secondary orchards and utility boundaries.",
      direction: "North-West."
    },
    astrometeorology: {
      nakshatra: "Associated with Jyeshtha",
      bioIndicator: "Viscous fruit ripening indicates arrival of peak summer humidity."
    },
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.16-17", note: "Seven-cycle shade drying protocol with Ankola fruit pulp and buffalo dung." }
    ]
  },
  {
    id: "shala",
    name: "Shala / Sal Tree",
    sanskritName: "शाल",
    transliteration: "Śāla",
    regionalNames: ["Maramaram (മരമരം)", "Asina (ಅಸಿನ)", "Guggilamu (గుగ్గిలము)"],
    botanicalName: "Shorea robusta",
    family: "Dipterocarpaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "10-Month Weather Bio-Indicator",
    summary: "The magnificent Sal tree. Documented by Dr. Ouseph as a paramount bio-indicator in classical astrometeorology, providing farmers with a 10-month lead time predicting the success of medicinal Navara rice.",
    characteristics: "Massive, slow-growing semi-deciduous tree with cylindrical trunk, leathery ovate leaves, and clusters of creamy-white fragrant blossoms yielding winged fruits.",
    habitat: "Moist to dry deciduous forest belts on well-drained sandy or laterite loams.",
    cultivation: {
      soil: "Deep, porous, well-drained acidic to neutral loam.",
      spacing: "25 to 30 cubits.",
      seedTreatment: "Fresh seed sowing immediately upon drop (highly recalcitrant).",
      irrigation: "Deep natural forest hydration."
    },
    propagation: "Natural seed fall and nursery saplings.",
    uses: [
      "Astrometeorological bio-indicator forecasting Navara rice yield 10 months in advance",
      "Premier heavy structural timber (Sarvasara)",
      "Aromatic resin (Dammar) used in sacred incense and wood sealing"
    ],
    plantHealth: "Sal borer infestations managed traditionally by clear-cutting infected limbs and applying ash washes.",
    formulations: ["10-Month Rice Forecasting Indicator Matrix"],
    vastuHomestead: {
      placement: "Forest reserves, outer sacred groves (Kavu), and village perimeters.",
      direction: "North-East border of town settlements."
    },
    astrometeorology: {
      nakshatra: "Associated with Uttara Ashadha",
      bioIndicator: "Lush, profuse, heavy blooming of Shala indicates an extraordinarily favorable rainfall distribution for Navara rice (Summary, Ouseph)."
    },
    sources: [
      { bookId: "ouseph", ref: "Astrometeorology & Bio-Indicators Sec. 6", note: "Lush blooming of Shala tree predicts the success of Navara rice." },
      { bookId: "summary", ref: "Summary.pdf Section 8", note: "10-month lead time agricultural planning pillar." }
    ]
  },
  {
    id: "vaikankata",
    name: "Vaikankata / Governor's Plum",
    sanskritName: "वैकङ्कत",
    transliteration: "Vaikaṅkata",
    regionalNames: ["Vikki / Karimullu (വിക്കി / കരിമുള്ളു)", "Baichi (ಬೈಚಿ)", "Kanregu (కన్రేగు)"],
    botanicalName: "Flacourtia indica",
    family: "Salicaceae",
    plantType: "Shrub / Small Tree",
    category: "Dantakashta (Dental Twig)",
    summary: "The revered dental stick tree of Vrikshayurveda. Recorded in Dr. Ouseph's monograph as conferring Brahmatejas (divine intellectual and spiritual brilliance) when used for morning dental hygiene.",
    characteristics: "Spiny small deciduous tree or bushy shrub with glossy obovate leaves, small greenish-yellow flowers, and edible reddish-purple berry-like drupes.",
    habitat: "Dry scrub forests, rocky hills, and open tropical thickets.",
    cultivation: {
      soil: "Stony, shallow, or degraded soils; highly adaptable.",
      spacing: "10 to 12 cubits.",
      seedTreatment: "Seed cleaning and sun-drying.",
      irrigation: "Extremely drought-hardy once established."
    },
    propagation: "Seeds, root suckers, and stem cuttings.",
    uses: [
      "Supreme Dantakashta (dental twig) conferring **Brahmatejas** (divine radiance)",
      "Astringent and antimicrobial twigs tighten gums and cleanse teeth",
      "Edible sweet-acidic berries and protective boundary hedging"
    ],
    plantHealth: "Naturally hardy against pests.",
    formulations: ["Dantakashta Hierarchy Chart"],
    vastuHomestead: {
      placement: "South-Western boundary hedgerows and domestic herbal groves.",
      direction: "South-West."
    },
    astrometeorology: {
      nakshatra: "Associated with Purva Phalguni",
      bioIndicator: "Spine hardening and berry color shift marks onset of autumn."
    },
    sources: [
      { bookId: "ouseph", ref: "Dantakashta Science Sec. 5", note: "Vaikankata for Brahmatejas (divine brilliance) in morning dental discipline." },
      { bookId: "summary", ref: "Summary.pdf Section 7", note: "Dental twig ethnobotanical hierarchy." }
    ]
  },
  {
    id: "ilanji",
    name: "Ilanji / Spanish Cherry (Bakula)",
    sanskritName: "बकुल / इलञ्जि",
    transliteration: "Bakula · Ilanji",
    regionalNames: ["Ilanji (ഇലഞ്ഞി)", "Bakula (ಬಕುಲ)", "Pogada (పొగడ)"],
    botanicalName: "Mimusops elengi",
    family: "Sapotaceae",
    plantType: "Tree (Vṛkṣa)",
    category: "Homestead & Directional Vastu",
    summary: "The intoxicatingly fragrant star-flower tree. Mandated by Vastu Shastra in the East of homesteads to sweeten domestic air currents and generate restorative microclimates.",
    characteristics: "Medium-to-large evergreen tree with dense glossy foliage, small cream-colored star-shaped blossoms that retain fragrance even after drying, and edible orange berries.",
    habitat: "Moist tropical evergreen forests, gardens, and temple quadrangles.",
    cultivation: {
      soil: "Rich loam, laterite, or moisture-retentive coastal soils.",
      spacing: "16 to 20 cubits (~24-30 feet).",
      seedTreatment: "Fresh seeds soaked in milk-water for 24 hours.",
      irrigation: "Regular watering during early establishment."
    },
    propagation: "Seeds and semi-hardwood cuttings.",
    uses: [
      "East directional homestead microclimate purifier",
      "Dried fragrant blossoms used for sachets, floral garlands, and headache relief",
      "Bark decoction for toothache and gum bleeding"
    ],
    plantHealth: "Resilient; leaf spots treated with dilute milk-ghee spray.",
    formulations: ["Directional Homestead Array"],
    vastuHomestead: {
      placement: "Mandated in the **East** of the dwelling compound alongside Al (Ficus religiosa).",
      direction: "East: generates aromatic, calming morning breezes that waft into the residential courtyard."
    },
    astrometeorology: {
      nakshatra: "Associated with Dhanishta",
      bioIndicator: "Nocturnal fragrance intensity peaks immediately before pre-monsoon precipitation."
    },
    sources: [
      { bookId: "ouseph", ref: "Directional Homestead Layouts Sec. 3", note: "East directional allocation for Ilanji and Al creating solar-protective microclimate." },
      { bookId: "summary", ref: "Summary.pdf Section 3", note: "Eastern solar-protective shield." }
    ]
  },
  {
    id: "devadaru",
    name: "Devadaru / Himalayan Cedar",
    sanskritName: "देवदारु",
    transliteration: "Devadāru",
    regionalNames: ["Devatharam (ദേവദാരം)", "Devadaru (ದೇವದಾರು)", "Devadaru (దేవదారు)"],
    botanicalName: "Cedrus deodara",
    family: "Pinaceae",
    plantType: "Canopy Conifer (Vṛkṣa)",
    category: "Philosophical Archetype",
    summary: "The divine timber of the gods. In Vrikshayurveda's philosophical framework, Lord Shiva and Goddess Parvati nurtured the Devadaru as their own foster offspring, establishing arboriculture as a sacred discipline (Tapas).",
    characteristics: "Majestic evergreen conifer with barrel-shaped cones, drooping branchlets, needle-like foliage, and aromatic rot-resistant timber.",
    habitat: "Montane temperate slopes; represented in lowland Indian treatises as the philosophical ideal of sacred arboriculture.",
    cultivation: {
      soil: "Deep, well-drained gravelly or rocky mountain loam.",
      spacing: "25+ cubits in natural groves.",
      seedTreatment: "Cold stratification simulating mountain snow shock.",
      irrigation: "Moderate natural slope drainage."
    },
    propagation: "Seeds stratified in cold moist medium.",
    uses: [
      "Foundational spiritual archetype for treating trees as sentient Pranic beings",
      "Aromatic wood oil with profound antifungal and insecticidal potency",
      "Sacred temple pillars and idol carving"
    ],
    plantHealth: "Self-protecting through volatile aromatic oleoresins.",
    formulations: ["Shiva-Parvati Devadaru Tapas Chronicle"],
    vastuHomestead: {
      placement: "Sacred mountain hermitage sanctuaries and elevated temple crowns.",
      direction: "North."
    },
    astrometeorology: {
      nakshatra: "Associated with Uttara Bhadrapada",
      bioIndicator: "Needle resilience benchmarks seasonal frost severity."
    },
    sources: [
      { bookId: "ouseph", ref: "Philosophical Foundations Sec. 1", note: "Sacred narrative of Shiva and Parvati adopting the Devadaru as their own offspring." },
      { bookId: "summary", ref: "Summary.pdf Section 1", note: "Ethical mandate of arboriculture as Tapas." }
    ]
  }
];
