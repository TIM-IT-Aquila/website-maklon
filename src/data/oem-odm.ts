import { oemOdmImages, factoryImages } from "./images";

export const oemOdmStats = [
  { label: "Produk Berhasil Diproduksi", value: "500+" },
  { label: "Tahun Pengalaman", value: "10+" },
  { label: "Brand Partner", value: "200+" },
  { label: "Produk per Bulan", value: "50K+" },
];

// ─── OEM (Original Equipment Manufacturing) ───────────────────────────
export const oemInfo = {
  title: "OEM — Original Equipment Manufacturing",
  subtitle: "Anda Punya Formula, Kami Produksi",
  description:
    "Layanan OEM cocok untuk brand yang sudah memiliki formula sendiri atau ingin menggunakan formula standar kami. Anda fokus pada branding dan pemasaran, kami menangani seluruh proses produksi dari bahan baku hingga produk jadi siap edar.",
  highlights: [
    { icon: "lucide:dna", text: "Gunakan formula sendiri atau pilih dari 200+ formula siap pakai kami" },
    { icon: "lucide:factory", text: "Diproduksi di fasilitas CPKB dengan teknologi modern" },
    { icon: "lucide:shield-check", text: "QC 3 tahap: bahan baku, during process, finished goods" },
    { icon: "lucide:package", text: "MOQ mulai 500 pcs — ideal untuk brand baru dan berkembang" },
  ],
  image: factoryImages.productionLine,
  imageAlt: "OEM Production Line",
};

export const oemSteps = [
  { step: 1, title: "Konsultasi Awal", icon: "lucide:message-circle", desc: "Diskusikan formula atau pilih dari katalog formula siap pakai kami." },
  { step: 2, title: "Pembuatan Sample", icon: "lucide:flask-conical", desc: "Tim R&D membuat sample berdasarkan formula yang disetujui." },
  { step: 3, title: "Revisi & Approval", icon: "lucide:pen-tool", desc: "Sample direvisi hingga sesuai ekspektasi Anda, lalu disetujui untuk produksi." },
  { step: 4, title: "Produksi Massal", icon: "lucide:cog", desc: "Produksi dijalankan dengan sistem batch tracking dan pengawasan ketat." },
  { step: 5, title: "QC & Packaging", icon: "lucide:package-check", desc: "Quality control menyeluruh + pengemasan sesuai standar brand Anda." },
  { step: 6, title: "Pengiriman", icon: "lucide:truck", desc: "Produk siap dikirim dengan dokumentasi lengkap dan asuransi pengiriman." },
];

// ─── ODM (Original Design Manufacturing) ──────────────────────────────
export const odmInfo = {
  title: "ODM — Original Design Manufacturing",
  subtitle: "Belum Punya Formula? Kami Ciptakan untuk Anda",
  description:
    "Layanan ODM adalah solusi end-to-end untuk brand yang ingin produk eksklusif dari nol. Tim R&D kami akan mengembangkan formula unik berdasarkan brief dan visi brand Anda — dari konsep, formulasi, desain kemasan, hingga produk siap jual.",
  highlights: [
    { icon: "lucide:lightbulb", text: "Formulasi eksklusif 100% — bukan template, dibuat dari nol untuk Anda" },
    { icon: "lucide:palette", text: "Dukungan desain kemasan dan branding oleh tim kreatif kami" },
    { icon: "lucide:microscope", text: "R&D oleh lulusan farmasi & kimia — 2000+ bahan baku terkurasi" },
    { icon: "lucide:file-check", text: "Bantuan urus BPOM, Halal, HKI sampai produk legal siap edar" },
  ],
  image: factoryImages.labResearch,
  imageAlt: "ODM R&D Laboratory",
};

export const odmSteps = [
  { step: 1, title: "Brief & Riset Pasar", icon: "lucide:search", desc: "Tim kami mendalami konsep brand, target pasar, dan tren terkini." },
  { step: 2, title: "Formulasi Eksklusif", icon: "lucide:flask-conical", desc: "R&D mengembangkan 2-3 varian formula khusus untuk brand Anda." },
  { step: 3, title: "Sample & Evaluasi", icon: "lucide:eye", desc: "Anda menerima sample, mencoba, dan memberikan feedback untuk penyempurnaan." },
  { step: 4, title: "Revisi & Finalisasi", icon: "lucide:pen-tool", desc: "Formula disempurnakan berdasarkan feedback hingga Anda 100% puas." },
  { step: 5, title: "Desain Kemasan", icon: "lucide:paintbrush", desc: "Tim desain membuat konsep kemasan eksklusif sesuai identitas brand." },
  { step: 6, title: "Legalitas & BPOM", icon: "lucide:scroll-text", desc: "Kami urus notifikasi BPOM, sertifikasi Halal, dan HKI merek." },
  { step: 7, title: "Produksi Massal", icon: "lucide:factory", desc: "Produksi skala penuh dengan QC ketat di setiap batch produksi." },
  { step: 8, title: "Pengiriman", icon: "lucide:truck", desc: "Produk jadi dikirim ke alamat Anda — siap edar, siap dipasarkan." },
];

