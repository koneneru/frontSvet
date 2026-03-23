import { AbonentCreateDTO } from '@/entities/mtsAbonent';

export function mapFormDataToCreateDto(formData: FormData): AbonentCreateDTO {
  return {
    emplId: formData.get('emplId')?.toString() || '',
    emplName: formData.get('emplName')?.toString() || '',
    department: formData.get('department')?.toString() || '',
    state: formData.get('state')?.toString() === 'active',
  };
}
