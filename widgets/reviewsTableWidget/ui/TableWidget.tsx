import { feedbackApi } from '@/entities/review/api/reviewApi';
import { Content } from './TableWidgetContent';

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export async function ReviewsTableWidget({ searchParams }: Props) {
  const filters = await searchParams;
  const reviews = await feedbackApi.fetch(filters);

  return <Content reviews={reviews} />;
}
