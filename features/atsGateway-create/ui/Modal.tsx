'use client';

import { Button, Modal } from 'react-bootstrap';
import { GatewayCreateForm } from './Form';
import { useId, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  show: boolean
  onClose: () => void
}

export function GatewayCreateModal({ show, onClose }: Props) {
  const formId = useId();
  const [isPending, setIsPending] = useState(false);

  return createPortal(
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="h5">Новый шлюз</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <GatewayCreateForm
          id={formId}
          onSuccess={onClose}
          onPendingChange={setIsPending}
        />
      </Modal.Body>

      <Modal.Footer>
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
          <small>Отмена</small>
        </div>

        <Button
          type="submit"
          form={formId}
          variant="success"
          size="sm"
          disabled={isPending}
        >
          {isPending ? 'Добавление...' : 'Добавить'}
        </Button>
      </Modal.Footer>
    </Modal>,
    document.body
  );
}
