import Table from 'react-bootstrap/esm/Table';
import type { Call } from '@/entities/atsCall';
import { TableHTMLAttributes } from 'react';
import TableItem from './TableItem';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  calls: Call[]
}

export function AtsCallsTable({ calls }: Props) {
  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <td className="bg-body-tertiary text-end">ID</td>
          <td className="bg-body-tertiary text-center">Дата звонка</td>
          <td className="bg-body-tertiary text-start">Абонент</td>
          <td className="bg-body-tertiary text-center">Корп. номер</td>
          <td className="bg-body-tertiary text-start">Шлюз</td>
          <td className="bg-body-tertiary text-center">Номер вызова</td>
          <td className="bg-body-tertiary text-center">Направление</td>
          <td className="bg-body-tertiary text-end">Длительность</td>
        </tr>
      </thead>
      <tbody>
        {calls.map(call => (
          <TableItem
            key={call.id}
            call={call}
          />
        ))}
      </tbody>
    </Table>
  );
}
