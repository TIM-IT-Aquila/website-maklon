import { factoryImages } from "./images";

export const factoryHighlights = [
  {
    title: "Produksi Terarah",
    description: "Proses produksi dilakukan secara terstruktur dari sampling hingga produk siap jual dengan standar mutu tinggi.",
    icon: "lucide:factory",
    image: factoryImages.productionLine,
  },
  {
    title: "Quality Control",
    description: "Setiap produk melalui pengecekan kualitas ketat sebelum masuk tahap akhir untuk memastikan keamanan dan kualitas.",
    icon: "lucide:shield-check",
    image: factoryImages.qualityControl,
  },
  {
    title: "Support Brand Baru",
    description: "Cocok untuk pemilik brand yang baru memulai bisnis skincare atau kosmetik dengan pendampingan penuh.",
    icon: "lucide:rocket",
    image: factoryImages.samplingRoom,
  },
  {
    title: "Tim R&D Berpengalaman",
    description: "Didukung tim riset dan pengembangan yang ahli dalam menciptakan formula inovatif sesuai tren pasar.",
    icon: "lucide:microscope",
    image: factoryImages.labResearch,
  },
  {
    title: "Bantuan Legalitas",
    description: "Kami membantu pengurusan BPOM, Halal, HKI, dan dokumen legal lainnya untuk produk Anda.",
    icon: "lucide:scroll-text",
    image: factoryImages.packagingArea,
  },
  {
    title: "Kemasan Profesional",
    description: "Layanan desain kemasan dari konsep hingga jadi, termasuk label dan packaging yang menarik.",
    icon: "lucide:package",
    image: factoryImages.packagingArea,
  },
];

// TODO(content): Angka statistik masih placeholder marketing. Ganti dengan metrik terverifikasi sebelum launch.
export const factoryStats = [
  { label: "Produk Berhasil Dipasarkan", value: "500+" },
  { label: "Brand Partner", value: "200+" },
  { label: "Tahun Pengalaman", value: "10+" },
  { label: "Tenaga Ahli", value: "50+" },
];