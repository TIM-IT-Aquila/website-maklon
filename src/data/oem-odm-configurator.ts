export const oemFormulaCatalog = [
  {
    id: "serum-glowing-niacinamide",
    name: "Serum Glowing Niacinamide 5%",
    category: "Serum",
    description: "Mencerahkan kulit, meratakan tone, dan memperkuat skin barrier.",
    baseUnitPrice: 18500,
    icon: "lucide:droplets",
    highlight: "Best Seller",
  },
  {
    id: "acne-spot-cream",
    name: "Acne Spot Cream",
    category: "Treatment",
    description: "Krim spot treatment dengan salicylic acid & tea tree untuk jerawat.",
    baseUnitPrice: 16200,
    icon: "lucide:sparkles",
    highlight: "Acne Care",
  },
  {
    id: "hydrating-toner",
    name: "Hydrating Toner HA 2%",
    category: "Toner",
    description: "Toner pelembap dengan hyaluronic acid untuk kulit kering & dehidrasi.",
    baseUnitPrice: 14800,
    icon: "lucide:flask-conical",
    highlight: "Hydration",
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum 10%",
    category: "Serum",
    description: "Serum antioksidan untuk mencerahkan dan melindungi kulit dari polusi.",
    baseUnitPrice: 19800,
    icon: "lucide:sun",
    highlight: "Brightening",
  },
  {
    id: "retinol-night-cream",
    name: "Retinol Night Cream 0.3%",
    category: "Moisturizer",
    description: "Krim malam anti-aging dengan retinol encapsulated untuk kulit halus.",
    baseUnitPrice: 21500,
    icon: "lucide:moon",
    highlight: "Anti-Aging",
  },
  {
    id: "body-lotion-glow",
    name: "Body Lotion Glowing",
    category: "Bodycare",
    description: "Body lotion dengan niacinamide & pearl extract untuk kulit bercahaya.",
    baseUnitPrice: 13500,
    icon: "lucide:sparkles",
    highlight: "Bodycare",
  },
] as const;

export const textureOptions = [
  { id: "gel", label: "Gel", description: "Ringan, cepat menyerap, cocok untuk oily skin" },
  { id: "emulsion", label: "Emulsion", description: "Tekstur creamy-lembut, balance hydration" },
  { id: "liquid", label: "Liquid", description: "Watery & fresh, ideal untuk toner & essence" },
] as const;

export const scentOptions = [
  { id: "unscented", label: "Unscented", premium: 0 },
  { id: "floral", label: "Floral Soft", premium: 300 },
  { id: "citrus", label: "Citrus Fresh", premium: 350 },
  { id: "herbal", label: "Herbal Calm", premium: 400 },
  { id: "vanilla", label: "Vanilla Cream", premium: 450 },
] as const;

export const containerOptions = [
  { id: "dropper", label: "Botol Pipet", icon: "lucide:test-tubes", premium: 0 },
  { id: "pump", label: "Pump Bottle", icon: "lucide:bottle-wine", premium: 800 },
  { id: "jar", label: "Jar", icon: "lucide:package", premium: 600 },
] as const;

export const premiumMaterials = [
  { id: "standard", label: "Standard Plastic", premium: 0 },
  { id: "amber-glass", label: "Kaca Amber", premium: 4500 },
  { id: "frosted-glass", label: "Frosted Glass", premium: 6200 },
  { id: "aluminium", label: "Aluminium", premium: 3800 },
] as const;

export const activeIngredientConfig = [
  { id: "retinol", label: "Retinol", min: 0, max: 2, step: 0.1, unit: "%", premiumPerUnit: 2500 },
  { id: "vitaminC", label: "Vitamin C", min: 0, max: 20, step: 1, unit: "%", premiumPerUnit: 180 },
  { id: "ceramide", label: "Ceramide", min: 0, max: 5, step: 0.5, unit: "%", premiumPerUnit: 1200 },
] as const;

export const pricingConfig = {
  oem: {
    moq: 1000,
    label: "OEM — Formula Siap Pakai",
    unitPriceNote: "Harga per unit fix berdasarkan formula katalog",
  },
  odm: {
    moq: 3000,
    baseUnitPrice: 22000,
    rdFee: 18000000,
    label: "ODM — Kustomisasi Formula & Desain",
    unitPriceNote: "Breakdown biaya bahan baku + biaya R&D",
  },
} as const;
