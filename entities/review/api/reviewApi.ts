import { httpClient } from '@/shared/api';
import { Review, ReviewFilters, ReviewUpdateDTO } from '../model/types';
import { ReviewListResponseDTO, ReviewResponseDTO } from './types';
import { mapReviewListResponse, mapReviewSingleResponse } from './mapper';

export async function fetchReviews(filters: ReviewFilters): Promise<Review[]> {
  const response = await httpClient<ReviewListResponseDTO>('/appeals', {
    method: 'GET',
    query: filters as Record<string, string>,
  });

  return mapReviewListResponse(response);
}

export async function updateReview(id: string, updateDTO: ReviewUpdateDTO): Promise<Review> {
  const response = await httpClient<ReviewResponseDTO>(`/appeals/${id}`, {
    method: 'PATCH',
    body: updateDTO,
  });

  return mapReviewSingleResponse(response);
}
