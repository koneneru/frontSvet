import { httpClient } from '@/shared/api';
import { Gateway, GatewayCreateDTO, GatewayUpdateDTO } from '../model/types';
import { mapListResponse, mapResponse } from './mapper';
import { ListResponseDTO, ResponseDto } from './types';

const ENDPOINT = '/ats/gateways';

export const gatewayApi = {
  fetch: async (): Promise<Gateway[]> => {
    const response = await httpClient<ListResponseDTO>(ENDPOINT, {
      method: 'GET',
      next: { tags: ['ats/gateways'] },
    });

    return mapListResponse(response);
  },

  create: async (dto: GatewayCreateDTO): Promise<Gateway> => {
    const response = await httpClient<ResponseDto>(ENDPOINT, {
      method: 'POST',
      body: dto,
      cache: 'no-cache',
    });

    return mapResponse(response);
  },

  update: async (id: string, updateDto: GatewayUpdateDTO): Promise<Gateway> => {
    const response = await httpClient<ResponseDto>(`${ENDPOINT}/${id}`, {
      method: 'PATCH',
      body: updateDto,
      cache: 'no-cache',
    });

    return mapResponse(response);
  },

  delete: async (id: string): Promise<void> => {
    await httpClient<null>(`${ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
  },
};
