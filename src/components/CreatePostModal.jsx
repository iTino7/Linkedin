import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Image, Upload } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { profileAction } from "../redux/action";

function CreatePostModal({ open, close, getFetch }) {
  const [text, setText] = useState("");
  const [prew, setPrew] = useState(null);
  const [idPost, setIdPost] = useState(null);
  const dispatch = useDispatch();
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";
  const imageFetch = async (id, file) => {
    try {
      const formData = new FormData();
      formData.append("profile", file);

      const resp = await fetch(` https://striveschool-api.herokuapp.com/api/posts/${id}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
        },
      });

      if (resp.ok) {
        console.log(yea);
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(profileAction(TOKEN, "me"));
    }
  };
  const handleSubmit = () => {
    textFetch(getFetch);
    // idPost && imageFetch(idPost._id, prew);
  };
  const onFileChange = (e) => {
    setPrew(e.target.files[0]);
  };
  const textFetch = async (getFetch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data._id);
        prew && imageFetch(data._id, prew);
        getFetch();
        setText("");
      } else {
        throw new Error("Errore nella pubblicazione");
      }
    } catch (error) {
      console.error(error);
      alert(" Errore durante la pubblicazione.");
    } finally {
      close();
    }
  };

  return (
    <Modal className="bg-transparent" show={open} onHide={close} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="postText">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Di cosa vorresti parlare?"
              className="border-0"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
          </Form.Group>
        </Form>
        <div className="text-center">{prew && <img src={URL.createObjectURL(prew)} alt="" className="img-fluid" width="100%" />}</div>
      </Modal.Body>
      <Modal.Footer>
        <label htmlFor="updateImg">
          <div className="btn btn-secondary">
            <Image />
          </div>
        </label>
        <Form.Control type="file" className="d-none" name="updateImg" id="updateImg" onChange={onFileChange} />
        <Button variant="primary" onClick={() => handleSubmit()}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePostModal;
