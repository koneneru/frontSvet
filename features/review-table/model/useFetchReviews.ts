import { ReviewFilters } from '@/entities/review/model/types';
import { useReviewStore } from '@/entities/review/store/store';
import { useState } from 'react';

export function useFetchReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchReviews = useReviewStore.use.fetchReviews();

  const fetch = async (params: ReviewFilters) => {
    try {
      setLoading(true);
      setError(null);
      await fetchReviews(params);
    } catch (err) {
      setError('Failed to load reviews');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { fetch, loading, error };
}