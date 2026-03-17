import { AtsAbonentTableRow, useAtsAbonents } from '@/entities/atsAbonent';
import { memo } from 'react';

interface Props {
  abonentId: string
}

export default memo(function TableItem({ abonentId }: Props) {
  const abonent = useAtsAbonents().byId[abonentId];
  if (!abonent) return null;

  return <AtsAbonentTableRow abonent={abonent} />;
});
