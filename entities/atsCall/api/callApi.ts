import { httpClient } from '@/shared/api/httpClient';
import { Call, CallFilters } from '../model/types';
import { CallListResponseDTO } from './types';
import { mapCallListResponse } from './mapper';

const baseUrl = 'http://localhost:7777/api/v1/calls';

export async function fetchCalls(filters: CallFilters): Promise<Call[]> {
  const response = await httpClient<CallListResponseDTO>(baseUrl, {
    method: 'GET',
    query: filters as unknown as Record<string, string>,
  });

  return mapCallListResponse(response);
}
