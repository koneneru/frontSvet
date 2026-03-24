'use server';

import { gatewayApi } from '@/entities/atsGateway';
import { mapFormDataToUpdateDto } from './mapper';
import { revalidateTag } from 'next/cache';
import { ApiError } from '@/shared/api';

export type ActionState = {
  success: boolean
  error?: string
} | null;

export async function updateGatewayAction(
  id: string,
  prevState: ActionState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData);

  try {
    const updateDto = mapFormDataToUpdateDto(formData);

    await gatewayApi.update(id, updateDto);

    revalidateTag('/ats/gateways', 'max');

    return { success: true };
  } catch (err) {
    if (err instanceof ApiError) {
      return {
        success: false,
        error: err.message || 'Update Error',
        fields: rawData,
      };
    }
    return {
      success: false,
      error: (err as Error).message || 'System Error',
      fields: rawData,
    };
  }
};
