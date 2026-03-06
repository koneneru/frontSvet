import { ReviewFilters } from '@/features/reviewFilters';
import { ReviewsTableWidget } from '@/widgets/reviewsTableWidget';

export function ReviewsPage() {
  return (
    <div className="container-lg">
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <p className="fs-4 fw-semibold m-0">Обращения пользователей</p>
        </div>
      </div>
      <ReviewFilters />

      <ReviewsTableWidget />
    </div>
  );
}
