import { ReviewRow, useReviewsById } from '@/entities/review';
import { UpdateReviewForm } from '@/features/review-update';
import { Dispatch, memo, SetStateAction } from 'react';

interface Props {
  reviewId: string
  isEditing: boolean
  onCancelEditing: Dispatch<SetStateAction<string | null>>
}

export default memo(function ReviewTableItem({ reviewId, isEditing, onCancelEditing }: Props) {
  const review = useReviewsById()[reviewId];
  if (!review) return null;

  return (
    <>
      <ReviewRow
        review={review}
        className="cursor-pointer"
      />

      {isEditing && (
        <tr>
          <td
            colSpan={100}
            className="py-1 px-0"
          >
            <div
              className="px-4 py-3"
              style={{
                backgroundColor: '#E2F3E2',
                borderTop: '1px solid #afc9af',
                borderBottom: '1px solid #afc9af',
              }}
            >
              <UpdateReviewForm review={review} onClose={() => onCancelEditing(null)} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
});
