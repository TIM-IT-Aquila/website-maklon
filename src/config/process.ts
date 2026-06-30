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
  imageKey: ProcessImageKey;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Konsultasi Konsep",
    icon: "lucide:message-circle",
    desc: "Diskusikan ide produk, konsep, dan target pasar yang diinginkan secara gratis.",
    imageKey: "konsultasi",
  },
  {
    step: 2,
    title: "Riset & Formulasi",
    icon: "lucide:flask-conical",
    desc: "Tim R&D melakukan riset dan mengembangkan formula sesuai kebutuhan dan tren pasar.",
    imageKey: "riset",
  },
  {
    step: 3,
    title: "Pembuatan Sample",
    icon: "lucide:beaker",
    desc: "Sample produk dibuat untuk evaluasi dan persetujuan sebelum produksi massal.",
    imageKey: "sample",
  },
  {
    step: 4,
    title: "Revisi Sample",
    icon: "lucide:refresh-cw",
    desc: "Sample direvisi hingga sesuai dengan keinginan brand Anda.",
    imageKey: "revisi",
  },
  {
    step: 5,
    title: "Desain Kemasan",
    icon: "lucide:palette",
    desc: "Kemasan produk dirancang sesuai konsep dan branding perusahaan Anda.",
    imageKey: "desain",
  },
  {
    step: 6,
    title: "Pengurusan Legalitas",
    icon: "lucide:file-text",
    desc: "Proses BPOM, Halal, HKI, dan dokumen legalitas lainnya diurus tim kami.",
    imageKey: "legalitas",
  },
  {
    step: 7,
    title: "Produksi Massal",
    icon: "lucide:factory",
    desc: "Produksi dalam jumlah besar dengan standar kualitas dan pengawasan ketat.",
    imageKey: "produksi",
  },
  {
    step: 8,
    title: "Quality Control",
    icon: "lucide:search",
    desc: "Setiap produk diperiksa kualitasnya secara menyeluruh sebelum dikirim.",
    imageKey: "qc",
  },
  {
    step: 9,
    title: "Pengiriman Produk",
    icon: "lucide:truck",
    desc: "Produk siap dikirim ke alamat yang dituju dengan aman dan tepat waktu.",
    imageKey: "pengiriman",
  },
];