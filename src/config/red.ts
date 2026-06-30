import { rdImages, factoryImages } from "./images";

export const rdStats = [
  { label: "Produk Dikembangkan", value: "300+" },
  { label: "Tahun Riset", value: "10+" },
  { label: "Tim Ahli", value: "15+" },
  { label: "Formula Siap Pakai", value: "200+" },
];

export const rdPhases = [
  { step: "01", title: "Analisis Tren Pasar", desc: "Tim riset menganalisis tren terbaru untuk memastikan produk relevan dan kompetitif." },
  { step: "02", title: "Konsep Formula", desc: "Perumusan konsep bahan aktif dan komposisi yang tepat untuk produk Anda." },
  { step: "03", title: "Pengembangan Prototype", desc: "Prototype dikembangkan di laboratorium dengan pengujian bertahap." },
  { step: "04", title: "Uji Stabilitas & Keamanan", desc: "Produk diuji stabilitas, pH, viskositas, dan keamanan secara menyeluruh." },
  { step: "05", title: "Uji Klinis & Panel", desc: "Pengujian pada panel untuk memastikan efektivitas dan toleransi kulit." },
  { step: "06", title: "Finalisasi & Produksi", desc: "Formula final siap diproduksi massal dengan standar kualitas tertinggi." },
];

export const rdFacilities = [
  { icon: "microscope", title: "Lab Riset & Formulasi", desc: "Laboratorium riset dengan peralatan analisis terkini untuk pengembangan formula.", image: factoryImages.formulasiLab },
  { icon: "flask-conical", title: "Lab Uji Stabilitas", desc: "Ruang uji iklim untuk menguji stabilitas produk dalam berbagai kondisi suhu.", image: factoryImages.mikrobiologi },
  { icon: "atom", title: "Lab Mikrobiologi", desc: "Pengujian mikroba untuk menjamin keamanan dan sterilitas produk.", image: factoryImages.labResearch },
  { icon: "test-tube", title: "Lab Uji Bahan Baku", desc: "Laboratorium pengujian kualitas bahan baku sebelum masuk produksi.", image: factoryImages.bahanBaku },
  { icon: "search", title: "Uji Sensoris", desc: "Evaluasi tekstur, aroma, dan penampilan produk oleh panel terlatih.", image: factoryImages.samplingRoom },
  { icon: "layers", title: "Ruang Kestabilan", desc: "Chamber suhu untuk uji dipercepat stabilitas produk.", image: factoryImages.qualityControl },
];

export const rdInnovations = [
  { title: "Formula Bahan Aktif Alami", desc: "Mengembangkan formula dengan bahan aktif dari alam yang aman dan efektif untuk kulit.", image: rdImages.naturalIngredients },
  { title: "Teknologi Enkapsulasi", desc: "Teknologi mikroenkapsulasi untuk melindungi bahan aktif dan meningkatkan penyerapan kulit.", image: rdImages.encapsulation },
  { title: "Formula Bebas Bahan Berbahaya", desc: "Komitmen kami terhadap keamanan dengan formula tanpa paraben, alkohol, dan merkuri.", image: rdImages.safeFormula },
];
