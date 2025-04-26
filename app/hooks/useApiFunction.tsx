import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import { setToken } from '../lib/services/api/api';

interface UseApiFunctionResponse<T> {
  data: T | null;
  error: any | null;
  isLoading: boolean;
  isFinish: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callApi: (...args: any[]) => Promise<T | undefined>;
}

export function useApiFunction<T>(
  apiFunction: (...args: any[]) => Promise<T>,
  defaultValue: any = null,
): UseApiFunctionResponse<T> {
  const [data, setData] = useState<T | null>(defaultValue);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const { data: session } = useSession();
  const token = session?.user?.access_token;

  const callApi = useCallback(
    async (...args: any[]) => {
      setIsLoading(true);
      setError(null);
      setToken({ token });
      setIsFinish(false);

      try {
        const response = await apiFunction(...args);
        setData(response);
        return response;
      } catch (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response?.status === 401) {
          return;
        }

        if (axiosError.response) {
          setError(axiosError.response.data as string);
        } else {
          setError(axiosError.message);
        }
      } finally {
        setIsLoading(false);
        setIsFinish(true);
      }
    },
    [apiFunction, token],
  );

  return { data, error, isLoading, isFinish, callApi };
}
