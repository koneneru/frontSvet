'use client';

import { SubmitEvent } from 'react';
import Form from 'react-bootstrap/Form';
import { useUrlFilters } from '@/shared/lib/urlFilters';

export function ReviewFilters() {
  const { setFilter, getFilter } = useUrlFilters();

  const handleFilterChange = (name: string, value: string) => {
    value = value === '' ? String((new Date()).getFullYear()) : value;
    if (value.length < 4) return;

    setFilter(name, value || undefined);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary border rounded shadow-sm px-3 py-2 mb-3">
      <Form
        className="d-flex flex-column flex-md-row gap-2"
        id="appealFilterForm"
        onSubmit={handleSubmit}
      >
        <div className="d-flex align-items-center flex-row gap-1">
          <Form.Label className="form-label text-nowrap mb-md-0 me-0 me-md-1">Отобразить результаты за</Form.Label>
          <Form.Control
            type="text"
            placeholder="Год"
            defaultValue={getFilter('year') ?? ''}
            onChange={e => handleFilterChange('year', e.target.value)}
            size="sm"
            maxLength={4}
            style={{ width: '6.4ch' }}
          />
        </div>
        {/* <Button variant="primary" type="submit" size="sm">Применить</Button> */}
      </Form>
    </div>
  );
}
