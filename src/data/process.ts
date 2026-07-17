export type ProcessImageKey =
  | "konsultasi"
  | "riset"
  | "sample"
  | "revisi"
  | "desain"
  | "legalitas"
  | "produksi"
  | "qc"
  | "pengiriman";

export interface ProcessStep {
  step: number;
  title: string;
  icon: string;
  desc: string;
  detail: string;
  imageKey: ProcessImageKey;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Konsultasi Konsep",
    icon: "lucide:message-circle",
    desc: "Diskusikan ide produk, konsep, dan target pasar yang diinginkan.",
    detail:
      "Tim konsultan kami akan menggali visi brand Anda — dari jenis produk, target konsumen, hingga posisi harga. Konsultasi ini GRATIS dan tanpa komitmen. Anda cukup membawa ide, kami bantu formulasikan menjadi brief produksi yang siap dieksekusi.",
    imageKey: "konsultasi",
  },
  {
    step: 2,
    title: "Riset & Formulasi",
    icon: "lucide:flask-conical",
    desc: "Tim R&D meriset dan mengembangkan formula sesuai kebutuhan.",
    detail:
      "Laboratorium R&D kami menganalisis tren pasar terkini dan mengembangkan formula eksklusif untuk brand Anda. Setiap bahan baku dipilih berdasarkan keamanan, stabilitas, dan efektivitas — memastikan produk Anda unggul di pasaran.",
    imageKey: "riset",
  },
  {
    step: 3,
    title: "Pembuatan Sample",
    icon: "lucide:beaker",
    desc: "Sample produk dibuat untuk evaluasi sebelum produksi massal.",
    detail:
      "Setelah formula disetujui, kami membuat sample dalam batch kecil. Anda bisa mencoba langsung tekstur, aroma, dan performa produk. Tahap ini krusial untuk memastikan ekspektasi Anda terpenuhi sebelum naik ke skala produksi.",
    imageKey: "sample",
  },
  {
    step: 4,
    title: "Revisi Sample",
    icon: "lucide:refresh-cw",
    desc: "Sample direvisi hingga sesuai dengan keinginan brand Anda.",
    detail:
      "Feedback Anda adalah prioritas. Tim R&D akan merevisi formula, aroma, warna, atau tekstur hingga produk benar-benar sesuai standar yang Anda inginkan. Tidak ada biaya tambahan untuk revisi dalam batas wajar — kami berkomitmen pada kepuasan Anda.",
    imageKey: "revisi",
  },
  {
    step: 5,
    title: "Pengujian",
    icon: "lucide:flask-conical",
    desc: "Formula diuji untuk memastikan kualitas, keamanan, dan kestabilannya.",
    legacyDetail:
      "Tim desain kami akan mengembangkan konsep kemasan — dari pemilihan material botol/jar, desain label, hingga mockup 3D. Kami pastikan kemasan tidak hanya estetik tapi juga fungsional dan compliant dengan regulasi BPOM.",
    detail:
      "Formula melalui pengujian dasar seperti pH, stabilitas, dan kompatibilitas kemasan sebelum dilanjutkan ke tahap berikutnya. Hasilnya memastikan produk siap dikembangkan sesuai standar kualitas.",
    imageKey: "desain",
  },
  {
    step: 6,
    title: "Desain Kemasan",
    icon: "lucide:palette",
    desc: "Kemasan dirancang sesuai konsep dan identitas brand Anda.",
    detail:
      "Tim desain kami akan mengembangkan konsep kemasan — dari pemilihan material botol/jar, desain label, hingga mockup 3D. Kami pastikan kemasan tidak hanya estetik tapi juga fungsional dan compliant dengan regulasi BPOM.",
    imageKey: "desain",
  },
  {
    step: 7,
    title: "Pengurusan Legalitas",
    icon: "lucide:file-text",
    desc: "BPOM, Halal, HKI, dan dokumen legal lain diurus tim kami.",
    detail:
      "Kami menangani seluruh proses legalitas dari A-Z: notifikasi BPOM, sertifikasi Halal MUI, uji laboratorium, hingga pendaftaran HKI merek. Anda fokus membangun brand, birokrasi kami yang urus. Semua dokumen legal diserahkan lengkap.",
    imageKey: "legalitas",
  },
  {
    step: 8,
    title: "Produksi Massal",
    icon: "lucide:factory",
    desc: "Produksi skala besar dengan standar CPKB dan GMP.",
    detail:
      "Setelah sample final disetujui dan legalitas terbit, produksi massal dimulai. Fasilitas kami mengikuti standar CPKB (Cara Produksi yang Baik) dan GMP. Setiap batch diproduksi dengan presisi tinggi dan pengawasan mutu berlapis.",
    imageKey: "produksi",
  },
  {
    step: 9,
    title: "Quality Control",
    icon: "lucide:search",
    desc: "Pemeriksaan kualitas menyeluruh sebelum produk dikirim.",
    detail:
      "QC kami melakukan serangkaian pengujian: stabilitas mikrobiologi, uji pH, viskositas, kebocoran kemasan, hingga uji organoleptik. Hanya produk yang lolos 100% pemeriksaan yang diizinkan masuk ke tahap pengiriman. Kualitas adalah harga mati.",
    imageKey: "qc",
  },
  {
    step: 10,
    title: "Pengiriman Produk",
    icon: "lucide:truck",
    desc: "Produk siap dikirim ke alamat Anda dengan aman dan tepat waktu.",
    detail:
      "Produk jadi dikemas dengan standar logistik profesional — menggunakan bubble wrap, kardus double-wall, dan label fragile jika diperlukan. Kami bekerja sama dengan ekspedisi terpercaya untuk pengiriman ke seluruh Indonesia. Anda tinggal terima dan siap jual.",
    imageKey: "pengiriman",
  },
];
