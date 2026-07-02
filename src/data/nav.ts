export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
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
      { label: "Perusahaan", href: "/company", description: "Profil & visi misi perusahaan", icon: "mdi:office-building" },
      { label: "Sertifikasi", href: "/certification", description: "Sertifikasi & legalitas produk", icon: "mdi:check-decagram" },
      { label: "Alur Maklon", href: "/outsourcing-flow", description: "Tahapan proses maklon", icon: "mdi:sign-direction" },
      { label: "Kontak", href: "/contact", description: "Hubungi tim Aquila Maklon", icon: "mdi:phone" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "OEM / ODM", href: "/oem-odm", description: "Jasa maklon skincare & kosmetik", icon: "mdi:factory" },
      { label: "RED", href: "/research-development", description: "Research & product development", icon: "mdi:flask" },
      { label: "Merek & Paten", href: "/merek-paten", description: "Pendaftaran merek & HKI", icon: "mdi:file-certificate" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portofolio" },
  { label: "Blog", href: "/blog" },
];