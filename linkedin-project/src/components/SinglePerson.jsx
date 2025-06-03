import { Button } from "react-bootstrap";

const SinglePerson = ({ person }) => {
  return (
    <div className="d-flex">
      <img src={person.image} alt="" className="rounded-cicle" />
      <div>
        <h5>
          {person.name} {person.surname}
        </h5>
        <p>{person.title}</p>
        <Button variant="outline-dark" className="rounded-pill">
          Collegati
        </Button>
      </div>
    </div>
  );
};
export default SinglePerson;
