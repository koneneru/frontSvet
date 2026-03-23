'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type FilterValue = string | number | boolean | null | undefined;

export function useUrlFilters<T extends Record<string, FilterValue>>(delay = 300) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getFilter = useCallback(<K extends keyof T>(name: K): T[K] | undefined => {
    const value = searchParams?.get(name as string);
    if (value === null) return undefined;
    return value as T[K];
  }, [searchParams]);

  const allFilters = useMemo(() => {
    const filters: Partial<T> = {};
    searchParams?.forEach((v, k) => {
      filters[k as keyof T] = v as T[keyof T];
    });

    return filters;
  }, [searchParams]);

  const buildQueryString = useCallback((name: keyof T, value: FilterValue, params: URLSearchParams) => {
    const stringValue = value?.toString().trim();

    if (stringValue && stringValue !== '') {
      params.set(name as string, stringValue);
    } else {
      params.delete(name as string);
    }

    return params;
  }, []);

  const setFilter = useCallback((name: keyof T, value: FilterValue) => {
    const params = new URLSearchParams(searchParams?.toString());
    buildQueryString(name, value, params);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [router, pathname, searchParams, buildQueryString]);

  const setFilters = useCallback((filters: Partial<T>) => {
    const params = new URLSearchParams(searchParams?.toString());
    Object.entries(filters).forEach(([name, value]) => {
      buildQueryString(name, value, params);
    });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [router, pathname, searchParams, buildQueryString]);

  const setFilterDebounced = useDebouncedCallback(setFilter, delay);

  return {
    getFilter,
    allFilters,
    setFilter,
    setFilterDebounced,
    setFilters,
  };
}
