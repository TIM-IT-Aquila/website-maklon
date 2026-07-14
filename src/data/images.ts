// =============================================================================
// LIBRARY FOTO TERPUSAT — Magna
// Semua gambar menggunakan placeholder SVG lokal buatan sendiri.
// Produk putih polos berlabel "YOUR BRAND" — tidak ada gambar stok berlisensi.
// Cukup ganti file SVG di public/assets/placeholders/ dengan foto asli brand saat sudah tersedia.
// =============================================================================

const P = "/assets/placeholders";

// --- HERO & BANNER (landscape 16:9) ---
export const heroImages = {
  skincareLab: "/assets/hero-home/skincarelab.jpg",
  skincareProduction: "/assets/hero-home/skincareproduction.jpg",
  packagingReady: "/assets/hero-home/skincareproduction.jpg",
  factoryProduction: "/assets/hero-home/factoryproduction.jpg",
  labResearch: "/assets/hero-home/labreserch.jpg",
  legalDocument: "/assets/hero-home/legaldokument.jpg",
  skincareHero: "/assets/hero-home/skincarelab.jpg",
  formulasiHero: "/assets/hero-home/skincareproduction.jpg",
};

// --- LAB & FACTORY (4:3 ratio) ---
export const factoryImages = {
  labResearch: "/assets/hero-home/labreserch.jpg",
  productionLine: "/assets/hero-home/factoryproduction.jpg",
  qualityControl: "/assets/hero-home/labreserch.jpg",
  samplingRoom: "/assets/hero-home/skincarelab.jpg",
  packagingArea: "/assets/hero-home/factoryproduction.jpg",
  formulasiLab: "/assets/hero-home/labreserch.jpg",
  mikrobiologi: "/assets/hero-home/labreserch.jpg",
  bahanBaku: "/assets/hero-home/factoryproduction.jpg",
};

// --- PROSES MAKLON (16:9, untuk interactive slider) ---
export const processImages = {
  konsultasi: "/assets/hero-home/skincarelab.jpg",
  riset: "/assets/hero-home/labreserch.jpg",
  sample: "/assets/hero-home/labreserch.jpg",
  revisi: "/assets/hero-home/skincarelab.jpg",
  desain: "/assets/hero-home/skincareproduction.jpg",
  legalitas: "/assets/hero-home/legaldokument.jpg",
  produksi: "/assets/hero-home/factoryproduction.jpg",
  qc: "/assets/hero-home/labreserch.jpg",
  pengiriman: "/assets/hero-home/factoryproduction.jpg",
};

// --- KATEGORI PRODUK (square) ---
export const categoryImages = [
  { name: "Skincare", image: "/assets/kategori/skincare.png" },
  { name: "Bodycare", image: "/assets/kategori/bodycare.png" },
  { name: "Haircare", image: "/assets/kategori/haircare.png" },
  { name: "Baby Care", image: "/assets/kategori/babycare.png" },
];

// --- BLOG / ARTIKEL (16:9 landscape) ---
export const blogImages = {
  skincareGuide: "/assets/kategori/skincare.png",
  maklonBenefit: "/assets/hero-home/factoryproduction.jpg",
  prosesMaklon: "/assets/hero-home/skincarelab.jpg",
  sertifikasi: "/assets/desain legalitas.jpg",
  tipsMaklon: "/assets/konsultasi konsep.jpg",
  trenSkincare: "/assets/kategori/skincare.png",
  modalBisnis: "/assets/reset formulasi.jpg",
  edukasi: "/assets/hero-home/labreserch.jpg",
};

// --- TESTIMONIAL / AVATAR (persegi) ---
export const avatarImages = {
  woman1: `${P}/product-square.svg`,
  woman2: `${P}/product-square.svg`,
  woman3: `${P}/product-square.svg`,
  man1: `${P}/product-square.svg`,
  man2: `${P}/product-square.svg`,
  teamLab: `${P}/product-square.svg`,
  founder: `${P}/product-square.svg`,
};

// --- PORTOFOLIO / BRAND (4:3) ---
export const portfolioImages = {
  skincareBrand: "/assets/portofolio/portofolio1.png",
  bodycareBrand: "/assets/portofolio/portofolio2.png",
  babycareBrand: "/assets/portofolio/portofolio3.png",
  haircareBrand: "/assets/portofolio/portofolio4.jpg",
};

// --- SERTIFIKASI / LEGALITAS -------------------------------------------------
// Visual placeholder dokumen. Ganti dengan foto sertifikat perusahaan yang asli
// setelah dokumennya tersedia dan lolos verifikasi legal.
export const certificationImages = {
  bpom: "/assets/desain legalitas.jpg",
  halal:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
  cpkb: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  iso: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
  hki: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
};

// --- ABOUT / COMPANY (4:3) ---
export const companyImages = {
  office: "/assets/hero-home/skincarelab.jpg",
  team: "/assets/hero-home/skincareproduction.jpg",
  building: "/assets/hero-home/factoryproduction.jpg",
  labTeam: "/assets/hero-home/labreserch.jpg",
};
