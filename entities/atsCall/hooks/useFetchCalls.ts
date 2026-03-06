import { useCallStore } from '../model/callStore';

export const useFetchCalls = () => {
  return useCallStore.use.fetchCalls();
};
