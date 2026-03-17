// import { useAtsAbonents } from '@/entities/atsAbonent';
import TableItem from './TableItem';
import Table from 'react-bootstrap/esm/Table';

interface Props {
  abonentIds: string[]
  loading: boolean
}

export function AtsAbonentsTable({ abonentIds, loading }: Props) {
  // const abonentIds = useAtsAbonents().ids;

  const renderContent = () => {
    if (loading) {
      return <tr><td className="text-center" colSpan={100}>Загрузка...</td></tr>;
    }

    if (abonentIds.length === 0) {
      return (
        <tr className="table-info">
          <td className="text-center" colSpan={100}>
            Записи за указанный период отсутствуют
          </td>
        </tr>
      );
    }

    return abonentIds.map(id => (
      <TableItem key={id} abonentId={id} />
    ));
  };

  return (
    <div className="bg-body-tertiary border rounded shadow-sm">
      <Table hover size="sm">
        <thead>
          <tr>
            <td className="bg-body-tertiary text-end text-nowrap">Таб.№</td>
            <td className="bg-body-tertiary text-start">ФИО</td>
            <td className="bg-body-tertiary text-center">Внут.</td>
            <td className="bg-body-tertiary text-center">Гор.</td>
            <td className="bg-body-tertiary text-center">Сотовый</td>
            <td className="bg-body-tertiary text-center">Дом.</td>
            <td className="bg-body-tertiary text-start">Подразделение/Должность</td>
            <td className="bg-body-tertiary text-start">E-mail</td>
          </tr>
        </thead>
        <tbody>
          {renderContent()}
        </tbody>
      </Table>
    </div>
  );
}
