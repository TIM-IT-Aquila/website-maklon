# Code Style dan Konvensi Arsitektur

Dokumen ini adalah standar implementasi untuk file aktif di proyek Magna. Gunakan bersama [AGENTS.md](AGENTS.md); jangan menduplikasi aturan yang sama di dokumen atau kode lain.

## 1. Pembagian Layer

| Lokasi            | Boleh berisi                                 | Tidak boleh berisi                           |
| ----------------- | -------------------------------------------- | -------------------------------------------- |
| `src/pages/`      | Route, metadata, markup unik, komposisi page | Data panjang yang dapat digunakan ulang      |
| `src/layouts/`    | Shell global, SEO, elemen global             | Konten domain spesifik halaman               |
| `src/components/` | UI reusable dan presentasi props             | Sumber data bisnis atau logic domain panjang |
| `src/data/`       | Konten statis, type domain, path aset        | DOM, event listener, markup UI               |
| `src/lib/`        | Helper murni dengan input eksplisit          | Akses DOM atau state halaman                 |
| `src/scripts/`    | Interaksi browser reusable                   | Selector DOM global tersembunyi              |
| `src/styles/`     | Theme, token, reset, utilitas lintas halaman | Gaya khusus satu route                       |

Markup yang hanya dipakai satu halaman tetap berada pada page. Buat komponen baru hanya jika pola UI atau perilakunya sudah stabil dan dipakai ulang.

## 2. Prinsip Pengambilan Keputusan

- **YAGNI:** Jangan membuat abstraksi, dependency, prop, atau data untuk kemungkinan fitur masa depan.
- **SSOT:** Satu fakta hanya memiliki satu pemilik. Contoh: `siteConfig` untuk identitas/kontak, `navItems` untuk menu/route, dan `images.ts` untuk asset path bersama.
- **SoC:** Bedakan konten (`data`), aturan murni (`lib`), interaksi browser (`scripts`), dan presentasi (`pages`, `components`, `layouts`).
- **DRY:** Konsolidasikan pola yang sama setelah muncul berulang. Jangan menyatukan dua fitur yang memiliki variasi domain besar hanya karena markupnya sekilas mirip.

Saat perubahan melewati beberapa layer, perbarui sumber kepemilikan terlebih dahulu lalu konsumsi dari layer lain.

## 3. Astro dan UI

- Gunakan `.astro` untuk halaman dan komponen.
- Pisahkan import berdasarkan peran: layout/komponen, data, lalu helper atau client script. Gunakan satu baris kosong antar kelompok.
- Gunakan `SectionHeader`, `PageHero`, `WAButton`, dan `Icon` bila pola visualnya sesuai.
- Render data koleksi dengan `.map()` dan gunakan `class:list` untuk class kondisional.
- Utamakan Tailwind dan DaisyUI. Hindari inline style kecuali nilainya benar-benar dinamis atau tidak tersedia sebagai utility.
- Tetapkan `alt` pada gambar dan `aria-label` pada kontrol tanpa teks.

## 4. Data dan Helper

- Beri nama export berdasarkan domain: `products`, `processSteps`, `siteConfig`, `homeHeroSlides`.
- Simpan type yang hanya dipakai satu domain bersama data domain tersebut.
- Jangan menyalin nomor WhatsApp, link, logo, route, atau copy statis ke beberapa file.
- Gunakan `createWhatsappLink` untuk menghasilkan URL WhatsApp.
- Hapus export, field, asset mapping, dan file yang tidak memiliki konsumen aktif.

## 5. Client Script

- Setiap halaman/komponen interaktif memiliki root `data-*`.
- Selector harus dimulai dari root tersebut, bukan dari `document` global.
- Helper di `src/scripts/` menerima root atau elemen sebagai parameter eksplisit.
- Gunakan `observeReveal` dari `src/scripts/reveal.ts` untuk animasi reveal berbasis `IntersectionObserver` yang standar.
- Gunakan `<script is:inline type="application/json">` untuk meneruskan data render server yang tidak dapat diimpor langsung ke client script.
- Kelompokkan satu domain interaksi dalam satu blok script jika hal itu membuat lifecycle lebih jelas.

## 6. Styling

- Primary: `#659287`
- Secondary: `#835f11`
- White: `#ffffff`
- Heading: Arsenal
- Body: Karla
- Accent: Josefin Slab

`src/styles/global.css` memuat DaisyUI theme, font, spacing global, dan animasi yang dipakai lintas route. Style khusus halaman ditulis lokal pada file `.astro` halaman tersebut.

## 7. Validasi

Setelah perubahan struktur, route, interaksi, atau styling penting, jalankan:

```sh
bun run format:check
bun run check
bun run build
```

Prettier memeriksa CSS, TypeScript, dan konfigurasi proyek. `astro check` memeriksa sintaks serta type file Astro. Build harus berhasil sebelum pekerjaan dianggap selesai.
