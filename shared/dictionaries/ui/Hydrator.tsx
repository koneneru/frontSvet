'use client';

import { mapGateway } from '../model/mapper';
import { useDictionaryStore } from '../model/store';
import { DictionaryItem, RawGateway } from '../model/types';

interface HydratePayload {
  departments?: DictionaryItem[]
  gateways?: RawGateway[]
}

let initialized = false;

export function DictionaryHydrator(data: HydratePayload) {
  const { setAllDictionaries } = useDictionaryStore.use.actions();

  if (!initialized) {
    setAllDictionaries({
      ...data,
      gateways: data.gateways?.map(mapGateway),
    });

    initialized = true;
  }

  return null;
}
