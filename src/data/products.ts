type ProductSubgroup = {
  title: string;
  items: string[];
};

type ProductGroup = {
  title: string;
  items: string[];
  subgroups?: ProductSubgroup[];
  image?: string;
};

export const productCategories: { id: string; title: string; groups: ProductGroup[] }[] = [
  {
    id: "skincare",
    title: "Skincare",
    groups: [
      {
        title: "Facial Cleanser",
        image: "/assets/produk/facial wash.png",
        items: [
          "Brightening Face Wash",
          "Acne Face Wash",
          "Anti-Aging Face Wash",
          "Sensitive Face Wash",
          "Daily Face Wash",
        ],
      },
      {
        title: "Cleansing",
        image: "/assets/produk/cleansing.jpg",
        items: ["Cleansing Oil", "Cleansing Balm", "Micellar Water", "Bi-Phase Makeup Remover"],
      },
      {
        title: "Toner",
        image: "/assets/produk/toner.png",
        items: [
          "Brightening Toner",
          "Acne Toner",
          "Anti-Aging Toner",
          "Sensitive Toner",
          "Exfoliating Toner",
        ],
      },
      {
        title: "Serum",
        image: "/assets/produk/serum.png",
        items: [
          "Acne Serum",
          "Anti-Aging Serum",
          "Sensitive Serum",
          "Exfoliating Serum",
          "Eye Serum",
        ],
      },
      {
        title: "Moisturizer",
        image: "/assets/produk/moisturizer.png",
        items: [
          "Brightening Moisturizer",
          "Acne Moisturizer",
          "Anti-Aging Moisturizer",
          "Sensitive Moisturizer",
        ],
      },
      {
        title: "Day Care",
        image: "/assets/produk/sunscreen.png",
        items: ["Day Cream with Sunscreen (All Skin Types)"],
      },
      {
        title: "Special Treatment",
        image: "/assets/produk/special-treatment.jpg",
        items: ["Nail Vitamin"],
      },
    ],
  },
  {
    id: "body-care",
    title: "Body Care",
    groups: [
      {
        title: "Body Cleanser",
        image: "/assets/produk/body cleanser.jpg",
        items: ["Body Wash"],
        subgroups: [
          {
            title: "Head to Toe Wash",
            items: ["Brightening", "Acne Care", "Acne Marks Care", "Anti-Aging", "Sensitive"],
          },
        ],
      },
      {
        title: "Body Moisturizer",
        image: "/assets/produk/body lation.png",
        items: [],
        subgroups: [
          { title: "Body Serum", items: ["Brightening", "Acne", "Anti-Aging", "Daily Care"] },
        ],
      },
      {
        title: "Body Gel",
        image: "/assets/produk/body-gel.jpg",
        items: ["Brightening", "Anti-Aging", "Daily Care"],
      },
      {
        title: "Body Treatment",
        image: "/assets/produk/body scrub.jpg",
        items: [
          "Body Oil",
          "Body Scrub (Cream)",
          "Body Scrub (Powder)",
          "Stretch Mark Cream",
          "Breast Cream",
          "Slimming Cream",
        ],
      },
      {
        title: "Deodorant",
        image: "/assets/produk/deodorant.jpg",
        items: [
          "Deo Mist",
          "Deo Spray (Alcohol)",
          "Deo Spray (Alcohol-Free)",
          "Deo Stick",
          "Deo Cream",
        ],
      },
      {
        title: "Body Mask",
        image: "/assets/produk/body-mask.jpg",
        items: ["Cream Mask", "Powder Mask"],
      },
      {
        title: "Bath Collection",
        image: "/assets/produk/Bath-Collection.jpg",
        items: ["Bath Salt", "Bath Bomb"],
      },
      {
        title: "Feminine Care",
        image: "/assets/produk/Feminine-Care.jpg",
        items: ["Feminine Hygiene Wash", "Feminine Spray"],
      },
    ],
  },
  {
    id: "hair-care",
    title: "Hair Care",
    groups: [
      {
        title: "Hair Cleansing",
        image: "/assets/produk/shampoo.jpg",
        items: ["Daily Shampoo", "Specialty Shampoo"],
      },
      {
        title: "Hair Treatment",
        image: "/assets/produk/hair-treatment.jpg",
        items: [
          "Hair Serum",
          "Hair Tonic (Alcohol)",
          "Hair Tonic (Alcohol-Free)",
          "Hair Mask / Creambath",
          "Hair Gel",
          "Hair Mist",
          "Dry Shampoo",
          "Pomade",
          "Hair Vitamin",
        ],
      },
      {
        title: "Hair Solution",
        image: "/assets/produk/hair-solution.jpg",
        items: [
          "Anti-Frizz Care",
          "Hair Growth Care",
          "Anti-Dandruff Care",
          "Oily Scalp Care",
          "Anti-Aging Hair Care",
        ],
      },
    ],
  },
  {
    id: "oral-care",
    title: "Oral Care Collection",
    groups: [
      {
        title: "Produk",
        image: "/assets/produk/Oral-Care-Collection.jpg",
        items: ["Toothpaste (Odol)", "Mouthwash", "Mouth Spray"],
      },
    ],
  },
  {
    id: "baby-kids-care",
    title: "Baby & Kids Care",
    groups: [
      {
        title: "Cleansing",
        image: "/assets/produk/cleansingbaby.jpg",
        items: ["Head to Toe Wash", "Baby Shampoo", "Baby Body Wash", "Baby Face Wash"],
      },
      {
        title: "Face Care",
        image: "/assets/produk/face-care-baby.jpg",
        items: [
          "Baby Face Cream",
          "Baby Face Lotion",
          "Baby Face Serum",
          "Baby Day Cream",
          "Baby Sunscreen",
        ],
      },
      {
        title: "Body Care",
        image: "/assets/produk/body-care-baby.jpg",
        items: [
          "Baby Body Lotion",
          "Multipurpose Cream",
          "Baby Massage Oil",
          "Baby Massage Cream",
          "Diaper Rash Cream",
        ],
      },
      {
        title: "Hair Care",
        image: "/assets/produk/hair-care-baby.jpg",
        items: ["Baby Hair Tonic (Alcohol)", "Baby Hair Tonic (Alcohol-Free)", "Baby Hair Gel"],
      },
      {
        title: "Wellness",
        image: "/assets/produk/Wellness.jpg",
        items: [
          "Baby Telon Oil",
          "Telon Balm",
          "Telon Cream",
          "Calming Rub (Balm)",
          "Calming Rub (Cream)",
          "Bapil Roll-On",
          "Bapil Balm",
        ],
      },
      {
        title: "Protection",
        image: "/assets/produk/protection-baby.jpg",
        items: ["Mosquito Repellent Spray", "Mosquito Repellent Cream"],
      },
      {
        title: "Personal Care",
        image: "/assets/produk/personal-care.jpg",
        items: [
          "Baby Cologne",
          "Baby Deodorant Spray (Alcohol)",
          "Baby Deodorant Spray (Alcohol-Free)",
        ],
      },
    ],
  },
  {
    id: "fragrance",
    title: "Fragrance Collection",
    groups: [
      {
        title: "Produk",
        image: "/assets/produk/Fragrance-Collection.jpg",
        items: [
          "Cologne",
          "Body Mist",
          "Eau de Toilette (EDT)",
          "Eau de Parfum (EDP)",
          "Extrait de Parfum",
        ],
      },
    ],
  },
  {
    id: "spa-wellness",
    title: "Spa & Wellness",
    groups: [{ title: "Produk", items: ["Massage Oil", "Massage Cream"] }],
  },
  {
    id: "makeup",
    title: "Makeup",
    groups: [
      {
        title: "Makeup",
        items: ["Makeup Primer", "Setting Spray", "Loose Powder (Bedak Tabur)"],
        subgroups: [{ title: "Lip Makeup", items: ["Lip Oil", "Lip Gloss"] }],
      },
    ],
  },
];

