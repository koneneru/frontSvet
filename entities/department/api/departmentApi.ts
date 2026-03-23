import { httpClient } from '@/shared/api';
import { Department } from '../model/types';
import { DepartmentListResponseDTO } from './types';
import { mapDepartmentListResponse } from './mapper';

const ENDPOINT = '/departments';

export const departmentApi = {
  fetch: async (): Promise<Department[]> => {
    const response = await httpClient<DepartmentListResponseDTO>(ENDPOINT, {
      method: 'GET',
      next: { tags: ['departments'] },
    });

    return mapDepartmentListResponse(response);
  },
};
