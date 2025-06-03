import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SinglePerson from "./SinglePerson";
import PenIcon from "./PenIcon";


const Aside = () => {
  
  const [person, setPerson] = useState([]);
  const fetchPerson = async () => {
    console.log("fetching...");

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlZWE1NWIxMGJmMDAwMTVjZjIyYjkiLCJpYXQiOjE3NDg5NTM2ODUsImV4cCI6MTc1MDE2MzI4NX0.pemHLRY2bnO3zlDpHj6cgjC0NoNWrGI06p-2tFtn82s",
            "Content-Type": "application/json",
          },
        }
      );
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
    <Container className="p-3">
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
          {person?.slice(0, 5).map((person) => (
            <SinglePerson key={person._id} person={person} />
          ))}
        </div>

        <div className="text-center show p-3 border-top">Mostar tutto</div>
      </div>
    </Container>
  );
};
export default Aside;
