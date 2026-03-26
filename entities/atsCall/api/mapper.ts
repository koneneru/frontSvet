import { Call } from '../model/types';
import { CallDTO, ListResponseDTO } from './types';

export function mapCallDTO(dto: CallDTO): Call {
  return {
    ...dto,
    calldate: new Date(dto.calldate),
  };
}

export function mapListResponse(response: ListResponseDTO): Call[] {
  return response.data.map(mapCallDTO);
}
