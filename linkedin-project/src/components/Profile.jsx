import { Col, Container, Row } from "react-bootstrap";
import InfoBlock from "./InfoBlock";
import ProfileBlock from "./ProfileBlock";
import Aside from "./Aside";
import { useSelector } from "react-redux";

function Profile() {
  const scroll = useSelector((state) => state.scroll.value);

  return (
    <Container className={scroll ? "" : "notScroll"}>
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
