'use client';

import { Review } from '@/entities/review';
import Form from 'react-bootstrap/esm/Form';
import { toIsoString } from '@/shared/lib/date';
import { useActionState, useEffect } from 'react';
import { updateReviewAction } from '../model/actions';

interface Props {
  review: Review
  id: string
  onSuccess?: () => void
  onPendingChange?: (isPending: boolean) => void
}

export function ReviewEditForm({
  review,
  id,
  onSuccess,
  onPendingChange,
  ...props
}: Props) {
  const updateWithId = updateReviewAction.bind(null, String(review.id));
  const [state, formAction, isPending] = useActionState(updateWithId, null);

  useEffect(() => {
    onPendingChange?.(isPending);
  }, [isPending, onPendingChange]);

  useEffect(() => {
    if (state?.success) onSuccess?.();
  }, [state, onSuccess]);

  return (
    <Form
      {...props}
      id={id}
      action={formAction}
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
              defaultValue={state?.fields?.timestamp as string || toIsoString(review.timestamp)}
              disabled={isPending}
            />
          </Form.Group>
          <Form.Group className="d-inline-block mb-3 me-4" controlId="user">
            <Form.Label>Пользователь</Form.Label>
            <Form.Control
              type="text"
              name="machine"
              size="sm"
              maxLength={80}
              defaultValue={state?.fields?.machine as string || review.machine}
              disabled={isPending}
            />
          </Form.Group>
          <Form.Group className="d-inline-block mb-3 me-4" controlId="rating">
            <Form.Label>Оценка</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              size="sm"
              defaultValue={state?.fields?.rating as string || review.rating}
              disabled={isPending}
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
          <Form.Group className="mb-3" controlId="problem">
            <Form.Label>Проблема</Form.Label>
            <Form.Control
              as="textarea"
              name="problem"
              size="sm"
              rows={2}
              maxLength={256}
              style={{ resize: 'none' }}
              defaultValue={state?.fields?.problem as string || review.problem}
              disabled={isPending}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="solution">
            <Form.Label>Решение</Form.Label>
            <Form.Control
              as="textarea"
              name="solution"
              size="sm"
              rows={3}
              maxLength={2048}
              style={{ resize: 'none' }}
              defaultValue={state?.fields?.solution as string || review.solution}
              disabled={isPending}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Комментарий</Form.Label>
            <Form.Control
              as="textarea"
              name="comment"
              size="sm"
              rows={3}
              maxLength={2048}
              style={{ resize: 'none' }}
              defaultValue={state?.fields?.comment as string || review.comment}
              disabled={isPending}
            />
          </Form.Group>
        </div>
      </div>

      {state?.error && (
        <div className="alert alert-danger p2 small">{state.error}</div>
      )}
    </Form>
  );
}
