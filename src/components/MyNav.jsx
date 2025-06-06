import { Button, Col, Container, Dropdown, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Grid3x3GapFill } from "react-bootstrap-icons"; // Importata Grid3x3GapFill per l'icona "Per le aziende"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HouseLink from "./svg/HouseLink";
import ReteSvg from "./svg/ReteSvg";
import LavoroSvg from "./svg/LavoroSvg";
import MessSvg from "./svg/MessSvg";
import NotySvg from "./svg/NotySvg";
import AziendeSvg from "./svg/AziendeSvg";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction, profileAction, queryAction } from "../redux/action";
import { useEffect, useState } from "react";
import HouseActiveSvg from "./svg/HouseActiveSvg";
import LavoroActiveSvg from "./svg/LavoroActiveSvg";

function MyNav() {
  const [down, setDown] = useState(false);
  const dispatch = useDispatch();
  const me = useSelector((state) => state.me.me);
  const location = useLocation();
  const [query, setQuery] = useState("");
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.user);
  const params = useParams();
  // const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(queryAction(query));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getJobsAction(baseEndpoint + query + "&limit=15"));
    setQuery("");
  };

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  useEffect(() => {
    dispatch(profileAction(TOKEN, "me"));
    dispatch(getJobsAction(baseEndpoint + "" + "&limit=10"));
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
          <Form className="d-none d-lg-block" onSubmit={handleSubmit}>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Cerca"
                  className="mr-sm-2"
                  value={query}
                  onFocus={() => navigate("/jobs")}
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
            {location.pathname === "/jobs" ? <LavoroActiveSvg /> : <LavoroSvg />}

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
      {location.pathname !== "/" && location.pathname !== "/jobs" && (
        <div className={` w-100 h-100 position-absolute bg-white z-n1 slide-down shadow-sm border-bottom  ${down && "expandable"}`}>
          <Container>
            <div>
              <div className="d-flex align-items-center px-3 gap-2 mt-2">
                <div>
                  <img src={profile?.image} alt="" width={32} height={32} className="rounded-circle" />
                </div>
                <div>
                  <h6 className="mb-0">
                    {profile?.name} {profile?.surname}
                  </h6>
                  <p className="mb-0  p-0  fs7">{profile?.title}</p>
                </div>
                <button className="btn btn-outline-dark  border border-dark rounded-pill px-3 py-1 ms-auto">
                  {" "}
                  {me?.image === profile?.image ? "Risorse" : "Altro"}
                </button>
                <button className="btn btn-outline-primary   border border-primary rounded-pill px-3 py-1">
                  {me?.image === profile?.image ? "Aggiungi sezione del profilo" : "Messaggio"}
                </button>
                <button className="btn btn-primary  rounded-pill fw-bold px-3 py-1 ">
                  {me?.image === profile?.image ? (
                    "Disponibile per"
                  ) : (
                    <div className="d-flex align-items-center add-coll gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="41.000000pt"
                        height="24.000000pt"
                        viewBox="0 0 41.000000 53.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                          <path d="M150 390 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34 60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z"></path>
                          <path d="M310 290 c0 -13 -7 -20 -20 -20 -11 0 -20 -4 -20 -10 0 -5 9 -10 20 -10 13 0 20 -7 20 -20 0 -11 5 -20 10 -20 6 0 10 9 10 20 0 13 7 20 20 20 11 0 20 5 20 10 0 6 -9 10 -20 10 -13 0 -20 7 -20 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"></path>
                          <path d="M146 254 c-11 -10 -16 -34 -16 -70 l0 -54 60 0 60 0 0 54 c0 63 -16 86 -60 86 -16 0 -36 -7 -44 -16z"></path>
                        </g>
                      </svg>
                      <span>Collegati</span>
                    </div>
                  )}
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </div>
      )}
      <div className="w-100 h-100 position-absolute bg-white z-n1  border-bottom "></div>
    </Navbar>
  );
}

export default MyNav;
