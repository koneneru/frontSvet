import { ServerResponse } from '@/shared/api';

export interface CallDTO {
  id: string | bigint
  caller: string
  callerName: string
  gateway: string
  gatewayName: string
  calldate: string
  duration: number
  vector: string
  callee: string
  calleeName: string
}

export type ListResponseDTO = ServerResponse<CallDTO[]>;
