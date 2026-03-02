import type { Review, ReviewDTO, ReviewListResponseDTO, ReviewResponseDTO } from '../model/types';

export function mapReviewDTO(dto: ReviewDTO): Review {
  return {
    ...dto,
    rating: dto.appraisal,
    timestamp: new Date(dto.timestamp),
  };
}

export function mapReviewListResponse(response: ReviewListResponseDTO): Review[] {
  return response.data.map(mapReviewDTO);
}

export function mapReviewSingleResponse(response: ReviewResponseDTO): Review {
  return mapReviewDTO(response.data);
}
