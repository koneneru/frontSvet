'use client';

import { Review } from '@/entities/review/model/types';
import ReviewRow from '@/entities/review/ui/tableRow';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

interface Props {
  data: Review[]
}

export default function ReviewTable({ data } : Props) {
  const [reviews, setReviews] = useState<Review[]>(data);

  useEffect(() => {
    setReviews(data);
  }, [data])

  useEffect(() => {
    const handleNewReview = (newReview: Review) => {
      setReviews((prev) => [newReview, ...prev]);
    };
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
      <tbody>
        {reviews.length !== 0 ? (
          reviews.map(r => <ReviewRow key={r.id} review={r} />)
        ) : (
          <tr className="table-info"><td className="text-center" colSpan={100}>Записи за указанный период отсутствуют</td></tr>
        )}
      </tbody>
    </Table>
  )
}