import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function CustomForm() {
  return (
    <>
      <Container fluid className="border rounded ">
        <Row>
          <Col className="p-0 d-flex align-items-center m-3">
            <img src="/public/imageBlock.svg" />
            <h5 className="mb-0 ms-2">
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </h5>
          </Col>
        </Row>
        <Col>
          <p>
            Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più
            visualizzazioni del profilo.
          </p>
          <Button variant="transparent" className="border border-black mb-3 rounded-5 d-flex">
            <p className="mb-1 fw-bold">Aggiungi un riepilogo</p>
          </Button>
        </Col>
      </Container>
    </>
  );
}

export default CustomForm;
