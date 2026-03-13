import { AtsGatewayUpdateDTO } from '@/entities/atsGateway/model/types';
import { GatewayEditFormValues } from './types';

export function mapFormValuesToUpdateDTO(values: GatewayEditFormValues): AtsGatewayUpdateDTO {
  return {
    name: values.name.trim(),
    phone: values.phone.trim(),
    interPhone: Number(values.interPhone.trim()),
    trunk: Number(values.trunk.trim()),
    trunkGroup: Number(values.trunkGroup.trim() ?? 0),
    updatedAt: new Date(), // костыль
  };
}
