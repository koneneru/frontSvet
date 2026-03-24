'use client';

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GatewayCreateModal } from './Modal';

export function GatewayCreateTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="success"
        size="sm"
        onClick={() => setIsOpen(true)}
      >
        Добавить
      </Button>

      {isOpen && <GatewayCreateModal show={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
