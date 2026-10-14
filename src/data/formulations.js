export const FORMULATIONS_DATA = [
  {
    id: "kunapajala",
    name: "Kunapajala (Kunapa Water)",
    sanskritName: "कुणपजल",
    transliteration: "Kuṇapajala",
    purpose: "Universal fermented liquid bio-fertilizer and reproductive stimulant that prompts continuous flowering, prolific fruit-set, and vigorous vegetative growth.",
    targetPlants: "All fruit trees, flowering climbers, non-bearing mature trees, and garden groves.",
    ingredients: [
      { item: "Powdered goat voidings (Ajā-sakṛt)", quantity: "1 Āḍhaka", note: "Rich nitrogen & organic bacterial inoculant" },
      { item: "Powdered sheep voidings (Avi-sakṛt)", quantity: "1 Āḍhaka", note: "Mineral & microbial activator" },
      { item: "Powdered sesame seeds (Tila-cūrṇa)", quantity: "2 Āḍhakas", note: "High mucilage, organic fats & phosphorus" },
      { item: "Fried barley grist/flour (Saktu)", quantity: "1 Prastha", note: "Fermentation substrate & carbohydrates" },
      { item: "Animal flesh / carcass meat (Māṁsa)", quantity: "1 Tulā", note: "Readily bioavailable amino acids & nitrogen" },
      { item: "Water (Jala)", quantity: "1 Droṇa", note: "Aqueous fermentation medium" }
    ],
    traditionalUnits: {
      adhaka: "1 Āḍhaka ≈ 3.0 kg (dry weight metric approx)",
      prastha: "1 Prastha ≈ 750 grams",
      tula: "1 Tulā ≈ 4.5 to 5.0 kg",
      drona: "1 Droṇa ≈ 12 to 14 liters"
    },
    preparation: "All ingredients are combined into a clean earthen vat or wooden cask, sealed to create an anaerobic environment, and allowed to ferment undisturbed for exactly seven nights (Saptarātroṣita).",
    duration: "7 nights of anaerobic microbial fermentation.",
    application: "Diluted with fresh water and drenched directly into the root basin (Seka) of trees and flowering creepers at the drip line. Stimulates immediate nutrient absorption through root hairs.",
    scientificCommentary: "Modern analysis demonstrates that Kunapajala provides an abundance of soluble peptides, free amino acids, volatile fatty acids, and beneficial anaerobic bacilli, functioning as a bio-available nitrogen and phyto-hormonal tonic.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.11-12", note: "Verses 11-12 provide the canonical metric formula for vanaspatis, creepers, and shrubs." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda (Kunapajala-vidhi)", note: "Elaborates variations using marrow, bone meal, and fish washings." },
      { bookId: "summary", ref: "Summary.pdf Section 5", note: "Strategic heart of ancient Indian fertilization." }
    ]
  },
  {
    id: "seed-priming-10day",
    name: "10-Day Seed Priming Protocol",
    sanskritName: "दशाहबीजसंस्कार",
    transliteration: "Daśāha-Bīja-Saṁskāra",
    purpose: "Comprehensive pre-sowing protocol to break embryo dormancy, coat seeds with beneficial symbiotic microbes, and sterilize against fungal pathogens.",
    targetPlants: "All standard plantation seeds, flowering plants, and medicinal trees.",
    ingredients: [
      { item: "Fresh cow milk (Dugdha)", quantity: "Sufficient for daily soaking", note: "Provides proteins, enzymes, and moisture" },
      { item: "Clarified butter (Ghṛta / Ghee)", quantity: "Sufficient to coat hands", note: "Protective lipid barrier preventing pathogen transfer" },
      { item: "Fresh cow dung (Gomaya)", quantity: "Liberal coating paste", note: "Inoculates beneficial microflora and natural trichoderma" },
      { item: "Boar flesh & fat (Krauda)", quantity: "Smoke fumigation pieces", note: "Fatty antimicrobial smoke shielding seeds" },
      { item: "Deer flesh & fat (Mārga)", quantity: "Smoke fumigation pieces", note: "Volatile lipid smoking agent" }
    ],
    traditionalUnits: {
      duration: "10 consecutive days (Daśāhāni)"
    },
    preparation: "Seeds are soaked daily in fresh cow milk. The cultivator must smear their hands thoroughly with ghee before touching or handling the seeds. The seeds are then rolled in fresh cow dung paste and placed in an earthen vessel where they are exposed to the dense fumigation (Dhūpana) of burning deer and boar fat.",
    duration: "10-day recurring daily cycle.",
    application: "Immediately sown into well-conditioned mellow soil beds prepared with sesame green manuring; watered with an infusion of dilute milk and water.",
    scientificCommentary: "Cow dung provides active colonies of beneficial bacteria (Bacillus spp.) that suppress seed-borne pathogens. The lipid smoke leaves a volatile microscopic layer that prevents rot while milk primes moisture absorption.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.12-13", note: "'Vāsarāṇi daśa dugdhabhāvitaṁ bījam ājyayuta-hasta-bhāvitam...'" },
      { bookId: "summary", ref: "Summary.pdf Section 4", note: "Ten-day seed priming and biological fumigation cycle." }
    ]
  },
  {
    id: "tamarind-hardcoat-sprouting",
    name: "Tamarind Hard-Coat Sprouting Broth",
    sanskritName: "तिन्तिडीकाङ्कुरविधि",
    transliteration: "Tintiḍīkā-Aṅkura-Vidhi",
    purpose: "Specialized thermochemical and biological smoke protocol to penetrate and soften impenetrable, recalcitrant seed coats such as Tamarind.",
    targetPlants: "Tamarind (Tamarindus indica) and other ultra-hard seeded legumes.",
    ingredients: [
      { item: "Unhusked rice (Vrīhi)", quantity: "Equal part", note: "Starch & enzymatic base" },
      { item: "Black gram (Māṣa)", quantity: "Equal part", note: "High protein & biological nitrogen" },
      { item: "Sesame meal (Tila-cūrṇa)", quantity: "Equal part", note: "Lipids and mucilage" },
      { item: "Barley flour (Saktu)", quantity: "Equal part", note: "Fermentable grain" },
      { item: "Stale carrion meat (Pūti-māṁsa)", quantity: "Measured quantity", note: "Proteolytic enzymes degrading tough seed coat" },
      { item: "Turmeric root rhizomes (Haridrā)", quantity: "Ample dried rhizomes", note: "Curcuminoid antimicrobial fumigation smoke" },
      { item: "Fresh milk (Kṣīra)", quantity: "Boiling medium", note: "Liquid matrix" }
    ],
    traditionalUnits: {
      method: "Boiled decoction with continuous turmeric root fumigation"
    },
    preparation: "Rice, sesame, black gram, and barley grist are boiled together with stale carrion meat in cow milk. The stubborn tamarind seeds are immersed into this biologically active warm broth and subjected to continuous, unbroken smoke from burning turmeric roots.",
    duration: "Treated until seed coats swell and exhibit initial micropyle softening.",
    application: "Sown in deep, loose, pre-warmed soil moistened with aqueous meat-fish infusion.",
    scientificCommentary: "The proteolytic enzymes from the decaying biological matter, combined with heat, milk lactic acid, and turmeric volatile smoke, effectively scarify the dense lignified seed coat without damaging the delicate inner embryo.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.13", note: "'Tintiḍīm api karoti vallarīṁ vrīhi-māṣa-tila-cūrṇa-saktubhiḥ pūtimāṁsa-sahitaiś ca...'" },
      { bookId: "summary", ref: "Summary.pdf Section 4", note: "High-impact carrion and continuous turmeric-root fumigation protocol." }
    ]
  },
  {
    id: "kapittha-decoction",
    name: "Kapittha Eight-Root Germination Decoction",
    sanskritName: "कपित्थ-अष्टमूली-कषाय",
    transliteration: "Kapittha-Aṣṭamūlī-Kaṣāya",
    purpose: "Hormonal and bioactive root decoction engineered to stimulate immediate germination in tough Wood Apple seeds.",
    targetPlants: "Kapittha (Limonia acidissima) and allied thick-shelled fruits.",
    ingredients: [
      { item: "Āsphoṭā root (*Calotropis gigantea*)", quantity: "Equal part", note: "Latex enzymes & cardiac glycosides" },
      { item: "Dhātrī root (*Phyllanthus emblica*)", quantity: "Equal part", note: "High ascorbic & organic acids" },
      { item: "Dhava root (*Woodfordia fruticosa*)", quantity: "Equal part", note: "Tannins and bio-stimulants" },
      { item: "Vāsikā root (*Adhatoda vasica*)", quantity: "Equal part", note: "Vasicine alkaloids" },
      { item: "Palāśinī root (*Butea monosperma*)", quantity: "Equal part", note: "Flavonoids & phyto-hormones" },
      { item: "Vetasa root (*Calamus rotang*)", quantity: "Equal part", note: "Cooling astringent" },
      { item: "Sūryavallī root (Wild dog mustard)", quantity: "Equal part", note: "Pungent glucosinolates" },
      { item: "Śyāmā root (*Hemidesmus indicus*)", quantity: "Equal part", note: "Aromatic coumarins" },
      { item: "Fresh cow milk (Kṣīra)", quantity: "Sufficient for boiling", note: "Boiling extraction medium" }
    ],
    traditionalUnits: {
      duration: "100 Tālas (Tālāśatam = ~100 seconds) daily immersion for 30 consecutive days (Māsa)",
      pitMetrics: "Pit dug 1 Hasta (cubit / ~18 inches) wide and 2 Hastas (~36 inches) deep"
    },
    preparation: "The eight medicinal roots are simmered in cow milk to extract their phytochemicals and allowed to cool completely. Kapittha seeds are immersed into this medicated decoction daily for 100 seconds, dried under the sun, and the process is repeated faithfully for 30 consecutive days.",
    duration: "30 days of daily 100-second immersion and sun-drying.",
    application: "Sown in a specially prepared soil pit (1 cubit wide × 2 cubits deep) that has been wetted with milk-water, burned with dry fuel to sterile ash, and smeared with honey and ghee.",
    scientificCommentary: "The combination of eight bioactive root extracts provides an exogenous cocktail of phyto-hormones (auxins, gibberellin-like substances) that systematically wake dormant embryos within heavily sclerified shells.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.14-15", note: "'Kapittha-vallīkaraṇāya mūlāny āsphoṭa-dhātrī-dhava-vāsikānām... kṣīre śṛte cāpy anayā suśīte tālāśataṁ sthāpya kapittha-bījam...'" },
      { bookId: "summary", ref: "Summary.pdf Section 4", note: "Eight-root medicinal decoction with 100-second immersion cycles." }
    ]
  },
  {
    id: "vidanga-wound-paste",
    name: "Vidanga-Mud Tree Surgical Dressing",
    sanskritName: "विडङ्गघृतपङ्कलेप",
    transliteration: "Viḍaṅga-Ghṛta-Paṅka-Lepa",
    purpose: "Surgical antiseptic plaster and protective cambium shield applied following excision of diseased, decayed, or insect-bored tree branches.",
    targetPlants: "All trees suffering from cankers, weeping wounds, pest borers, or frost-bitten limbs.",
    ingredients: [
      { item: "Vidanga seed powder (*Embelia ribes*)", quantity: "Active medicinal agent", note: "Embelin-rich natural antibiotic & antifungal" },
      { item: "Clarified butter (Ghṛta / Ghee)", quantity: "Sufficient to form ointment", note: "Sterile lipid binder and tissue regenerator" },
      { item: "Fine fertile clay / silt (Paṅka)", quantity: "Bulk dressing matrix", note: "Beneficial soil bacilli and physical seal" },
      { item: "Cow milk & water (Kṣīravāri)", quantity: "Spray solution", note: "Foliage tonic and secondary protective wash" }
    ],
    traditionalUnits: {
      application: "Thick plaster over freshly excised cambium cut"
    },
    preparation: "Vidanga powder is ground finely and blended with warmed ghee and clean silt/mud to create a smooth, adhesive therapeutic plaster.",
    duration: "Applied immediately after surgical trimming; reapplied if washed by monsoon rains.",
    application: "First, the diseased wood is cleanly excised using a sharp tool (Śastreṇādau viśodhanam). The plaster is smoothed across the exposed wood. Finally, the entire tree crown is sprayed with a blend of cow milk and clean water.",
    scientificCommentary: "Vidanga contains embelin, a potent benzoquinone with proven broad-spectrum antibacterial and antifungal activity. The mud-ghee matrix seals out moisture and opportunistic spores while keeping the active botanical compound in contact with living plant tissue.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.12", note: "'Cikitsitam athaiteṣāṁ śastreṇādau viśodhanam vidaṅga-ghṛta-paṅkāktān secayet kṣīra-vāriṇā'" },
      { bookId: "summary", ref: "Summary.pdf Section 6", note: "Excising with sharp tools and treating wounds with pre-modern antibiotic Vidanga." }
    ]
  },
  {
    id: "caturdhanya-kashaya",
    name: "Four-Legume Root Rejuvenation Broth",
    sanskritName: "चतुर्धान्यकषाय",
    transliteration: "Catur-Dhānya-Kaṣāya",
    purpose: "Nutritional root stimulant to induce abundant flowering and prevent premature flower and fruit drop in mature trees.",
    targetPlants: "Jackfruit, Mango, Citron, Pomegranate, and barren orchard trees.",
    ingredients: [
      { item: "Horse gram (Kulattha / *Macrotyloma uniflorum*)", quantity: "Equal part", note: "High protein, calcium, and thermogenic stimulant" },
      { item: "Black gram (Māṣa / *Vigna mungo*)", quantity: "Equal part", note: "Phosphorus, potassium, and nitrogenous mucilage" },
      { item: "Green gram (Mudga / *Vigna radiata*)", quantity: "Equal part", note: "Bioavailable amino acids" },
      { item: "Sesame (Tila)", quantity: "Equal part", note: "Essential fatty acids and sulfur" },
      { item: "Barley (Yava)", quantity: "Equal part", note: "Micronutrients and carbohydrates" },
      { item: "Cow milk (Payas)", quantity: "Boiling companion", note: "Lactic enzymes and bio-salts" }
    ],
    traditionalUnits: {
      ratio: "Boiled decoction (Śṛta) cooled to ambient temperature"
    },
    preparation: "The five grains and pulses are simmered gently in water and milk until reduced into a rich medicinal decoction (Kashaya) and cooled completely.",
    duration: "Administered at the onset of flower-bud differentiation.",
    application: "Drenched into deep circular trenches dug around the drip line of mature trees. Also sprayed across foliage when leaves show pallor.",
    scientificCommentary: "Legume seed decoctions release massive concentrations of accessible nitrogen, potassium, and phosphorus directly to mycorrhizal root associations, sparking immediate reproductive flower-bud initiation.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.11", note: "'Phalanāśe kulatthaiś ca māṣair mudgais tilair yavaiḥ śṛta-śīta-payaḥ-sekaḥ phala-puṣpa-samṛddhaye'" },
      { bookId: "kashyapa", ref: "Kāśyapa Vṛkṣāyurveda", note: "Horse gram decoction with green and black gram spray for rejuvenating barren trees." }
    ]
  },
  {
    id: "hailstone-shock",
    name: "Hailstone Cold-Shock Germination",
    sanskritName: "करकजलशीतसंस्कार",
    transliteration: "Karaka-Jala-Śīta-Saṁskāra",
    purpose: "Shock-treatment using melting hailstones (Alipazham) to trigger lightning-fast emergence in dormant seeds.",
    targetPlants: "Shleshmataka, Angola, and hard forest seeds.",
    ingredients: [
      { item: "Melted hailstones (Karaka-jala / Alipazham)", quantity: "Chilled hydration source", note: "Delivers sudden severe cold-shock mimicry" },
      { item: "Angola fruit pulp (*Alangium salviifolium*)", quantity: "Repeated baths", note: "Catalytic phyto-extract" },
      { item: "Powdered buffalo dung (Māhiṣa-gomaya)", quantity: "Hotbed heap", note: "Warm decomposition incubator" }
    ],
    traditionalUnits: {
      cycles: "7 repeated baths dried under shade; incubated under warm dung"
    },
    preparation: "Decorticated seeds are bathed seven times in Ankola pulp and dried in shade. They are placed under a warm heap of dried buffalo dung and drenched with ice-cold water derived from melted hailstones.",
    duration: "Instantaneous sprouting within a day (Ahnā phalakārāṇi).",
    application: "Sown directly in loose, aerated garden basins.",
    scientificCommentary: "The extreme contrast between the thermal warmth of decomposing manure and the rapid chilled shock of melted hailstones mimics sudden seasonal temperature plunges, activating cold-induced gibberellin synthesis and breaking deep embryonic dormancy.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.16-17", note: "'Māhiṣa-gomaya-ghṛṣṭāny asya karīṣe ca tāni nikṣipya karaka-jala-mṛd-yoge nyuptāny ahnā phalakārāṇi'" },
      { bookId: "summary", ref: "Summary.pdf Section 4 & 8", note: "Hailstone cold-shock (Alipazham) as a biological signal to emerge." }
    ]
  }
];
