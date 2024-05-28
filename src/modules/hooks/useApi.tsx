import { useState } from 'react';

import { FETCH_METHOD } from '@/types';

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async ({
    path,
    method,
  }: {
    path: string;
    method?: FETCH_METHOD;
  }) => {
    try {
      setIsLoading(true);

      const response = await fetch(path, {
        method: method ?? 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        setError(responseData.error);
      }

      if (response.ok) {
        setData(responseData);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isLoading, error };
};
