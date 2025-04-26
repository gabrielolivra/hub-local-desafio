import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <title>Desafio HUB local</title>
      {children}
      <ToastContainer />
    </SessionProvider>
  );
}
