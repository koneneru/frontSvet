'use client';

import { useState, useTransition } from 'react';
import { deleteAbonentAction } from '../model/actions';
import { Spinner } from 'react-bootstrap';
import { ConfirmationModal } from '@/shared/ui/confirmationModal';
import { createPortal } from 'react-dom';

interface Props {
  abonentId: string
  abonentName: string
  onSuccess?: () => void
}

export function DeleteAbonentButton({ abonentId, abonentName, onSuccess }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();

  const openConfirm = () => setShowConfirm(true);
  const closeConfirm = () => setShowConfirm(false);

  const handleDelete = () => {
    closeConfirm();

    startTransition(async () => {
      const result = await deleteAbonentAction(abonentId);

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
        {isPending
          ? (
            <Spinner animation="border" size="sm" />
          )
          : null }
        <small>Удалить</small>
      </div>

      {createPortal(
        <ConfirmationModal
          show={showConfirm}
          onClose={closeConfirm}
          onConfirm={handleDelete}
          title="Удаление абонента"
          body={(
            <p>
              Вы уверены, что хотите безвозвратно удалить абонента
              <strong className="text-dark">{` ${abonentName}`}</strong>
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
