import { certificationImages } from "./images";

// TODO(content): Pastikan setiap sertifikasi/klaim legalitas sesuai dokumen perusahaan yang benar-benar dimiliki atau layanan yang tersedia.
export const certifications = [
  {
    name: "BPOM",
    fullName: "Badan Pengawas Obat dan Makanan",
    icon: "lucide:clipboard-check",
    desc: "Produk terdaftar dan diawasi oleh BPOM, menjamin keamanan dan kualitas produk kosmetik.",
    image: certificationImages.bpom,
  },
  {
    name: "Halal",
    fullName: "Sertifikasi Halal",
    icon: "lucide:badge-check",
    desc: "Produk terjamin kehalalannya sesuai syariat Islam dan standar dari lembaga sertifikasi halal.",
    image: certificationImages.halal,
  },
  {
    name: "CPKB",
    fullName: "Cara Produksi Kosmetik yang Baik",
    icon: "lucide:factory",
    desc: "Standar produksi nasional yang menjamin konsistensi mutu dan keamanan produk kosmetik.",
    image: certificationImages.cpkb,
  },
  {
    name: "ISO 9001",
    fullName: "Sistem Manajemen Mutu",
    icon: "lucide:globe",
    desc: "Sistem manajemen mutu internasional yang memastikan kualitas proses dan produk terjamin.",
    image: certificationImages.iso,
  },
  {
    name: "HKI / Merek",
    fullName: "Hak Kekayaan Intelektual",
    icon: "lucide:shield",
    desc: "Perlindungan hukum untuk merek dan inovasi produk agar tidak ditiru pihak lain.",
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