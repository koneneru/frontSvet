import { useCallStore } from '../model/callStore';

export const useCallsById = () => {
  return useCallStore.use.callsById();
};
