'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type FilterValue = string | number | Date | null | undefined;

export function useUrlFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParams = (params: URLSearchParams) => {
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const normalizeValue = (value: FilterValue) => {
    if (value instanceof Date) return value.toISOString();
    if (typeof value === 'boolean') return value ? 'true' : 'false';
    return String(value);
  };

  const setFilter = (name: string, value?: FilterValue) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (value === undefined || value === null || value === '') {
      params.delete(name);
    } else {
      params.set(name, normalizeValue(value));
    }

    updateParams(params);
  };

  const setFilters = (filters: Record<string, FilterValue>) => {
    const params = new URLSearchParams(searchParams?.toString());

    Object.entries(filters).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') {
        params.delete(key);
      } else {
        params.set(key, normalizeValue(value));
      }
    });

    updateParams(params);
  };

  const getString = (name: string) => {
    return searchParams?.get(name) ?? undefined;
  };

  const getNumber = (name: string) => {
    const v = searchParams?.get(name);
    return v ? Number(v) : undefined;
  };

  const getBoolean = (name: string) => {
    return searchParams?.get(name) === 'true';
  };

  const getDate = (name: string) => {
    const v = searchParams?.get(name);
    return v ? new Date(v) : undefined;
  };

  const getArray = (name: string) => {
    return searchParams?.getAll(name) ?? [];
  };

  return {
    searchParams,
    setFilter,
    setFilters,
    getString,
    getNumber,
    getBoolean,
    getDate,
    getArray,
  };
}
