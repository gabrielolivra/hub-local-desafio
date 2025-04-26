import { auth } from '@/auth';
import { Session } from 'next-auth';
import { NextResponse } from 'next/server';
import { setToken } from './services/api/api';

export interface ICallSrrAuthHandler {
  (session: Session, request: Request): Promise<NextResponse>;
}

export function callSsrWithAuthentication(handler: ICallSrrAuthHandler) {
  return async (request: Request) => {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return handler(session, request);
  };
}

export interface IAuthApiHandler<T> {
  (...args: any[]): Promise<T>;
}

export function callApiWithAuthentication<T>(handler: IAuthApiHandler<T>) {
  return async (...args: any[]) => {
    const session = await auth();
    setToken({ token: session?.user?.access_token });
    if (!session) {
      return null;
    }
    return handler(...args);
  };
}
