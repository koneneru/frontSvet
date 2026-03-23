'use client';

import { AbonentFilter } from '@/entities/atsAbonent';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export function AtsAbonentFilterForm() {
  const { getFilter, setFilterDebounced } = useUrlFilters<AbonentFilter>();

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary border rounded shadow-sm px-3 py-2 mb-3">
      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Поиск по Таб.№..."
          defaultValue={getFilter('emplId') ?? ''}
          onChange={e => setFilterDebounced('emplId', e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Поиск по ФИО..."
          defaultValue={getFilter('name') ?? ''}
          onChange={e => setFilterDebounced('emplName', e.target.value)}
        />
      </div>
    </div>
  );
}
