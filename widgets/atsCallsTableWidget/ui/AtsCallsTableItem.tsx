import { CallRow, useCallsById } from '@/entities/atsCall';
import { memo } from 'react';

interface Props {
  callId: string
}

export default memo(function AtsCallTableItem({ callId }: Props) {
  const call = useCallsById()[callId];
  if (!call) return null;

  return (
    <CallRow call={call} />
  );
});
