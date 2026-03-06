import { useCallStore } from '../model/callStore';

export const useLoading = () => {
  return useCallStore.use.loading();
};
