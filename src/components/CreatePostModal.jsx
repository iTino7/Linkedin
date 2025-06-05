import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreatePostModal({ open, close }) {
  return (
    <Modal show={open} onHide={close} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="postText">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Di cosa vorresti parlare?"
              className="border-0"
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Chiudi
        </Button>
        <Button variant="primary">Pubblica</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePostModal;
