'use client';

import { Review } from '@/entities/review';
import { TableHTMLAttributes, useCallback, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import TableItem from './TableItem';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
  reviews: Review[]
}

export function ReviewsTable({ reviews, ...props }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleToggleEditing = useCallback((id: string) => {
    setEditingId(prev => (prev === id ? null : id));
  }, []);

  return (
    <Table {...props} hover size="sm">
      <thead>
        <tr>
          <th className="bg-body-tertiary text-end">ID</th>
          <th className="bg-body-tertiary text-center text-nowrap">Дата и время</th>
          <th className="bg-body-tertiary text-start">Пользователь</th>
          <th className="bg-body-tertiary text-center">Оценка</th>
          <th className="bg-body-tertiary text-start">Проблема</th>
          <th className="bg-body-tertiary text-start">Решение</th>
          <th className="bg-body-tertiary text-start">Комментарий</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map(r => (
          <TableItem
            key={r.id}
            review={r}
            isEditing={String(r.id) === editingId}
            onToggleEditing={handleToggleEditing}
          />
        ))}
      </tbody>
    </Table>
  );
}
