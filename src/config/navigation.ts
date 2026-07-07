import { USER_ROLES } from "@/constants/roles";
import { ROUTES } from "@/constants/routes";
import type { NavigationItem } from "@/types";

export const studentNavigation: NavigationItem[] = [
  {
    label: "Panel",
    href: ROUTES.student.dashboard,
    allowedRoles: [USER_ROLES.STUDENT],
    icon: undefined,
  },
  {
    label: "AI Köməkçi",
    href: ROUTES.student.ai,
    allowedRoles: [USER_ROLES.STUDENT],
    icon: undefined,
  },
  {
    label: "Universitet axtarışı",
    href: ROUTES.student.universitySearch,
    allowedRoles: [USER_ROLES.STUDENT],
    icon: undefined,
  },
  {
    label: "Müəllimlər",
    href: ROUTES.student.teachers,
    allowedRoles: [USER_ROLES.STUDENT],
    icon: undefined,
  },
  {
    label: "Konsultantlar",
    href: ROUTES.student.consultants,
    allowedRoles: [USER_ROLES.STUDENT],
    icon: undefined,
  },
  {
    label: "Bronlar",
    href: ROUTES.student.bookings,
    allowedRoles: [USER_ROLES.STUDENT],
    icon: undefined,
  },
];

export const providerNavigation: NavigationItem[] = [
    {
        label: "Panel",
        href: ROUTES.provider.dashboard,
        allowedRoles: [USER_ROLES.PROVIDER],
        icon: undefined,
    },
    {
        label: "Paketlər",
        href: ROUTES.provider.packages,
        allowedRoles: [USER_ROLES.PROVIDER],
        icon: undefined,
    },
    {
        label: "Bronlar",
        href: ROUTES.provider.bookings,
        allowedRoles: [USER_ROLES.PROVIDER],
        icon: undefined,
    },
];

export const adminNavigation: NavigationItem[] = [
    {
        label: "Panel",
        href: ROUTES.admin.dashboard,
        allowedRoles: [USER_ROLES.ADMIN],
        icon: undefined,
    },
    {
        label: "İstifadəçilər",
        href: ROUTES.admin.users,
        allowedRoles: [USER_ROLES.ADMIN],
        icon: undefined,
    },
    {
        label: "Provayderlər",
        href: ROUTES.admin.providers,
        allowedRoles: [USER_ROLES.ADMIN],
        icon: undefined,
    },
    {
        label: "Bronlar",
        href: ROUTES.admin.bookings,
        allowedRoles: [USER_ROLES.ADMIN],
        icon: undefined,
    },
    {
        label: "Bilik bazası",
        href: ROUTES.admin.knowledgeBase,
        allowedRoles: [USER_ROLES.ADMIN],
        icon: undefined,
    },
    {
        label: "Moderasiya",
        href: ROUTES.admin.moderation,
        allowedRoles: [USER_ROLES.ADMIN],
        icon: undefined,
    },
];

export const superAdminNavigation: NavigationItem[] = [];
