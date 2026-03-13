import { AtsGateway } from '../model/types';

interface Props extends React.HtmlHTMLAttributes<HTMLTableRowElement> {
  gateway: AtsGateway
}

export function AtsGatewayRow({ gateway, ...props }: Props) {
  return (
    <tr {...props}>
      <td className="text-end">{gateway.id}</td>
      <td className="text-center">{gateway.trunk}</td>
      <td className="text-center">{gateway.interPhone}</td>
      <td className="text-center">{gateway.phone}</td>
      <td className="text-start">{gateway.name}</td>
      <td className="text-center">{gateway.trunkGroup}</td>
    </tr>
  );
}
