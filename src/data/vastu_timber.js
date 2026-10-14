export const VASTU_TIMBER_DATA = {
  timberClassifications: [
    {
      class: "Sarvasara (Total Density / Core Hardwood)",
      sanskrit: "सर्वसार",
      description: "Timber possessing dense, rot-resistant, uniform heartwood throughout the trunk cross-section. The pinnacle of structural longevity.",
      exemplars: ["Teak (Sāka / Tectona grandis)", "Rosewood (Śiṁśapā / Dalbergia latifolia)", "Sal (Śāla / Shorea robusta)"],
      suitability: "Primary structural columns, main ceiling girders, sanctum altars, and monumental civic doorways.",
      prohibitions: "Trees struck by lightning, damaged by wild elephants, withered by forest fire, growing in burial grounds/cemeteries, or home to nesting birds of prey must never be felled for building construction."
    },
    {
      class: "Antarsara (Interior Heartwood Density)",
      sanskrit: "अन्तस्सार",
      description: "Timber wherein the deepest core/heartwood is extremely dense, durable, and aromatic, surrounded by softer sapwood that is planed away.",
      exemplars: ["Jackfruit (Panasa / Artocarpus heterophyllus)", "Red Sandalwood (Rakta-candana / Pterocarpus santalinus)"],
      suitability: "Residential door frames, temple thresholds, heirloom furniture, sacred idol carvings, and classical musical instruments (Veena, Mridangam)."
    },
    {
      class: "Bahirsara (Exterior Peripheral Density)",
      sanskrit: "बहिस्सार",
      description: "Botanical structures wherein structural density is concentrated entirely in the outer fibrous sheath, with an inner vascular or spongy core.",
      exemplars: ["Palms (Tāla / Borassus flabellifer)", "Areca Palm (Pūga / Areca catechu)", "Coconut Palm (Nārikela / Cocos nucifera)", "Bamboo (Veṇu / Bambusa bambos)"],
      suitability: "Rafters, roof battens, perimeter palisades, scaffolding, and thatched ceiling lattices."
    },
    {
      class: "Nissara (Low Density or Inauspicious for Housing)",
      sanskrit: "निस्सार",
      description: "Timber lacking durable structural integrity or possessing physiological energetic properties that disrupt domestic microclimates.",
      exemplars: ["Tamarind (Puli / Tintiḍīka)", "Murukku / Coral Tree (Erythrina indica)", "Silk Cotton (Śālmali / Bombax ceiba)"],
      theTamarindParadox: {
        title: "The Tamarind (Puli) Structural Paradox",
        explanation: "Botanically and mechanically, Tamarind wood is extremely hard and heavy (Sarvasara in physical density). However, in Vrikshayurveda and Vastu Shastra, it is strictly classified as **Nissara** and prohibited from being used as house-building timber. The rationale is its intense inherent 'heat' (Ushna-virya) and corrosive acidic nature, which traditional science states disturbs the peaceful biological and psychological equilibrium of human living quarters."
      }
    }
  ],
  directionalHomesteadLayout: {
    title: "Directional Homestead Planting & Microclimate Optimization",
    overview: "Vrikshayurveda coordinates with Vastu Vidya to arrange specific trees around domestic dwellings according to solar trajectory, prevailing winds, and respiratory Prana output.",
    quadrants: [
      {
        direction: "East (Pūrva)",
        mandatedSpecies: ["Al / Peepal (Aśvattha / Ficus religiosa)", "Ilanji (Bakula / Mimusops elengi)", "Banyan (Vaṭa / Ficus benghalensis)"],
        microclimaticFunction: "Welcomes the auspicious early morning sunrise. Ilanji blossoms perfume morning air currents, while the sacred figs act as primary daybreak oxygen (Pranan) generators."
      },
      {
        direction: "South (Dakṣiṇa)",
        mandatedSpecies: ["Tamarind (Puli / Tintiḍīka / Tamarindus indica)"],
        microclimaticFunction: "Mandatory placement in the South. During the sun's southern transit (Dakshinayana), the immense, dense, micro-leaf canopy of the Tamarind acts as a solar radiation shield, absorbing intense ultraviolet rays and guarding the dwelling from solar thermal scorch."
      },
      {
        direction: "West (Paścima)",
        mandatedSpecies: ["Cluster Fig (Udumbara / Ficus racemosa)", "Bilva (Aegle marmelos)", "Sirisha (Albizia lebbeck)"],
        microclimaticFunction: "Buffers late-afternoon solar heat; Udumbara cools the perimeter through high evapotranspiration."
      },
      {
        direction: "North (Uttara)",
        mandatedSpecies: ["Nagmaram / Ironwood (Nāgakeśara / Mesua ferrea)", "Mango (Āmra / Mangifera indica)"],
        microclimaticFunction: "Forms a dense green windbreak protecting against cold northerly winter winds while allowing gentle, refreshing ambient air into northern living rooms."
      }
    ],
    theNalpamaram: {
      title: "The Nalpamaram (The Four Milky Trees)",
      sanskrit: "नाल्पामरम् / क्षीरिवृक्ष-चतुष्टय",
      species: [
        { name: "Arayal / Peepal", botanical: "Ficus religiosa", role: "Primary atmospheric oxygen producer & spiritual anchor" },
        { name: "Peral / Banyan", botanical: "Ficus benghalensis", role: "Massive microclimate canopy & moisture capacitor" },
        { name: "Atthi / Cluster Fig", botanical: "Ficus racemosa", role: "Riparian cooling & water indicator" },
        { name: "Ithi / Kallal", botanical: "Ficus microcarpa", role: "Dense foliage air filter & astringent bark medicine" }
      ],
      ecologicalSignificance: "Prioritized throughout Kerala and classical South India as the paramount biological oxygen generation array (Pranan) and universal water-purifying compound for domestic tanks."
    }
  },
  dantakashtaScience: {
    title: "Dantakashta: The Ethnobotanical Science of Dental Sticks",
    sanskrit: "दन्तकाष्ठ-विधान",
    overview: "In classical daily life, specific botanical twigs were selected for morning oral hygiene to stimulate digestion, strengthen gums, disinfect saliva, and invoke distinct spiritual and psychological energies.",
    hierarchy: [
      {
        tree: "Vaikankata (Governor's Plum / *Flacourtia indica*)",
        spiritualMerit: "Brahmatejas (Divine Brilliance & Spiritual Radiance)",
        context: "The highest veneration in the dental stick hierarchy; sharpens intellectual perception and vitality."
      },
      {
        tree: "Banyan (Nyagrodha / *Ficus benghalensis*)",
        spiritualMerit: "Aishwarya (Prosperity, Worldly Abundance & Family Stability)",
        context: "Aerial root and twig astringency tightens periodontal tissues and builds firm resolve."
      },
      {
        tree: "Neem (Arishta / Nimba / *Azadirachta indica*)",
        spiritualMerit: "Shatru-Vijaya (Victory Over Enemies, Adversity & Parasites)",
        context: "Supreme antimicrobial bitter alkaloids eradicate oral pathogens and fortify systemic immunity."
      },
      {
        tree: "Khadira (Black Catechu / *Senegalia catechu*)",
        spiritualMerit: "Mukha-Daurgandhya-Nāśa (Complete Eradication of Breath Impurities)",
        context: "Intense tannins stop bleeding gums and strengthen loose teeth."
      }
    ]
  },
  sources: [
    { bookId: "ouseph", ref: "Vrikshayurvedam (ഭാരതീയ വൃക്ഷശാസ്ത്രം) Sections 3, 4, 5", note: "Directional homestead layout, Nalpamaram, timber physics, and Dantakashta science." },
    { bookId: "summary", ref: "Summary.pdf Sections 3 & 7", note: "Ethnobotany, Vastu timber classifications, and solar shielding." }
  ]
};
