import { Col, Container, Row } from "react-bootstrap";

import DeletePost from "./deletePost";

function HomePost({ item, getFetch }) {
  const myId = "683eb0b3b10bf00015cf22a4";

  const deleteFetch = async (getFetch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + item._id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
          },
        }
      );

      if (resp.ok) {
        getFetch();
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-2 border mb-3 shadow-sm rounded">
      <Container>
        <Row className="d-flex flex-column">
          <h1 className="fs-5 mt-2 d-flex justify-content-between">
            {item.user.title}

            {item.user._id === myId && (
              <div onClick={() => deleteFetch(getFetch)}>
                <DeletePost />
              </div>
            )}
          </h1>
          <Col className="d-flex align-items-center">
            <img
              src={item.user.image}
              width="65px"
              height="65px"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
              alt=""
            />
            <p className="mb-0 ms-2">{item.user.name}</p>
          </Col>
          <Col>
            <p className="mt-3 mb-2">{item.text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePost;
