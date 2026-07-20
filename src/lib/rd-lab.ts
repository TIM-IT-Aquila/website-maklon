import type { rdTestingFlow } from "../data/research-development";

export type RdTestingStep = (typeof rdTestingFlow)[number];

export function createRdConsultMessage(topic?: string): string {
  const lines = ["Halo, saya ingin konsultasi pengembangan produk skincare."];

  if (topic) {
    lines.push("", `Saya ingin tahu lebih lanjut tentang: ${topic}`);
  }

  return lines.join("\n");
}
