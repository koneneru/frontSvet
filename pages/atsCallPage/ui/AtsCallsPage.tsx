import { AtsCallsTableWidget } from '@/widgets/atsCallsTableWidget';

export function AtsCallsPage() {
  return (
    <div className="container-lg">
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <p className="fs-4 fs-semibold m-0">Журнал вызовов АТС</p>
        </div>
      </div>
      <AtsCallsTableWidget />
    </div>
  );
}
