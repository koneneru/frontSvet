import { Gateway } from '../model/types';
import { GatewayDTO, ListResponseDTO, ResponseDTO } from './types';

export function mapDTO(dto: GatewayDTO): Gateway {
  return {
    ...dto,
    updatedAt: new Date(dto.updatedAt),
  };
}

export function mapListResponse(response: ListResponseDTO): Gateway[] {
  return response.data.map(mapDTO);
}

export function mapResponse(response: ResponseDTO): Gateway {
  return mapDTO(response.data);
}
