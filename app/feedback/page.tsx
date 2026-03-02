import ReviewsPage from '@/pages/reviews/ui'

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ReviewPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return <ReviewsPage searchParams={params} />;
}