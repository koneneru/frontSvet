'use client';

import { ReviewFilters } from '@/entities/review/model/types';
import { JSX, useCallback, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReviewTableItem from './reviewTableItem';
import { useReviewStore } from '@/entities/review/store/store';

interface Props {
  fetchParams: ReviewFilters
}

export default function ReviewTable({ fetchParams } : Props) {
  const reviews = useReviewStore.use.reviews();
  const fetchReviews = useReviewStore.use.fetchReviews();

  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews(fetchParams).finally(() => setLoading(false));
  }, [fetchParams, fetchReviews]);

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
  } else if (reviews.length === 0) {
    content = (
      <tr className="table-info"><td className="text-center" colSpan={100}>Записи за указанный период отсутствуют</td></tr>
    );
  } else {
    content = (reviews.map(r => (
      <ReviewTableItem 
        key={r.id}
        review={r}
        isEditing={String(r.id) === editingId}
        onCancelEditing={setEditingId}
      />
    )));
  }

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
        {content}
      </tbody>
    </Table>
  )
}