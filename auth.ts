import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { login } from '@/app/lib/services/api/auth/login';
import * as jose from 'jose';

const authorize = async (credentials: Record<string, unknown>) => {
  const user: Partial<User> = {};

  const parsedCredentials = z
    .object({ registration: z.string(), password: z.string().min(4) })
    .required({ registration: true })
    .safeParse(credentials);

  try {
    if (!parsedCredentials.success) return null;

    const { registration, password } = parsedCredentials.data;

    const response = await login({ password, registration });

    const { username, role, sub, iat, exp } = jose.decodeJwt<
      Record<string, any>
    >(response.accessToken);
    user.name = username;
    user.id = sub;
    user.access_token = response.accessToken;
    user.token_exp = exp;
    user.token_iat = iat;

    return user;
  } catch {
    return null;
  }
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        registration: { label: 'Register', id: 'register', type: 'register' },
        password: { label: 'Password', id: 'password', type: 'password' },
      },
      authorize,
    }),
  ],
});
