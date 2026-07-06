# AGENT.md

## Role Agent
Kamu adalah AI coding assistant untuk project website company profile maklon skincare.

Project ini menggunakan:

- Astro JS
- Tailwind CSS
- DaisyUI
- Tidak menggunakan React
- Tidak menggunakan backend dulu
- Website bersifat company profile statis
- CTA utama diarahkan ke WhatsApp
- kalo ingin melakukan build menggunakan : bun run build
- kemudian klo ingin menjalankan server menggunakan : bun run dev

Tugas utama agent adalah membantu membuat, memperbaiki, merapikan, dan mengembangkan kode sesuai arsitektur project.

---

## Tujuan Project
Website ini dibuat untuk menampilkan profil perusahaan maklon skincare secara profesional.

Website harus membantu calon customer memahami:

- Siapa perusahaan ini
- Layanan maklon yang tersedia
- Produk apa saja yang bisa dibuat
- Fasilitas pabrik atau proses produksi
- Keunggulan perusahaan
- Alur kerja maklon
- Cara konsultasi melalui WhatsApp

---

## Aturan Utama
Agent wajib mengikuti aturan berikut:

1. Gunakan Astro component dengan file `.astro`.
2. Jangan gunakan React.
3. Jangan gunakan Next.js.
4. Jangan membuat backend.
5. Jangan menaruh semua kode di `index.astro`.
6. Pisahkan kode berdasarkan layer.
7. Gunakan Tailwind CSS untuk layout dan spacing.
8. Gunakan DaisyUI untuk komponen UI seperti navbar, button, card, dropdown, badge, dan hero.
9. Gunakan desain clean, modern, soft, dan premium.
10. Gunakan warna utama project:

- Primary: `659287`
- Secondary: `#835f11`
- White: `#FFFFFF`
    
11. Gunakan font astro
12. Semua halaman harus responsive untuk mobile dan desktop.
13. CTA utama harus diarahkan ke WhatsApp.
14. Jangan mengubah struktur folder tanpa alasan yang jelas.
15. Jika membuat file baru, jelaskan lokasi file tersebut.

---

## Layer Architecture
Project ini dipisahkan menjadi 3 layer utama:

---

### 1. Presentation Layer
Presentation Layer adalah bagian tampilan website.

Berisi:

- Halaman
- Layout
- Section
- Komponen UI
- Card
- Navbar
- Footer

Folder yang termasuk Presentation Layer:

```
src/pages/
src/layouts/
src/components/
```

Contoh file:

```
src/pages/index.astro
src/pages/about.astro
src/pages/blog.astro

src/layouts/MainLayout.astro

src/components/Navbar.astro
src/components/Footer.astro
src/components/sections/HeroSection.astro
src/components/sections/ServiceSection.astro
src/components/sections/FactorySection.astro
src/components/sections/ProcessSection.astro
src/components/sections/CTASection.astro
src/components/cards/ServiceCard.astro
```

Aturan Presentation Layer:

- Tidak menyimpan data panjang langsung di component.
- Tidak menulis logic panjang di component.
- Ambil data dari `src/data/`.
- Ambil helper function dari `src/lib/`.
- Fokus pada HTML, Astro, Tailwind, dan DaisyUI.
- Component harus mudah dipakai ulang.

Contoh penggunaan yang benar:

```
---
import { services } from "../../data/services";
import ServiceCard from "../cards/ServiceCard.astro";
---

<section id="layanan" class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
  <div class="text-center">
    <p class="font-semibold text-primary">Layanan Kami</p>
    <h2 class="mt-3 text-3xl font-black md:text-4xl">
      Solusi Maklon untuk Brand Kecantikan
    </h2>
  </div>

  <div class="mt-10 grid gap-6 md:grid-cols-3">
    {services.map((service) => (
      <ServiceCard service={service} />
    ))}
  </div>
</section>
```

---

### 2. Content / Product / Factory Layer
Layer ini menyimpan data statis website.

Berisi data:

- Informasi website
- Menu navigasi
- Layanan maklon
- Produk yang bisa dibuat
- Informasi pabrik
- Alur proses maklon
- Keunggulan
- Kontak
- Artikel blog sederhana

Folder yang termasuk layer ini:

```
src/data/
```

Contoh file:

```
src/data/site.ts
src/data/services.ts
src/data/products.ts
src/data/factory.ts
src/data/process.ts
src/data/blog.ts
```

Aturan Content/Product/Factory Layer:

- Data disimpan dalam bentuk array atau object.
- Jangan campur data panjang ke dalam component.
- Data harus mudah diganti tanpa mengubah UI.
- Gunakan nama field yang jelas.
- Data produk dan pabrik dipisahkan agar mudah dijelaskan saat presentasi.

Contoh `src/data/products.ts`:

