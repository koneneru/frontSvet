import { useDebounce } from '@/shared/lib/debounce';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export const useAtsCallFilters = () => {
  const { getString, getNumber, getBoolean } = useUrlFilters();

  const rawCaller = getString('caller');
  const rawCallee = getString('callee');
  const gateway = getString('gateway');
  const direction = getString('direction');
  const intercity = getBoolean('intercity');
  const dateFrom = getString('dateFrom');
  const dateTo = getString('dateTo');
  const page = getNumber('page') ?? 1;

  const caller = useDebounce(rawCaller, 300);
  const callee = useDebounce(rawCallee, 300);

  return {
    caller,
    callee,
    gateway,
    direction,
    intercity,
    dateFrom,
    dateTo,
    page,
  };
};
