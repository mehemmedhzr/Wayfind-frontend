"use client"

import {
  adminNavigation,
  providerNavigation,
  studentNavigation,
  superAdminNavigation,
} from "@/config/navigation";
import type { UserRole } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type RoleNavigationProps = {
  role: UserRole;
};

export default function RoleNavigation({ role }: RoleNavigationProps) {
  const navigationItems = getNavigationItemsByRole(role);
  const activeMenuColor = getColorByRole(role);
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.href} className={`text-wf-text-secondary text-[13.5px] p-2.5 border border-transparent rounded-[10px] ${pathname === item.href ? `${activeMenuColor[0]} font-semibold text-white ${activeMenuColor[1]}` : ''}`}>
            <Link href={item.href} className="block">{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function getNavigationItemsByRole(role: UserRole) {
  switch (role) {
    case "student":
      return studentNavigation;
    case "provider":
      return providerNavigation;
    case "admin":
      return adminNavigation;
    case "super_admin":
      return superAdminNavigation;
    default:
      return [];
  }
};

function getColorByRole(role: UserRole) {
    switch (role) {
    case "student":
      return ['bg-wf-student-menu', 'border-wf-student-menu-border'];
    case "provider":
      return ['bg-wf-provider-menu', 'border-wf-provider-menu-border'];
    case "admin":
      return ['bg-wf-admin-menu', 'border-wf-admin-menu-border'];
    case "super_admin":
      return ['#a855f721', '#a855f742'];
    default:
      return ["", ""];
  }
}
