import { useAtsAbonentFilter, useAtsAbonents, useFetchAtsAbonents } from '@/entities/atsAbonent';
import { useEffect, useMemo } from 'react';

export function useFilteredAtsAbonents() {
  const { filters: { emplId, name } } = useAtsAbonentFilter();
  const { fetchAtsAbonents, loading } = useFetchAtsAbonents();
  const { ids, byId } = useAtsAbonents();

  useEffect(() => {
    fetchAtsAbonents({});
  }, [fetchAtsAbonents]);

  const filteredIds = useMemo(() => {
    const queryName = name?.toLowerCase().trim();
    const queryEmplId = emplId?.toLowerCase().trim();

    if (!queryName && !queryEmplId) return ids;

    return ids.filter((id) => {
      const abonent = byId[id];
      if (!abonent) return false;

      const matchEmplId = queryEmplId ? abonent.emplId.includes(queryEmplId) : true;
      const matchName = queryName ? abonent.name.toLowerCase().includes(queryName) : true;

      return matchEmplId && matchName;
    });
  }, [ids, byId, emplId, name]);

  return { abonentIds: filteredIds, loading };
}
