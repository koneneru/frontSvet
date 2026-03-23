import { HtmlHTMLAttributes } from 'react';
import { Abonent } from '../model/types';
import { toIsoString } from '@/shared/lib/date';

interface Props extends HtmlHTMLAttributes<HTMLTableRowElement> {
  abonent: Abonent
}

export function MtsAbonentTableRow({ abonent, ...props }: Props) {
  return (
    <tr
      {...props}
    >
      <td className="text-end">{abonent.id}</td>
      <td className="text-end">{abonent.emplId}</td>
      <td className="text-start">{abonent.emplName}</td>
      <td className="text-start">{abonent.department}</td>
      <td className="text-center">{abonent.state ? 'Активен' : 'Отключен'}</td>
      <td className="text-center">{toIsoString(abonent.updatedAt).slice(0, 19).replace('T', ' ')}</td>
    </tr>
  );
}
