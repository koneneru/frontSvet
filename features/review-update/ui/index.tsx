'use client';

import { Review } from '@/entities/review/model/types';
import { useUpdateReview } from '../model/useUpdateReview';
import { getFormData } from '@/shared/dom/form';
import { ReviewEditFormValues } from '../model/types';
import { mapFormValuesToUpdateDTO } from '../model/mapper';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import { toIsoString } from '@/shared/lib/date';
import { useState } from 'react';

interface Props {
  review: Review
  onCancel: () => void
}

export default function UpdateReviewForm({ review, onCancel }: Props) {
  const { update, loading } = useUpdateReview();

  const [formState, setFormState] = useState({
    timestamp: review.timestamp,
    machine: review.machine,
    rating: review.rating,
    problem: review.problem,
    solution: review.solution,
    comment: review.comment,
  });

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    
    const rawValues = getFormData<ReviewEditFormValues>(e.target);
    const updateDTO = mapFormValuesToUpdateDTO(rawValues);

    update(String(review.id), updateDTO, onCancel);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value}));
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <div className="row gx-5">
        <div className="col-3">
          <Form.Group className="d-inline-block mb-3 me-4" controlId="timestamp">
            <Form.Label>Дата и время</Form.Label>
            <Form.Control
              type="datetime-local"
              name="timestamp"
              size="sm"
              step="0.001"
              value={toIsoString(formState.timestamp)}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-inline-block mb-3 me-4" controlId="user">
            <Form.Label>Пользователь</Form.Label>
            <Form.Control
              type="text"
              name="machine"
              size="sm"
              maxLength={80}
              value={formState.machine}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-inline-block mb-3 me-4" controlId="rating">
            <Form.Label>Оценка</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              size="sm"
              value={formState.rating}
              onChange={handleChange}
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="0">0</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col-9">
          <Form.Group controlId="problem" className="mb-3">
            <Form.Label>Проблема</Form.Label>
            <Form.Control
              as="textarea"
              name="problem"
              size="sm"
              rows={2}
              maxLength={256}
              style={{ resize: "none" }}
              value={formState.problem}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="solution" className="mb-3">
            <Form.Label>Решение</Form.Label>
            <Form.Control
              as="textarea"
              name="solution"
              size="sm"
              rows={3}
              maxLength={2048}
              style={{ resize: "none" }}
              value={formState.solution}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="comment" className="mb-3">
            <Form.Label>Комментарий</Form.Label>
            <Form.Control
              as="textarea"
              name="comment"
              size="sm"
              rows={3}
              maxLength={2048}
              style={{ resize: "none" }}
              value={formState.comment}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div></div>
        <div className="d-flex justify-content-end align-items-center gap-3 pt-2">
          <div className="js-link cancel" onClick={onCancel}><small>Отмена</small></div>
          <Button variant="success" type="submit" size="sm" disabled={loading}>{loading ? 'Сохранение...' : 'Сохранить'}</Button>
        </div>
      </div>
    </Form>
  );
}