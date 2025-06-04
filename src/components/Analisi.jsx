import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JustForYou from "./JustForYou";

import AnalysesInfo from "./AnalysesInfo";

function Analisi() {
  return (
    <>
      <Container>
        <Row>
          <Col
            xs={12}
            className="bg-white border rounded mt-3 py-3 d-flex flex-column "
          >
            <h4 className="mb-1">Analisi</h4>
            <JustForYou />
            <AnalysesInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Analisi;
