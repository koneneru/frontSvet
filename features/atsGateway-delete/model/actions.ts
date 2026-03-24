'use server';

import { gatewayApi } from '@/entities/atsGateway';
import { ApiError } from '@/shared/api';
import { revalidateTag } from 'next/cache';

export async function deleteGatewayAction(id: string) {
  try {
    await gatewayApi.delete(id);

    revalidateTag('ats/gateways', 'max');

    return { success: true };
  } catch (err) {
    if (err instanceof ApiError) {
      return {
        success: false,
        error: err.message || 'Delete Error',
      };
    }
    return {
      success: false,
      error: (err as Error).message || 'System Error',
    };
  }
}
