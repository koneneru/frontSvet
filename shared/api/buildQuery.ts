import { QueryPrimitive, QueryValue } from './types';

function serializeValue(value: QueryPrimitive) {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return String(value);
}

export function buildQuery(query: Record<string, QueryValue>) {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;

    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, serializeValue(v)));
      return;
    }

    params.append(key, serializeValue(value));
  });

  return params.toString();
}
