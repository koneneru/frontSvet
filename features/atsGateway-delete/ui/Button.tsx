'use client';

import { useState, useTransition } from 'react';
import { deleteGatewayAction } from '../model/actions';
import { Spinner } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import { ConfirmationModal } from '@/shared/ui/confirmationModal';

interface Props {
  gatewayId: string
  gatewayName: string
  onSuccess?: () => void
}

export function DeleteGatewayButton({
  gatewayId,
  gatewayName,
  onSuccess,
}: Props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();

  const openConfirm = () => setShowConfirm(true);
  const closeConfirm = () => setShowConfirm(false);

  const handleDelete = () => {
    closeConfirm();

    startTransition(async () => {
      const result = await deleteGatewayAction(gatewayId);

      if (result.success) {
        onSuccess?.();
      } else {
        alert(result.error);
      }
    });
  };

  return (
    <>
      <div
        role="button"
        className="js-link-danger"
        style={{
          cursor: isPending ? 'not-allowed' : 'pointer',
          opacity: isPending ? 0.6 : 1,
        }}
        onClick={openConfirm}
        tabIndex={0}
      >
        {
          isPending
            ? (
              <Spinner animation="border" size="sm" />
            )
            : null
        }
        <small>Удалить</small>
      </div>

      {createPortal(
        <ConfirmationModal
          show={showConfirm}
          onClose={closeConfirm}
          onConfirm={handleDelete}
          title="Удаление шлюза"
          body={(
            <p>
              Вы уверены, что хотите безвозвратно удалить шлюз
              <strong className="text-dark">{` ${gatewayName}`}</strong>
              ?
            </p>
          )}
          confirmLabel="Удалить"
          variant="danger"
        />,
        document.body
      )}
    </>
  );
}
