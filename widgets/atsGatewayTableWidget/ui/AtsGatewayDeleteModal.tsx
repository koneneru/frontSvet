import { AtsGateway } from '@/entities/atsGateway';
import { AtsGatewayDeleteForm } from '@/features/atsGateway-delete';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';

interface Props {
  gateway: AtsGateway
  show: boolean
  onCancel: () => void
  onDelete: () => void
}

export function AtsGatewayDeleteModal({ gateway, show, onCancel, onDelete }: Props) {
  return (
    <>
      <Modal show={show} onHide={onCancel} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Удаление шлюза</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AtsGatewayDeleteForm id="AtsGatewayDeleteForm" gateway={gateway} onSuccess={onDelete} />
        </Modal.Body>

        <Modal.Footer>
          <div className="js-link me-2" onClick={onCancel}>Отмена</div>
          <Button variant="danger" type="submit" form="AtsGatewayDeleteForm" size="sm">Удалить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
