import type { UserRole } from "./roles";

export type NavigationItem = {
  label: string;
  href: string;
  icon?: string;
  allowedRoles: UserRole[];
  children?: NavigationItem[];
};
