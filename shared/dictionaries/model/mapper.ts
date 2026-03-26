import { DictionaryItem, RawGateway } from './types';

export const mapGateway = (raw: RawGateway): DictionaryItem => {
  return {
    id: raw.trunk,
    name: `${raw.phone} — (${raw.trunk}) ${raw.name}`,
  };
};
