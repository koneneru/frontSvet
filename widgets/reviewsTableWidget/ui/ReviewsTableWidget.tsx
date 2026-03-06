'use client';

import { useEffect } from 'react';
import { useFetchReviews } from '@/entities/review';
import { useUrlFilters } from '@/shared/lib/urlFilters';
import { ReviewsTable } from './ReviewsTable';

export function ReviewsTableWidget() {
  const { getNumber } = useUrlFilters();
  const fetchReviews = useFetchReviews();

  const year = getNumber('year');
  // const page = getNumber('page') ?? 1;

  useEffect(() => {
    fetchReviews({
      year,
    })
  }, [fetchReviews, year]);

  return <ReviewsTable />;
}