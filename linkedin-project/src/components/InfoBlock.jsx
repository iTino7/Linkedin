import { Col, Container, Row } from "react-bootstrap";
import CustomForm from "./CustomForm";
import Analisi from "./Analisi";
import JustForYou from "./JustForYou";

function InfoBlock() {
  return (
    <>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={10}
            className="bg-white border rounded mt-5 py-3 d-flex flex-column "
          >
            <h4 className="my-2">Consigliato per te</h4>
            <JustForYou />
            <CustomForm />
          </Col>
        </Row>
      </Container>
      <Analisi />
    </>
  );
}

export default InfoBlock;