```
export const products = [
  {
    name: "Toner",
    category: "Skincare",
    description: "Produk perawatan wajah untuk membantu menyegarkan dan melembapkan kulit.",
  },
  {
    name: "Serum",
    category: "Skincare",
    description: "Produk dengan bahan aktif yang dapat disesuaikan dengan kebutuhan brand.",
  },
  {
    name: "Body Lotion",
    category: "Bodycare",
    description: "Produk perawatan tubuh dengan formula lembut dan tekstur nyaman.",
  },
];
```

Contoh `src/data/factory.ts`:

```
export const factoryHighlights = [
  {
    title: "Produksi Terarah",
    description: "Proses produksi dilakukan secara terstruktur dari sampling hingga produk siap jual.",
  },
  {
    title: "Quality Control",
    description: "Setiap produk melalui pengecekan kualitas sebelum masuk tahap akhir.",
  },
  {
    title: "Support Brand Baru",
    description: "Cocok untuk pemilik brand yang baru memulai bisnis skincare.",
  },
];
```

---

### 3. Logic Layer
Logic Layer adalah bagian yang menyimpan fungsi bantuan.

Berisi:

- Generate link WhatsApp
- Format teks
- SEO helper
- Validasi data sederhana
- Utility function

Folder yang termasuk Logic Layer:

```
src/lib/
```

Contoh file:

```
src/lib/whatsapp.ts
src/lib/seo.ts
src/lib/format.ts
```

Aturan Logic Layer:

- Jangan menaruh fungsi helper panjang di component.
- Function harus reusable.
- Function harus memiliki nama yang jelas.
- Hindari logic yang tidak perlu.
- Karena project ini statis, logic cukup sederhana.

Contoh `src/lib/whatsapp.ts`:

```
export function createWhatsappLink(phone: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
```

Contoh pemakaian di component:

```
---
import { siteConfig } from "../../data/site";
import { createWhatsappLink } from "../../lib/whatsapp";

const waLink = createWhatsappLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi maklon skincare."
);
---

<a href={waLink} target="_blank" class="btn btn-primary">
  Konsultasi WhatsApp
</a>
```

---

## Struktur Folder Wajib
Gunakan struktur berikut:

```
src/
├─ pages/
│  ├─ index.astro
│  ├─ about.astro
│  └─ blog.astro
│
├─ layouts/
│  └─ MainLayout.astro
│
├─ components/
│  ├─ ui/
│  │  └─ SectionHeader.astro
│  │
│  ├─ cards/
│  │  ├─ ServiceCard.astro
│  │  └─ ProductCard.astro
│  │
│  ├─ sections/
│  │  ├─ HeroSection.astro
│  │  ├─ ServiceSection.astro
│  │  ├─ ProductSection.astro
│  │  ├─ FactorySection.astro
│  │  ├─ ProcessSection.astro
│  │  ├─ AdvantageSection.astro
│  │  └─ CTASection.astro
│  │
│  ├─ Navbar.astro
│  └─ Footer.astro
│
├─ data/
│  ├─ site.ts
│  ├─ services.ts
│  ├─ products.ts
│  ├─ factory.ts
│  ├─ process.ts
│  └─ advantages.ts
│
├─ lib/
│  ├─ whatsapp.ts
│  └─ seo.ts
│
└─ styles/
   └─ global.css
```

---

## Aturan Styling
Gunakan Tailwind CSS dan DaisyUI.

File `src/styles/global.css` wajib berisi:

```
@import "tailwindcss";
@plugin "daisyui";

@theme {
  --color-primary: #B9CEAC;
  --color-secondary: #835f11;
  --color-brand-white: #FFFFFF;
}
```

Gunakan class Tailwind seperti:

```
<section class="mx-auto max-w-7xl px-4 py-16 lg:px-8"></section>
```

Gunakan class DaisyUI seperti:

```
<button class="btn btn-primary">Konsultasi</button>
<div class="card bg-base-100 shadow-xl"></div>
<div class="navbar bg-base-100"></div>
```

---

## Prompt Default untuk Agent
Saat user meminta fitur baru, agent harus memahami project sebagai berikut:

```
Saya membuat website company profile maklon skincare menggunakan Astro JS + Tailwind CSS + DaisyUI.

Ikuti AGENT.md, README.md, dan DESAIN.md.

Gunakan arsitektur layer:
- Presentation Layer untuk halaman, layout, dan component
- Content/Product/Factory Layer untuk data produk, layanan, pabrik, proses
- Logic Layer untuk helper function dan reusable logic

Jangan gunakan React.
Jangan gunakan backend.
Jangan campur semua kode di index.astro.
Gunakan warna utama #659287, #88BDA4, dan putih.
```

---

## Checklist Sebelum Memberi Kode
Sebelum memberikan kode, pastikan:

- File diletakkan di folder yang benar.
- Component tidak terlalu panjang.
- Data berulang ditaruh di `src/data/`.
- Logic reusable ditaruh di `src/lib/`.
- Styling menggunakan Tailwind dan DaisyUI.
- Desain sesuai warna brand.
- Mobile responsive.
- CTA WhatsApp bekerja.
- Tidak ada React.
- Tidak ada backend.
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
