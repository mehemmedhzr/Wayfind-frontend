import { UserRole } from "@/types"

type DashboardHeaderProps = {
    role: UserRole
}

export default function DashboardHeader({role}: DashboardHeaderProps) {
    return(
        <header className="">
            <p>Rol: {role}</p>
        </header>
    )
}