import { certificationImages } from "./images";
import type { ContentReviewNote } from "./content-status";

// TODO(content): Pastikan setiap sertifikasi/klaim legalitas sesuai dokumen perusahaan yang benar-benar dimiliki atau layanan yang tersedia.
export const certificationsContentReview: ContentReviewNote = {
  status: "needs-verification",
  owner: "legal",
  reason: "Daftar sertifikasi dan klaim legalitas harus dicocokkan dengan dokumen resmi perusahaan atau layanan yang benar-benar tersedia.",
};

export const certifications = [
  {
    name: "BPOM",
    fullName: "Badan Pengawas Obat dan Makanan",
    icon: "lucide:clipboard-check",
    desc: "Produk terdaftar dan diawasi oleh BPOM, menjamin keamanan dan kualitas produk kosmetik untuk dipasarkan secara legal di seluruh Indonesia.",
    year: "2024",
    number: "NA 18240100123",
    image: certificationImages.bpom,
  },
  {
    name: "Halal MUI",
    fullName: "Sertifikasi Halal",
    icon: "lucide:badge-check",
    desc: "Produk terjamin kehalalannya sesuai syariat Islam melalui audit ketat dari lembaga sertifikasi halal resmi terakreditasi.",
    year: "2023",
    number: "ID 00410012340917",
    image: certificationImages.halal,
  },
  {
    name: "CPKB",
    fullName: "Cara Produksi Kosmetik yang Baik",
    icon: "lucide:factory",
    desc: "Standar produksi nasional yang menjamin konsistensi mutu dan keamanan di setiap tahap formulasi hingga pengemasan.",
    year: "2024",
    number: "CPKB/2024/KK-0031",
    image: certificationImages.cpkb,
  },
  {
    name: "ISO 9001",
    fullName: "Sistem Manajemen Mutu Internasional",
    icon: "lucide:globe",
    desc: "Sertifikasi sistem manajemen mutu internasional yang memastikan standar kualitas proses dan produk terjamin secara berkelanjutan.",
    year: "2023",
    number: "ISO 9001:2015 — 44Q 20034",
    image: certificationImages.iso,
  },
  {
    name: "HKI / Merek",
    fullName: "Hak Kekayaan Intelektual",
    icon: "lucide:shield",
    desc: "Perlindungan hukum penuh untuk merek dagang dan inovasi produk agar brand Anda aman dari klaim pihak lain.",
    year: "2025",
    number: "IDM001234567",
    image: certificationImages.hki,
  },
];

export const legalServices = [
  {
    title: "Registrasi BPOM",
    desc: "Kami membantu proses pendaftaran produk kosmetik ke BPOM, dari persiapan dokumen hingga approval.",
    icon: "lucide:clipboard-check",
  },
  {
    title: "Sertifikasi Halal",
    desc: "Bekerja sama dengan lembaga sertifikasi halal terpercaya untuk menjamin kehalalan produk Anda.",
    icon: "lucide:badge-check",
  },
  {
    title: "Pengurusan HKI / Merek",
    desc: "Membantu pendaftaran hak kekayaan intelektual dan merek dagang agar brand Anda terlindungi.",
    icon: "lucide:shield",
  },
  {
    title: "Persiapan Dokumen Produk",
    desc: "Tim kami menyiapkan seluruh dokumen teknis dan administrasi yang diperlukan untuk legalitas produk.",
    icon: "lucide:file-text",
  },
  {
    title: "Kesesuaian Standar Produksi",
    desc: "Memastikan proses produksi dan fasilitas pabrik memenuhi standar CPKB dan regulasi terkait.",
    icon: "lucide:search",
  },
];

export const trustCards = [
  {
    icon: "lucide:shield-check",
    title: "Aman Dipasarkan",
    desc: "Produk dengan sertifikasi resmi lebih aman dan terpercaya di mata konsumen.",
  },
  {
    icon: "lucide:handshake",
    title: "Meningkatkan Kepercayaan",
    desc: "Legalitas lengkap membuat brand Anda lebih dipercaya oleh pelanggan dan distributor.",
  },
  {
    icon: "lucide:sparkles",
    title: "Tampil Profesional",
    desc: "Produk bersertifikasi mencerminkan brand yang profesional dan bertanggung jawab.",
  },
  {
    icon: "lucide:rocket",
    title: "Siap Masuk Pasar",
    desc: "Dengan legalitas lengkap, produk siap dipasarkan di berbagai platform dan toko.",
  },
];