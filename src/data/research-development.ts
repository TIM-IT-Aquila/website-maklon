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
    title: "Uji Stabilitas Suhu",
    icon: "lucide:thermometer",
    desc: "Formula diuji pada suhu 40°C, 50°C, dan cycling test untuk memastikan tekstur, warna, dan aroma tetap stabil.",
    detail:
      "Uji dipercepat (accelerated stability) selama minimal 12 minggu. Parameter: pH, viskositas, warna, bau, dan homogenitas dipantau rutin.",
    duration: "12–16 minggu",
  },
  {
    step: 2,
    title: "Uji Mikroba & Bakteri",
    icon: "lucide:microscope",
    desc: "Pengujian TPC, yeast & mold, serta challenge test di lab mikrobiologi — produk dijamin aman dan higienis.",
    detail:
      "Dilakukan di lab mikrobiologi bersertifikat. Meliputi total plate count, uji jamur, dan challenge test dengan bakteri patogen sesuai standar BPOM.",
    duration: "2–4 minggu",
  },
  {
    step: 3,
    title: "Tes Iritasi Kulit",
    icon: "lucide:heart-pulse",
    desc: "Uji patch pada panel terlatih sesuai protokol dermatologi — memastikan formula lembut dan tidak mengiritasi.",
    detail:
      "Uji patch 48–72 jam pada panel 30+ orang. Skor iritasi dinilai oleh dermatolog untuk memastikan keamanan pada kulit sensitif.",
    duration: "1–2 minggu",
  },
  {
    step: 4,
    title: "Pengiriman Sampel Fisik",
    icon: "lucide:package-check",
    desc: "Sampel dikirim ke rumah Anda untuk dicoba langsung — revisi formula hingga Anda 100% puas.",
    detail:
      "Sampel V1, V1.1, hingga final dikirim ke alamat klien. Feedback tekstur, aroma, dan performa langsung menjadi acuan revisi formula.",
    duration: "3–7 hari pengiriman",
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

export const rdFacilities = [
  {
    icon: "lucide:microscope",
    title: "Lab Riset & Formulasi",
    desc: "Laboratorium riset dengan peralatan analisis terkini untuk pengembangan formula.",
    detail:
      "Dilengkapi homogenizer, pH meter presisi, viskometer Brookfield, dan sentrifus. Semua alat dikalibrasi berkala sesuai standar ISO.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: "lucide:thermometer",
    title: "Lab Uji Stabilitas",
    desc: "Ruang uji iklim untuk menguji stabilitas produk dalam berbagai kondisi suhu.",
    detail:
      "Chamber dengan kontrol suhu -10°C hingga 60°C dan humidity control. Mampu mensimulasikan kondisi tropis hingga subtropis untuk pasar ekspor.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: "lucide:shield-check",
    title: "Lab Mikrobiologi",
    desc: "Pengujian mikroba untuk menjamin keamanan dan sterilitas produk.",
    detail:
      "Laminar air flow class II, autoclave, inkubator, dan colony counter. Pengujian meliputi TPC, yeast & mold, serta challenge test sesuai standar BPOM.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: "lucide:test-tube",
    title: "Lab Uji Bahan Baku",
    desc: "Laboratorium pengujian kualitas bahan baku sebelum masuk produksi.",
    detail:
      "Setiap bahan baku diuji kemurnian, identitas, dan kadar sebelum diterima. Sistem batch tracking memastikan traceability dari bahan baku hingga produk jadi.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "lucide:eye",
    title: "Uji Sensoris & Organoleptik",
    desc: "Evaluasi tekstur, aroma, dan penampilan produk oleh panel terlatih.",
    detail:
      "Panel terlatih mengevaluasi more dari 15 parameter sensoris termasuk spreadability, absorption rate, dan after-feel. Hasil menjadi acuan perbaikan formula.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: "lucide:layers",
    title: "Ruang Scale-Up Pilot",
    desc: "Fasilitas scale-up dari skala lab ke produksi untuk validasi formula.",
    detail:
      "Mixer pilot 10-50 kg untuk simulasi kondisi produksi. Setiap formula di-scale-up bertahap untuk memastikan konsistensi sebelum produksi massal.",
    color: "from-cyan-500 to-teal-600",
  },
];
