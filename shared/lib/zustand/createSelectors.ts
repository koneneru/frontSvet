import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  const selectors: Record<string, () => unknown> = {};

  for (const k of Object.keys(store.getState())) {
    selectors[k] = () => store((s) => s[k as keyof typeof s]);
  }

  store.use = selectors as WithSelectors<typeof _store>['use'];

  return store;
}