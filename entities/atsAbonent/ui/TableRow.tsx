import { Fragment, HtmlHTMLAttributes } from 'react';
import { Abonent } from '../model/types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface Props extends HtmlHTMLAttributes<HTMLTableRowElement> {
  abonent: Abonent
}

export function AtsAbonentTableRow({ abonent, ...props }: Props) {
  const renderArray = (arr?: string[]) => {
    return (
      arr?.map((element, index) => (
        <Fragment key={index}>
          {index !== 0 && <br />}
          {element}
        </Fragment>
      ))
    );
  };

  const renderDepartment = (department: string) => {
    const parts = department.split(' (');
    if (parts[1]) {
      parts[1] = parts[1].slice(0, -1);
    }

    return (parts[1]
      ? (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>{parts[1]}</Tooltip>}
        >
          <span>{parts[0]}</span>
        </OverlayTrigger>
      )
      : (
        <span>{parts[0]}</span>
      )
    );
  };

  return (
    <tr
      {...props}
    >
      <td className="text-start">{abonent.emplId}</td>
      <td className="text-start">{abonent.name}</td>
      <td className="text-start">{renderArray(abonent.internalPhone)}</td>
      <td className="text-start">{renderArray(abonent.landline)}</td>
      <td className="text-start text-nowrap">
        {renderArray(abonent.mobilePhone?.map((p) => {
          return `+7(${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6, 8)}-${p.slice(8, 10)}`;
        }))}
      </td>
      <td className="text-center">{renderArray(abonent.domesticPhone)}</td>
      <td className="text-start">
        <div className="d-flex flex-column">
          {renderDepartment(abonent.department)}
          <span>{abonent.employ}</span>
        </div>
      </td>
      <td className="text-start">{renderArray(abonent.email)}</td>
    </tr>
  );
}
