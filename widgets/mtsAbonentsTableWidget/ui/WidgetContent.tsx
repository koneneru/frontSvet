'use client';

import { Abonent } from '@/entities/mtsAbonent';
import { Suspense, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MtsAbonentsTable } from './Table';
import { AbonentCreateModal } from '@/features/mtsAbonent-create';
import { MtsAbonentFilterForm } from '@/features/mtsAbonent-filter';
import { SkeletonMain } from '@/shared/ui/skeleton';

interface Props {
  abonents: Abonent[]
}

export function Content({ abonents }: Props) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="container-lg">
      <div className="d-flex justify-content-between mb-3">
        <p className="fs-4 fs-semibold m-0">Абоненты МТС</p>
        <Button
          variant="success"
          size="sm"
          onClick={() => setIsCreateOpen(true)}
        >
          Добавить
        </Button>
      </div>

      <MtsAbonentFilterForm />

      <div className="bg-body-tertiary border rounded shadow-sm">
        <Suspense fallback={SkeletonMain()}>
          <MtsAbonentsTable initialAbonents={abonents} />
        </Suspense>
      </div>

      <AbonentCreateModal
        show={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
    </div>
  );
}
