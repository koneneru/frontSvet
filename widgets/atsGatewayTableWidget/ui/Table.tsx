'use client';

import { Gateway } from '@/entities/atsGateway';
import Table from 'react-bootstrap/esm/Table';
import { TableHTMLAttributes, useCallback, useState } from 'react';
import { TableItem } from './TableItem';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  gateways: Gateway[]
}

export function AtsGatewaysTable({ gateways, ...props }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleToggleEditing = useCallback((id: string) => {
    setEditingId(prev => (prev === id ? null : id));
  }, []);

  return (
    <Table {...props} hover size="sm">
      <thead>
        <tr>
          <th className="bg-body-tertiary text-end">ID</th>
          <th className="bg-body-tertiary text-center">Шлюз</th>
          <th className="bg-body-tertiary text-center">Корп. номер</th>
          <th className="bg-body-tertiary text-center">Номер</th>
          <th className="bg-body-tertiary text-start">Имя</th>
          <th className="bg-body-tertiary text-center">Группа доступа</th>
        </tr>
      </thead>
      <tbody>
        {gateways.map(gateway => (
          <TableItem
            key={gateway.id}
            gateway={gateway}
            isEditing={String(gateway.id) === editingId}
            onToggleEditing={handleToggleEditing}
          />
        ))}
      </tbody>
    </Table>
  );
}
