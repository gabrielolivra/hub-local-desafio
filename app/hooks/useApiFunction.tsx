import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import { setToken } from '../lib/services/api/api';

interface UseApiFunctionOptions {
  isPublic?: boolean;
}

interface UseApiFunctionResponse<T> {
  data: T | null;
  error: any | null;
  isLoading: boolean;
  isFinish: boolean;
  callApi: (...args: any[]) => Promise<T | undefined>;
}

export function useApiFunction<T>(
  apiFunction: (...args: any[]) => Promise<T>,
  defaultValue: T | null = null,
  options: UseApiFunctionOptions = {}
): UseApiFunctionResponse<T> {
  const { isPublic = false } = options;

  const { data: session } = useSession()
  const token = session?.user?.access_token ?? null;

  const [data, setData] = useState<T | null>(defaultValue);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const callApi = useCallback(
    async (...args: any[]) => {
      setIsLoading(true);
      setError(null);
      setIsFinish(false);

      try {
        if (!isPublic && token) {
          setToken({ token });
        }

        const response = await apiFunction(...args);
        setData(response);
        return response;
      } catch (err) {
        const axiosError = err as AxiosError;

        if (axiosError.response?.status === 401) {
          console.error('Não autorizado.');
          return;
        }

        if (axiosError.response?.data) {
          setError(axiosError.response.data);
        } else {
          setError(axiosError.message);
        }
      } finally {
        setIsLoading(false);
        setIsFinish(true);
      }
    },
    [apiFunction, token, isPublic],
  );

  return { data, error, isLoading, isFinish, callApi };
}
