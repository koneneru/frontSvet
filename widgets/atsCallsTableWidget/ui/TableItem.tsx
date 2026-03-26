import { type Call, AtsCallRow } from '@/entities/atsCall';
import { memo } from 'react';

interface Props {
  call: Call
}

export default memo(function TableItem({ call }: Props) {
  return <AtsCallRow call={call} />;
});
