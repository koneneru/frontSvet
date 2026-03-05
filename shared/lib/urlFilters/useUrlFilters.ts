'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function useUrlFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setFilter = (name: string, value?: string | number) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (value === undefined || value === '' || value === null) {
      params.delete(name);
    } else {
      params.set(name, String(value))
    }

    router.push(`?${params.toString()}`);
  }

  const getFilter = (name: string) => {
    return searchParams?.get(name);
  }

  const getNumber = (name: string) => {
    const v = searchParams?.get(name);
    return v ? Number(v) : undefined;
  }

  const getString = (name: string) => {
    return searchParams?.get(name) ?? undefined;
  }

  return {
    searchParams,
    setFilter,
    getFilter,
    getNumber,
    getString,
  }
}