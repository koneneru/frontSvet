import { create } from 'zustand';
import { DictionaryItem } from './types';
import { createSelectors } from '@/shared/lib/zustand';

interface DictionaryState {
  departments: DictionaryItem[]

  actions: {
    setDepartments: (data: DictionaryItem[]) => void
    setAllDictionaries: (data: Partial<Omit<DictionaryState, 'actions'>>) => void
  }
}

export const dictionaryStore = create<DictionaryState>(set => ({
  departments: [],

  actions: {
    setDepartments: departments => set({ departments }),

    setAllDictionaries: data => set(state => ({ ...state, ...data })),
  },
}));

export const useDictionaryStore = createSelectors(dictionaryStore);
