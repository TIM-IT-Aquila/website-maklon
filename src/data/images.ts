// =============================================================================
// LIBRARY FOTO TERPUSAT — Magna
// Semua gambar menggunakan placeholder SVG lokal buatan sendiri.
// Produk putih polos berlabel "YOUR BRAND" — tidak ada gambar stok berlisensi.
// Cukup ganti file SVG di public/assets/placeholders/ dengan foto asli brand saat sudah tersedia.
// =============================================================================

const P = "/assets/placeholders";

// --- HERO & BANNER (landscape 16:9) ---
export const heroImages = {
  skincareLab:     "/assets/hero-home/skincarelab.jpg",
  skincareProduction: "/assets/hero-home/skincareproduction.jpg",
  packagingReady:  "/assets/hero-home/skincareproduction.jpg",
  factoryProduction: "/assets/hero-home/factoryproduction.jpg",
  labResearch:     "/assets/hero-home/labreserch.jpg",
  legalDocument:   "/assets/hero-home/legaldokument.jpg",
  skincareHero:    "/assets/hero-home/skincarelab.jpg",
  formulasiHero:   "/assets/hero-home/skincareproduction.jpg",
};

// --- LAB & FACTORY (4:3 ratio) ---
export const factoryImages = {
  labResearch:     "/assets/hero-home/labreserch.jpg",
  productionLine:  "/assets/hero-home/factoryproduction.jpg",
  qualityControl:  "/assets/hero-home/labreserch.jpg",
  samplingRoom:    "/assets/hero-home/skincarelab.jpg",
  packagingArea:   "/assets/hero-home/factoryproduction.jpg",
  formulasiLab:    "/assets/hero-home/labreserch.jpg",
  mikrobiologi:    "/assets/hero-home/labreserch.jpg",
  bahanBaku:       "/assets/hero-home/factoryproduction.jpg",
};

// --- PROSES MAKLON (16:9, untuk interactive slider) ---
export const processImages = {
  konsultasi: "/assets/hero-home/skincarelab.jpg",
  riset:      "/assets/hero-home/labreserch.jpg",
  sample:     "/assets/hero-home/labreserch.jpg",
  revisi:     "/assets/hero-home/skincarelab.jpg",
  desain:     "/assets/hero-home/skincareproduction.jpg",
  legalitas:  "/assets/hero-home/legaldokument.jpg",
  produksi:   "/assets/hero-home/factoryproduction.jpg",
  qc:         "/assets/hero-home/labreserch.jpg",
  pengiriman: "/assets/hero-home/factoryproduction.jpg",
};

// --- SKINCARE PRODUCTS (square, untuk card) ---
export const productImages = {
  facialWash:       `${P}/product-square.svg`,
  toner:            `${P}/product-square.svg`,
  serum:            `${P}/product-square.svg`,
  moisturizer:      `${P}/product-square.svg`,
  sunscreen:        `${P}/product-square.svg`,
  bodyLotion:       `${P}/product-square.svg`,
  bodyScrub:        `${P}/product-square.svg`,
  shampoo:          `${P}/product-square.svg`,
  conditioner:      `${P}/product-square.svg`,
  // Service-related
  skincareService:  `${P}/product-square.svg`,
  bodycareService:  `${P}/product-square.svg`,
  haircareService:  `${P}/product-square.svg`,
  babyCareService:  `${P}/product-square.svg`,
};

// --- KATEGORI PRODUK (square) ---
export const categoryImages = [
  { name: "Skincare",  image: "/assets/kategori/skincare.png" },
  { name: "Bodycare",  image: "/assets/kategori/bodycare.png" },
  { name: "Haircare",  image: "/assets/kategori/haircare.png" },
  { name: "Baby Care", image: "/assets/kategori/babycare.png" },
];

// --- BLOG / ARTIKEL (16:9 landscape) ---
export const blogImages = {
  skincareGuide:  "/assets/kategori/skincare.png",
  maklonBenefit:  "/assets/hero-home/factoryproduction.jpg",
  prosesMaklon:   "/assets/hero-home/skincarelab.jpg",
  sertifikasi:    "/assets/desain legalitas.jpg",
  tipsMaklon:     "/assets/konsultasi konsep.jpg",
  trenSkincare:   "/assets/kategori/skincare.png",
  modalBisnis:    "/assets/reset formulasi.jpg",
  edukasi:        "/assets/hero-home/labreserch.jpg",
};

// --- TESTIMONIAL / AVATAR (persegi) ---
export const avatarImages = {
  woman1:   `${P}/product-square.svg`,
  woman2:   `${P}/product-square.svg`,
  woman3:   `${P}/product-square.svg`,
  man1:     `${P}/product-square.svg`,
  man2:     `${P}/product-square.svg`,
  teamLab:  `${P}/product-square.svg`,
  founder:  `${P}/product-square.svg`,
};

// --- PORTOFOLIO / BRAND (4:3) ---
export const portfolioImages = {
  skincareBrand:  `${P}/product-hero.svg`,
  bodycareBrand:  `${P}/product-square.svg`,
  babycareBrand:  `${P}/product-square.svg`,
  haircareBrand:  `${P}/product-square.svg`,
};

// --- SERTIFIKASI / LEGALITAS (icon-style, square) ---
export const certificationImages = {
  bpom:  `${P}/product-square.svg`,
  halal: `${P}/product-square.svg`,
  cpkb:  `${P}/lab-default.svg`,
  iso:   `${P}/product-square.svg`,
  hki:   `${P}/product-square.svg`,
};

// --- ABOUT / COMPANY (4:3) ---
export const companyImages = {
  office:   `${P}/factory-default.svg`,
  team:     `${P}/lab-default.svg`,
  building: `${P}/factory-default.svg`,
  labTeam:  `${P}/lab-default.svg`,
};

// --- R&D INNOVATIONS (4:3) ---
export const rdImages = {
  naturalIngredients: `${P}/lab-default.svg`,
  encapsulation:      `${P}/lab-default.svg`,
  safeFormula:        `${P}/lab-default.svg`,
};

// --- OEM/ODM (4:3) ---
export const oemOdmImages = {
  production: `${P}/factory-default.svg`,
};

// --- MEREK & PATEN (4:3) ---
export const merekPatenImages = {
  legalDoc: `${P}/product-hero.svg`,
};

// --- GENERIC PLACEHOLDER ---
export const placeholder = {
  product:  `${P}/product-square.svg`,
  service:  `${P}/product-square.svg`,
  blogPost: `${P}/product-hero.svg`,
  avatar:   `${P}/product-square.svg`,
  factory:  `${P}/factory-default.svg`,
  lab:      `${P}/lab-default.svg`,
};
