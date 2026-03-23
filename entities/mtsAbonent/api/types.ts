import { ServerResponse } from '@/shared/api';

export interface AbonentDTO {
  id: string | bigint
  emplName: string
  emplId: string
  department: string
  state: boolean
  updatedAt: string
}

export type AbonentResponseDTO = ServerResponse<AbonentDTO>;
export type AbonentListResponseDTO = ServerResponse<AbonentDTO[]>;
