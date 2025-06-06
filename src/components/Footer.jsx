import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="p-3 fw-semibold text-secondary">
            <p>Informazioni</p>
            <p>Informativa sulla community professionale</p>
            <p>Privacy e condizioni </p>
            <p>Sales Solutions</p>
            <p>Centro sicurezza</p>
          </div>
        </Col>
        <Col>
          <div className="p-3 fw-semibold text-secondary">
            <p>Accessibilità</p>
            <p className="mb-4">Carriera</p>
            <p className="pt-2">Opzioni per gli annunci pubblicitari</p>
            <p>Mobile</p>
          </div>
        </Col>
        <Col>
          <div className="p-3 fw-semibold text-secondary">
            <p>Talent Solutions</p>
            <p className="mb-4 ">Soluzioni di marketing</p>
            <p className="pt-2 mb-4 ">Pubblicità</p>
            <p className="pt-2 ">Piccole imprese</p>
          </div>
        </Col>
        <Col className="text-secondary">
          <div className="p-3 footer-sec">
            <div className="d-flex gap-2">
              <div className="text-dark fs-5">
                <QuestionCircleFill />
              </div>
              <div>
                <p className="m-0 p-0 fs-5 fw-bold">Domande?</p>
                <p className="fs7">Visita il nostro Centro assistenza.</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <div className="text-dark fs-5">
                <GearFill />
              </div>
              <div>
                <p className="m-0 p-0 fs-5 fw-bold">Gestisci il tuo account e la tua privacy</p>
                <p className="fs7">Vai alle impostazioni</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <div className="text-dark fs-5">
                <ShieldShaded />
              </div>
              <div>
                <p className="m-0 p-0 fs-5 fw-bold">Trasparenza sui contenuti consigliati</p>
                <p className="fs7">Scopri di più sui contenuti consigliati.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <p className="m-0 p-0 mb-1 fs7 text-secondary">Seleziona lingua</p>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="border border-2 border-dark">
              <span className="me-5"> italiano (italia) </span>
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
