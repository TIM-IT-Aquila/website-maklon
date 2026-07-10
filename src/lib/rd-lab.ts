import type { rdIngredientLibrary, rdTestingFlow } from "../data/research-development";

export type RdIngredient = (typeof rdIngredientLibrary)[number];
export type RdTestingStep = (typeof rdTestingFlow)[number];

export function createRdConsultMessage(ingredientName?: string, testingStep?: string): string {
  const lines = [
    "Halo, saya ingin konsultasi formula dan racikan bahan aktif untuk produk skincare saya.",
  ];

  if (ingredientName) {
    lines.push("", `Bahan aktif yang saya minati: ${ingredientName}`);
  }

  if (testingStep) {
    lines.push("", `Saya ingin tahu lebih lanjut tentang tahap: ${testingStep}`);
  }

  return lines.join("\n");
}
