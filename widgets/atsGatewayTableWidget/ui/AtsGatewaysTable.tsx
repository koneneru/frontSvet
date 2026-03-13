'use client';

import { useGateways } from '@/entities/atsGateway';
import { AtsGatewaysTableItem } from './AtsGatewaysTableItem';
import Table from 'react-bootstrap/esm/Table';
import { useCallback, useState } from 'react';

interface Props {
  loading: boolean
}

export function AtsGatewaysTable({ loading }: Props) {
  const gatewaysIds = useGateways().ids;
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleToggleEditing = useCallback((id: string) => {
    setEditingId(prev => (prev === id ? null : id));
  }, []);

  const renderContent = () => {
    if (loading) {
      return <tr><td className="text-center" colSpan={100}>Загрузка...</td></tr>;
    }

    if (gatewaysIds.length === 0) {
      return (
        <tr className="table-info">
          <td className="text-center" colSpan={100}>
            Записи за указанный период отсутствуют
          </td>
        </tr>
      );
    }

    return gatewaysIds.map(id => (
      <AtsGatewaysTableItem
        key={id}
        gatewayId={id}
        isEditing={id === editingId}
        onToggleEditing={handleToggleEditing}
      />
    ));
  };

  return (
    <div className="bg-body-tertiary border rounded shadow-sm">
      <Table hover size="sm">
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
          {renderContent()}
        </tbody>
      </Table>
    </div>
  );
}
