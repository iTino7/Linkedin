import { Button, Col, Container, Dropdown, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Grid3x3GapFill } from "react-bootstrap-icons"; // Importata Grid3x3GapFill per l'icona "Per le aziende"
import { Link, useLocation, useParams } from "react-router-dom";
import HouseLink from "./svg/HouseLink";
import ReteSvg from "./svg/ReteSvg";
import LavoroSvg from "./svg/LavoroSvg";
import MessSvg from "./svg/MessSvg";
import NotySvg from "./svg/NotySvg";
import AziendeSvg from "./svg/AziendeSvg";
import { useDispatch, useSelector } from "react-redux";
import { profileAction, queryAction } from "../redux/action";
import { useEffect, useState } from "react";
import HouseActiveSvg from "./svg/HouseActiveSvg";

function MyNav() {
  const [down, setDown] = useState(false);
  const dispatch = useDispatch();
  const me = useSelector((state) => state.me.me);
  const location = useLocation();
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(queryAction(query));
  };

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  useEffect(() => {
    dispatch(profileAction(TOKEN, "me"));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setDown(window.pageYOffset > 350));
    }
  }, []);

  return (
    <Navbar expand="lg" className="bg-white py-1 border-bottom sticky-top " style={{ zIndex: "1" }}>
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
                  value={query}
                  onChange={handleChange}
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
        <Nav className="ms-auto d-flex flex-row align-items-center text-center gap-2">
          <Link
            to={"/"}
            className={`nav-link d-flex flex-column align-items-center mx-2 py-0 text-decoration-none text-dark  ${location.pathname === "/" && "active-nav"}`}
          >
            {location.pathname === "/" ? <HouseActiveSvg /> : <HouseLink />}

            <span style={{ fontSize: "0.75rem" }}>Home</span>
          </Link>

          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 py-0 text-decoration-none text-dark">
            <ReteSvg />
            <span style={{ fontSize: "0.75rem" }}>Rete</span>
          </Nav.Link>
          <Link
            to={"/jobs"}
            className={`nav-link d-flex flex-column align-items-center mx-2 py-0 text-decoration-none text-dark  ${
              location.pathname === "/jobs" && "active-nav"
            }`}
          >
            {location.pathname === "/jobs" ? <HouseActiveSvg /> : <LavoroSvg />}

            <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
          </Link>
          {/* <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 py-0 text-decoration-none text-dark">
            <LavoroSvg />
            <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
          </Nav.Link> */}
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 py-0 text-decoration-none text-dark">
            <MessSvg />
            <span style={{ fontSize: "0.75rem" }}>Messaggistica</span>
          </Nav.Link>
          <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 py-0 text-decoration-none text-dark">
            <NotySvg />
            <span style={{ fontSize: "0.75rem" }}>Notifiche</span>
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <div>
                <img src={me?.image} width={24} height={24} className="rounded-circle mb-n" />
              </div>
              <span className="fs7"> Tu</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="drop-tu">
              <div className="border-bottom pb-2">
                <div className="d-flex px-3 gap-2">
                  <div>
                    <img src={me?.image} alt="" width={56} height={56} className="rounded-circle" />
                  </div>
                  <div>
                    <h5 className="mb-0">
                      {me?.name} {me?.surname}
                    </h5>
                    <p className="mb-0  p-0  fs7">{me?.title}</p>
                    <p className="mb-0 p-0  fs7">{me?.area}</p>
                  </div>
                </div>
                <Link to={"/profile/me"} className=" dropdown-item">
                  <div className="btn btn-outline-primary rounded-pill">Visualizza profilo</div>
                </Link>
              </div>
              <h5 className="px-3 mt-2">Account</h5>
              <NavDropdown.Item>Impostazioni e privacy</NavDropdown.Item>
              <NavDropdown.Item>Aiuto</NavDropdown.Item>
              <NavDropdown.Item>Lingua</NavDropdown.Item>
              <NavDropdown.Divider />
              <h5 className="px-3">Gestisci</h5>
              <NavDropdown.Item>Post e attività</NavDropdown.Item>
              <NavDropdown.Item>Account per la pubblicità</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Esci</NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav className="d-flex flex-row align-items-center text-center me-auto ">
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-azienda" className="border-start">
              <div className="mb-n">
                <AziendeSvg />
              </div>
              <span className="fs7"> Per le aziende</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <NavDropdown.Item>Crea una pagina aziendale</NavDropdown.Item>
              <NavDropdown.Item>Pubblicizza</NavDropdown.Item>
              <NavDropdown.Item>Trova contatti</NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
      {location.pathname !== "/" && <div className={` w-100 h-100 position-absolute bg-danger z-n1 slide-down ${down && "expandable"}`}></div>}{" "}
      <div className="w-100 h-100 position-absolute bg-white z-n1 "></div>
    </Navbar>
  );
}

export default MyNav;
