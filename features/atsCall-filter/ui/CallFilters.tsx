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
        className="d-flex flex-column flex-md-row gap-2"
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
        <GatewaySelect defaultValue={filters.gateway ?? ''} onChange={handleFilterChange} />
        {/* <Form.Control
          as="select"
          size="sm"
          defaultValue={filters.gateway ?? ''}
          onChange={e => handleFilterChange('gateway', e.target.value)}
        >
          {gateways.ids.map(id => (
            <option key={id} value={id}>
              {`${gateways.byId[id].phone} — (${gateways.byId[id].trunk}) ${gateways.byId[id].name}`}
            </option>
          ))}
        </Form.Control> */}
        {/* <Button variant="primary" type="submit" size="sm">Применить</Button> */}
      </Form>
    </div>
  );
}
