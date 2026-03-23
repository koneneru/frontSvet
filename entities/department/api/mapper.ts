import { Department } from '../model/types';
import { DepartmentDTO, DepartmentListResponseDTO } from './types';

export const mapDepartmentDTO = (dto: DepartmentDTO): Department => {
  return {
    ...dto,
    id: dto.name,
  };
};

export const mapDepartmentListResponse = (response: DepartmentListResponseDTO): Department[] => {
  return response.data.map(mapDepartmentDTO);
};
