import { oemOdmImages, factoryImages } from "./images";

export const oemOdmStats = [
  { label: "Produk Berhasil Diproduksi", value: "500+" },
  { label: "Tahun Pengalaman", value: "10+" },
  { label: "Brand Partner", value: "200+" },
  { label: "Produk per Bulan", value: "50K+" },
];

export const oemOdmProcess = [
  { step: "01", title: "Konsultasi & Brief", desc: "Diskusikan kebutuhan produk, konsep, dan target pasar Anda. Tim kami siap mendengar ide Anda." },
  { step: "02", title: "Formulasi & Sample", desc: "Tim R&D mengembangkan formula dan membuat sample untuk dievaluasi." },
  { step: "03", title: "Revisi & Approval", desc: "Sample direvisi hingga sesuai dengan keinginan Anda sebelum produksi massal." },
  { step: "04", title: "Produksi Massal", desc: "Produksi dalam jumlah besar dengan pengawasan quality control ketat." },
  { step: "05", title: "QC & Packaging", desc: "Produk melewati pengecekan kualitas dan dikemas sesuai standar." },
  { step: "06", title: "Pengiriman", desc: "Produk siap dikirim ke alamat tujuan dengan aman dan tepat waktu." },
];

export const oemOdmAdvantages = [
  { icon: "factory", title: "Fasilitas Modern", desc: "Pabrik dengan peralatan teknologi terkini untuk hasil produksi optimal.", image: factoryImages.productionLine },
  { icon: "flask-conical", title: "Formula Custom", desc: "Formulasi eksklusif sesuai kebutuhan spesifik brand Anda.", image: factoryImages.formulasiLab },
  { icon: "scroll-text", title: "Legalitas Lengkap", desc: "BPOM, Halal, HKI — semua urusan legalitas kami bantu.", image: oemOdmImages.production },
  { icon: "package", title: "MOQ Fleksibel", desc: "Minimum order yang terjangkau untuk semua skala bisnis.", image: factoryImages.packagingArea },
  { icon: "microscope", title: "Tim R&D Ahli", desc: "Didukung tim riset dan pengembangan yang berpengalaman.", image: factoryImages.labResearch },
  { icon: "shield-check", title: "QC Ketat", desc: "Setiap produk melewati pengecekan kualitas menyeluruh.", image: factoryImages.qualityControl },
];
