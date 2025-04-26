import type { Account, NextAuthConfig } from 'next-auth';

export const authConfig = {
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_PUBLIC_SESSION_MAX_AGES) || 60 * 60 * 24,
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAuthPath = nextUrl.pathname.startsWith('/auth');
      if (isAuthPath) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/auth', nextUrl));
      }
      return true;
    },
    async signIn({ account, user }) {
      if (!!user.access_token && !!account) {
        const accountToUpate: Account = {
          ...account,
          access_token: user.access_token,
          refresh_token: user.refresh_token,
          expires_in: user.token_exp,
          scope: user.role,
          type: 'credentials',
          token_type: 'jwt',
        };

        Object.assign(account, accountToUpate);

        return true;
      }

      return false;
    },
    async jwt({ token, user, account }) {
      if (!!user && !!account) {
        return {
          ...token,
          exp: account?.expires_in,
          access_token: account?.access_token,
          role: account?.scope,
          refresh_token: account?.refresh_token,
          sub: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.access_token = token.access_token;
      session.user.refresh_token = token.refresh_token;
      session.user.role = token.refresh_token;
      session.user.id = token.sub as string;
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
