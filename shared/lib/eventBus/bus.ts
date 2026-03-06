import { AppEvents } from './types';

export const eventBus = createEventBus<AppEvents>();

export function createEventBus<Events>() {
  const listeners: Partial<{
    [K in keyof Events]: Array<(_: Events[K]) => void>;
  }> = {};

  return {
    on<K extends keyof Events>(event: K, cb: (_: Events[K]) => void) {
      (listeners[event] ??= []).push(cb);
      return () => {
        listeners[event] = listeners[event]?.filter(handler => handler !== cb);
      };
    },
    emit<K extends keyof Events>(event: K, payload: Events[K]) {
      listeners[event]?.forEach((cb) => {
        cb(payload);
      });
    },
  };
}
