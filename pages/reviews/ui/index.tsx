import ReviewFilters from '@/features/reviewFilters/ui';
import ReviewList from '@/widgets/review-list/ui';

interface ReviewsPageProps {
  searchParams: Record<string, string | string[] | undefined>
}

export default function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const params = searchParams;

  const filters = {
    ...params,
    year: params.year ? Number(params.year) : (new Date()).getFullYear(),
  }
  
  return (
    <main className="pb-4">
      <div className="container-lg">
        <div className="mt-4">
          <div className="d-flex justify-content-between">
              <p className="fs-4 fw-semibold m-0">Обращения пользователей</p>
          </div>
        </div>
        <ReviewFilters />

        <ReviewList searchParams={filters} />
      </div>
    </main>
  )
}