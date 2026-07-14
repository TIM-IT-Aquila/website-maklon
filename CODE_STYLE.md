# Code Style & Layer Convention

Dokumen ini menjadi pola penulisan tunggal untuk file aktif di project.

## 1. Tanggung Jawab Layer

- `src/pages/`: route, metadata halaman, dan markup khusus satu halaman.
- `src/components/ui/`: komponen UI kecil yang dipakai lintas halaman.
- `src/components/cards/` dan `src/components/sections/`: komponen reusable yang dipakai minimal di dua konteks.
- `src/data/`: data statis dan type data yang berkaitan langsung dengannya; tidak ada markup atau DOM logic.
- `src/lib/`: fungsi murni reusable; tidak mengakses DOM dan tidak merender UI.
- `src/scripts/`: helper perilaku browser yang reusable; menerima elemen/root secara eksplisit dan tidak memilih DOM global sendiri.
- `src/layouts/`: kerangka global, SEO, serta elemen global.

Markup yang hanya dipakai satu route tetap berada di file page agar tidak menghasilkan component satu-kali-pakai.

## 2. Urutan Frontmatter Astro

1. Import layout.
2. Import komponen, urut dari shared ke UI.
3. Import data.
4. Import helper/lib.
5. Type, interface, dan konstanta page.

Pisahkan setiap kelompok import dengan satu baris kosong.

## 3. Penulisan UI

- Gunakan `SectionHeader`, `PageHero`, dan `WAButton` untuk pola yang sudah tersedia.
- Data berulang dirender dengan `.map()` dari `src/data/`.
- Gunakan `class:list` untuk class kondisional; jangan merakit class Tailwind panjang di script client.
- Section utama memakai spacing global; override hanya untuk hero atau kebutuhan visual yang jelas.

## 4. Script Client

- Satu blok script per domain interaksi pada sebuah halaman.
- Scope selector dari root `data-*` halaman, bukan `document` global, kecuali untuk event keyboard yang memang global.
- Data dari server diteruskan memakai `<script is:inline type="application/json">`.
- Jangan menduplikasi data statis di script client; import dari `src/data/` bila script diproses Astro.

## 5. Data dan Helper

- Gunakan nama export yang spesifik dan konsisten (`products`, `processSteps`, `siteConfig`).
- Hapus export, field, atau file yang tidak mempunyai konsumen aktif.
- Helper menerima input eksplisit dan mengembalikan output; tidak bergantung pada state halaman.

## 6. Validasi Wajib

Setelah perubahan struktur atau interaksi, jalankan:

```bash
bun run format:check
bun run check
bun run build
```

## 7. Prinsip Arsitektur

- **YAGNI:** Tambahkan komponen, prop, data, atau helper hanya bila dipakai oleh kebutuhan aktif. Hapus export, asset mapping, dan variasi UI yang tidak memiliki konsumen.
- **SSOT:** Setiap fakta bisnis dan konten statis memiliki satu pemilik di `src/data/`; setiap pola UI global memiliki satu komponen pemilik. Jangan menyalin daftar, link WhatsApp, path logo, atau konfigurasi yang sama ke beberapa file.
- **SoC:** `pages` mengatur route dan markup yang unik; `components` menangani UI reusable; `data` tidak menyentuh DOM; `lib` adalah fungsi murni dengan input eksplisit; `styles/global.css` hanya memuat token, reset, dan utilitas lintas halaman. Gaya/interaksi khusus route harus berada pada route tersebut dan selector script harus dimulai dari root `data-*` miliknya.

Jika satu perubahan membutuhkan beberapa layer, ubah sumber kepemilikan terlebih dahulu, lalu biarkan layer lain hanya mengonsumsi sumber tersebut.

`prettier` memformat CSS, TypeScript, serta konfigurasi proyek. Validitas dan pemeriksaan tipe file `.astro` dijalankan melalui `bun run check`.
