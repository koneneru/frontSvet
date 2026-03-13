import { httpClient } from '@/shared/api';
import { AtsGateway, AtsGatewayAddDTO, AtsGatewayUpdateDTO } from '../model/types';
import { mapAtsGatewayListResponse, mapAtsGatewayResponse } from './mapper';
import { GatewayListResponseDTO, GatewayResponseDto } from './types';

export async function fetchGateways(): Promise<AtsGateway[]> {
  const response = await httpClient<GatewayListResponseDTO>('/ats/gateways');

  return mapAtsGatewayListResponse(response);
};

export async function createGateway(dto: AtsGatewayAddDTO): Promise<AtsGateway> {
  const response = await httpClient<GatewayResponseDto>(`/ats/gateways`, {
    method: 'POST',
    body: dto,
  });

  return mapAtsGatewayResponse(response);
}

export async function updateGateway(id: string, updateDto: AtsGatewayUpdateDTO): Promise<AtsGateway> {
  const response = await httpClient<GatewayResponseDto>(`/ats/gateways/${id}`, {
    method: 'PATCH',
    body: updateDto,
  });

  return mapAtsGatewayResponse(response);
}

export async function deleteGateway(id: string): Promise<void> {
  await httpClient<unknown>(`/ats/gateways/${id}`, {
    method: 'DELETE',
  });
}
