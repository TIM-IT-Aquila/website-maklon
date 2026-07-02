import { companyImages, factoryImages, avatarImages } from "./images";

export const companyPurpose = [
  {
    icon: "lucide:clipboard-check",
    title: "Untuk Kebutuhan Branding",
    desc: "Website ini hadir sebagai company profile resmi untuk memperkenalkan perusahaan jasa maklon secara profesional kepada calon mitra bisnis.",
    image: companyImages.office,
  },
  {
    icon: "lucide:flask-conical",
    title: "Untuk Memperkenalkan Layanan",
    desc: "Menampilkan secara lengkap layanan maklon yang tersedia — dari skincare, bodycare, kosmetik, hingga custom formula — agar calon customer mudah memahami.",
    image: factoryImages.labResearch,
  },
  {
    icon: "lucide:handshake",
    title: "Untuk Membangun Kepercayaan",
    desc: "Menyajikan informasi fasilitas, proses produksi, dan keunggulan perusahaan untuk membangun kepercayaan dan kredibilitas di mata calon customer.",
    image: companyImages.team,
  },
  {
    icon: "lucide:message-circle",
    title: "Untuk Mengarahkan ke WhatsApp",
    desc: "Setiap halaman dirancang dengan CTA yang mengarahkan calon customer ke konsultasi WhatsApp sebagai langkah awal kerja sama maklon.",
    image: companyImages.building,
  },
];

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
    "Kami hadir untuk membantu para pemilik brand yang ingin membuat produk skincare dan kosmetik tanpa harus memiliki pabrik sendiri. Dengan layanan maklon profesional, setiap ide produk dapat diwujudkan dari konsep hingga siap jual.",
    "Berawal dari keprihatinan melihat banyak brand lokal kesulitan menemukan partner produksi yang tepat, kami membangun sistem maklon yang transparan, terpercaya, dan berkualitas. Kini, kami telah membantu puluhan brand mewujudkan produk impian mereka.",
    "Dari konsultasi awal hingga produk sampai di tangan customer, kami dampingi setiap langkahnya. Tim R&D, produksi, dan legalitas kami siap mendukung Anda.",
  ],
  image: companyImages.labTeam,
};

export const trustPlaceholder = [
  {
    title: "Dipercaya untuk Pengembangan",
    desc: "Dipercaya dalam pengembangan berbagai jenis produk kecantikan mulai dari skincare, bodycare, hingga kosmetik dengan formula yang disesuaikan.",
    icon: "lucide:handshake",
    image: factoryImages.formulasiLab,
  },
  {
    title: "Mendukung Brand Baru",
    desc: "Mendukung brand baru dalam proses pembuatan produk dari nol — termasuk formulasi, sampling, produksi, hingga pengurusan legalitas BPOM dan Halal.",
    icon: "lucide:rocket",
    image: factoryImages.productionLine,
  },
  {
    title: "Fokus pada Kualitas",
    desc: "Fokus pada kualitas, formula, dan tampilan produk agar setiap hasil maklon memiliki standar tinggi dan siap bersaing di pasar.",
    icon: "lucide:star",
    image: factoryImages.qualityControl,
  },
];

export const teamMembers = [
  {
    name: "Dr. Anita Wijaya",
    role: "CEO & Founder",
    avatar: avatarImages.founder,
    bio: "Lebih dari 15 tahun pengalaman di industri kosmetik dan formulasi skincare.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Budi Santoso",
    role: "Head of R&D",
    avatar: avatarImages.man1,
    bio: "Ahli formulasi dengan 10+ tahun riset pengembangan produk kecantikan.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Citra Dewi",
    role: "Quality Control Manager",
    avatar: avatarImages.woman1,
    bio: "Memastikan setiap produk lolos standar kualitas tinggi sebelum dipasarkan.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dedi Kurniawan",
    role: "Production Manager",
    avatar: avatarImages.man2,
    bio: "Mengelola lini produksi dengan efisiensi dan menjaga konsistensi kualitas.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Eka Rahmawati",
    role: "Head of Marketing",
    avatar: avatarImages.woman2,
    bio: "Strategi pemasaran dan branding untuk membantu produk partner sukses di pasar.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Fajar Hidayat",
    role: "Legal & Compliance",
    avatar: avatarImages.woman3,
    bio: "Spesialis pengurusan BPOM, Halal, HKI, dan legalitas produk kecantikan.",
    social: { linkedin: "#", twitter: "#" },
  },
];

export const companyWorkProcess = [
  {
    step: 1,
    title: "Konsultasi Awal",
    desc: "Diskusikan ide dan kebutuhan produk Anda bersama tim ahli kami. Kami bantu arahkan dari konsep ke realisasi.",
    icon: "lucide:messages-square",
    color: "from-secondary to-secondary/70",
  },
  {
    step: 2,
    title: "Formulasi & Sampling",
    desc: "Tim R&D kami mengembangkan formula sesuai brief dan membuat sample untuk Anda evaluasi.",
    icon: "lucide:flask-conical",
    color: "from-secondary to-secondary/70",
  },
  {
    step: 3,
    title: "Desain & Legalitas",
    desc: "Kami bantu desain kemasan profesional dan urus legalitas BPOM, Halal, dan HKI produk Anda.",
    icon: "lucide:scroll-text",
    color: "from-secondary to-secondary/70",
  },
  {
    step: 4,
    title: "Produksi & QC",
    desc: "Produksi massal dengan quality control ketat di setiap batch untuk konsistensi kualitas.",
    icon: "lucide:factory",
    color: "from-secondary to-secondary/70",
  },
  {
    step: 5,
    title: "Pengiriman & Dukungan",
    desc: "Produk siap dikirim ke tangan Anda. Tim support kami siap mendampingi pasca produksi.",
    icon: "lucide:truck",
    color: "from-secondary to-secondary/70",
  },
];