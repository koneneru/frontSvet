import { useAtsAbonentFilter } from '@/entities/atsAbonent';
import { SubmitEvent } from 'react';
import { Form, FormControl } from 'react-bootstrap';

export function AtsAbonentFilterForm() {
  const { filters, setFilter } = useAtsAbonentFilter();

  const handleFilterChange = (name: string, value: string) => {
    setFilter(name, value || undefined);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-between align-items-center bg-body-tertiary border rounded shadow-sm px-3 py-2 mb-3">
      <Form
        className="d-flex flex-column flex-md-row align-items-center gap-2"
        onSubmit={handleSubmit}
      >
        <FormControl
          type="text"
          size="sm"
          placeholder="Поиск по Таб.№..."
          defaultValue={filters.emplId ?? ''}
          onChange={e => handleFilterChange('emplId', e.target.value)}
        />
        <FormControl
          type="text"
          size="sm"
          placeholder="Поиск по ФИО..."
          defaultValue={filters.name ?? ''}
          onChange={e => handleFilterChange('emplName', e.target.value)}
        />
      </Form>
    </div>
  );
}
