import { Col, Container, Row, Spinner } from "react-bootstrap";

import DeletePost from "./deletePost";
import PenIcon from "./svg/PenIcon";
import { useState } from "react";
import PutModal from "./PutModal";
import CommentArea from "./CommentArea";

function HomePost({ item, getFetch }) {
  const myId = "683eb0b3b10bf00015cf22a4";

  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const close = () => setOpen(false);
  const openModal = () => setOpen(true);

  const deleteFetch = async (getFetch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + item._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
        },
      });

      if (resp.ok) {
        getFetch();
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="bg-white  border mb-3 shadow-sm rounded position-relative overflow-hidden">
      <Container>
        <Row className="d-flex flex-column">
          {load && <Spinner animation="grow" variant="light" className="position-absolute top-50 start-50 loading-del" />}
          <div className=" fs-5 mt-2 d-flex justify-content-between">
            {item.user.title}

            {item.user._id === myId && (
              <>
                <div className="d-flex gap-2 align-items-top">
                  <div onClick={() => openModal()}>
                    <PenIcon />
                  </div>
                  <div
                    onClick={() => {
                      setLoad(true);
                      deleteFetch(getFetch);
                    }}
                  >
                    <DeletePost />
                  </div>
                </div>
              </>
            )}
          </div>
          <Col className="d-flex align-items-center">
            <img src={item.user.image} width="65px" height="65px" className="rounded-circle" style={{ objectFit: "cover" }} alt="" />
            <p className="mb-0 ms-2">
              {item.user.name} {item.user.surname}
            </p>
          </Col>
          <Col>
            <p className="mt-3 mb-2">{item.text}</p>
          </Col>
          {item.image && (
            <Col className="px-0">
              <img src={item.image} className="img-fluid" alt="" width="100% " />
            </Col>
          )}
        </Row>

        <CommentArea asin={item._id} />
      </Container>
      <PutModal open={open} close={close} item={item} getFetch={getFetch} />
    </div>
  );
}

export default HomePost;