// ─── Generic OEM/ODM process (kept for backward compatibility) ────────
export const oemOdmProcess = [
  { step: "01", title: "Konsultasi & Brief", icon: "lucide:message-circle", desc: "Diskusikan kebutuhan produk, konsep, dan target pasar Anda.", detail: "Tim konsultan kami mendengarkan visi brand Anda secara mendalam — mulai dari jenis produk, segmentasi pasar, hingga positioning harga. Setiap brief didokumentasikan secara rinci sebagai acuan seluruh tahap berikutnya." },
  { step: "02", title: "Formulasi & Sample", icon: "lucide:flask-conical", desc: "Tim R&D mengembangkan formula eksklusif dan membuat sample untuk evaluasi Anda.", detail: "Formula dikembangkan oleh tim R&D berpengalaman menggunakan bahan baku berkualitas. Sample dibuat dalam 2-3 varian untuk memberi Anda pilihan sebelum melanjutkan ke tahap produksi." },
  { step: "03", title: "Revisi & Approval", icon: "lucide:pen-tool", desc: "Sample direvisi hingga sesuai dengan keinginan Anda sebelum produksi massal.", detail: "Kami berikan kesempatan revisi formula hingga Anda 100% puas. Proses approval dilakukan secara tertulis sebagai jaminan bahwa produk final sesuai ekspektasi brand Anda." },
  { step: "04", title: "Produksi Massal", icon: "lucide:factory", desc: "Produksi dalam jumlah besar dengan pengawasan quality control ketat di setiap batch.", detail: "Produksi dijalankan di fasilitas berstandar CPKB dengan sistem batch tracking. Setiap tahap diawasi supervisor produksi untuk memastikan konsistensi formula dan volume antar batch." },
  { step: "05", title: "QC & Packaging", icon: "lucide:package-check", desc: "Produk melewati pengecekan kualitas menyeluruh dan dikemas sesuai standar.", detail: "QC kami melakukan uji stabilitas, mikrobiologi, pH, viskositas, dan uji organoleptik. Packaging dilakukan di ruang terkontrol dengan opsi kemasan primer, sekunder, hingga desain eksklusif." },
  { step: "06", title: "Pengiriman", icon: "lucide:truck", desc: "Produk siap dikirim ke alamat tujuan dengan aman dan tepat waktu.", detail: "Pengiriman menggunakan armada terpercaya dengan asuransi pengiriman. Setiap pengiriman disertai dokumen lengkap: COA, daftar produk, dan dokumentasi produksi untuk arsip brand Anda." },
];

export const oemOdmAdvantages = [
  { icon: "lucide:factory", title: "Fasilitas Modern", desc: "Pabrik berstandar CPKB dengan peralatan teknologi terkini dan sistem batch tracking untuk hasil produksi optimal dan konsisten.", color: "from-emerald-500 to-teal-600" },
  { icon: "lucide:flask-conical", title: "Formula Custom", desc: "Formulasi eksklusif dikembangkan dari nol sesuai kebutuhan spesifik brand Anda — bukan template. Didukung database 2000+ bahan baku terkurasi.", color: "from-blue-500 to-indigo-600" },
  { icon: "lucide:scroll-text", title: "Legalitas Lengkap", desc: "Kami bantu urus BPOM, Sertifikat Halal, HKI Merek, dan dokumen legalitas lain. Produk Anda siap edar nasional dengan dokumen resmi lengkap.", color: "from-amber-500 to-orange-600" },
  { icon: "lucide:package", title: "MOQ Fleksibel", desc: "Minimum order quantity yang terjangkau — mulai dari 500 pcs untuk skincare dan 1000 pcs untuk bodycare. Cocok untuk brand baru maupun established.", color: "from-violet-500 to-purple-600" },
  { icon: "lucide:microscope", title: "Tim R&D Ahli", desc: "Didukung tim riset berpengalaman lulusan farmasi dan kimia. Setiap formula melalui uji stabilitas, uji iritasi, dan uji efektivitas sebelum dirilis.", color: "from-rose-500 to-pink-600" },
  { icon: "lucide:shield-check", title: "QC Ketat 3 Tahap", desc: "Quality control dilakukan di 3 titik: bahan baku masuk, selama produksi, dan produk jadi. Hanya produk lolos 100% yang lanjut ke pengemasan.", color: "from-green-500 to-emerald-600" },
];
