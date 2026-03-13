import { AtsGatewayRow, useGateways } from '@/entities/atsGateway';
import { AtsGatewayUpdateForm } from '@/features/atsGateway-update/ui/UpdateAtsGatewayForm';
import { memo, useCallback, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { AtsGatewayDeleteModal } from './AtsGatewayDeleteModal';

interface Props {
  gatewayId: string
  isEditing: boolean
  onToggleEditing: (id: string) => void
}

export const AtsGatewaysTableItem = memo(function AtsGatewaysTableItem({
  gatewayId,
  isEditing,
  onToggleEditing,
}: Props) {
  const gateway = useGateways().byId[gatewayId];
  const handleClick = useCallback(() => onToggleEditing(gatewayId), [gatewayId, onToggleEditing]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!gateway) return null;

  return (
    <>
      <AtsGatewayRow
        gateway={gateway}
        className="editable cursor-pointer"
        onClick={handleClick}
      />

      {isEditing && (
        <tr>
          <td
            colSpan={100}
            className="py-1 px-0"
          >
            <div
              className="px-4 py-3"
              style={{
                backgroundColor: '#E2F3E2',
                borderTop: '1px solid #afc9af',
                borderBottom: '1px solid #afc9af',
              }}
            >
              <AtsGatewayUpdateForm id="AtsGatewayUpdateForm" gateway={gateway} onClose={() => onToggleEditing(gatewayId)} />
              <div></div>
              <div className="d-flex justify-content-between align-items-center pt-2">
                <div className="js-link-danger" onClick={() => setIsDeleteModalOpen(true)}><small>Удалить</small></div>
                <div className="d-flex align-items-center gap-3">
                  <div className="js-link cancel" onClick={() => onToggleEditing(gatewayId)}><small>Отмена</small></div>
                  <Button variant="success" type="submit" form="AtsGatewayUpdateForm" size="sm">
                    Сохранить
                  </Button>
                </div>
              </div>
            </div>

            <AtsGatewayDeleteModal
              gateway={gateway}
              show={isDeleteModalOpen}
              onCancel={() => setIsDeleteModalOpen(false)}
              onDelete={() => {
                setIsDeleteModalOpen(false);
                onToggleEditing(gatewayId);
              }}
            />
          </td>
        </tr>
      )}
    </>
  );
});
