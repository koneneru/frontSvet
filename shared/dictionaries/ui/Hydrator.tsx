'use client';

import { useDictionaryStore } from '../model/store';
import { DictionaryItem } from '../model/types';

interface HydratePayload {
  departments?: DictionaryItem[]
}

let initialized = false;

export function DictionaryHydrator(data: HydratePayload) {
  const { setAllDictionaries } = useDictionaryStore.use.actions();

  if (!initialized) {
    setAllDictionaries(data);
    initialized = true;
  }

  return null;
}
