import { createEntityAdapter, createSelectors } from '@/shared/lib/zustand';
import { AtsAbonent } from './types';
import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';

const abonentAdapter = createEntityAdapter<AtsAbonent>();

interface AbonentState {
  abonents: ReturnType<typeof abonentAdapter.getInitialState>

  setAbonents: (abonents: AtsAbonent[]) => void
};

const abonentStore = create<AbonentState>()(
  immer(set => ({
    abonents: abonentAdapter.getInitialState(),

    setAbonents: abonents =>
      set((state) => {
        abonentAdapter.setAll(state.abonents, abonents);
      }),
  }))
);

export const useAbonentStore = createSelectors(abonentStore);
