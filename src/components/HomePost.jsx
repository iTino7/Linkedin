import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function HomePost({ item }) {
  return (
    <div className="bg-white p-2 border mb-3 shadow-sm rounded">
      <Container>
        <Row className="d-flex flex-column">
          <h1 className="fs-5 mt-2">{item.user.title}</h1>
          <Col className="d-flex align-items-center">
            <img
              src={item.user.image}
              width="65px"
              height="65px"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
              alt=""
            />
            <p className="mb-0 ms-2">{item.user.name}</p>
          </Col>
          <Col>
            <p className="mt-3 mb-2">{item.text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePost;
