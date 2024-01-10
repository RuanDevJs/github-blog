import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

import { AxiosRequestConfig } from "axios";

interface IuseFetch<T> {
  data: T | null;
  loading: boolean;
  error: null | string;
}

export default function useFetch<T>(
  url: string,
  init?: AxiosRequestConfig | undefined
): IuseFetch<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const options = useRef(init);
  options.current = init;

  const fetchDataFromApi = useCallback(async () => {
    try {
      const response = await axios.get(url, { ...options.current });
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseJson = (await response.data) as T;
      setData(responseJson);
    } catch (error) {
      if (error instanceof Error) {
        console.debug(error.message);
        setError(error.message);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [url]);

  useEffect(() => {
    fetchDataFromApi();
  }, [fetchDataFromApi]);

  return { data, loading, error };
}
