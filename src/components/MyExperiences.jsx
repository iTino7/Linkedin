import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyExperiencesInfo from "./MyExperiencesInfo";
import { useParams } from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";
import MyModals from "./MyModals";
import { useDispatch } from "react-redux";
import { expAction } from "../redux/action";

function MyExperiences({ bigToggle }) {
  const [info, setInfo] = useState([]);
  const params = useParams();
  const idP = params.userId;
  const dispatch = useDispatch();
  const infoFetch = async () => {
    try {
      const resp = await fetch(` https://striveschool-api.herokuapp.com/api/profile/${idP === "me" ? "681479fc1c250400151ab652" : idP}/experiences`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
        },
      });

      if (resp.ok) {
        const data = await resp.json();
        setInfo(data);
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    dispatch(expAction(true));
    bigToggle();
  };
  useEffect(() => {
    infoFetch();
  }, [idP]);

  return (
    <>
      {info.length > 0 && (
        <Container className="bg-white border rounded mt-3 py-3 d-flex flex-column ">
          <Row>
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="mb-1">Esperienze</h4>
              {idP === "me" && <PlusLg onClick={() => handleClick()} />}
            </div>
            <Col xs={12} className="px-0">
              {info.map((item, index) => (
                <MyExperiencesInfo key={index} item={item} bigToggle={bigToggle} last={index === info.length - 1 && true} />
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default MyExperiences;
