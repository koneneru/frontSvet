'use client';

import { Review } from '@/entities/review/model/types';
import { useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReviewTableItem from './reviewTableItem';

interface Props {
  data: Review[]
}

export default function ReviewTable({ data } : Props) {
  const [reviews, setReviews] = useState(data);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setReviews(data);
  }, [data]);

  useEffect(() => {
    const handleUpdate = (updated: Review) => {
      setReviews(prev => prev.map(r => r.id !== updated.id ? r : updated));
    };
  }, []);

  useEffect(() => {
    const handleNewReview = (newReview: Review) => {
      setReviews((prev) => [newReview, ...prev]);
    };
  }, []);

  const handleTbodyClick = useCallback((event: React.MouseEvent<HTMLTableSectionElement>) => {
    const target = event.target as HTMLElement;
    const row = target.closest<HTMLTableRowElement>('tr.editable');
    const id = row?.dataset.id;
    if (id) {
      setEditingId(current => current === id ? null : id);
    }
  }, []);

  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th className="text-end">ID</th>
          <th className="text-center text-nowrap">Дата и время</th>
          <th className="text-start">Пользователь</th>
          <th className="text-center">Оценка</th>
          <th className="text-start">Проблема</th>
          <th className="text-start">Решение</th>
          <th className="text-start">Комментарий</th>
        </tr>
      </thead>
      <tbody onClick={handleTbodyClick}>
        {reviews.length !== 0 ? (
          reviews.map(r => (
            <ReviewTableItem 
              key={r.id}
              review={r}
              isEditing={String(r.id) === editingId}
              onCancelEditing={setEditingId}
            />
          ))
        ) : (
          <tr className="table-info"><td className="text-center" colSpan={100}>Записи за указанный период отсутствуют</td></tr>
        )}
      </tbody>
    </Table>
  )
}