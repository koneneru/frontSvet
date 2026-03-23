import { QueryValue } from '@/shared/api/types';
import { Abonent, AbonentFilter } from '../model/types';
import { AbonentDTO, AbonentListResponseDTO, AbonentResponseDTO } from './types';

export function mapAbonentDTO(dto: AbonentDTO): Abonent {
  return {
    ...dto,
    updatedAt: new Date(dto.updatedAt),
  };
}

export function mapSingleResponse(response: AbonentResponseDTO): Abonent {
  return mapAbonentDTO(response.data);
}

export function mapListRsponse(response: AbonentListResponseDTO): Abonent[] {
  return response.data.map(mapAbonentDTO);
}

export function mapFilterToQuery(filter: AbonentFilter): Record<string, QueryValue> {
  return {
    ...filter,
  };
};
