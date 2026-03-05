export interface Review {
  id: string | bigint
  timestamp: Date
  machine: string
  rating: number
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
