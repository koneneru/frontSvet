import { EventBus, EventHandler, EventMap } from './types';

export const createEventBus = <TEvents extends EventMap>(): EventBus<TEvents> => {
  const listeners: {
    [K in keyof TEvents]?: Set<EventHandler<TEvents[K]>>;
  } = {};

  const emit: EventBus<TEvents>['emit'] = (type, ...payload) => {
    const handlers = listeners[type];
    if (!handlers) return;

    for (const handler of handlers) {
      handler(payload[0] as TEvents[typeof type]);
    }
  };

  const on: EventBus<TEvents>['on'] = (type, handler) => {
    if (!listeners[type]) {
      listeners[type] = new Set();
    }

    listeners[type]!.add(handler);

    return () => {
      listeners[type]!.delete(handler);
    };
  };

  const once: EventBus<TEvents>['once'] = (type, handler) => {
    const off = on(type, (payload) => {
      handler(payload);
      off();
    });

    return off;
  };

  const clear: EventBus<TEvents>['clear'] = (type) => {
    if (type) {
      listeners[type]?.clear();
    } else {
      (Object.keys(listeners) as Array<keyof TEvents>).forEach(key =>
        listeners[key]?.clear()
      );
    }
  };

  return {
    emit,
    on,
    once,
    clear,
  };
};
