'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function useReviewFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setFilter = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString())

    if (value) params.set(name, value);
    else params.delete(name);

    router.push(`?${params.toString()}`);
  }

  return {
    searchParams,
    setFilter,
  };
}
