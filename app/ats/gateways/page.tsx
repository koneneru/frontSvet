import { AtsGatewaysPage } from '@/pages/atsGatewaysPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Шлюзы АТС',
};

export default function Page() {
  return <AtsGatewaysPage />;
}
