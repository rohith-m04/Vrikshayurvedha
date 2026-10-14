export const PLANT_HEALTH_DATA = [
  {
    id: "dosha-phytopathology",
    name: "Tridosha Diagnostic Framework for Botanical Life",
    sanskritName: "पादप-दोष-विज्ञान",
    transliteration: "Pādapa-Doṣa-Vijñāna",
    summary: "The foundational diagnostic architecture of Vrikshayurveda, directly adapting the classical Charaka and Sushruta human Tridosha system (Vata, Pitta, Kapha) to identify internal tree metabolic imbalances.",
    causes: "Triggered by external seasonal shocks: intense cold winds, unseasonal frost, extreme solar scorch, prolonged water stagnation, or mechanical trauma.",
    doshaManifestations: [
      {
        dosha: "Vata Disorder (Vāta-Roga)",
        symptoms: "Stunted growth, twisted dry trunk, hard knotty galls, premature twig brittleness, dry cracked bark, tasteless or undersized fruit.",
        treatment: "Drenching with warm fatty decoctions, Kunapajala, milk infusions, and smoking roots with sweet resins."
      },
      {
        dosha: "Pitta Disorder (Pitta-Roga)",
        symptoms: "Paandupathra (chlorosis / yellowing of foliage), premature leaf drop, scorched leaf tips, early blossom decay, unripened fruit drop.",
        treatment: "Cooling irrigation with cold milk, water infused with licorice (Yashtimadhu), vetiver (Ushira), and green gram kashaya."
      },
      {
        dosha: "Kapha Disorder (Kapha-Roga)",
        symptoms: "Slimy weeping sores (Rasasruti), fungal growths, excessive mucous sap exudation, delayed flowering, pale spongy stems.",
        treatment: "Surgical clearing of lesions, drying with bitter-astringent pastes of Vidanga, wood ash, and mustard meal; withholding water."
      }
    ],
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.11", note: "Diagnoses disease via cold air disturbances, solar heat, pallor, and bleeding sap." },
      { bookId: "sarngadhara", ref: "Upavana-Vinoda (Taru-cikitsā)", note: "Explicit Tridosha chapter with specialized formulas for Vata, Pitta, and Kapha tree ailments." },
      { bookId: "summary", ref: "Summary.pdf Section 6", note: "Phytopathology diagnostics mapped directly to human Dosha system." }
    ]
  },
  {
    id: "paandupathra-chlorosis",
    name: "Paandupathra (Foliar Chlorosis & Branch Wilting)",
    sanskritName: "पाण्डुपत्र-रोग / शाखाशोष",
    transliteration: "Pāṇḍu-Patra-Roga / Śākhā-Śoṣa",
    symptom: "Foliage turns pale yellow-white (chlorosis), leaf scaliness develops, shoot growth completely halts, branches wither from the tips, and trunk exudes weeping sap.",
    causes: "Severe climatic fluctuations, sudden frost or cold wind disturbances (Śīta-vāta), combined with intense dry sunshine (Ātapa) and root-zone nutrient starvation.",
    diagnosisPath: "Symptom: Foliar pallor & weeping sap → Cause: Environmental cold/heat stress & vascular constriction → Treatment: Surgical excision of dead wood followed by antiseptic plaster and systemic milk drench.",
    treatmentSteps: [
      { step: 1, title: "Surgical Debridement", action: "Carefully inspect the tree to delineate healthy live cambium from decayed wood. Excise diseased portions using a sharp sanitized bronze or iron tool (Śastreṇādau viśodhanam)." },
      { step: 2, title: "Wound Plastering", action: "Thoroughly smear the exposed cut with an adhesive antiseptic paste of powdered Vidanga (*Embelia ribes*), clarified butter (Ghee), and fine clean river silt/mud (Paṅka)." },
      { step: 3, title: "Foliar & Crown Spray", action: "Spray the whole tree foliage with a blend of fresh cow milk and pure water to rehydrate stomatal tissues and create a protective fat barrier." },
      { step: 4, title: "Root Rejuvenation", action: "Apply a cooled decoction of boiled horse gram, black gram, green gram, sesame, and barley in milk into the circular drip line trench." }
    ],
    ingredientsUsed: ["Vidanga", "Clarified Butter (Ghee)", "River Silt/Mud", "Cow Milk", "Horse Gram", "Black Gram", "Green Gram", "Sesame", "Barley"],
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.11-12", note: "'Śīta-vātātapai rogo jāyate pāṇḍu-patratā avṛddhiś ca pravālānāṁ śākhā-śoṣo rasa-srutiḥ... Cikitsitam athaiteṣāṁ śastreṇādau viśodhanam...'" }
    ]
  },
  {
    id: "premature-fruit-drop",
    name: "Phalanaasha (Premature Flower & Fruit Drop)",
    sanskritName: "फलनाश-निवारण",
    transliteration: "Phala-Nāśa-Nivāraṇa",
    symptom: "Abundant flowering initiates but blossoms wither prematurely without fruit-set, or developing fruits drop off before reaching maturity.",
    causes: "Subterranean nutritional exhaustion, microbial root rot, or severe imbalance between root uptake and reproductive demand.",
    diagnosisPath: "Symptom: Early blossom and fruit abortion → Cause: Root-zone metabolic failure → Treatment: Fermented Kunapa broth and five-pulse milk decoction applied at root drip line.",
    treatmentSteps: [
      { step: 1, title: "Root Trench Aeration", action: "Gently loosen top 4-6 inches of soil in a circle around the canopy drip line, avoiding damage to main lateral roots." },
      { step: 2, title: "Cold Decoction Drenching", action: "Prepare a boiled decoction of Kulattha (horse gram), Masha (black gram), Mudga (green gram), Tila (sesame), and Yava (barley) in cow milk; cool and drench thoroughly over the loosened roots." },
      { step: 3, title: "Kunapajala Application", action: "Inoculate the root zone with 7-night fermented Kunapajala liquid manure to stimulate immediate secondary mycorrhizal absorption." }
    ],
    ingredientsUsed: ["Horse Gram", "Black Gram", "Green Gram", "Sesame", "Barley", "Cow Milk", "Kunapajala"],
    sources: [
      { bookId: "varahamihira", ref: "Bṛhat Saṁhitā 55.11", note: "'Phalanāśe kulatthaiś ca māṣair mudgais tilair yavaiḥ śṛta-śīta-payaḥ-sekaḥ phala-puṣpa-samṛddhaye'" },
      { bookId: "kashyapa", ref: "Kāśyapa Vṛkṣāyurveda", note: "Rejuvenation through pulse decoction and dilute milk wash." }
    ]
  }
];
