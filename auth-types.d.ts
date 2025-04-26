// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

// se https://authjs.dev/getting-started/typescript for more information.

declare module 'next-auth' {
  interface User {
    access_token?: string | undefined;
    refresh_token?: string | undefined;
    role?: string | undefined;
    token_exp?: number | undefined;
    token_iat?: number | undefined;
  }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    access_token?: string;
    refresh_token?: string;
    token_exp?: number;
    token_iat?: number;
    role?: string;
  }
}
