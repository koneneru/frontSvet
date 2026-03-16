'use client';

import { useEffect } from 'react';
import { AtsCallsTable } from './AtsCallsTable';
import { useAtsCallFilters, useFetchAtsCalls } from '@/entities/atsCall';
import { AtsCallFilters } from '@/features/atsCall-filter';

export function AtsCallsTableWidget() {
  const { fetchAtsCalls, loading } = useFetchAtsCalls();
  const { caller, callee, gateway, direction, intercity, dateFrom, dateTo } = useAtsCallFilters();

  useEffect(() => {
    fetchAtsCalls({
      caller,
      callee,
      gateway,
      direction,
      intercity,
      dateFrom,
      dateTo,
    });
  }, [
    fetchAtsCalls,
    caller,
    callee,
    gateway,
    direction,
    intercity,
    dateFrom,
    dateTo,
  ]);

  return (
    <>
      <div className="container-lg">
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <p className="fs-4 fs-semibold m-0">Журнал вызовов АТС</p>
          </div>
        </div>

        <AtsCallFilters />

        <AtsCallsTable loading={loading} />
      </div>
    </>
  );
}
