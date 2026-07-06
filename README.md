# Website Maklon

Website company profile dan katalog layanan maklon skincare berbasis Astro static site.

## Stack

- Astro static site
- Tailwind CSS v4
- DaisyUI
- Bun
- Docker + Nginx untuk serving hasil build statis

## Struktur folder utama

```text
src/pages/       Route dan komposisi halaman
src/layouts/     Shell HTML, metadata dasar, navbar, footer
src/components/  UI, card, dan section presentational
src/data/        Static content/config website
src/lib/         Helper murni seperti WhatsApp dan SEO
src/styles/      Theme, token, dan global CSS
public/          Asset publik seperti favicon dan logo
```

## Command development

```sh
bun install --frozen-lockfile
bun run dev
```

## Command build

```sh
bun run build
bun run preview
```

Hasil build berada di `dist/` dan diabaikan oleh Git.

## Catatan konten

Sebagian data bisnis seperti nomor WhatsApp, email, alamat, copy layanan, artikel blog, dan gambar masih perlu divalidasi sebelum production.

## Deployment

Repository menyediakan `Dockerfile`, `docker-compose.yml`, dan `nginx.conf` untuk build dengan Bun lalu serving static files melalui Nginx. Jika memakai reverse proxy, sesuaikan konfigurasi port/network di environment deployment.
