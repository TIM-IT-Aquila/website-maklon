# Sistem Komponen Magna

Dokumen ini menjelaskan penerapan pola kerja komponen Figma pada source code Astro. Gunakan bersama [AGENTS.md](AGENTS.md) dan [CODE_STYLE.md](CODE_STYLE.md).

## Model Mental

| Figma              | Astro di proyek ini                                      |
| ------------------ | -------------------------------------------------------- |
| Variable dan style | Theme Tailwind/DaisyUI di `src/styles/global.css`        |
| Main component     | Satu file `.astro` di `src/components/`                  |
| Instance           | Pemakaian komponen pada page atau komponen lain          |
| Variant            | Prop union dengan pilihan terbatas                       |
| Component property | Prop untuk konfigurasi terkontrol                        |
| Content override   | Prop untuk teks sederhana, slot untuk markup             |
| Nested component   | Komponen Astro yang menyusun komponen lain               |
| Auto layout        | Utility layout Tailwind                                  |
| Page template      | `MainLayout` dan composition yang terbukti dipakai ulang |

File komponen adalah sumber kebenaran tampilan. Jangan menyalin markup komponen ke page untuk membuat variasi. Tambahkan variant hanya jika variasi tersebut sudah memiliki konsumen nyata.

## Lapisan Komponen

### UI

Komponen kecil dan tidak mengetahui domain bisnis, ditempatkan di `src/components/ui/`.

| Komponen        | Tanggung jawab                                | Kontrak utama                                   |
| --------------- | --------------------------------------------- | ----------------------------------------------- |
| `Container`     | Lebar maksimum dan padding horizontal halaman | `as`, `maxWidth`, `class`                       |
| `Icon`          | Satu pintu untuk ikon Astro Icon              | `name`, `size`, `class`                         |
| `SectionHeader` | Label dan heading section                     | `label`, `title`, `align`, `tone`, slot `title` |
| `PageHero`      | Hero gambar untuk halaman layanan             | Data gambar/judul dan slot konten               |
| `WAButton`      | CTA WhatsApp dari konfigurasi situs           | `message`, `variant`, `size`, `asButton`        |
| `FAQItem`       | Disclosure FAQ native dan accessible          | `question`, `answer`, `variant`, `tone`, `name` |
| `ModalShell`    | Struktur dialog dan backdrop                  | `boxClass`, atribut dialog, default slot        |

### Cards

Komponen pada `src/components/cards/` mengetahui bentuk data domain tertentu. Contohnya `ServiceCard`, yang menerima satu object layanan dan tidak menyimpan koleksi layanan.

### Sections

Komponen pada `src/components/sections/` menyusun beberapa UI component menjadi blok halaman, seperti `CTASection` dan `TestimonialSection`. Buat section component hanya jika blok tersebut dipakai utuh pada lebih dari satu route atau merupakan elemen global layout.

### Global shell

`MainLayout`, `Navbar`, `Footer`, dan `FloatingWA` adalah shell global. Konten domain page tidak boleh dimasukkan ke lapisan ini.

## Aturan API

- Gunakan prop union untuk variasi visual yang stabil, misalnya `tone: "default" | "light"`.
- Berikan default yang mewakili pemakaian paling umum.
- Gunakan prop untuk nilai sederhana dan slot untuk markup atau penekanan teks.
- Gunakan nama semantik seperti `primary`, `compact`, dan `light`; hindari nama berbasis nilai seperti `green` atau `24px`.
- `class` hanya menjadi escape hatch lokal. Jangan menjadikannya cara utama memilih tampilan.
- Teruskan atribut HTML hanya jika consumer nyata membutuhkannya. `WAButton` dan `ModalShell` melakukannya untuk atribut `data-*`.
- Komponen presentasi tidak membaca koleksi data domain secara tersembunyi. Page atau section memilih data lalu mengirimkannya sebagai props.
- Komponen interaktif memakai elemen native terlebih dahulu: `<details>` untuk disclosure dan `<dialog>` untuk modal.
- Setiap interaksi browser memiliki root `data-*`; selector turunan dimulai dari root tersebut.

## Membuat Komponen Baru

Ekstrak komponen hanya jika seluruh kondisi berikut terpenuhi:

1. Pola memiliki sedikitnya dua konsumen nyata atau merupakan elemen global.
2. Struktur, visual, atau perilakunya sudah stabil.
3. API komponen lebih sederhana daripada markup yang digantikan.
4. Komponen memiliki satu tanggung jawab yang dapat dijelaskan singkat.
5. Ekstraksi tidak memindahkan data panjang atau logic domain ke presentation component.

Jika dua pola hanya terlihat mirip tetapi memiliki state atau kebutuhan domain berbeda, pertahankan sebagai composition terpisah.

## Contoh Instance

```astro
---
import Container from "../components/ui/Container.astro";
import FAQItem from "../components/ui/FAQItem.astro";
---

<Container maxWidth="3xl">
  {faqs.map((faq, index) => (
    <FAQItem
      question={faq.q}
      answer={faq.a}
      index={index + 1}
      open={index === 0}
    />
  ))}
</Container>
```

`name` pada `FAQItem` dapat dipakai untuk membuat accordion eksklusif dengan perilaku native browser, tanpa JavaScript tambahan.

## Keputusan Audit Terakhir

Pola berikut sudah dikonsolidasikan:

- Container dan padding horizontal seluruh route.
- FAQ pada beranda, halaman FAQ, Halal, R&D, serta OEM/ODM.
- Shell modal pada katalog produk, Halal, dan R&D.
- Variant `SectionHeader` dan `WAButton` yang memiliki konsumen nyata saja.
- Forwarding atribut CTA OEM/ODM agar script konfigurator menemukan instance tombol.

Pola berikut sengaja tidak diekstrak:

- Statistik, karena animasi dan bentuk datanya berbeda antarrute.
- Tabs, karena state dan semantik panel OEM/ODM, legalitas, dan lokasi berbeda.
- Form field, karena contact form dan upload legalitas memiliki validasi berbeda.
- Generic card, karena card saat ini membawa domain dan interaksi yang berbeda.
- Generic page template, karena belum ada dua struktur route yang identik dan stabil.
- `SectionShell`, karena variasi spacing dan background masih lebih jelas sebagai komposisi page.

Tinjau kembali keputusan tersebut hanya setelah muncul konsumen baru yang benar-benar sama.

## Checklist Perubahan

- Data panjang tetap berasal dari `src/data/`.
- Helper murni tetap berada di `src/lib/`.
- Browser behavior tetap berada di page atau `src/scripts/` dengan root eksplisit.
- Prop dan variant baru memiliki consumer aktif.
- Mobile, desktop, keyboard, dan CTA WhatsApp tetap bekerja.
- `bun run format:check`, `bun run check`, dan `bun run build` lulus.
