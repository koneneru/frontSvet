import { httpClient } from '@/shared/api';
import { Abonent, AbonentFilter } from '../model/types';
import { AbonentListResponseDTO } from './types';
import { mapListResponse } from './mapper';

const ENDPOINT = '/ats/abonents';

export const abonentApi = {
  fetch: async (filter: AbonentFilter): Promise<Abonent[]> => {
    console.log(filter);
    const response = await httpClient<AbonentListResponseDTO>(ENDPOINT, {
      method: 'GET',
      query: filter,
      next: { tags: ['ats/abonents'] },
    });

    return mapListResponse(response);
  },
};
