import { UserRole } from "@/types";
import RoleNavigation from "./RoleNavigation";

type SidebarProps = {
    role: UserRole
}

export default function Sidebar({role}: SidebarProps) {
    return(
        <aside className="hidden w-[220px] bg-wf-surface border-r border-[var(--wf-border)] py-4 px-3 lg:block">
            <div className="pt-1.5 px-2 pb-3.5">
               <span className="font-heading text-lg font-bold">
                 <span className="text-wf-primary-soft">Way</span>
                 <span className="text-wf-provider">find</span>
               </span>
             </div>
            <RoleNavigation role={role} />
        </aside>
    )
}