import { UserRole } from "@/types"
import Sidebar from "../navigation/Sidebar"
import DashboardHeader from "../navigation/DashboardHeader"

type DashboardLayoutProps = {
    children: React.ReactNode,
    role: UserRole,
}

export default function DashboardLayout({children, role}: DashboardLayoutProps) {
    return(
        <div className="flex min-h-screen">
            <Sidebar role={role}/>

            <div className="flex flex-col flex-1">
                <DashboardHeader role={role}/>

                <main className="flex-1 p-6 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    )
}