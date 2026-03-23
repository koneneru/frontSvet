import { AtsAbonentsTableWidget } from '@/widgets/atsAbonentsTableWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Абоненты АТС',
};

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export default function Page({ searchParams }: Props) {
  return <AtsAbonentsTableWidget searchParams={searchParams} />;
}
