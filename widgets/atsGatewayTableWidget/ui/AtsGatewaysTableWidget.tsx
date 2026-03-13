'use client';

import { AtsGatewaysTable } from './AtsGatewaysTable';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { AtsGatewayAddModal } from './AtsGatewayAddModal';
import { useFetchAtsGateways } from '@/entities/atsGateway';

export function AtsGatewaysTableWidget() {
  const { fetchAtsGateways, loading } = useFetchAtsGateways();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    fetchAtsGateways(true);
  }, [fetchAtsGateways]);

  return (
    <>
      <div className="container-lg">
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <p className="fs-4 fw-semibold m-0">Шлюзы АТС</p>
            <Button variant="success" size="sm" onClick={() => setIsCreateModalOpen(true)}>Новый шлюз</Button>
          </div>
        </div>

        <AtsGatewaysTable loading={loading} />

        <AtsGatewayAddModal show={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      </div>
    </>
  );
}
