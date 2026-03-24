'use server';

import { gatewayApi } from '@/entities/atsGateway';
import { revalidateTag } from 'next/cache';
import { ApiError } from '@/shared/api';
import { mapFormDataToCreateDto } from './mapper';

export type ActionState = {
  success: boolean
  error?: string
} | null;

export async function createGatewayAction(
  prevState: ActionState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData);

  try {
    const createDto = mapFormDataToCreateDto(formData);

    await gatewayApi.create(createDto);

    revalidateTag('ats/gateways', 'max');

    return { success: true };
  } catch (err) {
    if (err instanceof ApiError) {
      return {
        success: false,
        error: err.message || 'Create Error',
        fields: rawData,
      };
    }
    return {
      success: false,
      error: (err as Error).message || 'System Error',
      fields: rawData,
    };
  }
}
