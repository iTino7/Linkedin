import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

function MyModals({ big, bigToggle }) {
  const [modal, setModal] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageFetch(e.target.files[0]);
    }
  };

  const imageFetch = async (file) => {
    try {
      const formData = new FormData();
      formData.append("profile", file);

      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/681479fc1c250400151ab652/picture",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
          },
        }
      );

      if (resp.ok) {
        const data = await resp.json();
        setModal(data);
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(modal);

  return (
    <>
      {big && (
        <div className="position-fixed z-1 top-0 start-0 frend-big">
          <Container>
            <div className="bg-white rounded-3 mt-5 frend-scroll ">
              <div className="p-4 sticky-top rounded-3 top-0 bg-white  border-bottom text-frend  mb-0 d-flex align-items-center ">
                <h5 className="m-0 p-0"> Persone che potresti conoscere </h5>
                <XLg className="ms-auto" onClick={() => bigToggle()} />
              </div>

              <div className=" px-5 ">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label></Form.Label>
                  <Form.Control type="file" onChange={handleImage} />
                </Form.Group>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default MyModals;
