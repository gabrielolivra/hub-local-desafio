import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import Header from './_partial/header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <title>Desafio HUB local</title>
      <Header session={session} />
      <div className="pt-16">{children}</div>
      <ToastContainer />
    </SessionProvider>
  );
}