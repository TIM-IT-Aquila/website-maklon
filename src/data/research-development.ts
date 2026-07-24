export const rdHero = {
  image: "/assets/hero-home/labreserch.jpg",
  alt: "Laboratorium riset dan pengembangan formula skincare Magna",
};

export const rdStats = [
  { label: "Produk Dikembangkan", value: "300+" },
  { label: "Tahun Riset", value: "10+" },
  { label: "Tim Ahli", value: "15+" },
  { label: "Formula Siap Pakai", value: "200+" },
];

// ─── Highlight keahlian tim & standar lab (header pendukung) ──────────
export const rdCredentials = [
  { icon: "lucide:graduation-cap", label: "Tim Apoteker & Kimia Farmasi" },
  { icon: "lucide:building-2", label: "Lab Modern Standar ISO" },
  { icon: "lucide:shield-check", label: "Fasilitas Bersertifikat CPKB" },
];

// ─── Ingredient Library — bahan aktif populer ─────────────────────────
export const rdIngredientCategories = [
  { id: "all", label: "Semua" },
  { id: "Anti-Aging", label: "Anti-Aging" },
  { id: "Soothing", label: "Soothing" },
  { id: "Barrier Repair", label: "Barrier" },
  { id: "Brightening", label: "Brightening" },
  { id: "Hydration", label: "Hydration" },
  { id: "Acne Care", label: "Acne Care" },
  { id: "Firming", label: "Firming" },
  { id: "Antioxidant", label: "Antioxidant" },
] as const;

export const rdIngredientLibrary = [
  {
    id: "retinol",
    name: "Encapsulated Retinol",
    tag: "Anti-Aging",
    icon: "lucide:moon",
    desc: "Retinol terenkapsulasi — melepas bahan aktif bertahap, mengurangi garis halus tanpa iritasi berlebih.",
    detail:
      "Teknologi enkapsulasi melindungi retinol dari degradasi dan melepaskan secara terkontrol. Cocok untuk serum malam dan krim anti-aging dengan klaim mengurangi kerutan halus.",
    benefit: "Mengurangi garis halus & meratakan tekstur kulit",
  },
  {
    id: "cica",
    name: "Centella Asiatica Extract",
    tag: "Soothing",
    icon: "lucide:leaf",
    desc: "CICA menenangkan kulit sensitif, meredakan kemerahan, dan mempercepat regenerasi kulit.",
    detail:
      "Ekstrak terstandarisasi dengan kandungan asiatikoside tinggi. Ideal untuk produk calming, barrier repair, dan post-treatment skincare.",
    benefit: "Menenangkan & mempercepat pemulihan kulit",
  },
  {
    id: "ceramide",
    name: "Ceramide Complex",
    tag: "Barrier Repair",
    icon: "lucide:layers",
    desc: "Memperkuat skin barrier, mengunci kelembapan, dan melindungi kulit dari iritasi eksternal.",
    detail:
      "Kombinasi ceramide NP, AP, dan EOP meniru komposisi lipid alami kulit. Sangat efektif untuk moisturizer dan barrier cream.",
    benefit: "Memperkuat lapisan pelindung kulit",
  },
  {
    id: "niacinamide",
    name: "10% Niacinamide",
    tag: "Brightening",
    icon: "lucide:sun",
    desc: "Vitamin B3 konsentrasi tinggi — mencerahkan, meratakan warna kulit, dan menyamarkan noda.",
    detail:
      "Konsentrasi 10% terbukti efektif untuk hiperpigmentasi ringan dan mengontrol minyak berlebih. Dapat dikombinasikan dengan bahan aktif lain.",
    benefit: "Mencerahkan & meratakan warna kulit",
  },
  {
    id: "ha",
    name: "Hyaluronic Acid",
    tag: "Hydration",
    icon: "lucide:droplets",
    desc: "Menahan air hingga 1000x beratnya — kulit terhidrasi intensif, plump, dan kenyal.",
    detail:
      "Multi-weight HA (low, medium, high molecular) untuk hidrasi lapisan permukaan hingga dalam. Cocok untuk toner, serum, dan essence.",
    benefit: "Hidrasi intensif & kulit kenyal",
  },
  {
    id: "bha",
    name: "Salicylic Acid (BHA)",
    tag: "Acne Care",
    icon: "lucide:sparkles",
    desc: "Eksfoliasi hingga ke dalam pori — membersihkan komedo dan membantu mengatasi jerawat.",
    detail:
      "BHA larut minyak, efektif masuk ke pori untuk mengangkat sel kulit mati. Ideal untuk acne spot treatment dan facial wash jerawat.",
    benefit: "Membersihkan pori & mengurangi jerawat",
  },
  {
    id: "peptide",
    name: "Peptide Complex",
    tag: "Firming",
    icon: "lucide:dna",
    desc: "Merangsang produksi kolagen — kulit lebih kencang, elastis, dan tampak awet muda.",
    detail:
      "Peptide signal seperti Matrixyl dan Argireline membantu merangsang sintesis kolagen. Populer untuk serum anti-aging premium.",
    benefit: "Mengencangkan & memperbaiki elastisitas",
  },
  {
    id: "vitaminc",
    name: "Vitamin C (SAP)",
    tag: "Antioxidant",
    icon: "lucide:citrus",
    desc: "Bentuk vitamin C stabil — antioksidan kuat yang mencerahkan dan melindungi dari radikal bebas.",
    detail:
      "Sodium Ascorbyl Phosphate lebih stabil dari ascorbic acid murni. Cocok untuk serum brightening siang hari.",
    benefit: "Antioksidan & mencerahkan kulit",
  },
];

