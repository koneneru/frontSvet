import { ReviewsTableWidget } from '@/widgets/reviewsTableWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обращения пользователей',
};

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export default function Page({ searchParams }: Props) {
  return <ReviewsTableWidget searchParams={searchParams} />;
}
