import { Review } from '@/entities/review/model/types';
import ReviewRow from '@/entities/review/ui/tableRow';
import UpdateReviewForm from '@/features/review-update/ui';
import { Dispatch, memo, SetStateAction } from 'react';

interface Props {
  review: Review
  isEditing: boolean
  onCancelEditing: Dispatch<SetStateAction<string | null>>
}

export default memo(function ReviewTableItem({ review, isEditing, onCancelEditing }: Props) {
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
            className="py-3 px-4"
          >
            <UpdateReviewForm review={review} onCancel={() => onCancelEditing(null) }/>
          </td>
        </tr>
      )}
    </>
  )
});