// ─── Alur pengujian cairan sebelum produksi ───────────────────────────
export const rdTestingFlow = [
  {
    step: 1,
    title: "Uji Logam Berat",
    icon: "lucide:atom",
    desc: "Pengujian kandungan logam berat pada formula produk.",
    detail: "Informasi pengujian logam berat dapat dikonsultasikan dengan tim Magna.",
    duration: "Pengujian laboratorium",
  },
  {
    step: 2,
    title: "Uji Mikrobiologi",
    icon: "lucide:microscope",
    desc: "Pengujian mikrobiologi pada formula produk.",
    detail: "Informasi pengujian mikrobiologi dapat dikonsultasikan dengan tim Magna.",
    duration: "Pengujian laboratorium",
  },
  {
    step: 3,
    title: "Uji Dermatologi (Patch Test)",
    icon: "lucide:heart-pulse",
    desc: "Pengujian dermatologi dengan metode patch test.",
    detail: "Informasi patch test dapat dikonsultasikan dengan tim Magna.",
    duration: "Pengujian laboratorium",
  },
  {
    step: 4,
    title: "Uji Hidrokuinon",
    icon: "lucide:flask-conical",
    desc: "Pengujian kandungan hidrokuinon pada formula produk.",
    detail: "Informasi pengujian hidrokuinon dapat dikonsultasikan dengan tim Magna.",
    duration: "Pengujian laboratorium",
  },
];

// ─── Fasilitas Laboratorium ───────────────────────────────────────────
export const rdFacilities = [
  {
    title: "Lab Formulasi",
    icon: "lucide:flask-conical",
    desc: "Laboratorium formulasi untuk meracik dan mengembangkan formula skincare sesuai kebutuhan.",
    detail: "Tim R&D kami melakukan formulasi bahan aktif dengan dosis tepat, memastikan stabilitas dan efektivitas produk sebelum lanjut ke tahap produksi.",
    color: "from-primary to-primary/60",
  },
  {
    title: "Lab Uji Stabilitas",
    icon: "lucide:thermometer",
    desc: "Uji stabilitas dipercepat untuk memastikan formula bertahan dalam berbagai kondisi penyimpanan.",
    detail: "Pengujian dilakukan dalam climate chamber dengan suhu dan kelembaban terkontrol selama periode tertentu untuk memprediksi shelf life produk.",
    color: "from-blue-500 to-blue-400",
  },
  {
    title: "Lab Uji Mikrobiologi",
    icon: "lucide:microscope",
    desc: "Pengujian mikroba untuk memastikan produk aman dari kontaminasi bakteri dan jamur.",
    detail: "Setiap batch produk menjalani uji angka lempeng total (ALT), angka kapang khamir (AKK), dan uji patogen untuk memenuhi standar BPOM.",
    color: "from-emerald-500 to-emerald-400",
  },
  {
    title: "Lab Uji Sensoris",
    icon: "lucide:hand",
    desc: "Evaluasi tekstur, aroma, dan penampilan produk oleh panel terlatih.",
    detail: "Panelis terlatih mengevaluasi organoleptik produk — mulai dari warna, aroma, tekstur saat diaplikasikan, hingga setelah pemakaian.",
    color: "from-amber-500 to-amber-400",
  },
];

// ─── FAQ singkat R&D ──────────────────────────────────────────────────
export const rdLabFaqs = [
  {
    q: "Berapa lama proses pengembangan formula dari awal?",
    a: "Rata-rata 4–8 minggu untuk formula standar, tergantung kompleksitas bahan aktif dan jumlah revisi sampel yang dibutuhkan.",
  },
  {
    q: "Apakah saya bisa request bahan aktif khusus?",
    a: "Ya. Tim R&D kami dapat meracik formula dengan bahan aktif pilihan Anda, selama memenuhi regulasi BPOM dan standar keamanan kosmetik.",
  },
  {
    q: "Apakah formula sudah teruji keamanannya?",
    a: "Setiap formula melewati uji stabilitas, mikrobiologi, dan iritasi kulit sebelum sampel dikirim ke klien dan sebelum produksi massal.",
  },
  {
    q: "Berapa kali revisi sampel yang diperbolehkan?",
    a: "Kami fleksibel — revisi sampel dilakukan hingga Anda puas dengan tekstur, aroma, dan performa produk sebelum finalisasi.",
  },
];

