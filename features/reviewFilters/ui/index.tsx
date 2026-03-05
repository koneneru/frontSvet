'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { SubmitEvent } from 'react';
import Form from 'react-bootstrap/Form';

export default function ReviewFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (name: string, value: string) => {
    value = value === '' ? String((new Date()).getFullYear()) : value;
    if (value.length < 4) return;

    const params = new URLSearchParams(searchParams?.toString());
    if(value) params.set(name, value);
    else params.delete(name);

    router.push(`?${params.toString()}`);
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  }

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary border rounded shadow-sm px-3 py-2 mt-3">
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
            onChange={(e) => handleFilterChange('year', e.target.value)}
            size="sm"
            maxLength={4}
            style={{width: '6.4ch'}}
          />
        </div>
        {/* <Button variant="primary" type="submit" size="sm">Применить</Button> */}
      </Form>
    </div>
  )
}