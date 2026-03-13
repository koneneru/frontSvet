import { useCallback, useState } from 'react';
import { useGatewayStorage } from '../model/gatewayStore';
import { deleteGateway } from '../api/gatewayApi';

export const useDeleteAtsGateway = () => {
  const removeGateway = useGatewayStorage.use.removeGateway();
  const [loading, setLoading] = useState(false);

  const deleteAtsGateway = useCallback(async (id: string) => {
    try {
      setLoading(true);

      await deleteGateway(id);
      removeGateway(id);
    } finally {
      setLoading(false);
    }
  }, [removeGateway]);

  return { deleteAtsGateway, loading };
};
