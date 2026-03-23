'use client';

import { AbonentFilter } from '@/entities/mtsAbonent';
import { DictionarySelect } from '@/shared/dictionaries';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export function MtsAbonentFilterForm() {
  const { getFilter, setFilter, setFilterDebounced } = useUrlFilters<AbonentFilter>();

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary border rounded shadow-sm px-3 py-2 mb-3">
      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Поиск по Таб.№..."
          defaultValue={getFilter('name') ?? ''}
          onChange={e => setFilterDebounced('emplId', e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Поиск по ФИО..."
          defaultValue={getFilter('emplName') ?? ''}
          onChange={e => setFilterDebounced('emplName', e.target.value)}
        />
        <DictionarySelect
          type="departments"
          placeholder="Подразделение"
          value={getFilter('department') ?? ''}
          onChange={e => setFilter('department', e.target.value)}
        />
        <select
          className="form-control form-control-sm"
          value={getFilter('status') ?? ''}
          onChange={e => setFilter('status', e.target.value)}
        >
          <option value="">Статус</option>
          <option value="1">Активен</option>
          <option value="0">Отключен</option>
        </select>
      </div>
    </div>
  );
}
