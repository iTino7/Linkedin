import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import SinglePerson from "./SinglePerson";


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
      <div className="px-4 py-2 bg-white rounded-2">
        <div>
          <h5>Lingua del profilo</h5>
          <p className="border-bottom pb-3">italiano</p>
        </div>
        <div>
          <h5>Profilo pubblico e URL</h5>
          <p>www.linkedin.com/me-6e3491f</p>
        </div>
      </div>
      <div className="px-4 mt-2 py-2 bg-white rounded-2">
        <h5>Persone che potresti conoscere</h5>
        {person?.slice(2, 10).map((person) => (
          <SinglePerson person={person} />
        ))}
      </div>
    </Container>
  );
};
export default Aside;
