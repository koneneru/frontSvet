'use client';

import { AtsAbonentsTable } from './Table';
import { AtsAbonentFilterForm, useFilteredAtsAbonents } from '@/features/atsAbonent-filter';

export function AtsAbonentsTableWidget() {
  const { abonentIds, loading } = useFilteredAtsAbonents();

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
