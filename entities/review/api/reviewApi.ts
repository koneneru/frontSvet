import { httpClient } from '@/shared/api';
import { Review, ReviewFilters, ReviewUpdateDTO } from '../model/types';
import { ReviewListResponseDTO, ReviewResponseDTO } from './types';
import { mapReviewListResponse, mapReviewSingleResponse } from './mapper';

const ENDPOINT = '/appeals';

export const feedbackApi = {
  fetch: async (filters: ReviewFilters): Promise<Review[]> => {
    const response = await httpClient<ReviewListResponseDTO>(ENDPOINT, {
      method: 'GET',
      query: filters,
      next: { tags: ['reviews'] },
    });

    return mapReviewListResponse(response);
  },

  update: async (id: string, updateDTO: ReviewUpdateDTO): Promise<Review> => {
    const response = await httpClient<ReviewResponseDTO>(`${ENDPOINT}/${id}`, {
      method: 'PATCH',
      body: updateDTO,
      cache: 'no-store',
    });

    return mapReviewSingleResponse(response);
  },
};
