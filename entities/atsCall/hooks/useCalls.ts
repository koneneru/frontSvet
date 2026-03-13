import { useCallStore } from '../model/callStore';

export const useAtsCalls = () => {
  return useCallStore.use.calls();
};
