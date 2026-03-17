import { useCallback, useRef, useState } from 'react';
import { useAbonentStore } from '../model/store';
import { AtsAbonentFilter } from '../model/types';
import { abonentApi } from '../api/abonentApi';

export const useFetchAtsAbonents = () => {
  const setAbonents = useAbonentStore.use.setAbonents();
  const [loading, setLoading] = useState(true);
  const abortRef = useRef<AbortController | null>(null);

  const fetchAtsAbonents = useCallback(async (filtes: AtsAbonentFilter) => {
    abortRef.current?.abort();

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      setLoading(true);

      const abonents = await abonentApi.fetch(filtes);
      setAbonents(abonents);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;

      throw err;
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [setAbonents]);

  return { fetchAtsAbonents, loading };
};
