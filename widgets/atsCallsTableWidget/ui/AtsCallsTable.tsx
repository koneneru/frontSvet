'use client';

import { useCallIds, useLoading } from '@/entities/atsCall';
import { JSX } from 'react';
import Table from 'react-bootstrap/esm/Table';
import AtsCallTableItem from './AtsCallsTableItem';

export function AtsCallsTable() {
  const callIds = useCallIds();
  const loading = useLoading();

  let content: JSX.Element | JSX.Element[];
  if (loading) {
    content = (
      <tr><td className="text-center" colSpan={100}>Загрузка...</td></tr>
    );
  } else if (callIds.length === 0) {
    content = (
      <tr className="table-info">
        <td className="text-center" colSpan={100}>
          Записи за указанный период отсутствуют
        </td>
      </tr>
    );
  } else {
    content = callIds.map(id => (
      <AtsCallTableItem key={id} callId={id} />
    ));
  }

  return (
    <div className="bg-body-tertiary border rounded shadow-sm">
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
          {content}
        </tbody>
      </Table>
    </div>
  );
}
