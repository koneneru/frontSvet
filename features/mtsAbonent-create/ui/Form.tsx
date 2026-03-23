'use client';

import { FormHTMLAttributes, useActionState, useEffect } from 'react';
import { createAbonentAction } from '../model/actions';
import { Form } from 'react-bootstrap';
import { DictionarySelect } from '@/shared/dictionaries';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  formId: string
  onSuccess: () => void
  onPendingChange: (isPending: boolean) => void
}

export function AbonentCreateForm({
  formId,
  onSuccess,
  onPendingChange,
  ...props
}: Props) {
  const [state, formAction, isPending] = useActionState(createAbonentAction, null);

  useEffect(() => {
    onPendingChange?.(isPending);
  }, [isPending, onPendingChange]);

  useEffect(() => {
    if (state?.success) {
      onSuccess?.();
    }
  }, [state, onSuccess]);

  return (
    <Form
      {...props}
      id={formId}
      action={formAction}
    >
      <Form.Group className="mb-3" controlId="emplId">
        <Form.Label>Таб. номер</Form.Label>
        <Form.Control
          type="text"
          name="emplId"
          size="sm"
          minLength={1}
          maxLength={8}
          defaultValue={state?.fields?.emplId as string || ''}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="emplName">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="emplName"
          size="sm"
          minLength={3}
          maxLength={50}
          defaultValue={state?.fields?.emplName as string || ''}
          disabled={isPending}
        />
      </Form.Group>
      <div className="row mb-3">
        <Form.Group className="col" controlId="department">
          <Form.Label>Подразделение</Form.Label>
          <DictionarySelect
            type="departments"
            placeholder=""
            name="department"
            defaultValue={state?.fields?.department as string || ''}
            disabled={isPending}
          />
        </Form.Group>
        <Form.Group className="col mb-3" controlId="state">
          <Form.Label>Статус</Form.Label>
          <Form.Control
            as="select"
            name="state"
            size="sm"
            defaultValue={state?.fields?.state as string || ''}
            disabled={isPending}
          >
            <option value="active">Активен</option>
            <option value="disabled">Отключен</option>
          </Form.Control>
        </Form.Group>
      </div>

      {state?.error && (
        <div className="alert alert-danger p2 small">{state.error}</div>
      )}
    </Form>
  );
}
