import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import InfoBlock from "./InfoBlock";
import Aside from "./Aside";
import { useDispatch, useSelector } from "react-redux";
import { notScrollAction, profileAction } from "../redux/action";
import { PlusCircleFill } from "react-bootstrap-icons";
import MyModals from "./MyModals";
import AddFriend from "./svg/AddFriend";
import Footer from "./Footer";
import PenIcon from "./svg/PenIcon";

function ProfileDetails() {
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.user);
  const scroll = useSelector((state) => state.scroll.value);
  const exp = useSelector((state) => state.exp.value);
  const [big, setBig] = useState(false);
  const params = useParams();

  // const rand = parseInt(params.userId.split("")[2]);

  const bigToggle = () => {
    setBig(!big);
    dispatch(notScrollAction());
  };

  useEffect(() => {
    dispatch(profileAction(TOKEN, params.userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.userId]);

  return (
    <>
      <Container className={scroll ? "" : "notScroll"}>
        <Row>
          <Col xs={12} md={8}>
            <Card className="mx-auto mt-4 rounded overflow-hidden">
              <div className="bg-light" style={{ height: "140px", position: "relative" }}>
                <div className="overflow-hidden" style={{ height: "inherit" }}>
                  <img
                    src={
                      params.userId === "me"
                        ? `https://healthyresumes.com/wp-content/uploads/2022/10/LinkedIn-Background-Photo-20-1.webp`
                        : `https://resumekraft.com/wp-content/uploads/2021/08/linkedin-background-photo-default-1024x333.jpg`
                    }
                    alt=""
                    className="img-fluid"
                    width="100%"
                  />
                </div>
                <div
                  className="rounded-circle bg-secondary border border-white"
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    bottom: "-50px",
                    left: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "white",
                  }}
                >
                  <img
                    src={profile.image}
                    alt="profile"
                    className="rounded-circle"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {params.userId === "me" && (
                    <div
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        right: "-6px",
                        bottom: "12px",
                        fontSize: "1rem",
                        color: "#0d6efd",
                      }}
                    >
                      <div className="position-relative">
                        <div
                          className="rounded-circle position-absolute bg-light"
                          style={{ boxShadow: "0px 0px 0 1px gray", width: "25px", height: "25px", top: "2px", right: "-2px" }}
                        ></div>
                        <div className="position-relative text-primary ">
                          <PlusCircleFill style={{ cursor: "pointer" }} onClick={() => bigToggle()} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Card.Body className="pt-5">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  {profile.name} {profile.surname}
                  <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
                    <i className="bi bi-patch-check-fill"></i> bedge di verifica
                  </Button>
                </h5>
                <p className="mb-1 text-muted">{profile.title}</p>
                <p className="text-muted small">
                  {profile.area} ·<span className="text-decoration-underline"></span>
                </p>
                <p className="text-primary small">
                  <a href="#">collegamenti</a>
                </p>
                <div className="d-flex flex-wrap gap-2 my-3">
                  <button className="btn btn-primary rounded-pill fw-bold px-3 py-1">
                    {params.userId === "me" ? (
                      "Disponibile per"
                    ) : (
                      <div className="d-flex align-items-center add-coll gap-1">
                        <AddFriend />
                        <span>Collegati</span>
                      </div>
                    )}
                  </button>

                  {params.userId === "me" && <button className="btn btn-outline-primary rounded-pill px-3 py-1">Aggiungi sezione del profilo</button>}
                  <button className="btn btn-outline-primary rounded-pill px-3 py-1">{params.userId === "me" ? "Migliora profilo" : "Messaggio"}</button>

                  <button className="btn btn-outline-dark rounded-pill px-3 py-1"> {params.userId === "me" ? "Risorse" : "Altro"}</button>
                </div>
                <Row className="g-3">
                  <Col md={6}>
                    <div className="bg-light p-3 rounded position-relative">
                      <strong className="d-block">Disponibile a lavorare</strong>
                      <span className="text-muted small">
                        Ruoli di
                        {profile.title}
                      </span>
                      <br />
                      <span className="text-primary small text-decoration-underline">Mostra dettagli</span>
                      <div
                        className=" position-absolute"
                        style={{
                          top: "12px",
                          right: "12px",
                          cursor: "pointer",
                          fontSize: "1rem",
                          color: "#6c757d",
                        }}
                      >
                        <PenIcon />{" "}
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-light p-3 rounded">
                      <p className="mb-1 small">
                        <strong>Fai sapere che stai facendo</strong> e attrai candidati qualificati
                      </p>
                      <span className="text-primary small text-decoration-underline">Inizia</span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <MyModals big={big} bigToggle={bigToggle} exp={exp} />
            <InfoBlock bigToggle={bigToggle} />
          </Col>
          <Col xs={12} md={4}>
            <Aside />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default ProfileDetails;
