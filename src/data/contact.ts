export type ContactLocation = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  hours: string;
  icon: string;
  embedUrl: string;
  mapsUrl: string;
};

export const contactLocations: ContactLocation[] = [
  {
    id: "office",
    name: "Kantor Pusat",
    shortName: "Kantor",
    address: "Jl. Pembangunan, No. 27, Kel. Lemahabang, Kec. Indramayu, Kab. Indramayu, 45211",
    hours: "Senin – Jumat, 08:00 – 17:00",
    icon: "lucide:building-2",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.043933889201!2d108.33063!3d-6.326336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ebbc9899e4317%3A0xeb4d191287580629!2sAquila%20Herb%20Office!5e0!3m2!1sid!2sus!4v1783067412296!5m2!1sid!2sus",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aquila+Herb+Office+Indramayu",
  },
  {
    id: "factory",
    name: "Pabrik Produksi",
    shortName: "Pabrik",
    address: "Jl. Jati Blok Pulo Seger, Desa Plumbon, Kec. Indramayu, Kab. Indramayu, 45215",
    hours: "Senin – Sabtu, 07:00 – 16:00",
    icon: "lucide:factory",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.3221323914995!2d108.307375!3d-6.373197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb9930bbc50e3%3A0x80b295fb0705270b!2sAquila%20New%20Factory!5e0!3m2!1sid!2sus!4v1783067287940!5m2!1sid!2sus",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aquila+New+Factory+Indramayu",
  },
];
