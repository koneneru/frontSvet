'use client';

import { ReactNode } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

interface Props {
  show: boolean
  onClose: () => void
  onConfirm: () => void
  isPending?: boolean
  title?: string
  body?: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'danger' | 'warning' | 'primary'
}

export function ConfirmationModal({
  show,
  onClose,
  onConfirm,
  isPending = false,
  title = 'Подтверждение действия',
  body = 'Вы уверены, что хотите продолжить?',
  confirmLabel = 'Подтвердить',
  cancelLabel = 'Отмена',
  variant = 'danger',
}: Props) {
  return (
    <Modal show={show} onHide={onClose} centered size="sm" backdrop="static">
      <Modal.Header closeButton={!isPending}>
        <Modal.Title className="h6">{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="small text-muted py-3">
        {body}
      </Modal.Body>

      <Modal.Footer className="bg-light p-2 gap-2">
        <div
          role="button"
          className="js-link"
          style={{
            cursor: isPending ? 'not-allowed' : 'pointer',
            opacity: isPending ? 0.6 : 1,
          }}
          onClick={onClose}
          tabIndex={0}
        >
          {cancelLabel}
        </div>
        <Button
          variant={variant}
          size="sm"
          onClick={onConfirm}
          disabled={isPending}
        >
          {isPending
            ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Обработка...
              </>
            )
            : (
              confirmLabel
            )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
