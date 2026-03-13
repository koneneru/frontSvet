import { AtsGatewayAddForm } from '@/features/atsGateway-add';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {
  show: boolean
  onClose: () => void
}

export function AtsGatewayAddModal({ show, onClose }: Props) {
  return (
    <>
      <Modal show={show} onHide={onClose} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление шлюза</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AtsGatewayAddForm id="AtsGatewayAddForm" onSuccess={onClose} />
        </Modal.Body>

        <Modal.Footer>
          <div className="js-link me-2" onClick={onClose}>Отмена</div>
          <Button variant="success" type="submit" form="AtsGatewayAddForm" size="sm">Добавить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
