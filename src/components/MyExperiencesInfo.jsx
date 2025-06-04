import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyExperiencesInfo() {
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

  console.log(info);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={5} md={3} className="d-flex flex-column mt-3 ">
          {info.map((item, index) => (
            <p className="mb-0" key={index}>
              {item.username}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default MyExperiencesInfo;
