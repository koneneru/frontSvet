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

export type ResponseDTO = ServerResponse<GatewayDTO>;
export type ListResponseDTO = ServerResponse<GatewayDTO[]>;
