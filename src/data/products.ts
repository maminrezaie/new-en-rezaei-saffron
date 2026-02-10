export interface Product {
  name: string;
  shortDescription: string;
  description: string;
  weight: string;
  price: string | null;
  images: string[];
}

export interface ProductSection {
  id: string;
  title: string;
  products: Product[];
}

export const productSections: ProductSection[] = [
  {
    id: "negin",
    title: "Negin Saffron",
    products: [
      {
        name: "Negin Saffron",
        shortDescription: "Grown in Gonabad. Harvested November 2024, fresh. Traditionally dried. 4.6g per pack.",
        description: "Premium Negin saffron from Gonabad — the finest grade of Iranian saffron with thick, fully red stigmas and no yellow parts. Rich in antioxidants, it supports immune health, mood improvement, and cardiovascular wellness. Exceptional coloring power, strong aroma, and authentic flavor make it ideal for luxury cuisine, desserts, beverages, and traditional medicine.",
        weight: "4.6g",
        price: "$9.29",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/negin1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Negin1-2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Negin1-3.png",
        ],
      },
    ],
  },
  {
    id: "bunch",
    title: "Bunch Saffron",
    products: [
      {
        name: "Bunch Saffron (Dokhtarpich)",
        shortDescription: "Grown in Gonabad. Harvested November 2024, fresh. Traditionally dried. 4.6g per pack.",
        description: "Complete saffron threads (stigma + style) in their natural harvested form. Bunch saffron retains its full flower structure, giving it a stronger aroma, more natural flavor, and longer shelf life compared to cut varieties. Traditionally dried with no additives, artificial coloring, or essences. Ideal for home use, herbal remedies, and long-term storage.",
        weight: "4.6g",
        price: "$6.07",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Daste1bgF.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Dasteh22-1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Daste2F.png",
        ],
      },
    ],
  },
  {
    id: "root",
    title: "Saffron Root",
    products: [
      {
        name: "White Saffron Root",
        shortDescription: "One mesqal (4.6g) of white saffron root. Boosts immunity, appetite, and adds flavor to food and drinks.",
        description: "Fresh saffron root from the current harvest. Strengthens the immune system, boosts appetite and energy, and adds a delicate saffron flavor and aroma to food and beverages. A natural and affordable way to enjoy saffron benefits.",
        weight: "4.6g",
        price: null,
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2025/12/sefid3.png",
        ],
      },
      {
        name: "Saffron Root",
        shortDescription: "Grown in Gonabad, Khorasan. Harvested November 2024. Traditionally dried. 2.3g per pack.",
        description: "This product has an aroma and flavor very close to premium saffron and is rich in beneficial antioxidant compounds. An economical and practical choice for use in various dishes, herbal teas, and herbal formulations. Completely natural with no chemical additives. Great for calming herbal tea, cooking rice and stews, and combining with honey for immune support.",
        weight: "2.3g",
        price: "$1.07",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Sefid1Final.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Sefid2Final.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Sefid4.png",
        ],
      },
    ],
  },
  {
    id: "gift",
    title: "Gift Saffron",
    products: [
      {
        name: "Gift Saffron — Wooden Box",
        shortDescription: "4.6g Negin saffron in a Khatam container inside a wooden box. Export-quality, bold red threads.",
        description: "Premium Negin saffron in a handcrafted Khatam container placed inside an elegant wooden box. Export-quality with bold, fully red threads. The fine wooden packaging with traditional Iranian Khatam art makes it a flagship of Iranian saffron culture and authenticity — ideal as a luxury gift.",
        weight: "4.6g",
        price: "$8.93",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/final-wooden1-UltraPic.jpeg",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/finalwooden22-1.jpg",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/wood2jpg.jpg",
        ],
      },
      {
        name: "Gift Saffron — Round Tin",
        shortDescription: "Grown in Gonabad, Khorasan. Harvested November 2024. Traditionally dried. 4.6g Negin saffron.",
        description: "Premium Negin saffron — the highest quality Iranian saffron with thick, intact, fully red stigmas. Exceptional coloring power, strong lasting aroma, and export-grade appearance. Packed without branding for resale. Sourced from the finest farms of Gonabad and Qaen, renowned worldwide for superior saffron quality.",
        weight: "4.6g",
        price: "$7.14",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Round1-F.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/roundNegin2-F.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2025/12/zarfnegin.png",
        ],
      },
      {
        name: "Gift Saffron — Velvet Box",
        shortDescription: "One mesqal (4.608g) Negin saffron. Khatam container in a red velvet box. No branding, resale-ready.",
        description: "Premium Qaen saffron: the brilliance of red gold in a velvet casing. The finest hand-picked stigmas presented in a luxurious red velvet box with a Khatam-decorated tin inside. Export-quality saffron with high coloring power. The velvet box with gold-tone fittings makes it an ideal choice for souvenirs and formal gifts. The inner metal container protects against moisture and light, ensuring lasting aroma.",
        weight: "4.608g",
        price: "$8.57",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/redbox1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/redbox2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/redbox3.png",
        ],
      },
      {
        name: "Khatam Gift Saffron",
        shortDescription: "One mesqal (4.608g) fresh Negin saffron. Strong aroma and flavor. Khatam tin packaging, no branding.",
        description: "Top-quality Negin saffron from the finest farms of Khorasan, packaged in authentic Khatam-decorated metal tins. 100% premium Negin saffron with large stigmas, no yellow parts, and no breakage. Very high crocin content for rich, vibrant color in all dishes and desserts. The Khatam tin protects saffron from light and moisture while showcasing traditional Iranian art. Perfect for daily home use or as a valuable, authentic souvenir.",
        weight: "4.608g",
        price: "$8.57",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/Khatam1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/Khatam-negin-second.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/Khatam3.jpg",
        ],
      },
    ],
  },
  {
    id: "barberry",
    title: "Barberry",
    products: [
      {
        name: "Puffed Barberry",
        shortDescription: "1 kg premium puffed barberry from Qaen (Grade 1). Cleaned and oil-free.",
        description: "Premium cleaned barberry from Qaen, oil-free. Packaged in 1 kg high-quality sealed bags. Grade 1 puffed barberry, perfect for rice dishes, salads, and traditional Iranian cuisine.",
        weight: "1 kg",
        price: "$5.36",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2025/12/1006146401_17899734.jpg",
          "https://rezaei-saffron.ir/wp-content/uploads/2025/12/zereshk.png",
        ],
      },
    ],
  },
  {
    id: "spices",
    title: "Spices",
    products: [
      {
        name: "Premium Cardamom",
        shortDescription: "Dried Akbari cardamom, Grade 1. 20g pack, no branding — resale-ready.",
        description: "Premium Grade 1 dried Akbari cardamom. Packaged in 20g packs without branding, making it suitable for resale. Perfect for tea, desserts, and traditional recipes.",
        weight: "20g",
        price: "$0.57",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/Hel1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/photo24034297951.jpg",
        ],
      },
    ],
  },
];
