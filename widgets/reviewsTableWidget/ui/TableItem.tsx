import { Review, ReviewRow } from '@/entities/review';
import { ReviewEditForm } from '@/features/review-update';
import { ActionTr } from '@/shared/ui/actionTr';
import { memo, useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  review: Review
  isEditing: boolean
  onToggleEditing: (id: string) => void
}

export default memo(function TableItem({ review, isEditing, onToggleEditing }: Props) {
  const [isSaving, setIsSaving] = useState(false);
  const FORM_ID = `edit-form-${review.id}`;

  const handleClick = useCallback(() => {
    onToggleEditing(String(review.id));
  }, [review, onToggleEditing]);

  return (
    <>
      <ReviewRow
        review={review}
        onClick={handleClick}
      />

      {isEditing && (
        <ActionTr>
          <ReviewEditForm
            id={FORM_ID}
            review={review}
            onSuccess={() => onToggleEditing(String(review.id))}
            onPendingChange={setIsSaving}
          />

          <div className="d-flex justify-content-between align-items-center pt-2">
            <div></div>

            <div className="d-flex align-items-center gap-3">
              <div
                role="button"
                className="js-link"
                style={{ cursor: 'pointer' }}
                onClick={() => onToggleEditing(String(review.id))}
                tabIndex={0}
              >
                <small>Отмена</small>
              </div>
              <Button
                type="submit"
                size="sm"
                variant="success"
                form={FORM_ID}
                disabled={isSaving}
              >
                {isSaving ? 'Сохранение...' : 'Сохранить'}
              </Button>
            </div>
          </div>
        </ActionTr>
      )}
    </>
  );
});
