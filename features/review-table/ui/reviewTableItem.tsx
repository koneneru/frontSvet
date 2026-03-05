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
            className="py-1 px-0"
          >
            <div
              className='px-4 py-3'
              style={{
                backgroundColor: '#E2F3E2',
                borderTop: '1px solid #afc9af',
                borderBottom: '1px solid #afc9af',
              }}
            >
              <UpdateReviewForm review={review} onCancel={() => onCancelEditing(null) }/>
            </div>
          </td>
        </tr>
      )}
    </>
  )
});