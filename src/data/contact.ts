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
    id: "factory",
    name: "Pabrik Produksi",
    shortName: "Pabrik",
    address: "Jl. Jati Blok Pulo Seger, Desa Plumbon, Kec. Indramayu, Kab. Indramayu, 45215",
    hours: "Senin - Jumat, 08:00 - 16:00",
    icon: "lucide:factory",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.3221323914995!2d108.307375!3d-6.373197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb9930bbc50e3%3A0x80b295fb0705270b!2sAquila%20New%20Factory!5e0!3m2!1sid!2sus!4v1783067287940!5m2!1sid!2sus",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aquila+New+Factory+Indramayu",
  },
];
