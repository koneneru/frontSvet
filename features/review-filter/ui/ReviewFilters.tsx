'use client';

import { ReviewFilters } from '@/entities/review';
import { useUrlFilters } from '@/shared/lib/urlFilters';
import { SubmitEvent } from 'react';
import Form from 'react-bootstrap/Form';

export function ReviewFilterForm() {
  const { getFilter, setFilterDebounced } = useUrlFilters<ReviewFilters>();

  const handleYearChange = (name: string, value: string) => {
    if (value.length && value.length < 4) return;

    setFilterDebounced(name, value);
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
            size="sm"
            placeholder="Год"
            maxLength={4}
            style={{ width: '6.4ch' }}
            defaultValue={getFilter('year') ?? ''}
            onChange={e => handleYearChange('year', e.target.value)}
          />
        </div>
      </Form>
    </div>
  );
}
