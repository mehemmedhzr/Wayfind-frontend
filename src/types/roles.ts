export type UserRole =
  | "guest"
  | "student"
  | "provider"
  | "admin"
  | "super_admin";

export type ProviderType = "teacher" | "consultant";

export type DegreeLevel = "bachelor" | "master" | "phd";

export type VerificationStatus =
  | "pending"
  | "inReview"
  | "approved"
  | "rejected"
  | "needsMoreInfo";
