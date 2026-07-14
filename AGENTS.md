# Panduan Agent — Website Magna

## Konteks Proyek

Proyek ini adalah website company profile statis untuk jasa maklon skincare Magna. Tujuannya adalah membantu calon partner memahami layanan, produk, proses, fasilitas, legalitas, dan cara konsultasi via WhatsApp.

### Stack

- Astro static site
- Tailwind CSS v4
- DaisyUI
- TypeScript strict
- Bun

### Batasan

- Jangan gunakan React, Next.js, backend, database, atau API server.
- Jangan membuat state server atau autentikasi.
- CTA utama harus mengarah ke WhatsApp.
- Jangan mengubah struktur folder atau route tanpa alasan produk yang jelas.
- Jangan mengklaim sertifikasi, legalitas, angka bisnis, atau informasi kontak baru tanpa sumber konten yang telah divalidasi.

## Perintah Utama

```sh
bun run dev
bun run format:check
bun run check
bun run build
```

Selalu jalankan `format:check`, `check`, dan `build` setelah perubahan yang memengaruhi struktur, interaksi, route, atau styling penting.

## Arsitektur dan Kepemilikan

| Layer          | Lokasi            | Tanggung jawab                                                                    |
| -------------- | ----------------- | --------------------------------------------------------------------------------- |
| Route          | `src/pages/`      | Metadata, route, dan markup yang unik untuk satu halaman                          |
| Layout         | `src/layouts/`    | Shell HTML, SEO, navbar, CTA global, dan footer                                   |
| UI             | `src/components/` | Komponen reuse seperti `SectionHeader`, `PageHero`, `WAButton`, card, dan section |
| Konten         | `src/data/`       | Satu sumber data statis, konfigurasi, type domain, serta path aset                |
| Helper         | `src/lib/`        | Fungsi murni reusable tanpa akses DOM                                             |
| Client scripts | `src/scripts/`    | Perilaku browser reusable yang menerima root/elemen secara eksplisit              |
| Styling        | `src/styles/`     | Theme DaisyUI, token desain, dan CSS yang memang global                           |

`src/config/` bukan layer aktif. Konten atau konfigurasi baru harus ditempatkan di `src/data/` bila memang dibutuhkan.

### Prinsip Wajib

- **YAGNI:** Jangan menambah prop, komponen, data, helper, atau dependency untuk kebutuhan hipotetis.
- **SSOT:** Simpan setiap fakta bisnis, URL WhatsApp, route menu, asset path, dan copy statis pada satu pemilik. Konsumen hanya mengimpor sumber tersebut.
- **SoC:** Pisahkan markup halaman, UI reusable, data, helper murni, dan perilaku browser.
- **DRY:** Ekstrak pola hanya jika pola itu stabil dan benar-benar dipakai berulang. Jangan menggenerikkan markup yang berbeda domain hanya demi mengurangi baris.

## Aturan Implementasi

### Halaman dan Komponen

- Gunakan file `.astro`.
- Markup yang hanya dipakai satu route boleh tetap berada di page agar tidak menghasilkan komponen satu-kali-pakai.
- Gunakan komponen yang sudah ada sebelum membuat pola UI baru: `SectionHeader`, `PageHero`, `WAButton`, `Icon`, `CTASection`, dan `TestimonialSection`.
- Render koleksi dari data memakai `.map()`.
- Gunakan `class:list` untuk class kondisional.
- Semua tampilan harus responsif pada mobile dan desktop.

### Konten dan Helper

- Informasi perusahaan dan WhatsApp berasal dari `src/data/site.ts`.
- Navigasi dan route menu berasal dari `src/data/nav.ts`.
- Path gambar bersama berasal dari `src/data/images.ts`.
- Data berulang halaman berasal dari file domain di `src/data/`.
- Helper menerima input eksplisit, tidak bergantung pada state halaman, dan tidak mengakses DOM.
- Hapus export atau file yang tidak memiliki konsumen aktif.

### Interaksi Client

- Scope selector dari root `data-*` milik halaman atau komponen; jangan memilih DOM global selain lifecycle/event global yang memang diperlukan.
- Untuk pola reveal yang berulang gunakan `observeReveal` dari `src/scripts/reveal.ts`.
- Data yang hanya tersedia saat render server dapat diteruskan dengan `<script is:inline type="application/json">`.
- Hindari menduplikasi data statis ke script client; impor dari `src/data/` bila script diproses oleh Astro.

### Styling dan Aksesibilitas

- Gunakan Tailwind untuk layout, spacing, responsivitas, dan state visual; gunakan DaisyUI untuk pola UI standar.
- Warna brand: primary `#659287`, secondary `#835f11`, dan putih `#ffffff`.
- Gunakan Arsenal untuk heading, Karla untuk body, dan Josefin Slab untuk aksen sesuai theme global.
- Gaya khusus satu route ditempatkan pada file page tersebut; `global.css` hanya untuk token, base style, dan utilitas lintas halaman.
- Pastikan gambar memiliki `alt`, tombol memiliki label, dan link eksternal memakai `target="_blank"` bersama `rel="noopener noreferrer"`.

## Route Aktif

`/`, `/company`, `/services`, `/products`, `/outsourcing-flow`, `/oem-odm`, `/research-development`, `/paten-brand`, `/halal`, `/certification`, `/portofolio`, `/contact`, `/csr`, `/faq`, `/blog`, dan `/blog/[slug]`.

## Dokumentasi

- [README.md](README.md): cara menjalankan, route, arsitektur, dan deployment.
- [CODE_STYLE.md](CODE_STYLE.md): aturan gaya dan pola kode yang lebih rinci.
- [CLAUDE.md](CLAUDE.md): pointer instruksi untuk Claude Code tanpa menduplikasi aturan.
