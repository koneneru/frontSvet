'use client';

import { TableHTMLAttributes } from 'react';
import TableItem from './TableItem';
import Table from 'react-bootstrap/esm/Table';
import { Abonent } from '@/entities/atsAbonent';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  abonents: Abonent[]
}

export function AtsAbonentsTable({ abonents, ...props }: Props) {
  return (
    <Table {...props} hover size="sm">
      <thead>
        <tr>
          <td className="bg-body-tertiary text-end text-nowrap">Таб.№</td>
          <td className="bg-body-tertiary text-start">ФИО</td>
          <td className="bg-body-tertiary text-center">Внут.</td>
          <td className="bg-body-tertiary text-center">Гор.</td>
          <td className="bg-body-tertiary text-center">Сотовый</td>
          <td className="bg-body-tertiary text-center">Дом.</td>
          <td className="bg-body-tertiary text-start">Подразделение/Должность</td>
          <td className="bg-body-tertiary text-start">E-mail</td>
        </tr>
      </thead>
      <tbody>
        {abonents.map(abon => (
          <TableItem
            key={abon.id}
            abonent={abon}
          />
        ))}
      </tbody>
    </Table>
  );
}
