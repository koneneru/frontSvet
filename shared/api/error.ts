export class ApiError extends Error {
  constructor(
    public status: number,
    public data: unknown,
    message?: string
  ) {
    super(message || `HTTP Error ${status}`);
    this.name = 'ApiError';
  }
}
