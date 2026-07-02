import { USER_ROLES } from "@/constants/roles";
import { ROUTES } from "@/constants/routes";
import type { NavigationItem } from "@/types";

export const studentNavigation: NavigationItem[] = [
  {
    label: "Panel",
    href: ROUTES.student.dashboard,
    allowedRoles: [USER_ROLES.STUDENT],
  },
  {
    label: "AI Köməkçi",
    href: ROUTES.student.ai,
    allowedRoles: [USER_ROLES.STUDENT],
  },
  {
    label: "Univesitet axtarışı",
    href: ROUTES.student.universitySearch,
    allowedRoles: [USER_ROLES.STUDENT],
  },
  {
    label: "Müəllimlər",
    href: ROUTES.student.teachers,
    allowedRoles: [USER_ROLES.STUDENT],
  },
  {
    label: "Konsultantlar",
    href: ROUTES.student.consultants,
    allowedRoles: [USER_ROLES.STUDENT],
  },
  {
    label: "Bronlar",
    href: ROUTES.student.bookings,
    allowedRoles: [USER_ROLES.STUDENT],
  },
];

export const providerNavigation: NavigationItem[] = [];

export const adminNavigation: NavigationItem[] = [];

export const superAdminNavigation: NavigationItem[] = [];
