import { httpClient } from '@/shared/api';
import { AtsCall, AtsCallFilters } from '../model/types';
import { CallListResponseDTO } from './types';
import { mapCallListResponse } from './mapper';
import { mapFiltersToQuery } from '../model/filters';

export async function fetchCalls(filters: AtsCallFilters, signal?: AbortSignal): Promise<AtsCall[]> {
  const response = await httpClient<CallListResponseDTO>('/atsinfo/calls', {
    method: 'GET',
    query: mapFiltersToQuery(filters),
    signal: signal,
  });

  return mapCallListResponse(response);
}
