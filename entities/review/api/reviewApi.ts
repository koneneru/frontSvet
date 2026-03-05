import { httpClient } from '@/shared/api/httpClient';
import { Review, ReviewFilters, ReviewUpdateDTO } from '../model/types';
import { ReviewListResponseDTO, ReviewResponseDTO } from './types';
import { mapReviewListResponse, mapReviewSingleResponse } from './mapper';

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
