import { useCallback, useState } from 'react';
import { createGateway } from '../api/gatewayApi';
import { useGatewayStorage } from '../model/gatewayStore';
import { AtsGatewayAddDTO } from '../model/types';

export const useCreateAtsGateway = () => {
  const upsertGateway = useGatewayStorage.use.upsertGateway();
  const [loading, setLoading] = useState(false);

  const createAtsGateway = useCallback(async (dto: AtsGatewayAddDTO) => {
    try {
      setLoading(true);

      const createdGateway = await createGateway(dto);
      upsertGateway(createdGateway);
    } finally {
      setLoading(false);
    }
  }, [upsertGateway]);

  return { createAtsGateway, loading };
};
