import { MtsAbonentsTableWidget } from '@/widgets/mtsAbonentsTableWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Абоненты МТС',
};

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export default function Page({ searchParams }: Props) {
  return <MtsAbonentsTableWidget searchParams={searchParams} />;
}
