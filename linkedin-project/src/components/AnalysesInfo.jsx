import { Col, Container, Row } from "react-bootstrap";
import { BarChartLineFill, PeopleFill } from "react-bootstrap-icons";
import ShowAllAnalyses from "./ShowAllAnalyses";

function AnalysesInfo() {
  return (
    <>
      <Container fluid className="border-bottom ">
        <Row>
          <Col xs={12} sm={5} md={3} className="d-flex">
            <PeopleFill className="fs-3" />
            <div className="d-flex ms-2 flex-column">
              <p className="mb-0 fw-bold"> 0 visualizzazioni del profilo</p>
              <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
            </div>
          </Col>
          <Col xs={12} sm={5} md={3} className="d-flex">
            <BarChartLineFill className="fs-3" />
            <div className="d-flex ms-2 flex-column">
              <p className="mb-0 fw-bold">0 impressioni del post</p>
              <p className="mb-1">Crea un post per aumentare l'interesse.</p>
              <p className="text-secondary">Ultimi 7 giorni</p>
            </div>
          </Col>
        </Row>
      </Container>
      <ShowAllAnalyses />
    </>
  );
}

export default AnalysesInfo;
