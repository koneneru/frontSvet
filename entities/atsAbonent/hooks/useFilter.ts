import { useDebounce } from '@/shared/lib/debounce';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export const useAtsAbonentFilter = () => {
  const { getString, setFilter } = useUrlFilters();

  const rawEmplId = getString('emplId');
  const rawName = getString('emplName');

  const emplId = useDebounce(rawEmplId, 300);
  const name = useDebounce(rawName, 300);

  return {
    filters: {
      emplId,
      name,
    },
    setFilter,
  };
};
