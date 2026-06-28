import type {
  BookingStatus,
  DegreeLevel,
  EscrowStatus,
  ProviderType,
  UserRole,
  VerificationStatus,
} from "@/types";

export const USER_ROLES = {
  GUEST: "guest",
  STUDENT: "student",
  PROVIDER: "provider",
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
} as const;

export const ROLE_LABELS: Record<UserRole, string> = {
  guest: "Qonaq",
  student: "Tələbə",
  provider: "Provayder",
  admin: "Admin",
  super_admin: "Super Admin",
};

export const PROVIDER_TYPE_LABELS: Record<ProviderType, string> = {
  teacher: "Sertifikat Müəllimi",
  consultant: "Konsultant",
};

export const DEGREE_LEVEL_LABELS: Record<DegreeLevel, string> = {
  bachelor: "Bakalavr",
  master: "Magistr",
  phd: "Doktorantura",
};

export const VERIFICATION_STATUS_LABELS: Record<VerificationStatus, string> = {
  pending: "Gözləmədə",
  inReview: "Nəzərdən keçirilir",
  approved: "Təsdiqlənib",
  rejected: "Rədd edilib",
  needsMoreInfo: "Əlavə məlumat lazımdır",
};

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  pending: "Gözləmədə",
  active: "Aktiv",
  completed: "Tamamlanıb",
  cancelled: "Ləğv edilib",
  disputed: "Mübahisəli",
};

export const ESCROW_STATUS_LABELS: Record<EscrowStatus, string> = {
  notFunded: "Ödənilməyib",
  held: "Saxlanılır",
  released: "Buraxılıb",
  refunded: "Geri qaytarılıb",
  disputed: "Mübahisəli",
};
