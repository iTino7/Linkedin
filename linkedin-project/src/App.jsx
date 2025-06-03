import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={9}>
            <div className="p-3">
              <div className="bg-danger h"></div>
            </div>
          </Col>
          <Col xs={3}>
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
