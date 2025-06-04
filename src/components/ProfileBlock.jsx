import { useEffect, useState } from "react";

import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../redux/action";
import { PlusCircleFill } from "react-bootstrap-icons";
import MyModals from "./MyModals";

const ProfileBlock = () => {
  const profile = useSelector((state) => state.profile.user);

  const [big, setBig] = useState(false);

  const bigToggle = () => {
    setBig(!big);
  };

  const dispatch = useDispatch();

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  useEffect(() => {
    dispatch(profileAction(TOKEN, "me"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [profile, setProfile] = useState(null);

  // const TOKEN =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  // useEffect(() => {
  //   fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
  //     headers: {
  //       Authorization: `Bearer ${TOKEN}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Errore nel caricamento profilo");
  //       return res.json();
  //     })
  //     .then((data) => setProfile(data))
  //     .catch((err) => console.error(err));
  // }, []);
  // if (!profile) {
  //   return <div>Caricamento profilo...</div>;
  // }

  return (
    <>
      <Card className="mx-auto mt-4 rounded">
        <div
          className="bg-light"
          style={{ height: "140px", position: "relative" }}
        >
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
            {profile.image ? (
              <img
                src={profile.image}
                alt="profile"
                className="rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <i className="bi bi-person-circle p-1"></i>
            )}
            <div
              className="bg-white border rounded-circle p-1"
              style={{
                position: "absolute",
                right: "-5px",
                bottom: "-5px",
                fontSize: "1rem",
                color: "#0d6efd",
              }}
            >
              <PlusCircleFill
                style={{ cursor: "pointer" }}
                onClick={() => bigToggle()}
              />
            </div>
          </div>
        </div>
        <Card.Body className="pt-5">
          <h5 className="fw-bold d-flex align-items-center gap-2">
            {profile.name} {profile.surname}
            <Button
              variant="outline-primary"
              size="sm"
              className="d-flex align-items-center gap-1"
            >
              <i className="bi bi-patch-check-fill"></i> bedge di verifica
            </Button>
          </h5>
          <p className="mb-1 text-muted">{profile.title}</p>
          <p className="text-muted small">
            {profile.area} · <span className="text-decoration-underline"></span>
          </p>
          <p className="text-primary small">
            <a href="#">collegamenti</a>
          </p>
          <div className="d-flex flex-wrap gap-2 my-3">
            <button className="btn btn-primary rounded-pill fw-bold px-3 py-1">
              Disponibile per
            </button>

            <button className="btn btn-outline-primary rounded-pill px-3 py-1">
              Aggiungi sezione del profilo
            </button>

            <button className="btn btn-outline-primary rounded-pill px-3 py-1">
              Migliora profilo
            </button>

            <button className="btn btn-outline-dark rounded-pill px-3 py-1">
              Risorse
            </button>
          </div>
          <Row className="g-3">
            <Col md={6}>
              <div className="bg-light p-3 rounded position-relative">
                <strong className="d-block">Disponibile a lavorare</strong>
                <span className="text-muted small">
                  Ruoli di {profile.title}
                </span>
                <br />
                <span className="text-primary small text-decoration-underline">
                  Mostra dettagli
                </span>
                <i
                  className="bi bi-pencil position-absolute"
                  style={{
                    top: "12px",
                    right: "12px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    color: "#6c757d",
                  }}
                ></i>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-light p-3 rounded">
                <p className="mb-1 small">
                  <strong>Fai sapere che stai facendo</strong> e attrai
                  candidati qualificati
                </p>
                <span className="text-primary small text-decoration-underline">
                  Inizia
                </span>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <MyModals big={big} bigToggle={bigToggle} />
    </>
  );
};
export default ProfileBlock;
