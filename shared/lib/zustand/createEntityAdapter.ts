export interface EntityState<T> {
  byId: Record<string, T>
  ids: string[]
}

export function createEntityAdapter<T extends { id: string | bigint }>() {
  const getInitialState = (): EntityState<T> => ({
    byId: {},
    ids: [],
  });

  const setAll = (state: EntityState<T>, entities: T[]) => {
    const byId: Record<string, T> = {};
    const ids: string[] = [];

    for (const entity of entities) {
      const id = String(entity.id);
      byId[id] = entity;
      ids.push(id);
    }

    state.byId = byId;
    state.ids = ids;
  };

  const upsertOne = (state: EntityState<T>, entity: T) => {
    const id = String(entity.id);

    if (!state.byId[id]) {
      state.ids.push(id);
    }

    state.byId[id] = entity;
  };

  const removeOne = (state: EntityState<T>, id: string | number) => {
    const key = String(id);

    delete state.byId[key];
    state.ids = state.ids.filter(i => i !== key);
  };

  return {
    getInitialState,
    setAll,
    upsertOne,
    removeOne,
  };
}
