import { Gateway } from '../model/types';
import { GatewayDTO, ListResponseDTO, ResponseDto } from './types';

export function mapDTO(dto: GatewayDTO): Gateway {
  return {
    ...dto,
    updatedAt: new Date(dto.updatedAt),
  };
}

export function mapListResponse(response: ListResponseDTO): Gateway[] {
  return response.data.map(mapDTO);
}

export function mapResponse(response: ResponseDto): Gateway {
  return mapDTO(response.data);
}
