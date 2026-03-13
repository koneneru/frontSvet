import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AtsGateway } from './types';
import { createEntityAdapter, createSelectors } from '@/shared/lib/zustand';

const gatewayAdapter = createEntityAdapter<AtsGateway>();

interface GatewayState {
  gateways: ReturnType<typeof gatewayAdapter.getInitialState>

  setGateways: (gateways: AtsGateway[]) => void
  upsertGateway: (gateway: AtsGateway) => void
  removeGateway: (id: string) => void
}

const gatewayStore = create<GatewayState>()(
  immer(set => ({
    gateways: gatewayAdapter.getInitialState(),

    setGateways: gateways =>
      set((state) => {
        gatewayAdapter.setAll(state.gateways, gateways);
      }),

    upsertGateway: gateway =>
      set((state) => {
        gatewayAdapter.upsertOne(state.gateways, gateway);
      }),

    removeGateway: id =>
      set((state) => {
        gatewayAdapter.removeOne(state.gateways, id);
      }),
  }))
);

export const useGatewayStorage = createSelectors(gatewayStore);
