'use client';

import { useFetchCalls } from '@/entities/atsCall';
import { useUrlFilters } from '@/shared/lib/urlFilters';
import { useEffect } from 'react';
import { AtsCallsTable } from './AtsCallsTable';

export function AtsCallsTableWidget() {
  const { getString } = useUrlFilters();
  const fetchCalls = useFetchCalls();

  const caller = getString('caller');

  useEffect(() => {
    fetchCalls({
      caller: caller,
    });
  }, [fetchCalls, caller]);

  return <AtsCallsTable />;
}