export const featuredProducts = [
  {
    name: "Facial Wash",
    category: "Skincare",
    desc: "Pembersih wajah dengan formula sesuai jenis kulit.",
    image: "/assets/produk/facial wash.png",
  },
  {
    name: "Toner",
    category: "Skincare",
    desc: "Penyegar wajah untuk menyeimbangkan pH kulit.",
    image: "/assets/produk/toner.png",
  },
  {
    name: "Serum",
    category: "Skincare",
    desc: "Konsentrat aktif untuk perawatan kulit intensif.",
    image: "/assets/produk/serum.png",
  },
  {
    name: "Moisturizer",
    category: "Skincare",
    desc: "Pelembap wajah untuk hidrasi dan perlindungan.",
    image: "/assets/produk/moisturizer.png",
  },
  {
    name: "Sunscreen",
    category: "Skincare",
    desc: "Tabir surya untuk perlindungan harian.",
    image: "/assets/produk/sunscreen.png",
  },
  {
    name: "Body Lotion",
    category: "Body Care",
    desc: "Lotion pelembap untuk seluruh tubuh.",
    image: "/assets/produk/body lation.png",
  },
  {
    name: "Body Scrub",
    category: "Body Care",
    desc: "Eksfoliator untuk kulit halus dan bersinar.",
    image: "/assets/produk/body scrub.jpg",
  },
  {
    name: "Shampoo",
    category: "Hair Care",
    desc: "Sampo untuk berbagai jenis rambut.",
    image: "/assets/produk/shampoo.jpg",
  },
];
