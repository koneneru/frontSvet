import { Abonent, AtsAbonentTableRow } from '@/entities/atsAbonent';
import { memo } from 'react';

interface Props {
  abonent: Abonent
}

export default memo(function TableItem({ abonent }: Props) {
  return <AtsAbonentTableRow abonent={abonent} />;
});
