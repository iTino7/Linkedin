import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import SinglePerson from "./SinglePerson";
import PenIcon from "./PenIcon";
import { useDispatch, useSelector } from "react-redux";
import { XLg } from "react-bootstrap-icons";
import { notScrollAction } from "../redux/action";

const Aside = () => {
  const [person, setPerson] = useState([]);
  const [big, setBig] = useState(false);
  const idNow = useSelector((state) => state.profile.user._id);
  const dispatch = useDispatch();

  const bigToggle = () => {
    setBig(!big);
    dispatch(notScrollAction());
  };
  const fetchPerson = async () => {
    console.log("fetching...");

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlZWE1NWIxMGJmMDAwMTVjZjIyYjkiLCJpYXQiOjE3NDg5NTM2ODUsImV4cCI6MTc1MDE2MzI4NX0.pemHLRY2bnO3zlDpHj6cgjC0NoNWrGI06p-2tFtn82s",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const person = await response.json();

        setPerson(person);
      } else {
        throw new Error("Errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <Container className="px-0 mt-4">
      <div className="px-4 py-2 bg-white rounded-2 border">
        <div className="position-relative">
          <div className="position-absolute end-0 pen-icon">
            <PenIcon />
          </div>
          <h5>Lingua del profilo</h5>
          <p className="border-bottom pb-3">italiano</p>
        </div>
        <div className="position-relative">
          <div className="position-absolute end-0 pen-icon">
            <PenIcon />
          </div>
          <h5>Profilo pubblico e URL</h5>
          <p>www.linkedin.com/me-6e3491f</p>
        </div>
      </div>
      <div className=" bg-white rounded-2 mt-2 border">
        <div className="px-4 pt-2  rounded-2">
          <h5>Persone che potresti conoscere</h5>
          {person
            ?.filter((person) => person._id !== idNow)
            .slice(0, 5)
            .map((person, i) => (
              <SinglePerson key={person._id} person={person} last={i === 4 && true} />
            ))}
        </div>

        <div className="text-center show p-3 border-top" onClick={() => bigToggle()}>
          Mostra tutto
        </div>
      </div>
      {big && (
        <div className="position-fixed  top-0 start-0 frend-big">
          <Container>
            <div className="bg-white rounded-3 mt-5 frend-scroll ">
              <div className="p-4 sticky-top rounded-3 top-0 bg-white  border-bottom text-frend  mb-0 d-flex align-items-center ">
                <h5 className="m-0 p-0"> Persone che potresti conoscere </h5>
                <XLg className="ms-auto" onClick={() => bigToggle()} />
              </div>

              <div className=" px-5 ">
                {person
                  ?.filter((person) => person._id !== idNow)
                  .slice(0, 15)
                  .map((person, i) => (
                    <SinglePerson key={person._id} person={person} bigToggle={bigToggle} big={big} last={i === 14 && true} />
                  ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </Container>
  );
};
export default Aside;
