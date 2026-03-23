'use server';

import { mtsAbonentApi } from '@/entities/mtsAbonent';
import { revalidateTag } from 'next/cache';
import { mapFormDataToUpdateDto } from './mapper';
import { ApiError } from '@/shared/api';

export type ActionState = {
  success: boolean
  error?: string
} | null;

export async function updateAbonentAction(
  id: string,
  prevState: ActionState,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData);

  try {
    const updateDto = mapFormDataToUpdateDto(formData);

    await mtsAbonentApi.update(id, updateDto);

    revalidateTag('mts/abonents', 'max');

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
}
