import { Button, Container, Form } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { expAction, imgAction, SET_IMG } from "../redux/action";
import { useNavigate } from "react-router-dom";
import ChangePhoto from "./ChangePhoto";
import ModalExperiences from "./ModalExperiences";

function MyModals({ big, bigToggle, exp }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(expAction(false));
    bigToggle();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/profile/me`);
  };

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageFetch(e.target.files[0]);
      dispatch(imgAction(e.target.files[0].lastModified));
    }
  };

  const imageFetch = async (file) => {
    try {
      const formData = new FormData();
      formData.append("profile", file);

      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/683eb0b3b10bf00015cf22a4/picture", {
        method: "POST",
        body: formData,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0",
        },
      });

      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {big && (
        <div className="position-fixed z-2 top-0 start-0 frend-big">
          <Container>
            <div className="bg-white rounded-3 mt-5 frend-scroll ">
              <div className="p-4 sticky-top rounded-3 top-0 bg-white  border-bottom text-frend  mb-0 d-flex align-items-center ">
                <h5 className="m-0 p-0"> {exp ? "Aggiungi Esperienza" : "Foto Profilo"} </h5>
                <XLg className="ms-auto" onClick={() => handleClick()} />
              </div>

              <div className=" px-5 ">{exp ? <ModalExperiences /> : <ChangePhoto img={handleImage} submit={handleSubmit} />}</div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default MyModals;
