'use client';

import { useUrlFilters } from '@/shared/lib/urlFilters/useUrlFilters';

export function useReviewFilters() {
  const { getNumber } = useUrlFilters();

  return {
    year: getNumber('year'),
    page: getNumber('page') ?? 1,
  }
}