import type {
  BureaucracyStep,
  LegalPillar,
  UploadDocumentField,
  VaultDocument,
} from "../lib/merek-paten-legal";

export const legalPillars: LegalPillar[] = [
  {
    id: "haki",
    title: "Hak Paten Merek (HAKI)",
    shortTitle: "HAKI / Merek",
    description:
      "Pendaftaran merek ke DJKI, pengecekan nama, monitoring permohonan, hingga sertifikat terbit — brand Anda terlindungi secara hukum.",
    statValue: "150+",
    statDesc: "Merek terdaftar",
    statusLabel: "Kami Urus Penuh",
    badgeVariant: "success",
    icon: "lucide:shield-check",
    services: ["Cek ketersediaan nama merek", "Pendaftaran DJKI", "Monitoring & keberatan", "Sertifikat merek resmi"],
  },
  {
    id: "bpom",
    title: "Izin Edar BPOM (Nomor NA)",
    shortTitle: "BPOM / NA",
    description:
      "Pengurusan notifikasi kosmetik (NA) dari penyusunan dokumen, uji lab, hingga nomor izin edar resmi terbit.",
    statValue: "200+",
    statDesc: "Produk legal edar",
    statusLabel: "Kami Urus Penuh",
    badgeVariant: "info",
    icon: "lucide:scroll-text",
    services: ["Penyusunan dokumen BPOM", "Koordinasi uji lab", "Pendampingan audit", "Penerbitan Nomor NA"],
  },
  {
    id: "halal",
    title: "Sertifikasi Halal (MUI/BPJPH)",
    shortTitle: "Halal",
    description:
      "Proses sertifikasi halal produk skincare melalui LPPOM MUI / BPJPH — dari audit bahan hingga sertifikat halal terbit.",
    statValue: "100+",
    statDesc: "Sertifikat halal",
    statusLabel: "Kami Urus Penuh",
    badgeVariant: "success",
    icon: "lucide:badge-check",
    services: ["Audit bahan & proses", "Pengajuan ke LPPOM/BPJPH", "Pendampingan inspeksi", "Sertifikat halal resmi"],
  },
];

export const bureaucracySteps: BureaucracyStep[] = [
  {
    id: "name-check",
    step: 1,
    title: "Pengecekan Nama Merek",
    description: "Tim kami cek ketersediaan nama di database DJKI.",
    status: "completed",
    icon: "lucide:search",
  },
  {
    id: "submit",
    step: 2,
    title: "Pengajuan Dokumen",
    description: "Persiapan & pengajuan berkas lengkap ke instansi.",
    status: "completed",
    icon: "lucide:file-text",
  },
  {
    id: "lab",
    step: 3,
    title: "Uji Lab BPOM",
    description: "Pengujian formula & keamanan produk di lab terakreditasi.",
    status: "completed",
    icon: "lucide:flask-conical",
  },
  {
    id: "audit",
    step: 4,
    title: "Audit Instansi",
    description: "Review & audit oleh BPOM dan instansi terkait.",
    status: "current",
    icon: "lucide:building-2",
  },
  {
    id: "certificate",
    step: 5,
    title: "Nomor BPOM & Sertifikat Terbit",
    description: "Nomor NA, sertifikat HAKI & halal resmi diterbitkan.",
    status: "upcoming",
    icon: "lucide:award",
  },
];

export const bureaucracyAffirmation =
  "Semua proses birokrasi kami yang tangani. Anda fokus memikirkan pemasaran brand Anda.";

export const brandCheckWaMessage =
  "Halo, saya ingin cek ketersediaan nama merek secara gratis untuk produk skincare saya.";

export const uploadDocumentFields: UploadDocumentField[] = [
  {
    id: "nib",
    label: "NIB (Nomor Induk Berusaha)",
    hint: "PDF atau JPG — scan berwarna, semua halaman terbaca.",
    accept: ".pdf,.jpg,.jpeg,.png",
    maxSizeMb: 5,
  },
  {
    id: "ktp",
    label: "KTP Direktur / Pemilik Brand",
    hint: "PDF atau JPG — foto jelas, tidak blur.",
    accept: ".pdf,.jpg,.jpeg,.png",
    maxSizeMb: 5,
  },
  {
    id: "npwp",
    label: "NPWP Perusahaan",
    hint: "PDF atau JPG — sesuai nama badan usaha pada NIB.",
    accept: ".pdf,.jpg,.jpeg,.png",
    maxSizeMb: 5,
  },
];

export const vaultDocuments: VaultDocument[] = [
  {
    id: "haki-cert",
    name: "Sertifikat Merek HAKI",
    fileType: "PDF",
    issuedAt: "05 Jul 2026",
    status: "ready",
    sizeLabel: "1.2 MB",
  },
  {
    id: "bpom-na",
    name: "Nomor NA BPOM",
    fileType: "PDF",
    issuedAt: "Draft — dalam proses",
    status: "processing",
    sizeLabel: "—",
  },
  {
    id: "halal-cert",
    name: "Sertifikat Halal MUI/BPJPH",
    fileType: "PDF",
    issuedAt: "12 Jun 2026",
    status: "ready",
    sizeLabel: "890 KB",
  },
  {
    id: "nib-copy",
    name: "Salinan NIB Terdaftar",
    fileType: "PDF",
    issuedAt: "10 Mei 2026",
    status: "archived",
    sizeLabel: "640 KB",
  },
];

export const badgeVariantClass = {
  success: "badge-success",
  warning: "badge-warning",
  info: "badge-info",
} as const;

export const vaultStatusBadge = {
  ready: { label: "Siap Unduh", class: "badge-success badge-outline" },
  processing: { label: "Diproses", class: "badge-warning badge-outline" },
  archived: { label: "Arsip", class: "badge-ghost" },
} as const;

export const defaultActivePillarId = "haki";
