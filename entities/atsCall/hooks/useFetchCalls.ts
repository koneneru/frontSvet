import { useCallStore } from '../model/callStore';
import { useCallback, useRef, useState } from 'react';
import { AtsCallFilters } from '../model/types';
import { fetchCalls } from '../api/callApi';

export const useFetchAtsCalls = () => {
  const setCalls = useCallStore.use.setCalls();
  const [loading, setLoading] = useState(true);
  const abortRef = useRef<AbortController | null>(null);

  const fetchAtsCalls = useCallback(async (filters: AtsCallFilters) => {
    abortRef.current?.abort();

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      setLoading(true);

      const calls = await fetchCalls(filters, controller.signal);
      setCalls(calls);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;

      throw err;
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [setCalls]);

  return { fetchAtsCalls, loading };
};
