import type { Review, ReviewFilters, ReviewListResponseDTO } from './model/types';
import { mapReviewListResponse } from './model/mapper';
import { httpClient } from '@/shared/api/httpClient';

const baseUrl = 'http://localhost:7777/api/v1/appeals';

export async function fetchReviews(filters: ReviewFilters): Promise<Review[]> {
  const response = await httpClient<ReviewListResponseDTO>(baseUrl, {
    method: 'GET',
    query: filters as Record<string, string>,
  });

  return mapReviewListResponse(response);
}

// export async function updateAppeal(id: string, updateDTO: AppealUpdateDTO): Promise<Appeal> {
//   const response = await httpClient<ReviewResponseDTO>(`${baseUrl}/${id}`, {
//     method: 'PATCH',
//     body: updateDTO,
//   });

//   return mapAppealSingleResponse(response);
// }
