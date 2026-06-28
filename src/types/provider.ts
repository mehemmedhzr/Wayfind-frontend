import type { ProviderType, VerificationStatus } from "./roles";

export interface ProviderProfile {
  id: string;
  userId: string;
  providerType: ProviderType;
  displayName: string;
  verificationStatus: VerificationStatus;
  rating: number | null;
  reviewCount: number;
  createdAt: string;
}
