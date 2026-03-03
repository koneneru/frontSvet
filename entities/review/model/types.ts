import { ServerResponse } from '@/shared/api/types'

export interface Review {
  id: string | bigint
  timestamp: Date
  machine: string
  rating: number
  problem: string
  solution: string
  comment: string
}

export interface ReviewDTO {
  id: string | bigint
  timestamp: string
  machine: string
  appraisal: number
  problem: string
  solution: string
  comment: string
}
export interface ReviewUpdateDTO {
  timestamp: Date
  machine: string
  appraisal: number
  problem?: string
  solution?: string
  comment?: string
}

export interface ReviewFilters {
  year?: number
}

export type ReviewResponseDTO = ServerResponse<ReviewDTO>;
export type ReviewListResponseDTO = ServerResponse<ReviewDTO[]>;