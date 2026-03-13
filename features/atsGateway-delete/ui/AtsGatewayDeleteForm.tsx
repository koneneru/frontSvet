import { AtsGateway, useDeleteAtsGateway } from '@/entities/atsGateway';
import { HtmlHTMLAttributes, SubmitEvent } from 'react';
import Form from 'react-bootstrap/esm/Form';

interface Props extends HtmlHTMLAttributes<HTMLFormElement> {
  gateway: AtsGateway
  onSuccess: () => void
}

export function AtsGatewayDeleteForm({ gateway, onSuccess, ...props }: Props) {
  const { deleteAtsGateway } = useDeleteAtsGateway();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      await deleteAtsGateway(String(gateway.id));
      onSuccess();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <Form
      {...props}
      onSubmit={handleSubmit}
    >
      {`Удалить шлюз «${gateway.name}»`}
    </Form>
  );
}
