import { updateReview } from '@/entities/review/api';
import { ReviewUpdateDTO } from '@/entities/review/model/types';
import { useState } from 'react';

export function useUpdateReview() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = async (id: string, dto: ReviewUpdateDTO) => {
    try {
      setLoading(true);
      setError(null);
      return await updateReview(id, dto);
    } catch (e) {
      setError('Failed to update review');
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error }
}