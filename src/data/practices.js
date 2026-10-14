export const PRACTICES_DATA = [
  {
    id: "sesame-green-manuring",
    title: "Biological Soil Conditioning via Sesame Green Manuring",
    sanskritName: "मृद्वीभू-करण / तिल-वापन",
    transliteration: "Mṛdvī-Bhū-Karaṇa / Tila-Vāpana",
    category: "Site Preparation & Edaphology",
    summary: "The foundational prerequisite of all ancient arboriculture. Hard, unyielding laterite and depleted soils are sown with sesame seeds, allowed to bloom, and then plowed directly back into the earth.",
    rationale: "Sesame foliage and succulent stems possess exceptionally high natural mucilage and organic matter that act as a biological binder, loosening compacted clays while preventing leaching in sandy terrains, transforming barren earth into soft, mellow, moisture-retaining 'Mrudvee Bhoo'.",
    steps: [
      { stepNumber: 1, title: "Initial Soil Tilling", instruction: "Break the crust of the proposed plantation or garden site to an initial depth of one span (Vitasti) during early seasonal humidity." },
      { stepNumber: 2, title: "Dense Sesame Sowing", instruction: "Broadcast high-purity sesame (Tila) seeds densely across the entire plot to establish complete ground coverage." },
      { stepNumber: 3, title: "Cultivation to Peak Bloom", instruction: "Allow the sesame crop to germinate, grow rapidly, and reach full flowering (Puṣpitān). Do not allow seed pods to mature and lignify." },
      { stepNumber: 4, title: "Incorporation into Earth", instruction: "Plow the entire blooming crop directly into the soil while green and succulent, blending the vegetative biomass with the soil matrix." },
      { stepNumber: 5, title: "Decomposition & Maturation", instruction: "Allow 14-21 days of warm microbial breakdown before digging tree pits or transplanting saplings into the conditioned mellow soil." }
    ],
    scientificAlignment: "Mirroring modern green manuring, this practice enriches soil organic carbon (SOC), fosters mycorrhizal networks, enhances cation-exchange capacity, and maximizes water-holding capacity.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.2", note: "'Mṛdvī bhūḥ sarva-vṛkṣāṇāṁ hitā tasyāṁ tilān vapet puṣpitāṁs tāṁś ca gṛhṇīyāt karmaitat prathamaṁ bhuvi'" },
      { bookId: "summary", ref: "Summary.pdf Section 2", note: "Soil as fundamental womb; high mucilage content adds critical structural binder." },
      { bookId: "infographic", ref: "Infographic: Biological Soil Conditioning", note: "Soften hard soil by incorporating flowered sesame back into the earth." }
    ]
  },
  {
    id: "spacing-metrics-rule",
    title: "Botanical Architecture & Spacing Metrics (Peedithaa Prevention)",
    sanskritName: "वृक्षस्थान-मान / पीडिता-वारण",
    transliteration: "Vṛkṣa-Sthāna-Māna / Pīḍitā-Vāraṇa",
    category: "Planting Architecture",
    summary: "Strict geometric spatial standards designed to avoid 'Peedithaa' — the mutual torture and physical competition between trees when root and canopy systems collide.",
    rationale: "When trees are planted too closely, mutual shading deprives canopies of solar energy while root intertwining results in chronic nutrient depletion and fruit-set failure.",
    standards: [
      { level: "Utthama (Best / Optimal)", distance: "20 Cubits (Viṁśati-Hasta)", metric: "~30 feet / ~14.5 meters", description: "Mandatory for large timber trees, broad orchard canopies (Mango, Jackfruit), and keystone sacred figs." },
      { level: "Madhyama (Medium / Standard)", distance: "16 Cubits (Ṣoḍaśāntara)", metric: "~24 feet / ~11.5 meters", description: "Standard distance for intermediate fruit trees (Citron, Pomegranate, Bilva, Asoka)." },
      { level: "Adhama (Lowest / Minimum)", distance: "12 Cubits (Dvādaśāvara)", metric: "~18 feet / ~8.5 meters", description: "Absolute minimum permissible boundary; any spacing below 12 cubits causes catastrophic reduction in vigor and crop yield." }
    ],
    steps: [
      { stepNumber: 1, title: "Spatial Survey", instruction: "Measure plantation grid in cubits (Hasta = distance from elbow to fingertip, ~18 inches / 45 cm)." },
      { stepNumber: 2, title: "Crown Projection Verification", instruction: "Ensure that at full maturity, the canopies of neighboring specimens will not touch or cast perpetual shade upon one another." },
      { stepNumber: 3, title: "Subterranean Trenching", instruction: "Maintain clear root drainage buffer zones between heavy-feeding canopy species." }
    ],
    scientificAlignment: "Precisely conforms to modern silvicultural canopy-spread indices (9 to 12 meters for large broadleaf trees), optimizing photosynthetically active radiation (PAR) capture and root rhizosphere segregation.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.9-10", note: "'Uttamaṁ viṁśatir hastā madhyamaṁ ṣoḍaśāntaram sthānāt sthānāntaraṁ kāryaṁ vṛkṣāṇāṁ dvādaśāvaram... Abhyāsa-jātās tāravaḥ saṁspṛśantaḥ parasparam miśrair mūlaiś ca na phalaṁ samyag yacchanti pīḍitāḥ'" },
      { bookId: "summary", ref: "Summary.pdf Section 3", note: "The cubit-based hierarchy preventing mutual torture." }
    ]
  },
  {
    id: "seasonal-grafting-schedule",
    title: "Seasonal Grafting Chronology & Clonal Pre-Treatment",
    sanskritName: "ऋतु-कलमविधि / संक्रामण",
    transliteration: "Ṛtu-Kalama-Vidhi / Saṅkrāmaṇa",
    category: "Propagation & Grafting",
    summary: "The precise meteorological calendar governing vegetative propagation, clonal grafting, and transgrafting based on ambient temperature and seasonal moisture.",
    rationale: "Plant physiological activity, sap flow, and cambial cell division fluctuate across the Sanskrit seasonal calendar. Matching twig maturity to specific seasons ensures unbroken union between stock and scion.",
    schedule: [
      {
        season: "Sisira (Late Winter / Cold Season)",
        sanskrit: "अजातशाखान् शिशिरे (Ajāta-śākhān śiśire)",
        twigType: "Smooth clones devoid of branches / dormant scion buds",
        rationale: "Sap is resting; dormant scions prevent premature desiccation before vascular connection develops."
      },
      {
        season: "Hemantha (Early Winter / Autumn)",
        sanskrit: "जातशाखान् हिमागमे (Jāta-śākhān himāgame)",
        twigType: "Clones with newly emerged, sprouting side-shoots",
        rationale: "Moderate cooling allows tender shoots to stabilize without scorch from intense heat."
      },
      {
        season: "Varsha (Monsoon / Rainy Season)",
        sanskrit: "वर्षासु सुप्रतिष्ठितान् (Varṣāsu supratiṣṭhitān)",
        twigType: "Well-developed, sturdy, lignified branches",
        rationale: "High atmospheric humidity supports rapid cambial division and leaf respiration on mature limbs."
      }
    ],
    clonalMedication: "Before transgrafting or transplanting, scions must be smeared from root to stem with an antiseptic and nutritive paste composed of: Clarified butter (Ghṛta), Ramacham / Ushira (*Chrysopogon zizanioides*), Sesame (Tila), Honey (Kṣaudra), Vidanga (*Embelia ribes*), Cow milk (Kṣīra), and fresh Cow dung (Gomaya).",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.6-7", note: "'Ajāta-śākhān śiśire jāta-śākhān himāgame varṣāsu ca susaṁvṛddhān kṛtvā śākhāḥ pralepayet... Ghrutośīratilakṣaudravidaṅgakṣīragomayaiḥ...'" },
      { bookId: "summary", ref: "Summary.pdf Section 4", note: "Vegetative propagation strictly timed to the Sanskrit calendar." }
    ]
  },
  {
    id: "pit-sterilization-ash-conditioning",
    title: "Thermal Pit Sterilization & Ash Soil Conditioning",
    sanskritName: "खात-दाह / भस्म-संस्कार",
    transliteration: "Khāta-Dāha / Bhasma-Saṁskāra",
    category: "Site Preparation & Phytopathology",
    summary: "Advanced soil sterilization and mineral priming protocol utilizing controlled firing and honey-ghee-ash wall plastering.",
    rationale: "Thermal combustion eradicates soil-borne fungal spores, insect nematodes, and weed propagules, while the resultant wood ashes supply soluble potassium, calcium, and essential trace minerals.",
    steps: [
      { stepNumber: 1, title: "Excavation", instruction: "Dig a pit exactly 1 Hasta (cubit / ~18 inches) wide and 2 Hastas (~36 inches) deep." },
      { stepNumber: 2, title: "Moisture Conditioning", instruction: "Fill the excavated pit with a blend of cow milk and water and allow the soil walls to thoroughly soak and air-dry." },
      { stepNumber: 3, title: "Thermal Combustion", instruction: "Pack the dry pit with dry brushwood, straw, and medicinal twigs; ignite and burn thoroughly to bake the subterranean pit interior." },
      { stepNumber: 4, title: "Protective Plastering", instruction: "Smear the hot interior walls of the pit with a mixture of raw honey, ghee, and fine sifted wood ashes (Bhasma)." },
      { stepNumber: 5, title: "Stratified Soil Refill", instruction: "Fill pit in 4-angula (~3 inch) alternating layers of rich earth and pulses (Black gram, Sesame, Barley) sprinkled with cold fish-meat infusion until completely level." }
    ],
    scientificAlignment: "Combines pre-modern biochar creation, thermal pathogen eradication, and localized biological nitrogen enrichment.",
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.15-16", note: "'Hastāyatam tad-dviguṇaṁ gabhīraṁ khātvāvaṭaṁ prokta-jalāvapurṇam śuṣkaṁ pradagdhaṁ madhu-sarpiṣā tat pralepayed bhasma-samanvitena...'" }
    ]
  },
  {
    id: "seasonal-irrigation-rhythms",
    title: "Seasonal Irrigation Rhythms (Nishecana-Vidhi)",
    sanskritName: "ऋतु-सेचनविधि",
    transliteration: "Ṛtu-Secana-Vidhi",
    category: "Water Management & Maintenance",
    summary: "Systematic watering frequency established according to ambient atmospheric evapotranspiration across the three primary Indian seasons.",
    rationale: "Excessive watering in winter breeds root rot and fungal disease, while inadequate hydration during summer desiccation causes vascular collapse.",
    schedule: [
      { season: "Gharma (Summer / Hot Season)", frequency: "Twice daily: early morning (Prātaḥ) and late evening (Sāyam)", note: "Avoids midday sun to prevent root scalding and evaporative water loss." },
      { season: "Seetha (Winter / Cold Season)", frequency: "Alternate days (Dināntare)", note: "Maintains optimal root turgor without promoting cold waterlogging or root chill." },
      { season: "Varsha (Monsoon / Rainy Season)", frequency: "Only whenever the topsoil visibly dries out (Bhuvaḥ śoṣe)", note: "Prevents root asphyxiation; relies on seasonal precipitation." }
    ],
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.8", note: "'Sāyaṁ prātaś ca gharmānte śīta-kāle dināntare varṣāsu ca bhuvaḥ śoṣe secitavyā ropitā drumāḥ'" }
    ]
  }
];
