import { Col, Container, Row } from "react-bootstrap";
import InfoBlock from "./InfoBlock";
import ProfileBlock from "./ProfileBlock";
import Aside from "./Aside";
import CreatePost from "./CreaPost";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ProfileBlock />
          <InfoBlock />
        </Col>
        <Col className="p-4" xs={6}>
          <div className="bg-white h-100">
            <CreatePost />
          </div>
        </Col>
        <Col xs={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
