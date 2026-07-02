import { blogImages } from "./images";
import type { ContentReviewNote } from "./content-status";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

// TODO(content): Artikel berikut masih draft editorial/example. Review fakta, tanggal publikasi, dan klaim bisnis sebelum dipakai sebagai konten final.
export const blogContentReview: ContentReviewNote = {
  status: "draft",
  owner: "marketing",
  reason: "Artikel masih draft editorial/example dan perlu review fakta, tanggal publikasi, serta klaim bisnis sebelum launch.",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "panduan-memulai-brand-skincare",
    title: "Panduan Lengkap Memulai Brand Skincare untuk Pemula",
    excerpt:
      "Ingin memulai brand skincare sendiri? Simak panduan lengkap dari riset pasar, pemilihan produk, hingga strategi branding untuk pemula.",
    content:
      "Memulai brand skincare sendiri kini semakin mudah dengan adanya jasa maklon. Langkah pertama yang perlu dilakukan adalah riset pasar untuk memahami kebutuhan konsumen. Selanjutnya, tentukan konsep brand dan produk unggulan yang ingin dibuat. Dengan bantuan maklon, Anda bisa mewujudkan produk berkualitas tanpa perlu memiliki pabrik sendiri.",
    category: "Panduan Bisnis",
    author: "Tim Aquila Magna",
    date: "2026-06-20",
    readTime: "5 menit",
    image: blogImages.skincareGuide,
    tags: ["brand skincare", "pemula", "bisnis skincare", "tips"],
  },
  {
    slug: "keunggulan-jasa-maklon",
    title: "5 Keunggulan Menggunakan Jasa Maklon untuk Brand Kosmetik",
    excerpt:
      "Kenapa banyak brand kosmetik memilih jasa maklon? Berikut lima keunggulan utama yang bisa Anda dapatkan.",
    content:
      "Jasa maklon menjadi solusi populer bagi pelaku bisnis kosmetik karena berbagai keunggulan. Mulai dari eficiensi biaya produksi, akses ke formulasi profesional, hingga kemudahan perizinan BPOM dan sertifikasi halal. Dengan maklon, brand owner bisa fokus pada pengembangan merek dan pemasaran tanpa repot urusan produksi.",
    category: "Layanan Maklon",
    author: "Tim Aquila Magna",
    date: "2026-06-15",
    readTime: "4 menit",
    image: blogImages.maklonBenefit,
    tags: ["jasa maklon", "keunggulan", "kosmetik", "produksi"],
  },
  {
    slug: "cara-urut-maklon-skincare",
    title: "Cara dan Alur Maklon Skincare dari Awal hingga Akhir",
    excerpt:
      "Pahami alur lengkap proses maklon skincare mulai dari konsultasi, formulasi, sampling, produksi massal, hingga pengiriman.",
    content:
      "Proses maklon skincare dimulai dari konsultasi kebutuhan, dilanjutkan dengan pengembangan formula oleh tim R&D, pembuatan sample, uji stabilitas, produksi massal, quality control, hingga pengemasan dan pengiriman. Setiap tahap dilakukan dengan standar mutu tinggi untuk memastikan produk terbaik.",
    category: "Panduan Bisnis",
    author: "Tim Aquila Magna",
    date: "2026-06-10",
    readTime: "6 menit",
    image: blogImages.prosesMaklon,
    tags: ["alur maklon", "skincare", "proses produksi", "panduan"],
  },
  {
    slug: "pentingnya-sertifikasi-bpom",
    title: "Pentingnya Sertifikasi BPOM dan Halal untuk Produk Kosmetik",
    excerpt:
      "Sertifikasi BPOM dan Halal bukan sekadar legalitas, tapi juga meningkatkan kepercayaan konsumen pada brand Anda.",
    content:
      "Setiap produk kosmetik yang beredar di Indonesia wajib memiliki izin BPOM. Selain itu, sertifikasi Halal juga semakin penting mengingat mayoritas konsumen Indonesia adalah muslim. Kedua sertifikasi ini tidak hanya memenuhi regulasi, tetapi juga menjadi nilai jual yang meningkatkan kepercayaan konsumen terhadap brand Anda.",
    category: "Regulasi",
    author: "Tim Aquila Magna",
    date: "2026-06-05",
    readTime: "4 menit",
    image: blogImages.sertifikasi,
    tags: ["BPOM", "sertifikasi halal", "legalitas", "kosmetik"],
  },
  {
    slug: "tips-memilih-jasa-maklon",
    title: "Tips Memilih Jasa Maklon Skincare yang Tepat untuk Brand Anda",
    excerpt:
      "Tidak semua jasa maklon sama. Berikut tips memilih partner maklon yang sesuai dengan kebutuhan bisnis Anda.",
    content:
      "Memilih jasa maklon yang tepat sangat penting untuk kesuksesan brand Anda. Perhatikan faktor seperti track record, fasilitas produksi, portofolio produk, minimal order, layanan R&D, serta kecepatan respon. Pastikan juga partner maklon Anda memiliki sertifikasi CPKB, BPOM, dan Halal yang lengkap.",
    category: "Tips",
    author: "Tim Aquila Magna",
    date: "2026-05-28",
    readTime: "5 menit",
    image: blogImages.tipsMaklon,
    tags: ["tips", "memilih maklon", "partner bisnis", "skincare"],
  },
  {
    slug: "tren-skincare-2026",
    title: "Tren Skincare 2026 yang Wajib Brand Owner Ketahui",
    excerpt:
      "Ikuti tren skincare terbaru di tahun 2026 agar brand Anda tetap relevan dan kompetitif di pasaran.",
    content:
      "Tahun 2026 membawa tren skincare baru seperti clean beauty, personalisasi produk, penggunaan bahan alami, hingga sustainable packaging. Brand owner perlu mengikuti tren ini untuk menciptakan produk yang sesuai dengan permintaan pasar. Maklon yang terpercaya dapat membantu mewujudkan inovasi produk sesuai tren terkini.",
    category: "Tren",
    author: "Tim Aquila Magna",
    date: "2026-05-20",
    readTime: "4 menit",
    image: blogImages.trenSkincare,
    tags: ["tren", "skincare 2026", "inovasi", "produk"],
  },
  {
    slug: "modal-memulai-brand-kosmetik",
    title: "Berapa Modal untuk Memulai Brand Kosmetik dengan Sistem Maklon?",
    excerpt:
      "Simak estimasi modal yang dibutuhkan untuk memulai brand kosmetik menggunakan jasa maklon, dari skala kecil hingga menengah.",
    content:
      "Banyak yang mengira memulai brand kosmetik butuh modal besar. Nyatanya, dengan sistem maklon Anda bisa memulai dengan modal yang lebih terjangkau. Biaya utama meliputi formulasi dan sampling, produksi batch pertama, kemasan, perizinan BPOM dan Halal, serta biaya branding dan pemasaran. Dengan perencanaan matang, modal mulai dari puluhan juta sudah bisa memulai.",
    category: "Panduan Bisnis",
    author: "Tim Aquila Magna",
    date: "2026-05-15",
    readTime: "6 menit",
    image: blogImages.modalBisnis,
    tags: ["modal", "bisnis kosmetik", "biaya maklon", "startup"],
  },
  {
    slug: "perbedaan-maklon-dan-brand-own",
    title: "Perbedaan Maklon dan Brand Owner: Mana yang Cocok untuk Anda?",
    excerpt:
      "Pahami perbedaan konsep maklon dan brand owner agar Anda bisa menentukan model bisnis yang tepat.",
    content:
      "Maklon adalah perusahaan yang memproduksi produk atas nama brand lain, sedangkan brand owner adalah pihak yang memiliki merek dan memasarkan produk. Dalam kemitraan ini, brand owner fokus pada branding dan penjualan, sementara maklon menangani produksi. Model ini sangat cocok untuk pengusaha yang ingin fokus pada pengembangan merek tanpa repot urusan manufaktur.",
    category: "Edukasi",
    author: "Tim Aquila Magna",
    date: "2026-05-08",
    readTime: "3 menit",
    image: blogImages.edukasi,
    tags: ["maklon", "brand owner", "model bisnis", "edukasi"],
  },
];

export const blogCategories = [
  ...new Set(blogPosts.map((p) => p.category)),
];
