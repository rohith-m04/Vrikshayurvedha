export const MAP_HIERARCHY = {
  id: "root",
  name: "Vrikshayurveda: The Unified Science of Ancient Plant Life",
  description: "Unified knowledge synthesized from the three foundational classical texts, mapping the complete arboricultural science.",
  textsLayer: [
    {
      id: "book-varahamihira",
      name: "Vrukshaayurveda of Varahamihira",
      source: "Chapter 55, Bṛhat Saṁhitā (c. 505 CE) — Dr. N. Gopalakrishnan (IISH)",
      color: "emerald"
    },
    {
      id: "book-sarngadhara",
      name: "Upavana-Vinoda of Śārṅgadhara",
      source: "Śārṅgadhara-Paddhati (1363 CE) — Prof. S.K. Ramachandra Rao (Kalpatharu)",
      color: "amber"
    },
    {
      id: "book-ouseph",
      name: "Vrikshayurvedam (ഭാരതീയ വൃക്ഷശാസ്ത്രം)",
      source: "Vastu Vidya & Classical Textual Traditions — Dr. P.V. Ouseph",
      color: "teal"
    }
  ],
  domains: [
    {
      id: "hist-context",
      title: "Historical Context & Ethics",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Dr. P.V. Ouseph",
      nodes: [
        { label: "Ancient park concepts", detail: "Public gardens established near reservoirs for human recreation and microclimate cooling." },
        { label: "Emperor Asoka initiatives", detail: "State-mandated roadside shade tree planting for travelers and working cattle." },
        { label: "Modern town planning similarities", detail: "Pre-modern zoning reserving green belts, shaded walks, and public squares." },
        { label: "Prana & Devadaru narrative", detail: "Lord Shiva and Parvati adopting the cedar tree as foster offspring, framing arboriculture as Tapas." }
      ]
    },
    {
      id: "land-planting",
      title: "Land, Soil & Spacing Architecture",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Upavana-Vinoda",
      nodes: [
        { label: "Soil preparation with sesame", detail: "Green manuring with blooming sesame to yield mellow Mrudvee Bhoo." },
        { label: "Optimal spacing distances", detail: "Utthama 20 cubits (~30 ft), Madhyama 16 cubits (~24 ft), Adhama 12 cubits (~18 ft)." },
        { label: "Negative effects of overcrowding", detail: "Peedithaa: lack of solar penetration and root intertwining causing fruit failure." },
        { label: "Root & crown system interference", detail: "Canopy collision starvation analyzed through ancient physiological metrics." }
      ]
    },
    {
      id: "propagation-grafting",
      title: "Propagation, Grafting & Clonal Care",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Upavana-Vinoda",
      nodes: [
        { label: "Seasonal grafting schedules", detail: "Sisira for branchless twigs; Hemantha for sprouted shoots; Varsha for sturdy limbs." },
        { label: "Transgrafting medications", detail: "Antiseptic protective ointment of ghee, ushira, sesame, vidanga, milk, and cow dung." },
        { label: "Protective role of cow dung", detail: "Natural barrier and trichoderma inoculant shielding cambial cuts from rot." },
        { label: "Nitrogen sources for twigs", detail: "Milk proteins providing nitrogen and salts for beneficial microbial growth." }
      ]
    },
    {
      id: "maintenance-irrigation",
      title: "Maintenance & Irrigation Rhythms",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Upavana-Vinoda",
      nodes: [
        { label: "Seasonal watering frequency", detail: "Morning and evening in summer; alternate days in winter; as needed during rains." },
        { label: "Cleaning & worship protocols", detail: "Cultivator purification (bathing, clean robes) before transplanting." },
        { label: "Protection from climatic extremes", detail: "Mitigating severe frost, wind gusts, and burning solar heat." }
      ]
    },
    {
      id: "plant-selection",
      title: "Plant Selection & Habitats",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Kashyapa / Ouseph",
      nodes: [
        { label: "Aesthetic & medicinal trees", detail: "Neem (Arishta), Asoka, Punnaga, Sirisha, Priyangu creeper." },
        { label: "Fruit & spice yielding plants", detail: "Jackfruit, Citron, Pomegranate, Grape, Dalbergia, Wild Cinnamon." },
        { label: "Species for low-lying lands", detail: "Arjuna, Citron, Vinifera grape, Pomegranate, Pongamia glabra." },
        { label: "Kashyapa additions", detail: "Champaka, Udumbara cluster fig, and Parijata night jasmine." }
      ]
    },
    {
      id: "diseases-treatment",
      title: "Diseases & Surgical Treatment",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Upavana-Vinoda",
      nodes: [
        { label: "Environmental disease causes", detail: "Cold air disturbances, extreme sunshine scorch, physical wounds." },
        { label: "Recognition of symptoms", detail: "Paandupathra (pallor), foliar scaliness, withered branches, bleeding sores." },
        { label: "Vidanga and mud pastes", detail: "Embelia ribes antibiotic mud-ghee plaster to seal open lesions." },
        { label: "Milk and ghee sprays", detail: "Canopy lipid spray to deter spore spread and rebuild foliar vitality." },
        { label: "Excising diseased portions", detail: "Surgical debridement of infected cambium using sharp instruments." }
      ]
    },
    {
      id: "fertilizers-growth",
      title: "Fertilizers & Growth Tonics",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Upavana-Vinoda",
      nodes: [
        { label: "Fermented broth mixtures", detail: "Kunapajala: goat/sheep voidings, sesame, barley, meat, and water fermented 7 nights." },
        { label: "Organic manure enrichment", detail: "Pulse kashayas (horse gram, black gram, green gram) in milk for mature trees." },
        { label: "Micronutrients from ash", detail: "Wood ash furnishing soluble potassium and minerals in sterile planting pits." }
      ]
    },
    {
      id: "seed-technology",
      title: "Seed Technology & Priming",
      sourceBranch: "Vrukshaayurveda of Varahamihira",
      nodes: [
        { label: "Milk soaking and coating", detail: "10-day recurring immersion in milk and fresh cow dung smearing." },
        { label: "Fumigation techniques", detail: "Smoking seeds with burning deer/boar fat or turmeric root smoke." },
        { label: "Shock treatments for germination", detail: "Ankola baths and melted hailstone (Alipazham) cold shock." },
        { label: "Kapittha germination principles", detail: "Eight-root milk decoction with 100-second daily immersions over 30 days." }
      ]
    },
    {
      id: "astro-botany",
      title: "Astro-Botany & Bio-Indicators",
      sourceBranch: "Vrukshaayurveda of Varahamihira / Dr. P.V. Ouseph",
      nodes: [
        { label: "Favourable Nakshatras", detail: "Dhruvas (Uttara Phalguni, etc.) and mild asterisms (Anuradha, Chitra, Revati)." },
        { label: "Lunar influence on planting", detail: "Aligning root and seed vitality with waxing gravitational rhythms." },
        { label: "10-Month floral lead times", detail: "Shala blooming forecasting Navara rice; Ashoka forecasting red rice." },
        { label: "The 27 Nakshatra tree system", detail: "Ashvati for Ashwini, Amalaka for Bharani, Udumbara for Krittika." }
      ]
    },
    {
      id: "vastu-structural",
      title: "Vastu Shastra & Timber Physics",
      sourceBranch: "Vrikshayurvedam by Dr. P.V. Ouseph",
      nodes: [
        { label: "Directional homestead shields", detail: "Tamarind in the South for UV absorption; Ilanji & Al in East; Mango in North." },
        { label: "The Nalpamaram quartet", detail: "Four milky fig trees generating continuous oxygen (Pranan) reserves." },
        { label: "Timber density classification", detail: "Sarvasara (Teak/Rosewood), Antarsara (Jackfruit), Bahirsara (Palms), Nissara." },
        { label: "The Tamarind structural paradox", detail: "Physically dense yet excluded as Nissara from home construction due to excess heat." },
        { label: "Dantakashta dental science", detail: "Vaikankata for divine brilliance, Banyan for prosperity, Neem for victory." }
      ]
    }
  ]
};
