import { useDebounce } from '@/shared/lib/debounce';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export const useReviewFilters = () => {
  const { getNumber } = useUrlFilters();

  const rawYear = getNumber('year') ?? (new Date()).getFullYear();

  const year = useDebounce(rawYear, 300);

  return { year };
};
