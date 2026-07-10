export const oemFlow = [
  { step: 1, title: "Konsultasi", icon: "lucide:message-circle", desc: "Pilih formula atau brief produk" },
  { step: 2, title: "Sampling", icon: "lucide:flask-conical", desc: "Sample dibuat & direview" },
  { step: 3, title: "Approval", icon: "lucide:check-circle", desc: "Formula disetujui untuk produksi" },
  { step: 4, title: "Produksi", icon: "lucide:factory", desc: "Produksi massal + QC ketat" },
  { step: 5, title: "Launch", icon: "lucide:rocket", desc: "Produk siap edar" },
];

export const odmFlow = [
  { step: 1, title: "Brief Brand", icon: "lucide:clipboard-list", desc: "Tim dalami visi & target pasar" },
  { step: 2, title: "Formulasi", icon: "lucide:microscope", desc: "R&D kembangkan formula eksklusif" },
  { step: 3, title: "Branding", icon: "lucide:paintbrush", desc: "Desain kemasan & identitas" },
  { step: 4, title: "Produksi", icon: "lucide:factory", desc: "Produksi + legalitas" },
  { step: 5, title: "Launch", icon: "lucide:rocket", desc: "Produk siap jual" },
];

export const comparisonRows = [
  { aspect: "Formula", oem: "Pilih katalog / bawa sendiri", odm: "Dikembangkan eksklusif oleh R&D" },
  { aspect: "MOQ", oem: "Mulai 1.000 pcs", odm: "Mulai 3.000 pcs" },
  { aspect: "Biaya R&D", oem: "Tidak ada", odm: "Termasuk biaya formulasi" },
  { aspect: "Timeline", oem: "30–60 hari", odm: "60–90 hari" },
  { aspect: "Cocok Untuk", oem: "Brand yang ingin cepat launch", odm: "Brand yang ingin produk unik" },
];

export const oemOdmFaqs = [
  {
    q: "Apa perbedaan utama OEM dan ODM?",
    a: "OEM: Anda memilih formula dari katalog atau membawa formula sendiri, kami produksikan. ODM: Tim R&D kami mengembangkan formula eksklusif dari nol berdasarkan brief Anda — termasuk desain kemasan.",
  },
  {
    q: "Berapa MOQ untuk OEM dan ODM?",
    a: "OEM umumnya mulai 1.000 pcs, ODM mulai 3.000 pcs karena melibatkan proses R&D formulasi. MOQ pasti dan penawaran harga diberikan setelah konsultasi dengan tim kami via WhatsApp.",
  },
  {
    q: "Apakah dibantu pengurusan BPOM dan Halal?",
    a: "Ya. Tim legal kami mendampingi notifikasi BPOM, sertifikasi Halal, dan HKI merek hingga produk siap edar nasional.",
  },
  {
    q: "Berapa lama proses dari awal sampai produk jadi?",
    a: "OEM 30–60 hari (formula siap), ODM 60–90 hari (termasuk formulasi & sampling). Timeline detail diberikan setelah konsultasi awal.",
  },
];

export const trustHighlights = [
  { icon: "lucide:package", label: "MOQ Fleksibel", value: "500+ pcs" },
  { icon: "lucide:clock", label: "Lead Time", value: "30–90 hari" },
  { icon: "lucide:scroll-text", label: "Legalitas", value: "BPOM + Halal" },
  { icon: "lucide:shield-check", label: "Quality", value: "QC 3 Tahap" },
];
