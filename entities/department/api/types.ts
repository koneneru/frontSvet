import { ServerResponse } from '@/shared/api';

export interface DepartmentDTO {
  name: string
}

export type DepartmentListResponseDTO = ServerResponse<DepartmentDTO[]>;
