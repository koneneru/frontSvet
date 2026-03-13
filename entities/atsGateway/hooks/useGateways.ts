import { useGatewayStorage } from '../model/gatewayStore';

export const useGateways = () => {
  return useGatewayStorage.use.gateways();
};
