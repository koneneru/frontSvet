import { useFetchAtsGateways, useGateways } from '@/entities/atsGateway';
import { useEffect } from 'react';
import Form from 'react-bootstrap/esm/Form';

interface Props {
  defaultValue: string
  onChange: (name: string, value: string) => void
}

export function GatewaySelect({ defaultValue, onChange }: Props) {
  const gateways = useGateways();
  const { fetchAtsGateways } = useFetchAtsGateways();

  useEffect(() => {
    fetchAtsGateways();
  }, [fetchAtsGateways]);

  return (
    <Form.Control
      as="select"
      size="sm"
      defaultValue={defaultValue ?? ''}
      onChange={e => onChange('gateway', e.target.value)}
    >
      {gateways.ids.map(id => (
        (gateways.byId[id].trunk && (
          <option key={id} value={id}>
            {`${gateways.byId[id].phone} — (${gateways.byId[id].trunk}) ${gateways.byId[id].name}`}
          </option>
        ))
      ))}
    </Form.Control>
  );
}
