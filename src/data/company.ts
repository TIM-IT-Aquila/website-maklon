import { companyImages, factoryImages } from "./images";

export const companyMetrics = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "200+", label: "Brand Partner" },
  { value: "500+", label: "Formula Siap Pakai" },
  { value: "50+", label: "Tenaga Ahli" },
] as const;

export const facilityGalleryItems = [
  {
    label: "Laboratorium R&D",
    image: factoryImages.labResearch,
    icon: "lucide:flask-conical",
    layout: "featured",
  },
  {
    label: "Ruang QC",
    image: factoryImages.qualityControl,
    icon: "lucide:microscope",
    layout: "square",
  },
  {
    label: "Lini Produksi",
    image: factoryImages.productionLine,
    icon: "lucide:factory",
    layout: "square",
  },
  {
    label: "Area Pengemasan",
    image: factoryImages.packagingArea,
    icon: "lucide:package",
    layout: "square",
  },
  {
    label: "Ruang Sampling",
    image: factoryImages.samplingRoom,
    icon: "lucide:beaker",
    layout: "square",
  },
  {
    label: "Gudang Bahan Baku",
    image: factoryImages.bahanBaku,
    icon: "lucide:warehouse",
    layout: "wide",
  },
] as const;

export const factoryScopeRooms = [
  { label: "Lab R&D", image: factoryImages.labResearch },
  { label: "Ruang Pengemasan", image: factoryImages.packagingArea },
  { label: "Ruang Quality Control", image: factoryImages.qualityControl },
  { label: "Gudang Bahan Baku & Kemasan", image: factoryImages.bahanBaku },
  { label: "Gudang Produk Jadi", image: factoryImages.productionLine },
  { label: "Ruang Timbang", image: factoryImages.samplingRoom },
  { label: "Ruang Antar Barang", image: factoryImages.productionLine },
  { label: "Ruang Mixing & Filling Serbuk", image: factoryImages.formulasiLab },
  {
    label: "Ruang Mixing & Filling Cairan, Setengah Padat & Padat",
    image: factoryImages.productionLine,
  },
  {
    label: "Ruang Mixing & Filling Cairan Setengah Padat",
    image: factoryImages.formulasiLab,
  },
  { label: "Ruang Kantor", image: companyImages.office },
  { label: "Ruang Ekstrak", image: factoryImages.labResearch },
  { label: "Ruang WIP", image: factoryImages.samplingRoom },
  { label: "Ruang Ganti Laki-Laki", image: companyImages.team },
  { label: "Ruang Ganti Perempuan", image: companyImages.team },
] as const;

export const visionMission = {
  vision:
    "Menjadi partner maklon terpercaya untuk membantu brand kecantikan berkembang dengan produk berkualitas.",
  missions: [
    "Membantu customer mengembangkan produk sesuai kebutuhan pasar dan tren terkini",
    "Menyediakan proses maklon yang mudah dipahami dari awal hingga akhir",
    "Menjaga kualitas produk dari sampling hingga produksi massal dengan standar tinggi",
    "Mendukung brand baru agar siap bersaing di industri kecantikan",
  ],
};

export const coreValues = [
  {
    title: "Innovation",
    icon: "lucide:lightbulb",
    desc: "Terus berinovasi dalam formulasi dan teknologi produksi untuk menghadirkan produk terbaik.",
  },
  {
    title: "Integrity",
    icon: "lucide:shield-check",
    desc: "Menjunjung tinggi kejujuran dan transparansi dalam setiap proses dan komunikasi dengan partner.",
  },
  {
    title: "Quality",
    icon: "lucide:sparkles",
    desc: "Setiap produk melalui quality control ketat — tidak ada kompromi terhadap kualitas.",
  },
  {
    title: "Partnership",
    icon: "lucide:handshake",
    desc: "Kesuksesan brand partner adalah kesuksesan kami. Kami tumbuh dan berkembang bersama.",
  },
];

export const ourStory = {
  badge: "Our Story",
  title: "Hadir untuk Membantu Brand Owner",
  paragraphs: [
    "Kami hadir untuk membantu para pemilik brand yang ingin membuat produk skincare tanpa harus memiliki pabrik sendiri. Dengan layanan maklon profesional, setiap ide produk dapat diwujudkan dari konsep hingga siap jual.",
    "Berawal dari keprihatinan melihat banyak brand lokal kesulitan menemukan partner produksi yang tepat, kami membangun sistem maklon yang transparan, terpercaya, dan berkualitas. Kini, kami telah membantu puluhan brand mewujudkan produk impian mereka.",
    "Dari konsultasi awal hingga produk sampai di tangan customer, kami dampingi setiap langkahnya. Tim R&D, produksi, dan legalitas kami siap mendukung Anda.",
  ],
  image: companyImages.labTeam,
};
