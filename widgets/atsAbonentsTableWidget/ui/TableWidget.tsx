import { abonentApi } from '@/entities/atsAbonent';
import { AtsAbonentsTable } from './Table';
import { Suspense } from 'react';
import { SkeletonMain } from '@/shared/ui/skeleton';
import { AtsAbonentFilterForm } from '@/features/atsAbonent-filter';

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export async function AtsAbonentsTableWidget({ searchParams }: Props) {
  const filters = await searchParams;
  const abonents = await abonentApi.fetch(filters);

  return (
    <div className="container-lg">
      <div className="d-flex justify-content-between mb-3">
        <p className="fs-4 fs-semibold m-0">Абоненты МТС</p>
      </div>

      <AtsAbonentFilterForm />

      <div className="bg-body-tertiary border rounded shadow-sm">
        <Suspense fallback={SkeletonMain()}>
          <AtsAbonentsTable abonents={abonents} />
        </Suspense>
      </div>
    </div>
  );
}
