import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyExperiencesInfo from "./MyExperiencesInfo";

function MyExperiences() {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          className="bg-white border rounded mt-3 py-3 d-flex flex-column "
        >
          <h4 className="mb-1">Esperienze</h4>
          <MyExperiencesInfo />
        </Col>
      </Row>
    </Container>
  );
}

export default MyExperiences;
