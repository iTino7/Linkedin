import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyExperiencesInfo from "./MyExperiencesInfo";

function MyExperiences() {
  const [info, setInfo] = useState([]);

  const infoFetch = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/681479fc1c250400151ab652/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
          },
        }
      );

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

  useEffect(() => {
    infoFetch();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} className="px-0">
          {info.map((item, index) => (
            <MyExperiencesInfo key={index} item={item} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default MyExperiences;
