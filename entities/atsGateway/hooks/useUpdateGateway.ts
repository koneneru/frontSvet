import type { AtsGatewayUpdateDTO } from '../model/types';
import { useGatewayStorage } from '../model/gatewayStore';
import { updateGateway } from '../api/gatewayApi';
import { useCallback, useState } from 'react';

export const useUpdateAtsGateway = () => {
  const upsertGateway = useGatewayStorage.use.upsertGateway();
  const [loading, setLoading] = useState(false);

  const updateAtsGateway = useCallback(async (id: string, dto: AtsGatewayUpdateDTO) => {
    try {
      setLoading(true);

      const updatedGateway = await updateGateway(id, dto);
      upsertGateway(updatedGateway);
    } finally {
      setLoading(false);
    }
  }, [upsertGateway]);

  return { updateAtsGateway, loading };
};
