'use client';

import { Gateway } from '@/entities/atsGateway';
import { FormHTMLAttributes, useActionState, useEffect } from 'react';
import Form from 'react-bootstrap/esm/Form';
import { updateGatewayAction } from '../model/actions';
import { toIsoString } from '@/shared/lib/date';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  gateway: Gateway
  id: string
  onSuccess?: () => void
  onPendingChange?: (isPending: boolean) => void
}

export function AtsGatewayEditForm({
  gateway,
  id,
  onSuccess,
  onPendingChange,
  ...props
}: Props) {
  const updateWithId = updateGatewayAction.bind(null, String(gateway.id));
  const [state, formAction, isPending] = useActionState(updateWithId, null);

  useEffect(() => {
    onPendingChange?.(isPending);
  }, [isPending, onPendingChange]);

  useEffect(() => {
    if (state?.success) onSuccess?.();
  }, [state, onSuccess]);

  return (
    <Form
      {...props}
      id={id}
      action={formAction}
    >
      <Form.Group className="d-inline-block mb-2 me-3" controlId="trunk">
        <Form.Label>Шлюз</Form.Label>
        <Form.Control
          type="text"
          name="trunk"
          size="sm"
          maxLength={5}
          defaultValue={state?.fields?.trunk as string || gateway.trunk}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="interPhone">
        <Form.Label>Корп. номер</Form.Label>
        <Form.Control
          type="text"
          name="interPhone"
          size="sm"
          maxLength={5}
          defaultValue={state?.fields?.interPhone as string || gateway.interPhone}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="phone">
        <Form.Label>Номер</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          size="sm"
          maxLength={10}
          defaultValue={state?.fields?.phone as string || gateway.phone}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="name">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          size="sm"
          maxLength={250}
          defaultValue={state?.fields?.name as string || gateway.name}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="trunkGroup">
        <Form.Label>Группа доступа</Form.Label>
        <Form.Control
          type="text"
          name="trunkGroup"
          size="sm"
          maxLength={5}
          defaultValue={state?.fields?.trunkGroup as string || gateway.trunkGroup}
          disabled={isPending}
        />
      </Form.Group>
      <input
        type="hidden"
        name="updatedAt"
        defaultValue={state?.fields?.updatedAt as string || toIsoString(gateway.updatedAt)}
        disabled={isPending}
      />

      {state?.error && (
        <div className="alert alert-danger p2 small">{state.error}</div>
      )}
    </Form>
  );
}
