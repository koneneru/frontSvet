import { QueryValue } from '@/shared/api/types';
import type { AtsAbonent, AtsAbonentFilter } from '../model/types';
import type { AbonentDTO, AbonentListResponseDTO } from './types';

export function mapAbonentDTO(dto: AbonentDTO): AtsAbonent {
  return {
    ...dto,
  };
}

export function mapAbonentListResponse(response: AbonentListResponseDTO): AtsAbonent[] {
  return response.data.map(mapAbonentDTO);
}

export function mapFilterToQuery(filter: AtsAbonentFilter): Record<string, QueryValue> {
  return {
    emplId: filter.emplId,
    name: filter.name,
  };
};
