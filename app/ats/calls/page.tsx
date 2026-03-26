import { AtsCallsTableWidget } from '@/widgets/atsCallsTableWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Журнал вызовов АТС',
};

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export default function Page({ searchParams }: Props) {
  return <AtsCallsTableWidget searchParams={searchParams} />;
};
