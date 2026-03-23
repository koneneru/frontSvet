'use server';

import { mtsAbonentApi } from '@/entities/mtsAbonent';
import { ApiError } from '@/shared/api';
import { revalidateTag } from 'next/cache';

export async function deleteAbonentAction(id: string) {
  try {
    await mtsAbonentApi.delete(id);

    revalidateTag('mts/abonents', 'max');

    return { success: true };
  } catch (err) {
    if (err instanceof ApiError) {
      return { success: false, error: err.message || 'Delete Error' };
    }
    return { success: false, error: (err as Error).message || 'System Error' };
  }
}
