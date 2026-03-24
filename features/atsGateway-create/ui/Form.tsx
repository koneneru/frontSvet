'use client';

import { FormHTMLAttributes, useActionState, useEffect } from 'react';
import Form from 'react-bootstrap/esm/Form';
import { createGatewayAction } from '../model/action';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  id: string
  onSuccess: () => void
  onPendingChange: (isPending: boolean) => void
}

export function GatewayCreateForm({
  id,
  onSuccess,
  onPendingChange,
  ...props
}: Props) {
  const [state, formAction, isPending] = useActionState(createGatewayAction, null);

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
      <Form.Group className="input-group-sm mb-3" controlId="name">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          size="sm"
          maxLength={250}
          defaultValue={state?.fields?.name as string || ''}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="input-group-sm mb-3" controlId="phone">
        <Form.Label>Номер</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          size="sm"
          maxLength={10}
          defaultValue={state?.fields?.phone as string || ''}
          disabled={isPending}
        />
      </Form.Group>
      <div className="row">
        <Form.Group className="col input-group-sm mb-3" controlId="trunk">
          <Form.Label>Шлюз</Form.Label>
          <Form.Control
            type="text"
            name="trunk"
            size="sm"
            maxLength={5}
            defaultValue={state?.fields?.trunk as string || ''}
            disabled={isPending}
          />
        </Form.Group>
        <Form.Group className="col input-group-sm mb-3" controlId="interPhone">
          <Form.Label>Корп. номер</Form.Label>
          <Form.Control
            type="text"
            name="interPhone"
            size="sm"
            maxLength={5}
            defaultValue={state?.fields?.interPhone as string || ''}
            disabled={isPending}
          />
        </Form.Group>
        <Form.Group className="col input-group-sm mb-3" controlId="trunkGroup">
          <Form.Label>Гр. доступа</Form.Label>
          <Form.Control
            type="text"
            name="trunkGroup"
            size="sm"
            maxLength={5}
            defaultValue={state?.fields?.trunkGroup as string || ''}
            disabled={isPending}
          />
        </Form.Group>
      </div>
    </Form>
  );
}
