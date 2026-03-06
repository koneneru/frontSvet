'use client';

import { useLoading, useReviewIds } from '@/entities/review';
import { JSX, useCallback, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import ReviewTableItem from './ReviewTableItem';

export function ReviewsTable() {
  const reviewIds = useReviewIds();
  const loading = useLoading();
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const handleTbodyClick = useCallback((event: React.MouseEvent<HTMLTableSectionElement>) => {
    const target = event.target as HTMLElement;
    const row = target.closest<HTMLTableRowElement>('tr.editable');
    const id = row?.dataset.id;
    if (id) {
      setEditingId(current => current === id ? null : id);
    }
  }, []);

  let content: JSX.Element | JSX.Element[];
  if (loading) {
    content = (
      <tr><td className="text-center" colSpan={100}>Загрузка...</td></tr>
    );
  } else if (reviewIds.length === 0) {
    content = (
      <tr className="table-info"><td className="text-center" colSpan={100}>Записи за указанный период отсутствуют</td></tr>
    );
  } else {
    content = (reviewIds.map(r => (
      <ReviewTableItem
        key={r}
        reviewId={r}
        isEditing={r === editingId}
        onCancelEditing={setEditingId}
      />
    )));
  }

  return (
    <div className="bg-body-tertiary border rounded shadow-sm">
      <Table hover size="sm">
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
        <tbody onClick={handleTbodyClick}>
          {content}
        </tbody>
      </Table>
    </div>
  )
}