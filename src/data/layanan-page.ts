export const layananHero = {
  image: "/assets/hero-home/factoryproduction.jpg",
  alt: "Fasilitas produksi Magna — layanan maklon skincare lengkap",
};

export const businessHighlights = [
  { icon: "lucide:package", label: "MOQ Skincare", value: "500 pcs" },
  { icon: "lucide:package-open", label: "MOQ Bodycare", value: "1.000 pcs" },
  { icon: "lucide:beaker", label: "Lead Time Sample", value: "2–4 minggu" },
  { icon: "lucide:factory", label: "Lead Time Produksi", value: "4–8 minggu" },
] as const;

export const specializedServices = [
  {
    title: "OEM / ODM",
    desc: "Konfigurasi formula, kemasan, dan estimasi biaya secara interaktif.",
    href: "/oem-odm",
    icon: "lucide:settings-2",
  },
  {
    title: "R&D",
    desc: "Riset bahan aktif dan pengujian formula di lab berstandar ISO/CPKB.",
    href: "/research-development",
    icon: "lucide:flask-conical",
  },
  {
    title: "Merek & Paten",
    desc: "Pengurusan HAKI, BPOM, dan legalitas brand skincare Anda.",
    href: "/paten-brand",
    icon: "lucide:scale",
  },
  {
    title: "Halal",
    desc: "Sertifikasi halal BPJPH full service atas nama merek klien.",
    href: "/halal",
    icon: "lucide:badge-check",
  },
] as const;

export const oneStopServices = [
  {
    icon: "lucide:message-circle",
    title: "Konsultasi Konsep",
    desc: "Diskusi ide produk dan target pasar",
  },
  {
    icon: "lucide:flask-conical",
    title: "Formulasi Custom",
    desc: "Formula dikembangkan sesuai kebutuhan brand",
  },
  {
    icon: "lucide:beaker",
    title: "Sample Produk",
    desc: "Evaluasi sampel sebelum produksi massal",
  },
  { icon: "lucide:palette", title: "Desain Kemasan", desc: "Kemasan sesuai identitas brand Anda" },
  {
    icon: "lucide:scroll-text",
    title: "Bantuan Legalitas",
    desc: "BPOM, Halal, dan HKI diurus tim legal",
  },
  { icon: "lucide:factory", title: "Produksi Massal", desc: "Produksi skala besar standar CPKB" },
  {
    icon: "lucide:shield-check",
    title: "Quality Control",
    desc: "Pengecekan kualitas sebelum pengiriman",
  },
  { icon: "lucide:truck", title: "Siap Distribusi", desc: "Produk jadi siap dipasarkan" },
] as const;
