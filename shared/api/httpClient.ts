type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions<TBody = unknown> extends Omit<RequestInit, 'method' | 'body'> {
  method?: HttpMethod
  body?: TBody
  query?: Record<string, string>
}

export async function httpClient<TResponse, TBody = unknown>(
  url: string,
  options: RequestOptions<TBody> = {}
): Promise<TResponse> {
  let fulUrl = url;

  if (options.query && Object.keys(options.query).length > 0) {
    const params = new URLSearchParams(options.query).toString();
    fulUrl += `?${params}`;
  }

  const res = await fetch(fulUrl, {
    method: options.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    body: options.method && options.method !== 'GET' && options.body
      ? JSON.stringify(options.body)
      : null,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorText}`);
  }

  return res.json();
}
