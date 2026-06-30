import { merekPatenImages, factoryImages } from "./images";

export const merekPatenStats = [
  { label: "Merek Terdaftar", value: "150+" },
  { label: "Paten Terdaftar", value: "25+" },
  { label: "HKI Terurus", value: "200+" },
  { label: "Tahun Pengalaman Legal", value: "8+" },
];

export const merekPatenServices = [
  { icon: "scroll-text", title: "Registrasi Merek", desc: "Pendaftaran merek usaha ke Direktorat Jenderal Kekayaan Intelektual (DJKI).", image: merekPatenImages.legalDoc },
  { icon: "award", title: "Pendaftaran Paten", desc: "Pengurusan paten sederhana dan paten biasa untuk inovasi produk.", image: factoryImages.labResearch },
  { icon: "badge-check", title: "Perlindungan HKI", desc: "Perlindungan hak cipta, desain industri, dan kekayaan intelektual lainnya.", image: merekPatenImages.legalDoc },
  { icon: "shield-check", title: "Konsultasi Legal", desc: "Konsultasi strategi branding dari sisi legalitas.", image: factoryImages.packagingArea },
];

export const merekPatenProcess = [
  { step: "01", title: "Konsultasi Merek", desc: "Diskusikan merek yang ingin didaftarkan dan cek ketersediaan nama." },
  { step: "02", title: "Cek Ketersediaan", desc: "Kami lakukan pengecekan nama merek di database DJKI." },
  { step: "03", title: "Pengajuan Dokumen", desc: "Persiapan dan pengajuan dokumen pendaftaran merek." },
  { step: "04", title: "Monitoring Proses", desc: "Kami pantau proses pendaftaran hingga terbit sertifikat." },
  { step: "05", title: "Sertifikat Terbit", desc: "Anda terima sertifikat merek resmi dari DJKI." },
  { step: "06", title: "Perpanjangan & Pembaruan", desc: "Layanan perpanjangan merek dan pembaruan data secara berkala." },
];

export const merekPatenBenefits = [
  { icon: "shield-check", title: "Perlindungan Hukum", desc: "Merek terdaftar mendapat perlindungan hukum dari pemalsuan dan pembajakan.", image: merekPatenImages.legalDoc },
  { icon: "award", title: "Aset Berharga", desc: "Merek adalah aset perusahaan yang dapat bernilai jutaan rupiah.", image: factoryImages.labResearch },
  { icon: "scroll-text", title: "Hak Eksklusif", desc: "Anda memiliki hak eksklusif untuk menggunakan merek tersebut.", image: merekPatenImages.legalDoc },
  { icon: "badge-check", title: "Kepercayaan Konsumen", desc: "Merek terdaftar meningkatkan kepercayaan konsumen terhadap produk Anda.", image: factoryImages.productionLine },
  { icon: "factory", title: "Lisensi & Royalti", desc: "Merek dapat dilisensikan kepada pihak lain untuk royalti.", image: factoryImages.packagingArea },
  { icon: "package", title: "Ekspansi Bisnis", desc: "Merek memudahkan Anda melakukan ekspansi bisnis dan waralaba.", image: factoryImages.samplingRoom },
];
