import { create } from 'zustand';
import { AtsCall } from './types';
import { createEntityAdapter, createSelectors } from '@/shared/lib/zustand';
import { immer } from 'zustand/middleware/immer';

const callAdapter = createEntityAdapter<AtsCall>();

interface CallState {
  calls: ReturnType<typeof callAdapter.getInitialState>

  setCalls: (calls: AtsCall[]) => void
}

const callStore = create<CallState>()(
  immer(set => ({
    calls: callAdapter.getInitialState(),

    setCalls: calls =>
      set((state) => {
        callAdapter.setAll(state.calls, calls);
      }),
  }))
);

export const useCallStore = createSelectors(callStore);
