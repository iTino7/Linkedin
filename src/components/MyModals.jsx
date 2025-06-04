import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { profileAction } from "../redux/action";

function MyModals({ big, bigToggle }) {
  const [modal, setModal] = useState(null);

  const dispatch = useDispatch();

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageFetch(e.target.files[0]);
      setModal(e.target.files[0]);
    }
  };

  const imageFetch = async (file) => {
    try {
      const formData = new FormData();
      formData.append("profile", file);

      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/683eb0b3b10bf00015cf22a4/picture",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
          },
        }
      );

      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(profileAction(TOKEN, "me"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

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
