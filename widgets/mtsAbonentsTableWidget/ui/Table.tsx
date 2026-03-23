'use client';

import { Table } from 'react-bootstrap';
import TableItem from './TableItem';
import { TableHTMLAttributes, useCallback, useState } from 'react';
import { Abonent } from '@/entities/mtsAbonent';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  initialAbonents: Abonent[]
}

export function MtsAbonentsTable({ initialAbonents, ...props }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleToggleEditing = useCallback((id: string) => {
    setEditingId(prev => (prev === id ? null : id));
  }, []);

  return (
    <Table {...props} hover size="sm">
      <thead>
        <tr>
          <td className="bg-body-tertiary text-end">ID</td>
          <td className="bg-body-tertiary text-end">Таб.№</td>
          <td className="bg-body-tertiary text-start">ФИО</td>
          <td className="bg-body-tertiary text-start">Подразделение</td>
          <td className="bg-body-tertiary text-center">Статус</td>
          <td className="bg-body-tertiary text-center">Изменён</td>
        </tr>
      </thead>
      <tbody>
        {initialAbonents.map(abon => (
          <TableItem
            key={abon.id}
            abonent={abon}
            isEditing={String(abon.id) === editingId}
            onToggleEditing={handleToggleEditing}
          />
        ))}
      </tbody>
    </Table>
  );
}
