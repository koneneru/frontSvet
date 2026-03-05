import { ServerResponse } from '@/shared/api/types';

export interface ReviewDTO {
  id: string | bigint
  timestamp: string
  machine: string
  appraisal: number
  problem: string
  solution: string
  comment: string
}

export type ReviewResponseDTO = ServerResponse<ReviewDTO>;
export type ReviewListResponseDTO = ServerResponse<ReviewDTO[]>;
