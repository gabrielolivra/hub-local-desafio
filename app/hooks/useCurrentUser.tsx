import { User } from 'next-auth';
import { useSession } from 'next-auth/react';

interface CurrentUser {
  user: User | undefined;
}

export function useCurrentUser(): CurrentUser {
  const { data: session } = useSession();

  return { user: session?.user };
}
