// =============================================================================
// LIBRARY FOTO TERPUSAT — Aquila Magna
// Semua gambar menggunakan placeholder SVG lokal buatan sendiri.
// Produk putih polos berlabel "YOUR BRAND" — tidak ada gambar stok berlisensi.
// Cukup ganti file SVG di public/assets/placeholders/ dengan foto asli brand saat sudah tersedia.
// =============================================================================

const P = "/assets/placeholders";

// --- HERO & BANNER (landscape 16:9) ---
export const heroImages = {
  skincareLab:     `${P}/product-hero.svg`,
  skincareProduction: `${P}/product-hero.svg`,
  packagingReady:  `${P}/product-hero.svg`,
  factoryProduction: `${P}/factory-default.svg`,
  labResearch:     `${P}/lab-default.svg`,
  legalDocument:   `${P}/product-hero.svg`,
  skincareHero:    `${P}/product-hero.svg`,
  formulasiHero:   `${P}/lab-default.svg`,
};

// --- LAB & FACTORY (4:3 ratio) ---
export const factoryImages = {
  labResearch:     `${P}/lab-default.svg`,
  productionLine:  `${P}/factory-default.svg`,
  qualityControl:  `${P}/lab-default.svg`,
  samplingRoom:    `${P}/lab-default.svg`,
  packagingArea:   `${P}/factory-default.svg`,
  formulasiLab:    `${P}/lab-default.svg`,
  mikrobiologi:    `${P}/lab-default.svg`,
  bahanBaku:       `${P}/factory-default.svg`,
};

// --- PROSES MAKLON (16:9, untuk interactive slider) ---
export const processImages = {
  konsultasi: `${P}/product-hero.svg`,
  riset:      `${P}/lab-default.svg`,
  sample:     `${P}/product-square.svg`,
  revisi:     `${P}/lab-default.svg`,
  desain:     `${P}/product-hero.svg`,
  legalitas:  `${P}/product-hero.svg`,
  produksi:   `${P}/factory-default.svg`,
  qc:         `${P}/lab-default.svg`,
  pengiriman: `${P}/factory-default.svg`,
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
  { name: "Skincare",  image: `${P}/product-square.svg` },
  { name: "Bodycare",  image: `${P}/product-square.svg` },
  { name: "Haircare",  image: `${P}/product-square.svg` },
  { name: "Baby Care", image: `${P}/product-square.svg` },
];

// --- BLOG / ARTIKEL (16:9 landscape) ---
export const blogImages = {
  skincareGuide:  `${P}/product-hero.svg`,
  maklonBenefit:  `${P}/factory-default.svg`,
  prosesMaklon:   `${P}/product-hero.svg`,
  sertifikasi:    `${P}/product-hero.svg`,
  tipsMaklon:     `${P}/product-hero.svg`,
  trenSkincare:   `${P}/product-hero.svg`,
  modalBisnis:    `${P}/product-hero.svg`,
  edukasi:        `${P}/product-hero.svg`,
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
