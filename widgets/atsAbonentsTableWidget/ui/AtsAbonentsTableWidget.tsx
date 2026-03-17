'use client';

import { useFilteredAtsAbonents } from '@/features/atsAbonent-filter/model/useFilteredAbonent';
// import { useAtsAbonentFilter, useFetchAtsAbonents } from '@/entities/atsAbonent';
// import { useEffect } from 'react';
import { AtsAbonentsTable } from './Table';
import { AtsAbonentFilterForm } from '@/features/atsAbonent-filter';

export function AtsAbonentsTableWidget() {
  const { abonentIds, loading } = useFilteredAtsAbonents();
  // const { fetchAtsAbonents, loading } = useFetchAtsAbonents();
  // const { emplId, name } = useAtsAbonentFilter();

  // useEffect(() => {
  //   fetchAtsAbonents({
  //     emplId,
  //     name,
  //   });
  // }, [fetchAtsAbonents, emplId, name]);

  return (
    <>
      <div className="container-lg">
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <p className="fs-4 fs-semibold m-0">Абоненты АТС</p>
          </div>
        </div>

        <AtsAbonentFilterForm />

        <AtsAbonentsTable abonentIds={abonentIds} loading={loading} />
      </div>
    </>
  );
}
