import { AtsGateway } from '../model/types';
import { GatewayDTO, GatewayListResponseDTO, GatewayResponseDto } from './types';

export function mapAtsGatewayDTO(dto: GatewayDTO): AtsGateway {
  return {
    ...dto,
    updatedAt: new Date(dto.updatedAt),
  };
}

export function mapAtsGatewayListResponse(response: GatewayListResponseDTO): AtsGateway[] {
  return response.data.map(mapAtsGatewayDTO);
}

export function mapAtsGatewayResponse(response: GatewayResponseDto): AtsGateway {
  return mapAtsGatewayDTO(response.data);
}
