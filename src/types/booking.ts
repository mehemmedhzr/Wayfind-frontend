export type BookingStatus =
  | "pending"
  | "active"
  | "completed"
  | "cancelled"
  | "disputed";

export type EscrowStatus =
  | "notFunded"
  | "held"
  | "released"
  | "refunded"
  | "disputed";
