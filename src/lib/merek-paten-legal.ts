export type CertificationBadgeVariant = "success" | "warning" | "info";

export type BureaucracyStepStatus = "completed" | "current" | "upcoming";

export type VaultDocumentStatus = "ready" | "processing" | "archived";

export interface LegalPillar {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  statValue: string;
  statDesc: string;
  statusLabel: string;
  badgeVariant: CertificationBadgeVariant;
  icon: string;
  services: string[];
}

export interface BureaucracyStep {
  id: string;
  step: number;
  title: string;
  description: string;
  status: BureaucracyStepStatus;
  icon: string;
}

export interface UploadDocumentField {
  id: "nib" | "ktp" | "npwp";
  label: string;
  hint: string;
  accept: string;
  maxSizeMb: number;
}

export interface VaultDocument {
  id: string;
  name: string;
  fileType: string;
  issuedAt: string;
  status: VaultDocumentStatus;
  sizeLabel: string;
}

export const MAX_UPLOAD_SIZE_MB = 5;

export function formatUploadSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function isFileWithinLimit(bytes: number, maxMb: number): boolean {
  return bytes <= maxMb * 1024 * 1024;
}
