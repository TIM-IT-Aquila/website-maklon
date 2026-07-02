interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
}

export function generateSEOHeaders({ title, description, canonical, image, type = "website" }: SEOProps) {
  return {
    title,
    description,
    canonical,
    image,
    openGraph: {
      title,
      description,
      type,
      locale: "id_ID",
    },
  };
}

export function formatPageTitle(pageName: string, siteName: string = "Aquila Magna"): string {
  return `${pageName} | ${siteName}`;
}