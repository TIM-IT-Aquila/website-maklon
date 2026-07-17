export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItem {
  id?: "company" | "services";
  label: string;
  href?: string;
  children?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    id: "company",
    label: "About Us",
    children: [
      {
        label: "Perusahaan",
        href: "/company",
        description: "Profil & visi misi perusahaan",
        icon: "mdi:office-building",
      },
      {
        label: "Sertifikasi",
        href: "/certification",
        description: "Sertifikasi & legalitas produk",
        icon: "mdi:check-decagram",
      },
      {
        label: "Alur Maklon",
        href: "/outsourcing-flow",
        description: "Tahapan proses maklon",
        icon: "mdi:sign-direction",
      },
      { label: "Kontak", href: "/contact", description: "Hubungi tim Magna", icon: "mdi:phone" },
      { label: "CSR", href: "/csr", description: "Komitmen lingkungan & sosial", icon: "mdi:leaf" },
    ],
  },
  {
    id: "services",
    label: "Services",
    children: [
      {
        label: "OEM / ODM",
        href: "/oem-odm",
        description: "Jasa maklon skincare",
        icon: "mdi:factory",
      },
      {
        label: "R&D",
        href: "/research-development",
        description: "Research & product development",
        icon: "mdi:flask",
      },
      {
        label: "Merek & Paten",
        href: "/paten-brand",
        description: "Pendaftaran merek & HKI",
        icon: "mdi:file-certificate",
      },
      {
        label: "Halal",
        href: "/halal",
        description: "Sertifikasi halal produk",
        icon: "mdi:check-circle",
      },
    ],
  },
  { label: "Products", href: "/products" },
];
