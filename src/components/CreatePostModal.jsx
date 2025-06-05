import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreatePostModal({ open, close, getFetch }) {
  const [text, setText] = useState("");

  const handleSubmit = async (getFetch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
          },
          body: JSON.stringify({ text }),
        }
      );

      if (response.ok) {
        getFetch();
        setText("");
        close();
      } else {
        throw new Error("Errore nella pubblicazione");
      }
    } catch (error) {
      console.error(error);
      alert(" Errore durante la pubblicazione.");
    }
  };

  return (
    <Modal
      className="bg-transparent"
      show={open}
      onHide={close}
      centered
      size="lg"
    >
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
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={() => handleSubmit(getFetch)}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePostModal;
