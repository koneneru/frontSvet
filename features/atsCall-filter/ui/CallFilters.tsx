'use client';

import { CallFilters } from '@/entities/atsCall';
import { useUrlFilters } from '@/shared/lib/urlFilters';
import { DictionarySelect } from '@/shared/dictionaries';

export function AtsCallFilters() {
  const { getFilter, setFilter, setFilterDebounced } = useUrlFilters<CallFilters>();

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary border rounded shadow-sm px-3 py-2 mb-3">
      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Номер абонента"
          maxLength={11}
          style={{ width: '17ch' }}
          defaultValue={getFilter('caller') ?? ''}
          onChange={e => setFilterDebounced('caller', e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Номер вызова"
          maxLength={11}
          style={{ width: '15ch' }}
          defaultValue={getFilter('callee') ?? ''}
          onChange={e => setFilterDebounced('callee', e.target.value)}
        />
        <select
          className="form-control form-control-sm"
          style={{ width: '110px' }}
          defaultValue={getFilter('direction') ?? ''}
          onChange={e => setFilter('direction', e.target.value)}
        >
          <option value="">Направление</option>
          <option value="O">Исходящие</option>
          <option value="I">Входящие</option>
          <option value="A">Пропущенные</option>
        </select>
        <DictionarySelect
          type="gateways"
          className="form-control form-control-sm"
          placeholder="Шлюз"
          defaultValue={getFilter('gateway') ?? ''}
          onChange={e => setFilter('gateway', e.target.value)}
        />
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            name="intercity"
            id="intercity"
            defaultChecked={getFilter('intercity') === 'true'}
            onChange={e => setFilter('intercity', e.target.checked ? 'true' : 'false')}
          />
          <label htmlFor="intercity" className="form-check-label">Межгород</label>
        </div>
        <input
          type="date"
          className="form-control form-control-sm"
          name="dateFrom"
          style={{ width: '129px' }}
          defaultValue={getFilter('dateFrom') ?? ''}
          onChange={e => setFilter('dateFrom', e.target.value)}
        />
        <input
          type="date"
          className="form-control form-control-sm"
          name="dateTo"
          style={{ width: '129px' }}
          defaultValue={getFilter('dateTo') ?? ''}
          onChange={e => setFilter('dateTo', e.target.value)}
        />
      </div>
    </div>
  );
}
