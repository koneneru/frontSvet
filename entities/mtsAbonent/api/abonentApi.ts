import { httpClient } from '@/shared/api';
import { Abonent, AbonentCreateDTO, AbonentFilter, AbonentUpdateDTO } from '../model/types';
import { AbonentListResponseDTO, AbonentResponseDTO } from './types';
import { mapListRsponse, mapSingleResponse } from './mapper';

const ENDPOINT = '/mts/abonents';

export const mtsAbonentApi = {
  fetch: async (filters: AbonentFilter): Promise<Abonent[]> => {
    const response = await httpClient<AbonentListResponseDTO>(ENDPOINT, {
      method: 'GET',
      query: filters,
      next: { tags: ['mts/abonents'] },
    });

    return mapListRsponse(response);
  },

  create: async (dto: AbonentCreateDTO): Promise<Abonent> => {
    const response = await httpClient<AbonentResponseDTO, AbonentCreateDTO>(`${ENDPOINT}`, {
      method: 'POST',
      body: dto,
      cache: 'no-cache',
    });

    return mapSingleResponse(response);
  },

  update: async (id: string, dto: AbonentUpdateDTO): Promise<Abonent> => {
    const response = await httpClient<AbonentResponseDTO, AbonentUpdateDTO>(`${ENDPOINT}/${id}`, {
      method: 'PATCH',
      body: dto,
      cache: 'no-store',
    });

    return mapSingleResponse(response);
  },

  delete: async (id: string): Promise<void> => {
    await httpClient<null>(`${ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
  },
};
