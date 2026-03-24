import { GatewayCreateDTO } from '@/entities/atsGateway/model/types';

export function mapFormDataToCreateDto(formData: FormData): GatewayCreateDTO {
  return {
    name: formData.get('name')?.toString().trim() || '',
    phone: formData.get('phone')?.toString().trim(),
    interPhone: Number(formData.get('interPhone')?.toString().trim()),
    trunk: Number(formData.get('interPhone')?.toString().trim()),
    trunkGroup: Number(formData.get('interPhone')?.toString().trim()),
  };
}
