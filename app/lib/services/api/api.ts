import axios, { AxiosError } from 'axios';
import { signOut } from 'next-auth/react';
import { signOut as signOutServer } from '@/auth';
import { forbidden } from 'next/navigation';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        signOut({ callbackUrl: '/login' });
      } else {
        signOutServer();
      }
    }

    if (error.response?.status === 403) {
      forbidden();
    }
    return Promise.reject(error);
  },
);

export const setToken = (params: { token: string | undefined }) => {
  api.defaults.headers.Authorization = `Bearer ${params.token}`;
};

export const handlerBadRequestError = (error: AxiosError) => {
  const data = error.response?.data as {
    message: string | string[],
    error: string,
    statusCode: number
  }

  if (error.response?.status === 400) {
    if (Array.isArray(data.message)) {

      return data.message[0];
    }
    return data.message

  }

  return error.message;
};

export default api;
