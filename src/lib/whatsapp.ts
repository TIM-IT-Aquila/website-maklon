export function createWhatsappLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export interface ConsultationMessageFields {
  nama: string;
  wa: string;
  email: string;
  produk: string;
  estimasi: string;
  kategori: string;
  pesan: string;
}

export function createConsultationMessage(fields: ConsultationMessageFields): string {
  return [
    "Halo, saya ingin konsultasi maklon.",
    "",
    `Nama: ${fields.nama}`,
    `No. WhatsApp: ${fields.wa}`,
    `Email: ${fields.email}`,
    `Jenis Produk: ${fields.produk}`,
    `Estimasi: ${fields.estimasi}`,
    `Kategori Bisnis: ${fields.kategori}`,
    `Pesan: ${fields.pesan}`,
  ].join("\n");
}