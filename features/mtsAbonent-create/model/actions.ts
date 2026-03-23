'use server';

import { mtsAbonentApi } from '@/entities/mtsAbonent';
import { mapFormDataToCreateDto } from './mapper';
import { revalidateTag } from 'next/cache';
import { ApiError } from '@/shared/api';

export type ActionState = {
  success: boolean
  error?: string
} | null;

export async function createAbonentAction(
  prevState: ActionState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData);

  try {
    const createDto = mapFormDataToCreateDto(formData);

    await mtsAbonentApi.create(createDto);

    revalidateTag('mts/abonent', 'max');

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
