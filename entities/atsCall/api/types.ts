import { ServerResponse } from '@/shared/api/types';

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
  clleeName: string
}

export type CallListResponseDTO = ServerResponse<CallDTO[]>;
