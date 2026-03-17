import { AtsAbonentsPage } from '@/pages/atsAbonentsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фбоненты АТС',
};

export default function Page() {
  return <AtsAbonentsPage />;
}
