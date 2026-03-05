import type { Review, ReviewFilters, ReviewListResponseDTO, ReviewResponseDTO, ReviewUpdateDTO } from './model/types';
import { mapReviewListResponse, mapReviewSingleResponse } from './model/mapper';
import { httpClient } from '@/shared/api/httpClient';

const baseUrl = 'http://localhost:7777/api/v1/appeals';

export async function fetchReviews(filters: ReviewFilters): Promise<Review[]> {
  const response = await httpClient<ReviewListResponseDTO>(baseUrl, {
    method: 'GET',
    query: filters as Record<string, string>,
  });

  return mapReviewListResponse(response);
}

export async function updateReview(id: string, updateDTO: ReviewUpdateDTO): Promise<Review> {
  const response = await httpClient<ReviewResponseDTO>(`${baseUrl}/${id}`, {
    method: 'PATCH',
    body: updateDTO,
  });

  return mapReviewSingleResponse(response);
}
