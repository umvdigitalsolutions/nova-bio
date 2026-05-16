export const productCategories = [
  {
    slug: "ortho",
    title: "Orthopaedic Segment",
    shortTitle: "Ortho",
    intro:
      "Pharmaceutical formulations focused on bone, joint, pain, inflammation, and musculoskeletal care.",
    description:
      "Our orthopaedic range supports everyday ortho prescriptions with formulations used for pain relief, inflammation management, calcium support, and recovery-focused care.",
    image: "/ortho.png",
    products: [
      {
        name: "Calcium + Vitamin D3 Tablets",
        description:
          "Bone-health support formulation commonly used for calcium and vitamin D supplementation.",
      },
      {
        name: "Analgesic Anti-inflammatory Tablets",
        description:
          "Pain and inflammation support formulation for musculoskeletal and joint-care prescriptions.",
      },
      {
        name: "Muscle Relaxant Tablets",
        description:
          "Supportive formulation used in muscle spasm and orthopaedic discomfort management.",
      },
      {
        name: "Joint Support Capsules",
        description:
          "Supplement-focused product for mobility, cartilage support, and long-term joint wellness.",
      },
    ],
  },
  {
    slug: "gynac",
    title: "Gynaecology Segment",
    shortTitle: "Gynac",
    intro:
      "Formulations supporting women's healthcare and gynaecological treatment requirements.",
    description:
      "Our gynac portfolio focuses on women's health needs across nutritional support, infection care, menstrual wellness, and pregnancy-support categories.",
    image: "/gynac.png",
    products: [
      {
        name: "Iron + Folic Acid Tablets",
        description:
          "Nutritional support formulation commonly used in women's health and pregnancy-care programs.",
      },
      {
        name: "Calcium + Vitamin D3 Sachets",
        description:
          "Bone and wellness support product for women requiring calcium and vitamin D supplementation.",
      },
      {
        name: "Gynaecological Antifungal Tablets",
        description:
          "Therapeutic formulation used for selected gynaecological infection-care requirements.",
      },
      {
        name: "Pregnancy Support Multivitamins",
        description:
          "Multinutrient formulation designed for wellness support during maternal-care journeys.",
      },
    ],
  },
  {
    slug: "general-medicines",
    title: "General Medicine Segment",
    shortTitle: "General Medicines",
    intro:
      "Commonly prescribed pharmaceutical formulations for routine healthcare and general therapeutic needs.",
    description:
      "Our general medicine range covers essential everyday prescription categories for primary care, clinics, pharmacies, and distributor supply programs.",
    image: "/general.png",
    products: [
      {
        name: "Paracetamol Tablets",
        description:
          "General fever and pain-relief formulation used in routine primary-care prescriptions.",
      },
      {
        name: "Antacid Gel",
        description:
          "Digestive support formulation for acidity, gastric discomfort, and routine gastrointestinal care.",
      },
      {
        name: "Multivitamin Capsules",
        description:
          "Daily wellness formulation supporting nutrition, energy, and general health requirements.",
      },
      {
        name: "Cough Syrup",
        description:
          "General respiratory-care formulation for cough and throat-irritation support.",
      },
    ],
  },
];

export function getProductCategory(slug) {
  return productCategories.find((category) => category.slug === slug);
}
