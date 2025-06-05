import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

function CreatePost() {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Form.Control
          as="textarea"
          placeholder="Crea un post"
          rows={2}
          className="rounded-pill px-3 py-2"
          style={{ resize: "none" }}
        />

        <Row className="mt-3 text-center">
          <Col>
            <Button variant="light">
              <i className="bi bi-camera-video me-2" style={{ color: "green" }}></i>
              Video
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <i className="bi bi-image me-2" style={{ color: "blue" }}></i>
              Foto
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <i class="bi bi-newspaper me-2" style={{ color: "orange" }}></i>
              Scrivi un articolo
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CreatePost;
