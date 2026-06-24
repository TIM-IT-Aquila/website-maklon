interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export function generateSEOHeaders({ title, description, canonical }: SEOProps) {
  return {
    title,
    description,
    canonical,
    openGraph: {
      title,
      description,
      type: "website" as const,
      locale: "id_ID",
    },
  };
}

export function formatPageTitle(pageName: string, siteName: string = "Aquila Maklon"): string {
  return `${pageName} | ${siteName}`;
}