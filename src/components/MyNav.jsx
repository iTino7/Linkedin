import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { BellFill, BriefcaseFill, ChatDotsFill, HouseDoorFill, PeopleFill, PersonFill, Grid3x3GapFill } from "react-bootstrap-icons"; // Importata Grid3x3GapFill per l'icona "Per le aziende"

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-white py-1 border-bottom sticky-top" style={{ zIndex: "1" }}>
      <Container className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            style={{ width: "34px", height: "34px", marginRight: "8px" }}
          />
          <Form className="d-none d-lg-block">
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Cerca"
                  className="mr-sm-2"
                  style={{
                    width: "280px",
                    backgroundColor: "#eef3f8",
                    border: "none",
                  }}
                />{" "}
              </Col>
            </Row>
          </Form>
        </div>
        <Nav className="mx-auto d-flex flex-row align-items-center text-center">
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 text-decoration-none text-dark">
            <HouseDoorFill size={20} />
            <span style={{ fontSize: "0.75rem" }}>Home</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 text-decoration-none text-dark">
            <PeopleFill size={20} />
            <span style={{ fontSize: "0.75rem" }}>Rete</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 text-decoration-none text-dark">
            <BriefcaseFill size={20} />
            <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 text-decoration-none text-dark">
            <ChatDotsFill size={20} />
            <span style={{ fontSize: "0.75rem" }}>Messaggistica</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 text-decoration-none text-dark">
            <BellFill size={20} />
            <span style={{ fontSize: "0.75rem" }}>Notifiche</span>
          </Nav.Link>
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center text-dark">
                <PersonFill size={20} />
                <span style={{ fontSize: "0.75rem" }}>Tu</span>
              </div>
            }
            id="basic-nav-dropdown"
            className="mx-2"
          >
            <NavDropdown.Item href="#action/3.1">Visualizza profilo</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Impostazioni e privacy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Aiuto</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Lingua</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.5">Gestisci</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Post e attività</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Account per la pubblicità</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.8">Esci</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="d-flex flex-row align-items-center text-center ms-auto">
          <NavDropdown
            title={
              <div className="d-flex flex-column align-items-center text-dark border-start ps-3 me-3">
                <Grid3x3GapFill size={20} />
                <span style={{ fontSize: "0.75rem" }}>Per le aziende</span>
              </div>
            }
            id="company-nav-dropdown"
            className="mx-2"
          >
            <NavDropdown.Item href="#action/4.1">Crea una pagina aziendale</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Pubblicizza</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.3">Trova contatti</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
