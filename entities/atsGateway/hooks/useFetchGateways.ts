import { useCallback, useState } from 'react';
import { useGatewayStorage } from '../model/gatewayStore';
import { fetchGateways } from '../api/gatewayApi';

export const useFetchAtsGateways = () => {
  const setGateways = useGatewayStorage.use.setGateways();
  const [loading, setLoading] = useState(true);

  const fetchAtsGateways = useCallback(async (initial = false) => {
    try {
      if (initial) setLoading(true);

      const gateways = await fetchGateways();
      setGateways(gateways);
    } finally {
      if (initial) setLoading(false);
    }
  }, [setGateways]);

  return { fetchAtsGateways, loading };
};
