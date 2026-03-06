import { create } from 'zustand';
import { Call, CallFilters } from './types';
import { fetchCalls } from '../api/callApi';
import { createSelectors } from '@/shared/lib/zustand/createSelectors';

interface CallState {
  callsById: Record<string, Call>
  callIds: string[]
  loading: boolean

  fetchCalls: (filters: CallFilters) => Promise<void>
}

const callStore = create<CallState>(set => ({
  callsById: {},
  callIds: [],
  loading: false,

  fetchCalls: async (filters) => {
    set({ loading: true });

    try {
      const fetchedCalls = await fetchCalls(filters);

      const byId: Record<string, Call> = {};
      const ids: string[] = [];

      for (const call of fetchedCalls) {
        byId[String(call.id)] = call;
        ids.push(String(call.id));
      }

      set({
        callsById: byId,
        callIds: ids,
      });
    } finally {
      set({
        loading: false,
      });
    }
  },
}));

export const useCallStore = createSelectors(callStore);
