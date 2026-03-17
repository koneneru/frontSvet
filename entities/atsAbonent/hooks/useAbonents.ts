import { useAbonentStore } from '../model/store';

export const useAtsAbonents = () => {
  return useAbonentStore.use.abonents();
};
