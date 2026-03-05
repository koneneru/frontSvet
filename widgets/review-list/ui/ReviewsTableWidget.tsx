'use client';

import { useEffect } from 'react';
import { useFetchReviews } from '@/entities/review/hooks/useFetchReviews';
import { useUrlFilters } from '@/shared/lib/urlFilters/useUrlFilters';

export function ReviewsTableWidget() {
  const { getNumber } = useUrlFilters();
  const { fetchReviews } = useFetchReviews();

  useEffect(() => {
    fetch({
      year: getNumber('year'),
      page: getNumber('page') ?? 1,
    })
  }, [searchParams]);
}