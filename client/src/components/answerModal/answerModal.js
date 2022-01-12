import { Modal, Button } from "react-bootstrap";

function AnswerModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>{props.choice}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.choice === 'Correct!' ? "Genius!" : "Sorry!"}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default AnswerModal;