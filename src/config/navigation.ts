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
    label: "Universitet axtarışı",
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

export const providerNavigation: NavigationItem[] = [
    {
        label: "Panel",
        href: ROUTES.provider.dashboard,
        allowedRoles: [USER_ROLES.PROVIDER]
    },
    {
        label: "Paketlər",
        href: ROUTES.provider.packages,
        allowedRoles: [USER_ROLES.PROVIDER]
    },
    {
        label: "Bronlar",
        href: ROUTES.provider.bookings,
        allowedRoles: [USER_ROLES.PROVIDER]
    },
];

export const adminNavigation: NavigationItem[] = [
    {
        label: "Panel",
        href: ROUTES.admin.dashboard,
        allowedRoles: [USER_ROLES.ADMIN]
    },
    {
        label: "İstifadəçilər",
        href: ROUTES.admin.users,
        allowedRoles: [USER_ROLES.ADMIN]
    },
    {
        label: "Provayderlər",
        href: ROUTES.admin.providers,
        allowedRoles: [USER_ROLES.ADMIN]
    },
    {
        label: "Bronlar",
        href: ROUTES.admin.bookings,
        allowedRoles: [USER_ROLES.ADMIN]
    },
    {
        label: "Bilik bazası",
        href: ROUTES.admin.knowledgeBase,
        allowedRoles: [USER_ROLES.ADMIN]
    },
    {
        label: "Moderasiya",
        href: ROUTES.admin.moderation,
        allowedRoles: [USER_ROLES.ADMIN]
    },
];

export const superAdminNavigation: NavigationItem[] = [];
