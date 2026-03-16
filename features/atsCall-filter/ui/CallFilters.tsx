import { useAtsCallFilters } from '@/entities/atsCall';
import { useUrlFilters } from '@/shared/lib/urlFilters';
import { SubmitEvent } from 'react';
import Form from 'react-bootstrap/Form';
import { GatewaySelect } from './GatewaySelect';

export function AtsCallFilters() {
  const filters = useAtsCallFilters();
  const { setFilter } = useUrlFilters();

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
        <Form.Control
          type="text"
          size="sm"
          placeholder="Номер абонента"
          defaultValue={filters.caller ?? ''}
          onChange={e => handleFilterChange('caller', e.target.value)}
          maxLength={11}
          style={{ width: '17ch' }}
        />
        <Form.Control
          type="text"
          size="sm"
          placeholder="Номер вызова"
          defaultValue={filters.callee ?? ''}
          onChange={e => handleFilterChange('callee', e.target.value)}
          maxLength={11}
          style={{ width: '15ch' }}
        />
        <Form.Control
          as="select"
          size="sm"
          defaultValue={filters.direction ?? ''}
          onChange={e => handleFilterChange('direction', e.target.value)}
          style={{ width: '110px' }}
        >
          <option value="">Направление</option>
          <option value="O">Исходящие</option>
          <option value="I">Входящие</option>
          <option value="A">Пропущенные</option>
        </Form.Control>
        <GatewaySelect defaultValue={filters.gateway ?? ''} onChange={handleFilterChange} />
        <Form.Check
          inline
          type="checkbox"
          name="intercity"
          label="Межгород"
          defaultChecked={filters.intercity}
          onChange={e => handleFilterChange('intercity', e.target.checked ? 'true' : 'false')}
        />
        <Form.Control
          type="date"
          size="sm"
          name="dateFrom"
          defaultValue={filters.dateFrom ?? ''}
          onChange={e => handleFilterChange('dateFrom', e.target.value)}
        />
        <Form.Control
          type="date"
          size="sm"
          name="dateTo"
          defaultValue={filters.dateTo ?? ''}
          onChange={e => handleFilterChange('dateTo', e.target.value)}
        />
      </Form>
    </div>
  );
}
