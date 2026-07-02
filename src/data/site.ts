import type { ContentReviewNote } from "./content-status";

export const siteConfig = {
  name: "Aquila Magna",
  legalName: "CV Aquila Magna",
  tagline: "Skincare & Cosmetics",
  url: "https://tollmanufacturing.id",
  locale: "id_ID",
  defaultOgImage: "/assets/Logo.svg",
  description:
    "Perusahaan jasa maklon skincare dan kosmetik terpercaya. Membantu brand owner pemula maupun profesional mewujudkan produk kecantikan dari konsep hingga siap jual.",
  waNumber: "6285314903325",
  waText: "Halo, saya ingin konsultasi maklon produk skincare.",
  email: "Info@tollmanufacturing.id",
  address: "Jl. Jati Blok Pulo Seger, Plumbon, Kec. Indramayu, Kabupaten Indramayu, Jawa Barat 45215",
  operationalHours: "Senin - Jumat, 08:00 - 17:00",
  factoryOwnership: "Pabrik milik sendiri",
};

// TODO(content): Validasi badge kepercayaan hanya setelah dokumen/sertifikasi resmi tersedia.
export const trustBadgesContentReview: ContentReviewNote = {
  status: "needs-verification",
  owner: "legal",
  reason: "Badge kepercayaan harus hanya ditampilkan jika dokumen atau sertifikasi resmi benar-benar tersedia.",
};

export const trustBadges = [
  { label: "BPOM", desc: "Terdaftar BPOM" },
  { label: "HALAL", desc: "Sertifikat Halal" },
  { label: "CPKB", desc: "Cara Produksi Kosmetik Baik" },
  { label: "ISO", desc: "ISO 9001:2015" },
];