import { portfolioImages } from "./images";

export interface PortfolioItem {
  id: string;
  brandName: string;
  category: string;
  description: string;
  products: string[];
  highlights: string[];
  icon: string;
  color: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "glow-labs",
    brandName: "Glow Labs",
    category: "Skincare",
    description:
      "Brand skincare lokal yang fokus pada produk brightening dengan bahan aktif niacinamide dan vitamin C.",
    products: ["Facial Wash", "Toner Brightening", "Serum Vitamin C", "Day Cream SPF"],
    highlights: [
      "Produk best seller di e-commerce",
      "Kemasan premium",
      "Formula ringan dan cepat menyerap",
    ],
    icon: "lucide:sparkles",
    color: "from-amber-400 to-orange-500",
    image: portfolioImages.skincareBrand,
  },
  {
    id: "bumi-natural",
    brandName: "Bumi Natural",
    category: "Bodycare",
    description:
      "Brand bodycare dengan konsep natural dan bahan-bahan herbal alami khas Indonesia.",
    products: ["Body Lotion", "Body Scrub", "Body Wash", "Hand Cream"],
    highlights: ["Bahan alami Indonesia", "Kemasan ramah lingkungan", "Sertifikasi halal"],
    icon: "lucide:leaf",
    color: "from-green-400 to-emerald-600",
    image: portfolioImages.bodycareBrand,
  },
  {
    id: "pure-baby",
    brandName: "Pure Baby",
    category: "Baby Care",
    description: "Brand perawatan bayi yang aman, lembut, dan teruji dermatologis untuk si kecil.",
    products: ["Baby Lotion", "Baby Wash", "Baby Oil", "Baby Cream"],
    highlights: [
      "Hypoallergenic & dermatologically tested",
      "Bebas alkohol dan pewangi sintetis",
      "Terdaftar BPOM",
    ],
    icon: "lucide:baby",
    color: "from-sky-400 to-blue-500",
    image: portfolioImages.babycareBrand,
  },
  {
    id: "hair-lust",
    brandName: "Hair Lust",
    category: "Haircare",
    description: "Brand perawatan rambut untuk berbagai jenis rambut dengan formula salon quality.",
    products: ["Shampoo", "Conditioner", "Hair Mask", "Hair Serum"],
    highlights: ["Formula salon quality", "Untuk semua tipe rambut", "Sulfur & paraben free"],
    icon: "lucide:scissors",
    color: "from-indigo-400 to-indigo-600",
    image: portfolioImages.haircareBrand,
  },
  {
    id: "segar-alami",
    brandName: "Segar Alami",
    category: "Bodycare",
    description:
      "Brand bodycare segar dengan ekstrak buah-buahan alami untuk kulit cerah dan sehat.",
    products: ["Body Wash", "Body Lotion", "Body Scrub", "Hand & Body Cream"],
    highlights: ["Ekstrak buah asli", "Aroma segar alami", "Kemasan praktis"],
    icon: "lucide:citrus",
    color: "from-yellow-400 to-orange-400",
    image: portfolioImages.bodycareBrand,
  },
  {
    id: "clear-skin-lab",
    brandName: "Clear Skin Lab",
    category: "Skincare",
    description:
      "Brand khusus kulit berjerawat dan berminyak dengan formulasi oil-free dan non-comedogenic.",
    products: ["Acne Facial Wash", "Salicylic Acid Toner", "Acne Serum", "Oil-Free Moisturizer"],
    highlights: ["Formulasi anti-jerawat", "Oil-free & non-comedogenic", "Cocok kulit sensitif"],
    icon: "lucide:microscope",
    color: "from-teal-400 to-cyan-600",
    image: portfolioImages.skincareBrand,
  },
];
