import { toIsoString } from '@/shared/lib/date';
import { AtsCall } from '../model/types';

interface Props extends React.HtmlHTMLAttributes<HTMLTableRowElement> {
  call: AtsCall
}

export function AtsCallRow({ call, ...props }: Props) {
  return (
    <tr
      {...props}
    >
      <td className="text-end">{call.id}</td>
      <td className="text-center text-nowrap">
        {toIsoString(call.calldate).slice(0, 19).replace('T', ' ')}
      </td>
      <td className="text-start">{call.callerName}</td>
      <td className="text-center">{call.caller}</td>
      <td
        className="text-start"
        data-toggle="tooltip"
        data-placement="bottom"
        title={call.gateway ? call.gateway : ''}
      >
        {call.gatewayName ? call.gatewayName : '---'}
      </td>
      {
        call.calleeName
          ? (
            <td
              className="text-center"
              data-toggle="tooltip"
              data-placement="bottom"
              title={call.callee}
            >
              {call.calleeName}
            </td>
          )
          : (
            <td className={`text-center${call.callee && ' fst-italic'}`}>
              {call.callee ? call.callee : '-номер не определён-'}
            </td>
          )
      }
      <td className="text-center">{call.vector}</td>
      <td className="text-end">{`${Math.trunc(call.duration / 60)}:${String(call.duration % 60).padStart(2, '0')}`}</td>
    </tr>
  );
}
