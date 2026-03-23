import { AbonentUpdateDTO } from '@/entities/mtsAbonent';

export function mapFormDataToUpdateDto(formData: FormData): AbonentUpdateDTO {
  return {
    emplId: formData.get('emplId')?.toString(),
    emplName: formData.get('emplName')?.toString(),
    department: formData.get('department')?.toString(),
    state: formData.get('state')?.toString() === 'active',
    updatedAt: new Date(formData.get('updatedAt')?.toString() ?? ''),
  };
}
