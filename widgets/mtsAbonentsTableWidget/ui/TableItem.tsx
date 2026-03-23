import { memo, useCallback, useState } from 'react';
import { Abonent, MtsAbonentTableRow } from '@/entities/mtsAbonent';
import { MtsAbonentEditForm } from '@/features/mtsAbonent-update';
import { Button } from 'react-bootstrap';
import { ActionTr } from '@/shared/ui/actionTr';
import { DeleteAbonentButton } from '@/features/mtsAbonent-delete';

interface Props {
  abonent: Abonent
  isEditing: boolean
  onToggleEditing: (id: string) => void
}

export default memo(function TableItem({
  abonent,
  isEditing,
  onToggleEditing,
}: Props) {
  const [isSaving, setIsSaving] = useState(false);
  const FORM_ID = `edit-form-${abonent.id}`;

  const handleClick = useCallback(() => {
    onToggleEditing(String(abonent.id));
  }, [abonent, onToggleEditing]);

  return (
    <>
      <MtsAbonentTableRow
        abonent={abonent}
        onClick={handleClick}
      />

      {isEditing && (
        <ActionTr>
          <MtsAbonentEditForm
            id={FORM_ID}
            abonent={abonent}
            onSuccess={() => onToggleEditing(String(abonent.id))}
            onPendingChange={setIsSaving}
          />

          <div className="d-flex justify-content-between align-items-center pt-2">
            <DeleteAbonentButton abonentId={String(abonent.id)} abonentName={abonent.emplName} />

            <div className="d-flex align-items-center gap-3">
              <div
                role="button"
                className="js-link"
                style={{ cursor: 'pointer' }}
                onClick={() => onToggleEditing(String(abonent.id))}
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
