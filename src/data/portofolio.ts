import { portfolioImages } from "./images";
import type { ContentReviewNote } from "./content-status";

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

// TODO(content): Portfolio berikut adalah contoh brand/dummy. Ganti dengan portfolio asli, studi kasus anonim, atau hapus jika belum boleh dipublikasikan.
export const portfolioContentReview: ContentReviewNote = {
  status: "placeholder",
  owner: "marketing",
  reason: "Item portfolio masih contoh brand/dummy dan belum boleh diposisikan sebagai portfolio asli.",
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "glow-labs",
    brandName: "Glow Labs",
    category: "Skincare",
    description:
      "Brand skincare lokal yang fokus pada produk brightening dengan bahan aktif niacinamide dan vitamin C.",
    products: ["Facial Wash", "Toner Brightening", "Serum Vitamin C", "Day Cream SPF"],
    highlights: ["Produk best seller di e-commerce", "Kemasan premium", "Formula ringan dan cepat menyerap"],
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
    id: "luxe-parfum",
    brandName: "Luxe Parfum",
    category: "Fragrance",
    description:
      "Brand parfum dengan aroma eksklusif dan premium untuk kalangan muda urban.",
    products: ["EDP Parfum", "Body Mist", "Roll On Parfum"],
    highlights: ["Aroma tahan lama hingga 8 jam", "Botol kaca premium", "Varian eksklusif limited edition"],
    icon: "lucide:flower-2",
    color: "from-pink-400 to-rose-600",
    image: portfolioImages.fragranceBrand,
  },
  {
    id: "pure-baby",
    brandName: "Pure Baby",
    category: "Baby Care",
    description:
      "Brand perawatan bayi yang aman, lembut, dan teruji dermatologis untuk si kecil.",
    products: ["Baby Lotion", "Baby Wash", "Baby Oil", "Baby Cream"],
    highlights: ["Hypoallergenic & dermatologically tested", "Bebas alkohol dan pewangi sintetis", "Terdaftar BPOM"],
    icon: "lucide:baby",
    color: "from-sky-400 to-blue-500",
    image: portfolioImages.babycareBrand,
  },
  {
    id: "glamour-queen",
    brandName: "Glamour Queen",
    category: "Makeup",
    description:
      "Brand makeup dengan pigmen tinggi, warna-warna kekinian, dan harga terjangkau.",
    products: ["Lip Cream", "Cushion Foundation", "Eyeshadow Palette", "Blush On"],
    highlights: ["Pigmentasi tinggi", "Varian warna lengkap", "Formula transfer-proof"],
    icon: "lucide:spray-can",
    color: "from-purple-400 to-violet-600",
    image: portfolioImages.makeupBrand,
  },
  {
    id: "hair-lust",
    brandName: "Hair Lust",
    category: "Haircare",
    description:
      "Brand perawatan rambut untuk berbagai jenis rambut dengan formula salon quality.",
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

export const portfolioCategories = [
  ...new Set(portfolioItems.map((item) => item.category)),
];
