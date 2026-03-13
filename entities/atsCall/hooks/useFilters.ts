import { useDebounce } from '@/shared/lib/debounce';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export const useAtsCallFilters = () => {
  const { getString, getNumber } = useUrlFilters();

  const rawCaller = getString('caller');
  const rawCallee = getString('callee');
  const gateway = getString('gateway');
  const page = getNumber('page') ?? 1;

  const caller = useDebounce(rawCaller, 300);
  const callee = useDebounce(rawCallee, 300);

  return {
    caller,
    callee,
    gateway,
    page,
  };
};
