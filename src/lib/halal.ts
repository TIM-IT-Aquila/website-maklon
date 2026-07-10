import { halalWaMessage } from "../data/halal";

export function createHalalConsultMessage(extra?: string): string {
  if (!extra) return halalWaMessage;
  return `${halalWaMessage}\n\nCatatan: ${extra}`;
}
