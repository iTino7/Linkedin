import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Card, Form, Button, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import CreatePostModal from "./CreatePostModal";

function CreatePost({ getFetch }) {
  const profileImg = useSelector((state) => state.profile.user.image);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Row className="align-items-start mb-3">
            <Col xs="auto">
              <Image
                src={profileImg}
                roundedCircle
                width={65}
                height={65}
                alt="Profilo"
              />
            </Col>

            <Col>
              <Form.Control
                as="textarea"
                placeholder="Crea un post"
                rows={2}
                className="rounded-pill px-3 py-2"
                style={{ resize: "none", cursor: "pointer" }}
                readOnly
                onClick={openModal}
              />
            </Col>
          </Row>

          <Row className="text-center me-3">
            <Col>
              <Button variant="light">
                <i
                  className="bi bi-camera-video me-2"
                  style={{ color: "green" }}
                ></i>
                Video
              </Button>
            </Col>
            <Col>
              <Button variant="light">
                <i className="bi bi-image me-2" style={{ color: "blue" }}></i>
                Foto
              </Button>
            </Col>
            <Col>
              <Button variant="light">
                <i
                  className="bi bi-newspaper me-2"
                  style={{ color: "orange" }}
                ></i>
                Scrivi un articolo
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <CreatePostModal getFetch={getFetch} open={open} close={close} />
    </>
  );
}

export default CreatePost;
