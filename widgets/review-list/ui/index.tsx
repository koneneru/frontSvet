import { ReviewFilters } from '@/entities/review/model/types';
import ReviewTable from '@/features/review-table/ui';

interface Props {
  searchParams: ReviewFilters
}

export default async function ReviewList({ searchParams }: Props) {
  // const reviews = await fetchReviews(searchParams);

  return (
    <div className="bg-body-tertiary border rounded shadow-sm overflow-hidden mt-3">
      <ReviewTable fetchParams={searchParams} />
    </div>
  )
}