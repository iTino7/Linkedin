import { Col, Container, Row, Spinner } from "react-bootstrap";
import InfoBlock from "./InfoBlock";
import ProfileBlock from "./ProfileBlock";
import Aside from "./Aside";
import CreatePost from "./CreaPost";
import HomePost from "./HomePost";
import { useEffect, useState } from "react";
import { TypeH1 } from "react-bootstrap-icons";

const Home = () => {
  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(true);

  const postFetch = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
          },
        }
      );

      if (resp.ok) {
        const data = await resp.json();
        setPost(data);
        setloading(true);
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    postFetch();
  }, []);

  console.log(post);

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ProfileBlock />
          <InfoBlock />
        </Col>
        <Col className="p-4" xs={6}>
          <div className="h-100">
            <CreatePost />
            {loading ? (
              <div className="text-center mt-5">
                <Spinner animation="grow" variant="info" />
              </div>
            ) : (
              post
                .slice(-15)
                .map((item, index) => <HomePost key={index} item={item} />)
            )}
          </div>
        </Col>
        <Col xs={3}>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
