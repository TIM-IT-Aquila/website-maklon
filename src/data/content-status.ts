export type ContentStatus = "final" | "draft" | "placeholder" | "needs-verification";

export interface ContentReviewNote {
  status: ContentStatus;
  reason: string;
  owner?: "business" | "legal" | "marketing" | "operations";
}
