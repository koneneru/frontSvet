import { AtsCallFilters } from './types';

export function mapFiltersToQuery(filters: AtsCallFilters) {
  return {
    caller: filters.caller,
    callee: filters.callee,
    direction: filters.direction,
    gateway: filters.gateway,
    dateFrom: filters.dateFrom,
    dateTo: filters.dateTo,
    intercity: filters.intercity,
  };
}
