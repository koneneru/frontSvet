import { create } from 'zustand';
import { DictionaryItem } from './types';
import { createSelectors } from '@/shared/lib/zustand';

interface DictionaryState {
  departments: DictionaryItem[]
  gateways: DictionaryItem[]

  actions: {
    setDepartments: (data: DictionaryItem[]) => void
    setGateways: (data: DictionaryItem[]) => void
    setAllDictionaries: (data: Partial<Omit<DictionaryState, 'actions'>>) => void
  }
}

export const dictionaryStore = create<DictionaryState>(set => ({
  departments: [],
  gateways: [],

  actions: {
    setDepartments: departments => set({ departments }),
    setGateways: gateways => set({ gateways }),

    setAllDictionaries: data => set(state => ({ ...state, ...data })),
  },
}));

export const useDictionaryStore = createSelectors(dictionaryStore);
