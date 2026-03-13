import { CallFilters } from './types';

export function mapFiltersToQuery(filters: CallFilters) {
  return {
    caller: filters.caller,
    callee: filters.callee,
    vector: filters.vector,
    gateway: filters.gateway,
    calldateFrom: filters.calldateFrom?.toISOString(),
    calldateTo: filters.calldateTo?.toISOString(),
    intercity: filters.intercity,
  };
}
