import { cookies } from 'next/headers';

export async function fetcher<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    ...options,
    credentials: 'include',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao buscar dados');
  }

  const data: T = await response.json();
  return data;
}

export async function fetcherWithCookies<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = `${baseUrl}${path}`;

  const cookieStore = await cookies();
  const cookie = cookieStore.toString();

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Cookie: cookie,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao buscar dados');
  }

  const data: T = await response.json();
  return data;
}
