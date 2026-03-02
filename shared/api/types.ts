export interface ServerResponse<T> {
  data: T
  meta?: {
    totalCount?: number
    page?: number
    pageSize?: number
  }
}
