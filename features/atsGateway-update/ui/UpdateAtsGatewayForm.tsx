import { AtsGateway } from '@/entities/atsGateway';
import { useUpdateAtsGateway } from '@/entities/atsGateway/hooks/useUpdateGateway';
import { getFormData } from '@/shared/dom/form';
import { ChangeEvent, HtmlHTMLAttributes, SubmitEvent, useState } from 'react';
import { GatewayEditFormValues } from '../model/types';
import { mapFormValuesToUpdateDTO } from '../model/mapper';
import Form from 'react-bootstrap/esm/Form';

interface Props extends HtmlHTMLAttributes<HTMLFormElement> {
  gateway: AtsGateway
  onClose: () => void
}

export function AtsGatewayUpdateForm({ gateway, onClose, ...props }: Props) {
  const { updateAtsGateway } = useUpdateAtsGateway();
  const [formState, setFormState] = useState({
    name: gateway.name,
    phone: gateway.phone,
    interPhone: gateway.interPhone,
    trunk: gateway.trunk,
    trunkGroup: gateway.trunkGroup,
  });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      const rawValues = getFormData<GatewayEditFormValues>(e.target);
      const updateDto = mapFormValuesToUpdateDTO(rawValues);
      updateDto.updatedAt = gateway.updatedAt;

      await updateAtsGateway(String(gateway.id), updateDto);
      onClose();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Form
      {...props}
      onSubmit={handleSubmit}
    >
      <Form.Group className="d-inline-block mb-2 me-3" controlId="trunk">
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
      <Form.Group className="d-inline-block mb-2 me-3" controlId="interPhone">
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
      <Form.Group className="d-inline-block mb-2 me-3" controlId="phone">
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
      <Form.Group className="d-inline-block mb-2 me-3" controlId="name">
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
      <Form.Group className="d-inline-block mb-2 me-3" controlId="trunkGroup">
        <Form.Label>Группа доступа</Form.Label>
        <Form.Control
          type="text"
          name="trunkGroup"
          size="sm"
          maxLength={5}
          value={formState.trunkGroup}
          onChange={handleChange}
        />
      </Form.Group>
      {/* <input type="hidden" name="UpdatedAt"> */}
      {/* <div></div>
      <div className="d-flex justify-content-end align-items-center gap-3 pt-2">
        <div className="js-link cancel" onClick={onClose}><small>Отмена</small></div>
        <Button variant="success" type="submit" size="sm" disabled={loading}>
          {loading ? 'Сохранение...' : 'Сохранить'}
        </Button>
      </div> */}
    </Form>
  );
}
