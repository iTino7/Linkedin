import { Col, Container, Row, Spinner } from "react-bootstrap";
import ProfileBlock from "./ProfileBlock";
import CreatePost from "./CreaPost";
import HomePost from "./HomePost";
import { useEffect, useState } from "react";
import AddFriend from "./svg/AddFriend";
import ElmSvg from "./svg/ElemSvg";
import GruppiSvg from "./svg/GruppiSvg";
import NewsSvg from "./svg/NewsSvg";
import EventiSvg from "./svg/EventiSvg";
import { ChevronCompactDown, EyeSlashFill } from "react-bootstrap-icons";

const Home = () => {
  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(true);

  const postFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
        },
      });

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
          <div className="d-flex justify-content-between align-items-center bg-white border shadow-sm rounded-3 p-3 mt-3">
            <div>
              <h6>Visualizza tutte le analisi</h6>
              <h6 className="m-0 p-0">Collegamenti</h6>
              <p className="m-0 p-0 text-secondary fw-medium">Espandi la tua rete</p>
            </div>
            <div>
              <AddFriend />
            </div>
          </div>
          <div className=" bg-white border rounded-3 shadow-sm p-3 mt-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <ElmSvg />
              <h6 className="m-0 p-0">Elementi salvati</h6>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <GruppiSvg />
              <h6 className="m-0 p-0">Gruppi</h6>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <NewsSvg />
              <h6 className="m-0 p-0">Newsletter</h6>
            </div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <EventiSvg />
              <h6 className="m-0 p-0">Eventi</h6>
            </div>
          </div>
        </Col>
        <Col className="p-4" xs={6}>
          <div className="h-100">
            <CreatePost getFetch={postFetch} />
            {loading ? (
              <div className="text-center mt-5">
                <Spinner animation="grow" variant="info" />
              </div>
            ) : (
              post
                .slice(-15)
                .reverse()
                .map((item, index) => <HomePost getFetch={postFetch} key={index} item={item} />)
            )}
          </div>
        </Col>
        <Col xs={3}>
          <div className=" bg-white border rounded-3 shadow-sm p-3 mt-3">
            <h5 className="fw-semibold">LinkedIn Notizie</h5>
            <h6 className="text-secondary fw-semibold">Storie Principali</h6>
            <p className="p-0 m-0 fw-semibold"> È la Giornata mondiale dell'ambiente</p>
            <p className="text-secondary fs7 m-0 p-0 mb-2">6 ore fa • 315 lettori</p>
            <p className="p-0 m-0 fw-semibold"> Voci dal pride month</p>
            <p className="text-secondary fs7 m-0 p-0 mb-2">2 giorni fa • 282 lettori</p>
            <p className="p-0 m-0 fw-semibold"> Revolut si fa i suoi Atm</p>
            <p className="text-secondary fs7 m-0 p-0 mb-2">5 ore fa • 139 lettori</p>
            <p className="p-0 m-0 fw-semibold"> Prada investe in Rino Mastrotto</p>
            <p className="text-secondary fs7 m-0 p-0 mb-2">3 ore fa • 104 lettori</p>
            <p className="p-0 m-0 fw-semibold"> Chef Express incorpora Roadhouse</p>
            <p className="text-secondary fs7 m-0 p-0 mb-2">4 ore fa</p>
            <p className="p-0 m-0 fw-semibold mb-4">
              Mostra altro <ChevronCompactDown />
            </p>
            <h6 className="text-secondary fw-semibold">Storie Principali</h6>
            <div className="d-flex align-items-center gap-2">
              <div>
                <img src="https://static.licdn.com/aero-v1/sc/h/3nbta1n5ale6ewdbbwf38ki6d" alt="" width={64} />
              </div>
              <div>
                {" "}
                <p className="p-0 m-0 fw-semibold"> Zip - un rompicapo veloce</p>
                <p className="p-0 m-0 fs7 ">Risolvilo in 60 secondi o meno!</p>
                <div className="d-flex align-items-center gap-1">
                  <span className="text-secondary">
                    <EyeSlashFill />
                  </span>
                  <p className="p-0 m-0 fs7">Solo tu puoi vedere il punteggio</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
