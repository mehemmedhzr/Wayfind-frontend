import {
  adminNavigation,
  providerNavigation,
  studentNavigation,
  superAdminNavigation,
} from "@/config/navigation";
import { UserRole } from "@/types";
import Link from "next/link";

type RoleNavigationProps = {
  role: UserRole;
};

export default function RoleNavigation({ role }: RoleNavigationProps) {
  const navigationItems = getNavigationItemsByRole(role);

  return (
    <nav className="">
      <ul className="">
        {navigationItems.map((item) => (
          <li key={item.href} className="text-wf-text-secondary text-[13.5px] p-2.5">
            <Link href={item.href}>{item.label}</Link>
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
}
