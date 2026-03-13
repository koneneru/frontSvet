export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type QueryPrimitive = string | number | boolean | Date;
export type QueryValue = QueryPrimitive | QueryPrimitive[] | null | undefined;

export interface ServerResponse<T> {
  data: T
  meta?: {
    totalCount?: number
    page?: number
    pageSize?: number
  }
}
