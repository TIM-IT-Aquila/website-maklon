export const halalGuarantees = [
  {
    id: "ingredients",
    icon: "lucide:leaf",
    title: "Bahan Baku 100% Halal",
    desc: "Semua ingredien bersertifikat resmi dan bebas kandungan non-halal.",
    detail:
      "Setiap bahan aktif, penstabil tekstur, pewangi, dan bahan penolong diverifikasi sertifikat halalnya. Kami hanya menggunakan supplier terdaftar BPJPH dan menolak bahan berstatus syubhat atau haram.",
  },
  {
    id: "facility",
    icon: "lucide:factory",
    title: "Fasilitas Produksi Higienis",
    desc: "Pabrik memenuhi standar SJPH untuk mencegah kontaminasi silang.",
    detail:
      "Alur produksi dirancang dengan zona terpisah, sanitasi berkala, dan prosedur pencegahan kontaminasi silang. Mesin, peralatan, dan area penyimpanan diaudit agar sesuai Sistem Jaminan Produk Halal (SJPH).",
  },
  {
    id: "legal",
    icon: "lucide:scroll-text",
    title: "Pengurusan Full Service",
    desc: "Pendaftaran BPJPH hingga sertifikat halal resmi atas nama merek klien.",
    detail:
      "Tim legalitas kami menyiapkan dokumen formula, SJPH, dan berkas SIHALAL. Proses diawasi dari audit dokumen, pemeriksaan LPH, sidang fatwa, hingga sertifikat halal resmi terbit atas nama brand Anda.",
  },
] as const;

export const halalCertificationSteps = [
  {
    step: 1,
    icon: "lucide:clipboard-check",
    title: "Audit Dokumen Formula",
    desc: "Review bahan baku, MSDS, dan diagram alir proses produksi.",
    detail:
      "Tim kami melakukan audit menyeluruh terhadap daftar bahan baku, sertifikat halal supplier, MSDS, diagram alir proses, dan dokumen SJPH sebelum pengajuan resmi.",
  },
  {
    step: 2,
    icon: "lucide:upload",
    title: "Pengajuan Berkas ke SIHALAL",
    desc: "Pendaftaran dan unggah dokumen teknis via platform BPJPH.",
    detail:
      "Semua berkas teknis diunggah ke platform SIHALAL BPJPH secara lengkap dan terstruktur — termasuk identitas produk, komposisi, dan data fasilitas produksi.",
  },
  {
    step: 3,
    icon: "lucide:search-check",
    title: "Pemeriksaan oleh LPH",
    desc: "Audit lapangan dan verifikasi proses produksi di pabrik.",
    detail:
      "Lembaga Pemeriksa Halal (LPH) melakukan inspeksi fasilitas, proses produksi, penyimpanan, dan sistem jaminan halal langsung di lokasi pabrik.",
  },
  {
    step: 4,
    icon: "lucide:users",
    title: "Sidang Fatwa MUI",
    desc: "Penetapan kehalalan produk melalui sidang fatwa resmi.",
    detail:
      "Hasil pemeriksaan LPH diajukan ke sidang fatwa untuk penetapan kehalalan. Tim kami mendampingi jika ada klarifikasi teknis yang dibutuhkan.",
  },
  {
    step: 5,
    icon: "lucide:badge-check",
    title: "Sertifikat Halal Terbit",
    desc: "Sertifikat resmi diterbitkan atas nama merek klien.",
    detail:
      "Sertifikat Halal resmi diterbitkan atas nama brand klien. Produk skincare Anda siap dipasarkan dengan legalitas halal yang diakui secara nasional.",
  },
] as const;

export const halalFaqs = [
  {
    q: "Apakah produk skincare wajib bersertifikat halal?",
    a: "Ya. Berdasarkan regulasi Indonesia, produk kosmetik diwajibkan memiliki sertifikat halal secara bertahap. Segera urus sejak awal agar brand Anda siap masuk ritel modern dan marketplace.",
  },
  {
    q: "Berapa lama proses sertifikasi halal?",
    a: "Estimasi 2–4 bulan, tergantung kelengkapan dokumen, jadwal audit LPH, dan antrian sidang fatwa. Dengan dokumen rapi, proses bisa lebih efisien.",
  },
  {
    q: "Apakah Magna mendampingi dari awal hingga sertifikat terbit?",
    a: "Ya. Kami mendampingi penuh — audit dokumen formula, pengajuan SIHALAL, koordinasi LPH, hingga sertifikat halal resmi terbit atas nama merek Anda.",
  },
  {
    q: "Apa saja yang diaudit dalam sertifikasi halal?",
    a: "Audit meliputi bahan baku, proses produksi, peralatan, penyimpanan, transportasi, dan Sistem Jaminan Produk Halal (SJPH) di fasilitas produksi.",
  },
];

export const halalWaMessage =
  "Halo, saya ingin konsultasi produk skincare halal — dari bahan baku, proses produksi, hingga pengurusan sertifikat halal.";
