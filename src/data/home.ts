import { heroImages } from "./images";

export const homeHeroSlides = [
  {
    image: heroImages.laboratium,
    titleMain: "Laboratorium Modern",
    titleAccent: "untuk Formulasi Presisi",
    description:
      "Teknologi riset terkini dan tim ahli R&D siap mengembangkan formula unik untuk brand kecantikan Anda.",
  },
  {
    image: heroImages.ruangqc,
    titleMain: "Produksi Berkualitas",
    titleAccent: "Standar CPKB & GMP",
    description:
      "Setiap tahap produksi diawasi ketat agar produk skincare premium Anda aman, konsisten, dan siap dipasarkan.",
  },
  {
    image: heroImages.liniproduksi,
    titleMain: "Siap Dikemas & Kirim",
    titleAccent: "Langsung Distribusi",
    description:
      "Produk jadi dengan kemasan rapi dan legal — siap dikirim ke seluruh Indonesia tanpa repot urusan logistik.",
  },
  {
    image: heroImages.gudangbahanbaku,
    titleMain: "Riset & Inovasi",
    titleAccent: "500+ Formula Siap Pakai",
    description:
      "Pilih dari ratusan formula teruji atau kustomisasi sesuai kebutuhan — dari konsultasi hingga produk siap jual.",
  },
] as const;

export const homeComparisonRows = [
  { aspect: "Kepemilikan Pabrik", us: "Pabrik Milik Sendiri", them: "Sering pihak ketiga" },
  { aspect: "Formulasi", us: "Custom 500+ Formula", them: "Terbatas / template" },
  { aspect: "Legalitas", us: "BPOM + Halal + HKI", them: "Belum tentu lengkap" },
  { aspect: "MOQ", us: "Fleksibel", them: "Cenderung tinggi" },
  { aspect: "Pendampingan", us: "Konsultasi gratis", them: "Sering terbatas" },
] as const;
