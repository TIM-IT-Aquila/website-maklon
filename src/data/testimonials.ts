import { avatarImages } from "./images";
import type { ContentReviewNote } from "./content-status";

// TODO(content): Data testimonial berikut adalah contoh/dummy. Ganti dengan testimonial asli atau tandai sebagai anonim dengan persetujuan klien.
export const testimonialsContentReview: ContentReviewNote = {
  status: "placeholder",
  owner: "marketing",
  reason: "Testimonial masih contoh/dummy dan perlu diganti dengan kutipan asli atau anonim yang disetujui klien.",
};

export const testimonials = [
  {
    name: "Rina Amelia",
    brand: "Founder Brand A",
    text: "Proses maklonnya sangat membantu. Tim Aquila mendampingi dari awal sampai produk jadi. Formula serum wajah saya sesuai dengan yang diinginkan.",
    avatar: avatarImages.woman1,
    rating: 5,
  },
  {
    name: "Dian Pratama",
    brand: "Owner Skincare Lokal",
    text: "Kualitas produk sangat baik. Saya dibantu dari urusan formula sampai kemasan. Prosesnya jelas dan tidak ribet. Sangat recommended!",
    avatar: avatarImages.woman2,
    rating: 5,
  },
  {
    name: "Sari Dewi",
    brand: "Beautypreneur",
    text: "Akhirnya bisa punya produk sendiri berkat Aquila Magna. Tim R&D-nya responsif dan sabar menjelaskan. Hasil body lotion-nya laris manis!",
    avatar: avatarImages.woman3,
    rating: 5,
  },
  {
    name: "Budi Santoso",
    brand: "Founder Brand Kosmetik",
    text: "Pelayanan sangat profesional dan tepat waktu. Dari awal konsultasi sampai produk jadi, semua berjalan lancar. Legalitas BPOM dan Halal juga diurus dengan baik.",
    avatar: avatarImages.man1,
    rating: 5,
  },
];