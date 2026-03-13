import { AtsGatewayAddDTO } from '@/entities/atsGateway/model/types';
import { GatewayAddFormValues } from './types';

export function mapFormValuesToAddDTO(values: GatewayAddFormValues): AtsGatewayAddDTO {
  return {
    name: values.name.trim(),
    phone: values.phone.trim(),
    interPhone: Number(values.interPhone.trim()),
    trunk: Number(values.trunk.trim()),
    trunkGroup: Number(values.trunkGroup.trim()),
  };
}
