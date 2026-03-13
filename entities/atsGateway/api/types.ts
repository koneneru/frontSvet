import { ServerResponse } from '@/shared/api';

export interface GatewayDTO {
  id: string | bigint
  name: string
  phone: string
  interPhone: string
  trunk: string
  trunkGroup: string
  updatedAt: string
}

export type GatewayResponseDto = ServerResponse<GatewayDTO>;
export type GatewayListResponseDTO = ServerResponse<GatewayDTO[]>;
