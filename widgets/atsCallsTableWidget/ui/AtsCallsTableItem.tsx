import { AtsCallRow, useAtsCalls } from '@/entities/atsCall';
import { memo } from 'react';

interface Props {
  callId: string
}

export default memo(function AtsCallTableItem({ callId }: Props) {
  const call = useAtsCalls().byId[callId];
  if (!call) return null;

  return (
    <AtsCallRow call={call} />
  );
});
