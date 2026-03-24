import { AtsGatewaysTableWidget } from '@/widgets/atsGatewayTableWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Шлюзы АТС',
};

interface Props {
  searchParams: Promise<Record<string, string | undefined>>
}

export default function Page({ searchParams }: Props) {
  return <AtsGatewaysTableWidget searchParams={searchParams} />;
}
