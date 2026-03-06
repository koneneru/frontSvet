import { Call } from '../model/types';
import { CallDTO, CallListResponseDTO } from './types';

export function mapCallDTO(dto: CallDTO): Call {
  return {
    ...dto,
    calldate: new Date(dto.calldate),
  };
}

export function mapCallListResponse(response: CallListResponseDTO): Call[] {
  return response.data.map(mapCallDTO);
}
