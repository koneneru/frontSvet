import { Suspense } from 'react';
import { AtsCallsTable } from './Table';
import { AtsCallFilters } from '@/features/atsCall-filter';
import { callApi } from '@/entities/atsCall';
import { SkeletonMain } from '@/shared/ui/skeleton';
import { gatewayApi } from '@/entities/atsGateway';
import { DictionaryHydrator } from '@/shared/dictionaries';

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export async function AtsCallsTableWidget({ searchParams }: Props) {
  const filters = await searchParams;
  const [calls, gateways] = await Promise.all([
    callApi.fetch(filters),
    gatewayApi.fetchDictionary(),
  ]);

  return (
    <>
      <DictionaryHydrator gateways={gateways} />

      <div className="container-lg">
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-4 fs-semibold m-0">Журнал вызовов АТС</p>
        </div>

        <AtsCallFilters />

        <div className="bg-body-tertiary border rounded shadow-sm">
          <Suspense fallback={SkeletonMain()}>
            <AtsCallsTable calls={calls} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
