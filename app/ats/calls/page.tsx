import { AtsCallsPage } from '@/pages/atsCallPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Журнал вызовов АТС',
};

export default function Page() {
  return <AtsCallsPage />;
};
