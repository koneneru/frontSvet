import { httpClient } from '@/shared/api';
import { AtsAbonent, AtsAbonentFilter } from '../model/types';
import { AbonentListResponseDTO } from './types';
import { mapAbonentListResponse, mapFilterToQuery } from './mapper';

export const abonentApi = {
  fetch: async (filter: AtsAbonentFilter, signal?: AbortSignal): Promise<AtsAbonent[]> => {
    const response = await httpClient<AbonentListResponseDTO>('/ats/abonents', {
      method: 'GET',
      query: mapFilterToQuery(filter),
      signal: signal,
    });

    return mapAbonentListResponse(response);
  },
};
