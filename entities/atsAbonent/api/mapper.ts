import type { Abonent } from '../model/types';
import type { AbonentDTO, AbonentListResponseDTO } from './types';

export function mapAbonentDTO(dto: AbonentDTO): Abonent {
  return {
    ...dto,
  };
}

export function mapListResponse(response: AbonentListResponseDTO): Abonent[] {
  return response.data.map(mapAbonentDTO);
}
