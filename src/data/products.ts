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
        weight: "4.6 grams",
        price: "$9.29",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/negin1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Negin1-2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/01/Negin1-3.png",
        ],
      },
      {
        name: "Negin Saffron (1g)",
        shortDescription: "1g super export-grade Negin saffron. Current year, fresh, fully red. Traditionally dried. Strong aroma and flavor.",
        description: "Premium super export-grade Negin saffron, 1 gram pack. Current year's harvest, fresh and fully red. Traditionally and naturally dried with strong saffron aroma and flavor. Perfect for home use and gifting.",
        weight: "1 gram",
        price: "$1.79",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/1gramNegin1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/1gramNegin2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/Negin-kilo-second.png",
        ],
      },
      {
        name: "Negin Saffron (500g Wholesale)",
        shortDescription: "500g super export-grade Negin saffron. Current year, fresh. From Gonabad saffron farms. Traditionally dried.",
        description: "Premium wholesale Negin saffron, 500 grams. Super export-grade, current year's harvest, fresh and aromatic. Sourced from the finest saffron farms of Gonabad. Naturally and traditionally dried. Ideal for bulk buyers, retailers, and international trade.",
        weight: "500 grams",
        price: "$857.14",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/wholesale11.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/wholesale2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/wholesale3.png",
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
        weight: "4.6 grams",
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
        weight: "4.6 grams",
        price: "$2.00",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2025/12/sefid3.png",
        ],
      },
      {
        name: "Saffron Root",
        shortDescription: "Grown in Gonabad, Khorasan. Harvested November 2024. Traditionally dried. 2.3g per pack.",
        description: "This product has an aroma and flavor very close to premium saffron and is rich in beneficial antioxidant compounds. An economical and practical choice for use in various dishes, herbal teas, and herbal formulations. Completely natural with no chemical additives. Great for calming herbal tea, cooking rice and stews, and combining with honey for immune support.",
        weight: "2.3 grams",
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
    id: "economy",
    title: "Economy Saffron",
    products: [
      {
        name: "Economy Saffron (Narmeh)",
        shortDescription: "One mesqal (4.608g) kitchen-grade saffron. Current year, aromatic. Medium coloring. No branding, resale-ready.",
        description: "Economy-grade saffron (Narmeh), ideal for everyday cooking. Current year's harvest with strong aroma and flavor. Medium coloring power. Packaged without branding, suitable for resale. An affordable option for those who want genuine saffron flavor without premium pricing.",
        weight: "4.6 grams",
        price: "$2.86",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/narmeh11.jpg",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/narmeh2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/narmeh3.png",
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
        weight: "4.6 grams",
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
        weight: "4.6 grams",
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
        weight: "4.608 grams",
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
        weight: "4.608 grams",
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
      {
        name: "Barberry (500g)",
        shortDescription: "500g fresh Qaen barberry. Traditionally dried. Vacuum-sealed, no branding — resale-ready.",
        description: "Fresh premium barberry from Qaen, 500 grams. Current year's product, traditionally dried. Hygienic vacuum-sealed packaging with Qaen Saffron branding, no address or phone — suitable for resale. Perfect for rice dishes, salads, and traditional Iranian cuisine.",
        weight: "500 grams",
        price: "$2.86",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/500g-barberry1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/barberry2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/GhaenBarberry3.png",
        ],
      },
    ],
  },
  {
    id: "dried-fruits",
    title: "Dried Fruits",
    products: [
      {
        name: "Dried Mulberry",
        shortDescription: "150g naturally dried white mulberry. Fully organic. No branding, resale-ready. Sweet, a natural sugar substitute.",
        description: "Naturally dried white mulberry, 150 grams. Fully organic with no additives. Packaged in plain bags without branding — suitable for resale. Sweet and delicious, a natural substitute for sugar in tea. Rich in vitamins and minerals.",
        weight: "150 grams",
        price: "$1.07",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/mulbery11-1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/mulberry2.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/mulberry3.png",
        ],
      },
      {
        name: "Jujube",
        shortDescription: "250g large-seed Birjand jujube. Current year, naturally dried. Delicious, no bitterness. Vacuum-sealed.",
        description: "Premium large-seed jujube from Birjand, 250 grams. Current year's harvest, naturally dried. Delicious with no bitterness. Simple vacuum-sealed packaging without branding — suitable for resale. Rich in vitamins C and A, supports immune health and digestion.",
        weight: "250 grams",
        price: "$0.86",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/jujubie1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/jujubeA22.png",
        ],
      },
      {
        name: "Dried Apricot Slices",
        shortDescription: "200g dried apricot from Gonabad, Khorasan orchards. Naturally dried, delicious. No branding.",
        description: "Dried apricot slices from the orchards of Gonabad, Khorasan. 200 grams, naturally dried. Delicious and nutritious. Packaged without branding — suitable for resale. A healthy snack rich in fiber, potassium, and vitamins.",
        weight: "200 grams",
        price: "$1.07",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/persimons1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/persimons2.png",
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
        weight: "20 grams",
        price: "$0.57",
        images: [
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/Hel1.png",
          "https://rezaei-saffron.ir/wp-content/uploads/2026/02/photo24034297951.jpg",
        ],
      },
    ],
  },
];
