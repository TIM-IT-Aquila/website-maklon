import { siteConfig } from "./site";

export type BrandPartner = {
  name: string;
  logo: string;
  scale: number;
  opacity: number;
};

// Sementara memakai logo Magna sebagai placeholder hingga logo brand partner asli tersedia.
const magnaLogo = siteConfig.logo;

export const brandPartners: BrandPartner[] = [
  { name: "Magna", logo: magnaLogo, scale: 0.88, opacity: 0.45 },
  { name: "Magna", logo: magnaLogo, scale: 1.05, opacity: 0.7 },
  { name: "Magna", logo: magnaLogo, scale: 0.95, opacity: 0.55 },
  { name: "Magna", logo: magnaLogo, scale: 1.12, opacity: 0.8 },
  { name: "Magna", logo: magnaLogo, scale: 0.9, opacity: 0.5 },
  { name: "Magna", logo: magnaLogo, scale: 1.0, opacity: 0.65 },
  { name: "Magna", logo: magnaLogo, scale: 1.08, opacity: 0.75 },
  { name: "Magna", logo: magnaLogo, scale: 0.92, opacity: 0.6 },
  { name: "Magna", logo: magnaLogo, scale: 1.15, opacity: 0.85 },
  { name: "Magna", logo: magnaLogo, scale: 0.86, opacity: 0.48 },
];

export const brandPartnersRowTwo: BrandPartner[] = [
  { name: "Magna", logo: magnaLogo, scale: 1.1, opacity: 0.72 },
  { name: "Magna", logo: magnaLogo, scale: 0.9, opacity: 0.52 },
  { name: "Magna", logo: magnaLogo, scale: 1.0, opacity: 0.68 },
  { name: "Magna", logo: magnaLogo, scale: 1.14, opacity: 0.82 },
  { name: "Magna", logo: magnaLogo, scale: 0.87, opacity: 0.46 },
  { name: "Magna", logo: magnaLogo, scale: 1.06, opacity: 0.74 },
  { name: "Magna", logo: magnaLogo, scale: 0.94, opacity: 0.58 },
  { name: "Magna", logo: magnaLogo, scale: 1.18, opacity: 0.88 },
  { name: "Magna", logo: magnaLogo, scale: 0.91, opacity: 0.5 },
  { name: "Magna", logo: magnaLogo, scale: 1.02, opacity: 0.66 },
];
