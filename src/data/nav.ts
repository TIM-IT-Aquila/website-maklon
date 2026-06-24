export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    children: [
      { label: "Perusahaan", href: "/tentang-kami", description: "Profil & visi misi perusahaan" },
      { label: "Sertifikasi", href: "/sertifikasi", description: "Sertifikasi & legalitas produk" },
      { label: "Alur Maklon", href: "/alur-maklon", description: "Tahapan proses maklon" },
      { label: "Kontak", href: "/kontak", description: "Hubungi tim Aquila Maklon" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "OEM / ODM", href: "/layanan", description: "Jasa maklon skincare & kosmetik" },
      { label: "RED", href: "/layanan#red", description: "Research & product development" },
      { label: "Merek & Paten", href: "/layanan#merek-paten", description: "Pendaftaran merek & HKI" },
    ],
  },
  { label: "Products", href: "/produk-maklon" },
  { label: "Portfolio", href: "/portofolio" },
  { label: "Blog", href: "/blog" },
];