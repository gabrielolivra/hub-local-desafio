'use client'
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import ProfileDropdown from "./profile-dropdown";
import { useSearchParams } from "next/navigation";
import { Session } from "next-auth";

export default function Header({ session }: { session: Session | null }) {
  const searchParams = useSearchParams()
  const company = searchParams.get('company') ? `Empresa de ${searchParams.get('company')}` : 'Minhas empresas'

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-white shadow-md z-50">
      <div className="flex items-center justify-around space-x-2 gap-2">
        <BuildingOfficeIcon className="h-8 w-8 ml-4 text-hub-secondary-orange" />
        <span className="text-lg font-bold text-hub-secondary-orange">
          {company}
        </span>
      </div>
      <ProfileDropdown
        userName={session?.user?.name || 'Usuário'}
      />
    </header>
  )
}