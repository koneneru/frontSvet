'use client';

import { Abonent } from '@/entities/mtsAbonent';
import { FormHTMLAttributes, useActionState, useEffect } from 'react';
import { updateAbonentAction } from '../model/actions';
import { Form } from 'react-bootstrap';
import { DictionarySelect } from '@/shared/dictionaries';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  abonent: Abonent
  id: string
  onSuccess?: () => void
  onPendingChange?: (isPending: boolean) => void
}

export function MtsAbonentEditForm({ abonent, id, onSuccess, onPendingChange, ...props }: Props) {
  const updateWithId = updateAbonentAction.bind(null, String(abonent.id));
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
      <Form.Group className="d-inline-block mb-2 me-3" controlId="emplId">
        <Form.Label>Таб. номер</Form.Label>
        <Form.Control
          type="text"
          size="sm"
          minLength={1}
          maxLength={8}
          name="emplId"
          defaultValue={state?.fields?.emplName as string || abonent.emplId}
          disabled={isPending}
          style={{ width: '80px' }}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="emplName">
        <Form.Label>Имя сотрудника</Form.Label>
        <Form.Control
          type="text"
          size="sm"
          minLength={3}
          maxLength={50}
          name="emplName"
          defaultValue={state?.fields?.emplName as string || abonent.emplName}
          disabled={isPending}
          style={{ width: '300px' }}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="department">
        <Form.Label>Подразделение</Form.Label>
        <DictionarySelect
          type="departments"
          placeholder="Подразделение"
          id="department"
          name="department"
          defaultValue={state?.fields?.emplName as string || abonent.department}
          disabled={isPending}
        />
      </Form.Group>
      <Form.Group className="d-inline-block mb-2 me-3" controlId="state">
        <Form.Label>Статус</Form.Label>
        <Form.Control
          as="select"
          size="sm"
          name="state"
          defaultValue={state?.fields?.emplName as string || abonent.state ? 'active' : 'disabled'}
          disabled={isPending}
        >
          <option value="active">Активен</option>
          <option value="disabled">Отключен</option>
        </Form.Control>
      </Form.Group>
      <Form.Control type="hidden" name="updatedAt" defaultValue={abonent.updatedAt.toISOString()} />

      {state?.error && (
        <div className="alert alert-danger p2 small">{state.error}</div>
      )}
    </Form>
  );
}
