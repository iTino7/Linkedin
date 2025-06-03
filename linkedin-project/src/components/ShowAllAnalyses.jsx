import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

function ShowAllAnalyses() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h6 className="mb-0 mt-2">
            Mostra tutte le attività <ArrowRight />
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowAllAnalyses;
