'use client';

import { getFormData } from '@/shared/dom/form';
import { ChangeEvent, HtmlHTMLAttributes, SubmitEvent, useState } from 'react';
import { GatewayAddFormValues } from '../model/types';
import { mapFormValuesToAddDTO } from '../model/mapper';
import Form from 'react-bootstrap/esm/Form';
import { useCreateAtsGateway } from '@/entities/atsGateway';

interface Props extends HtmlHTMLAttributes<HTMLFormElement> {
  onSuccess: () => void
}

export function AtsGatewayAddForm({ onSuccess, ...props }: Props) {
  const { createAtsGateway } = useCreateAtsGateway();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    interPhone: '',
    trunk: '',
    trunkGroup: '',
  });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      const rawValues = getFormData<GatewayAddFormValues>(e.target);
      const addDto = mapFormValuesToAddDTO(rawValues);

      await createAtsGateway(addDto);
      onSuccess();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Form
      {...props}
      onSubmit={handleSubmit}
    >
      <Form.Group className="input-group-sm mb-3" controlId="name">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          size="sm"
          maxLength={250}
          value={formState.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="input-group-sm mb-3">
        <Form.Label>Номер</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          size="sm"
          maxLength={10}
          value={formState.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="row">
        <Form.Group className="col e-input input-group-sm mb-3">
          <Form.Label>Шлюз</Form.Label>
          <Form.Control
            type="text"
            name="trunk"
            size="sm"
            maxLength={5}
            value={formState.trunk}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col e-input input-group-sm mb-3">
          <Form.Label>Корп. номер</Form.Label>
          <Form.Control
            type="text"
            name="interPhone"
            size="sm"
            maxLength={5}
            value={formState.interPhone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col e-input input-group-sm mb-3">
          <Form.Label>Гр. доступа</Form.Label>
          <Form.Control
            type="text"
            name="trunkGroup"
            size="sm"
            maxLength={5}
            value={formState.trunkGroup}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
    </Form>
  );
}
