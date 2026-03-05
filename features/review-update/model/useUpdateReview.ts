import { ReviewUpdateDTO } from '@/entities/review/model/types';
import { useReviewStore } from '@/entities/review/store/store';
import { useState } from 'react';

export function useUpdateReview() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const updateReview = useReviewStore.use.updateReview();

  const update = async (id: string, dto: ReviewUpdateDTO, onSuccess?: () => void) => {
    try {
      setLoading(true);
      setError(null);
      await updateReview(id, dto);
      onSuccess?.();
    } catch (err) {
      setError('Failed to update review');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error }
}