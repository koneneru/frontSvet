import { buildQuery } from './buildQuery';
import type { HttpMethod, QueryValue } from './types';

interface RequestOptions<TBody = unknown> extends Omit<RequestInit, 'method' | 'body'> {
  method?: HttpMethod
  body?: TBody
  query?: Record<string, QueryValue>
  sugnal?: AbortSignal
}

const BASE_URL = 'http://localhost:7777/api/v1';

export async function httpClient<TResponse, TBody = unknown>(
  url: string,
  options: RequestOptions<TBody> = {}
): Promise<TResponse> {
  const { query, method = 'GET', body, headers, signal, ...rest } = options;

  let fullUrl = `${BASE_URL}${url}`;

  if (query) {
    const queryString = buildQuery(query);

    if (queryString) {
      fullUrl += `?${queryString}`;
    }
  }

  const res = await fetch(fullUrl, {
    method,
    signal,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: method !== 'GET' && body ? JSON.stringify(options.body) : undefined,
    ...rest,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorText}`);
  }

  return res.json();
}
