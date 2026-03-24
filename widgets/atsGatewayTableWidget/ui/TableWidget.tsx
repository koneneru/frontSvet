import { AtsGatewaysTable } from './Table';
import { Suspense } from 'react';
import { gatewayApi } from '@/entities/atsGateway';
import { SkeletonMain } from '@/shared/ui/skeleton';
import { GatewayCreateTrigger } from '@/features/atsGateway-create';

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export async function AtsGatewaysTableWidget({ searchParams: _ }: Props) {
  const gateways = await gatewayApi.fetch();

  return (
    <div className="container-lg">
      <div className="d-flex justify-content-between mb-3">
        <p className="fs-4 fw-semibold m-0">Шлюзы АТС</p>
        {/* <Button variant="success" size="sm" onClick={() => setIsCreateModalOpen(true)}>Новый шлюз</Button> */}
        <GatewayCreateTrigger />
      </div>

      <div className="bg-body-tertiary border rounded shadow-sm">
        <Suspense fallback={SkeletonMain()}>
          <AtsGatewaysTable gateways={gateways} />
        </Suspense>
      </div>
    </div>
  );
}
