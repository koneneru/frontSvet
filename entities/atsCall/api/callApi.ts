import { httpClient } from '@/shared/api';
import { Call, CallFilters } from '../model/types';
import { ListResponseDTO } from './types';
import { mapListResponse } from './mapper';

const ENDPOINT = '/ats/calls';

export const callApi = {
  fetch: async (filters: CallFilters): Promise<Call[]> => {
    const response = await httpClient<ListResponseDTO>(ENDPOINT, {
      method: 'GET',
      query: filters,
      next: { tags: ['ats/calls'] },
    });

    return mapListResponse(response);
  },
};
