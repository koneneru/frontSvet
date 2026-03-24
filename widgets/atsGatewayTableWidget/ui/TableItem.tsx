import { AtsGatewayTableRow, Gateway } from '@/entities/atsGateway';
import { memo, useCallback, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ActionTr } from '@/shared/ui/actionTr';
import { AtsGatewayEditForm } from '@/features/atsGateway-update';
import { DeleteGatewayButton } from '@/features/atsGateway-delete';

interface Props {
  gateway: Gateway
  isEditing: boolean
  onToggleEditing: (id: string) => void
}

export const TableItem = memo(function TableItem({
  gateway,
  isEditing,
  onToggleEditing,
}: Props) {
  const [isSaving, setIsSaving] = useState(false);
  const FORM_ID = `edit-form-${gateway.id}`;

  const handleClick = useCallback(() => {
    onToggleEditing(String(gateway.id));
  }, [gateway, onToggleEditing]);

  return (
    <>
      <AtsGatewayTableRow
        gateway={gateway}
        onClick={handleClick}
      />

      {isEditing && (
        <ActionTr>
          <AtsGatewayEditForm
            id={FORM_ID}
            gateway={gateway}
            onSuccess={() => onToggleEditing(String(gateway.id))}
            onPendingChange={setIsSaving}
          />

          <div className="d-flex justify-content-between align-items-center pt-2">
            <DeleteGatewayButton
              gatewayId={String(gateway.id)}
              gatewayName={gateway.name}
            />

            <div className="d-flex align-items-center gap-3">
              <div
                role="button"
                className="js-link"
                style={{ cursor: 'pointer' }}
                onClick={() => onToggleEditing(String(gateway.id))}
                tabIndex={0}
              >
                <small>Отмена</small>
              </div>
              <Button
                type="submit"
                size="sm"
                variant="success"
                form={FORM_ID}
                disabled={isSaving}
              >
                {isSaving ? 'Сохранение...' : 'Сохранить'}
              </Button>
            </div>
          </div>
        </ActionTr>
      )}
    </>
  );
});
