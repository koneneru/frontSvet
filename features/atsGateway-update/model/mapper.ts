import { GatewayUpdateDTO } from '@/entities/atsGateway/model/types';

export function mapFormDataToUpdateDto(formData: FormData): GatewayUpdateDTO {
  return {
    name: formData.get('name')?.toString().trim() || '',
    phone: formData.get('phone')?.toString().trim() || '',
    interPhone: Number(formData.get('interPhone')?.toString().trim()),
    trunk: Number(formData.get('trunk')?.toString().trim()),
    trunkGroup: Number(formData.get('trunkGroup')?.toString().trim() ?? 0),
    updatedAt: new Date(formData.get('updatedAt')?.toString() || new Date()),
  };
}
