import Table from 'react-bootstrap/esm/Table';
import AtsCallTableItem from './AtsCallsTableItem';
import { useAtsCalls } from '@/entities/atsCall';

interface Props {
  loading: boolean
}

export function AtsCallsTable({ loading }: Props) {
  const callIds = useAtsCalls().ids;

  const renderContent = () => {
    if (loading) {
      return <tr><td className="text-center" colSpan={100}>Загрузка...</td></tr>;
    }

    if (callIds.length === 0) {
      return (
        <tr className="table-info">
          <td className="text-center" colSpan={100}>
            Записи за указанный период отсутствуют
          </td>
        </tr>
      );
    }

    return callIds.map(id => (
      <AtsCallTableItem key={id} callId={id} />
    ));
  };

  return (
    <div className="bg-body-tertiary border rounded shadow-sm">
      <Table hover size="sm">
        <thead>
          <tr>
            <td className="bg-body-tertiary text-end">ID</td>
            <td className="bg-body-tertiary text-center">Дата звонка</td>
            <td className="bg-body-tertiary text-start">Абонент</td>
            <td className="bg-body-tertiary text-center">Корп. номер</td>
            <td className="bg-body-tertiary text-start">Шлюз</td>
            <td className="bg-body-tertiary text-center">Номер вызова</td>
            <td className="bg-body-tertiary text-center">Направление</td>
            <td className="bg-body-tertiary text-end">Длительность</td>
          </tr>
        </thead>
        <tbody>
          {renderContent()}
        </tbody>
      </Table>
    </div>
  );
}
