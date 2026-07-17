# Magna — Website Maklon Skincare

Website company profile statis untuk Magna, mitra maklon skincare. Situs ini menyajikan layanan, katalog produk, alur maklon, fasilitas, legalitas, portofolio, dan konsultasi melalui WhatsApp.

## Teknologi

- [Astro](https://astro.build/) dengan output static site
- Tailwind CSS v4 dan DaisyUI
- TypeScript strict
- Bun sebagai package manager dan runtime development
- `astro-icon` untuk ikon Lucide dan Material Design Icons
- Docker dan Nginx untuk deployment hasil build statis

Tidak ada React, Next.js, backend, database, atau API server pada proyek ini.

## Prasyarat

- Bun `1.3.14` atau versi kompatibel
- Node.js `22.12.0` atau lebih baru (sesuai `package.json`)

## Menjalankan Proyek

```sh
bun install --frozen-lockfile
bun run dev
```

Server development Astro akan menampilkan URL lokal di terminal. Untuk melihat hasil build statis:

```sh
bun run build
bun run preview
```

Output build berada di `dist/` dan tidak dilacak Git.

## Validasi

Jalankan ketiga perintah berikut setelah perubahan struktur, interaksi, atau konten:

```sh
bun run format:check
bun run check
bun run build
```

`format:check` memeriksa CSS, TypeScript, dan konfigurasi proyek. `check` menggunakan `astro check` untuk memvalidasi sintaks dan tipe seluruh file Astro.

## Route Aktif

| Route                      | Tujuan                                        |
| -------------------------- | --------------------------------------------- |
| `/`                        | Beranda dan ringkasan layanan                 |
| `/company`                 | Profil, visi, misi, nilai, dan fasilitas      |
| `/services`                | Layanan maklon dan one-stop service           |
| `/products`                | Katalog produk maklon interaktif              |
| `/outsourcing-flow`        | Alur maklon dari konsultasi hingga pengiriman |
| `/oem-odm`                 | Konfigurator layanan OEM/ODM                  |
| `/research-development`    | Informasi laboratorium dan R&D                |
| `/paten-brand`             | Layanan merek, HAKI, dan legalitas brand      |
| `/halal`                   | Informasi sertifikasi halal                   |
| `/certification`           | Sertifikasi dan lisensi                       |
| `/portofolio`              | Portofolio brand partner                      |
| `/contact`                 | Kontak, lokasi, dan formulir konsultasi       |
| `/csr`                     | Komitmen CSR dan keberlanjutan                |
| `/faq`                     | Pertanyaan umum                               |
| `/blog` dan `/blog/[slug]` | Daftar serta detail artikel                   |

## Arsitektur

```text
src/
├─ pages/        # Route Astro dan markup yang unik untuk satu halaman
├─ layouts/      # Shell global, SEO, navbar, CTA, dan footer
├─ components/   # UI reusable, cards, dan sections
├─ data/         # Satu sumber konten serta konfigurasi statis
├─ lib/          # Helper murni tanpa akses DOM
├─ scripts/      # Helper interaksi browser reusable dengan root eksplisit
├─ styles/       # Theme DaisyUI, token, dan CSS global
└─ icons/        # Ikon lokal yang dapat dibaca astro-icon

public/
└─ assets/       # Gambar, logo, dan placeholder yang disajikan apa adanya
```

Detail konvensi layer, DRY, SSOT, SoC, dan YAGNI tersedia di [CODE_STYLE.md](CODE_STYLE.md). Katalog dan kontrak komponen ala Figma tersedia di [COMPONENT_SYSTEM.md](COMPONENT_SYSTEM.md). Instruksi kerja untuk coding agent tersedia di [AGENTS.md](AGENTS.md).

## Sumber Konten Utama

- Informasi brand, kontak, dan WhatsApp: `src/data/site.ts`
- Navigasi dan route menu: `src/data/nav.ts`
- Produk, layanan, proses, dan artikel: `src/data/*.ts`
- Asset path terpusat: `src/data/images.ts`

Ubah konten pada layer data, bukan dengan menyalin teks atau link ke banyak halaman.

## Desain dan CTA

- Primary: `#659287`
- Secondary: `#835f11`
- White: `#ffffff`
- Font: Arsenal (heading), Karla (body), dan Josefin Slab (aksen)
- CTA utama selalu diarahkan ke WhatsApp melalui `WAButton` dan helper `createWhatsappLink`.

## Deployment Docker

Build image dan jalankan service Nginx:

```sh
docker compose up --build -d
```

`docker-compose.yml` hanya mengekspos port `80` ke jaringan Docker; tidak memublikasikan port host. Hubungkan service ini ke reverse proxy atau tambahkan konfigurasi `ports` sesuai kebutuhan environment deployment.

Nginx menyajikan `dist/` dengan gzip, cache aset statis, dan header keamanan dasar. Konfigurasinya berada di `nginx.conf`.
