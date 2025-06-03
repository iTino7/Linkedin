import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfoBlock from "./InfoBlock";
import ProfileBlock from "./ProfileBlock";
import Aside from "./Aside";

function Profile() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <ProfileBlock />
          <InfoBlock />
        </Col>
        <Col xs={12} md={4}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
