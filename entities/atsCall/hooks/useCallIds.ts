import { useCallStore } from '../model/callStore';

export const useCallIds = () => {
  return useCallStore.use.callIds();
};
