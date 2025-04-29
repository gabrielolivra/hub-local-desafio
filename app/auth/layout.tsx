import { auth } from '@/auth';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import ProfileDropdown from './_partial/profile-dropdown';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <title>Desafio HUB local</title>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-white shadow-md z-50">
        <div className="flex items-center justify-around space-x-2 gap-2">
          <BuildingOfficeIcon className="h-8 w-8 ml-4 text-hub-secondary-orange" />
          <span className="text-lg font-bold text-hub-secondary-orange">
            Minhas Empresas
          </span>
        </div>
        <ProfileDropdown
          userName={session?.user?.name || 'Usuário'}
        />
      </header>
      <div className="pt-16">{children}</div>
      <ToastContainer />
    </SessionProvider>
  );
}