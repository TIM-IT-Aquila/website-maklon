import {
  oemFormulaCatalog,
  scentOptions,
  containerOptions,
  premiumMaterials,
  textureOptions,
  pricingConfig,
  activeIngredientConfig,
} from "../data/oem-odm-configurator";

export type ServiceMode = "oem" | "odm";

export interface ActiveIngredientValues {
  retinol: number;
  vitaminC: number;
  ceramide: number;
}

export interface ConfiguratorState {
  mode: ServiceMode;
  formulaId: string;
  retinol: number;
  vitaminC: number;
  ceramide: number;
  texture: string;
  scent: string;
  container: string;
  material: string;
  designFileName: string | null;
}

export interface PricingBreakdown {
  mode: ServiceMode;
  moq: number;
  unitPrice: number;
  subtotalProduction: number;
  rdFee: number;
  materialPremium: number;
  ingredientPremium: number;
  containerPremium: number;
  scentPremium: number;
  totalEstimate: number;
  breakdownLabel: string;
}

export interface PreviewSummary {
  modeLabel: string;
  formulaLabel: string;
  textureLabel: string;
  scentLabel: string;
  containerLabel: string;
  materialLabel: string;
  designLabel: string;
  activeSummary: string;
}

export const defaultConfiguratorState: ConfiguratorState = {
  mode: "oem",
  formulaId: oemFormulaCatalog[0].id,
  retinol: 0.3,
  vitaminC: 10,
  ceramide: 2,
  texture: textureOptions[1].id,
  scent: scentOptions[0].id,
  container: containerOptions[0].id,
  material: premiumMaterials[0].id,
  designFileName: null,
};

function findOptionLabel<T extends { id: string; label: string }>(
  options: readonly T[],
  id: string,
): string {
  return options.find((item) => item.id === id)?.label ?? id;
}

function getIngredientPremium(values: ActiveIngredientValues): number {
  return activeIngredientConfig.reduce((total, config) => {
    const value = values[config.id as keyof ActiveIngredientValues];
    return total + value * config.premiumPerUnit;
  }, 0);
}

function getContainerPremium(containerId: string): number {
  return containerOptions.find((item) => item.id === containerId)?.premium ?? 0;
}

function getScentPremium(scentId: string): number {
  return scentOptions.find((item) => item.id === scentId)?.premium ?? 0;
}

function getMaterialPremium(materialId: string): number {
  return premiumMaterials.find((item) => item.id === materialId)?.premium ?? 0;
}

export function calculatePricing(state: ConfiguratorState): PricingBreakdown {
  const containerPremium = getContainerPremium(state.container);
  const scentPremium = state.mode === "odm" ? getScentPremium(state.scent) : 0;
  const materialPremium =
    state.mode === "odm" ? getMaterialPremium(state.material) : 0;

  if (state.mode === "oem") {
    const formula =
      oemFormulaCatalog.find((item) => item.id === state.formulaId) ??
      oemFormulaCatalog[0];
    const unitPrice = formula.baseUnitPrice + containerPremium;
    const moq = pricingConfig.oem.moq;
    const subtotalProduction = unitPrice * moq;

    return {
      mode: "oem",
      moq,
      unitPrice,
      subtotalProduction,
      rdFee: 0,
      materialPremium: 0,
      ingredientPremium: 0,
      containerPremium,
      scentPremium: 0,
      totalEstimate: subtotalProduction,
      breakdownLabel: "Harga per unit fix — tanpa biaya R&D",
    };
  }

  const ingredientPremium = getIngredientPremium({
    retinol: state.retinol,
    vitaminC: state.vitaminC,
    ceramide: state.ceramide,
  });
  const unitPrice =
    pricingConfig.odm.baseUnitPrice +
    ingredientPremium +
    containerPremium +
    scentPremium +
    materialPremium;
  const moq = pricingConfig.odm.moq;
  const subtotalProduction = unitPrice * moq;
  const rdFee = pricingConfig.odm.rdFee;
  const totalEstimate = subtotalProduction + rdFee;

  return {
    mode: "odm",
    moq,
    unitPrice,
    subtotalProduction,
    rdFee,
    materialPremium,
    ingredientPremium,
    containerPremium,
    scentPremium,
    totalEstimate,
    breakdownLabel: "Bahan baku + packaging + biaya R&D formulasi",
  };
}

export function buildPreviewSummary(state: ConfiguratorState): PreviewSummary {
  const formula =
    oemFormulaCatalog.find((item) => item.id === state.formulaId) ??
    oemFormulaCatalog[0];

  const activeSummary =
    state.mode === "odm"
      ? `Retinol ${state.retinol}% · Vit C ${state.vitaminC}% · Ceramide ${state.ceramide}%`
      : formula.name;

  return {
    modeLabel:
      state.mode === "oem"
        ? pricingConfig.oem.label
        : pricingConfig.odm.label,
    formulaLabel: state.mode === "oem" ? formula.name : "Formula Kustom Eksklusif",
    textureLabel: findOptionLabel(textureOptions, state.texture),
    scentLabel: findOptionLabel(scentOptions, state.scent),
    containerLabel: findOptionLabel(containerOptions, state.container),
    materialLabel:
      state.mode === "odm"
        ? findOptionLabel(premiumMaterials, state.material)
        : "Standard (OEM)",
    designLabel: state.designFileName ?? "Belum ada file",
    activeSummary,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function createConfiguratorWhatsappMessage(
  state: ConfiguratorState,
  preview: PreviewSummary,
): string {
  const moqRef =
    state.mode === "oem"
      ? pricingConfig.oem.moq
      : pricingConfig.odm.moq;

  const lines = [
    "Halo, saya tertarik layanan OEM/ODM Magna dan ingin mendapatkan penawaran harga.",
    "",
    "Berikut preferensi konfigurasi saya:",
    `Mode: ${preview.modeLabel}`,
    `Formula: ${preview.formulaLabel}`,
    `Tekstur: ${preview.textureLabel}`,
    `Aroma: ${preview.scentLabel}`,
    `Wadah: ${preview.containerLabel}`,
    `Material: ${preview.materialLabel}`,
    `Bahan Aktif: ${preview.activeSummary}`,
    `Desain Kemasan: ${preview.designLabel}`,
    `MOQ referensi: mulai ${moqRef.toLocaleString("id-ID")} pcs`,
    "",
    "Mohon informasi harga, timeline, dan langkah selanjutnya. Terima kasih.",
  ];

  return lines.join("\n");
}

export function getContainerMockupClass(containerId: string): string {
  switch (containerId) {
    case "pump":
      return "rounded-t-2xl rounded-b-lg";
    case "jar":
      return "rounded-2xl";
    default:
      return "rounded-t-full rounded-b-xl";
  }
}

export function getMaterialMockupStyle(materialId: string): { bg: string; accent: string } {
  switch (materialId) {
    case "amber-glass":
      return { bg: "bg-amber-700/80", accent: "border-amber-900/40" };
    case "frosted-glass":
      return { bg: "bg-white/40 backdrop-blur-md", accent: "border-white/60" };
    case "aluminium":
      return { bg: "bg-gradient-to-b from-slate-300 to-slate-400", accent: "border-slate-500/50" };
    default:
      return { bg: "bg-primary/25", accent: "border-primary/30" };
  }
}
