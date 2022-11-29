//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Modal({show, onHide}) {
    return (
        <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton onClick={onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Informação do pedido {pedido?.idpedidos}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <p>Nome: {pedido?.cliente?.nome}</p>
             
        </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
     
    );
  }