export const oemServiceTiers = [
  {
    level: "01",
    title: "White Label",
    subtitle: "Produk Siap Pakai",
    icon: "lucide:package-check",
    description:
      "Solusi tercepat untuk memiliki brand kosmetik sendiri. Formula siap diproduksi dan dikemas dengan merek dagang Anda.",
    highlights: ["Formula siap pakai", "Produksi lebih praktis", "Branding dengan merek Anda"],
    categories: [
      "Skincare: day cream, night cream, serum, face mist, toner, moisturizer, dan lainnya.",
      "Bodycare & Haircare: perawatan tubuh dan rambut esensial.",
      "Baby & Kids Care: formulasi khusus untuk bayi dan anak-anak.",
    ],
  },
  {
    level: "02",
    title: "Semi Custom",
    subtitle: "Modifikasi Formula",
    icon: "lucide:sliders-horizontal",
    description:
      "Pilih formula dasar kami lalu tambahkan maksimal dua bahan aktif pilihan untuk menghadirkan ciri khas brand Anda.",
    highlights: [
      "Formula dasar Magna",
      "Maksimal 2 bahan aktif pilihan",
      "Trial dan uji laboratorium yang efisien",
    ],
  },
  {
    level: "03",
    title: "Full Custom",
    subtitle: "Formulasi Eksklusif",
    icon: "lucide:flask-conical",
    description:
      "Produk dirancang dari nol khusus untuk brand Anda, mulai dari arah formula hingga karakter produk yang ingin dibangun.",
    highlights: [
      "Pengembangan formula dari nol",
      "Disesuaikan dengan konsep brand",
      "Formula eksklusif untuk brand Anda",
    ],
  },
] as const;

export const odmFlexibilities = [
  {
    title: "Bawa Konsep Sendiri",
    icon: "lucide:lightbulb",
    description:
      "Sampaikan ide verbal atau visual Anda, lalu tim R&D membantu menerjemahkannya menjadi arah produk fisik.",
  },
  {
    title: "Bawa Formula & Bahan Sendiri",
    icon: "lucide:flask-conical",
    description:
      "Bahan aktif unik atau formula rahasia Anda dapat dibahas untuk pengujian stabilitas dan proses produksi massal.",
  },
  {
    title: "Bawa Kemasan Sendiri",
    icon: "lucide:package-open",
    description:
      "Selain opsi kemasan dari jaringan pemasok kami, gunakan botol, wadah, atau box rancangan tim Anda untuk proses filling dan packaging.",
  },
] as const;

export const consultationSteps = [
  {
    title: "Hubungi kami",
    icon: "lucide:message-circle",
    description: "Mulai konsultasi melalui WhatsApp dengan tim Magna.",
  },
  {
    title: "Ceritakan brief Anda",
    icon: "lucide:clipboard-list",
    description: "Sampaikan tujuan brand, target pasar, dan preferensi produk Anda.",
  },
  {
    title: "Tentukan langkah berikutnya",
    icon: "lucide:arrow-right",
    description:
      "Pilih tingkat layanan OEM atau kebebasan konsep ODM yang sesuai untuk brand Anda.",
  },
] as const;

export const oemOdmFaqs = [
  {
    q: "Apa perbedaan White Label, Semi Custom, dan Full Custom?",
    a: "White Label memakai formula siap pakai, Semi Custom memodifikasi formula dasar dengan maksimal dua bahan aktif, sedangkan Full Custom dikembangkan dari nol khusus untuk kebutuhan brand Anda.",
  },
  {
    q: "Apakah saya dapat membawa konsep atau bahan sendiri?",
    a: "Ya. Pada layanan ODM, Anda dapat membawa konsep, bahan aktif atau formula, hingga kemasan sendiri untuk dibahas bersama tim Magna.",
  },
  {
    q: "Bagaimana menentukan layanan yang sesuai?",
    a: "Mulai dengan konsultasi WhatsApp. Sampaikan kesiapan konsep dan kebutuhan produk Anda, lalu tim Magna membantu menentukan jalur layanan yang sesuai.",
  },
] as const;
