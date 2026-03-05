export type EventMap = Record<string, unknown>;

export type EventHandler<T> = (payload: T) => void;

export type EventBus<TEvents extends EventMap> = {
  emit<TKey extends keyof TEvents>(
    type: TKey,
    ...payload: TEvents[TKey] extends undefined ? [] : [payload: TEvents[TKey]]
  ): void;

  on<TKey extends keyof TEvents>(
    type: TKey,
    handler: EventHandler<TEvents[TKey]>
  ): () => void;

  once<TKey extends keyof TEvents>(
    type: TKey,
    handler: EventHandler<TEvents[TKey]>
  ): () => void;

  clear(type?: keyof TEvents): void;
};
