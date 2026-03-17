import { ServerResponse } from '@/shared/api';

export interface AbonentDTO {
  id: string | bigint
  emplId: string
  name: string
  department: string
  employ: string
  internalPhone: string[]
  email: string[]
  landline: string[]
  mobilePhone: string[]
  domesticPhone: string[]
}

export type AbonentListResponseDTO = ServerResponse<AbonentDTO[]>;
