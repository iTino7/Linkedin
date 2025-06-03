import { Button } from "react-bootstrap";

const SinglePerson = ({ person }) => {
  return (
    <div className="d-flex border-bottom my-3">
      <div>
        <img src={person.image} alt="" className="rounded-circle img-fluid" width={50} />
      </div>
      <div className="border-botton">
        <h5>
          {person.name} {person.surname}
        </h5>
        <p>{person.title}</p>
        <Button variant="outline-dark" className="rounded-pill mb-2">
          Collegati
        </Button>
      </div>
    </div>
  );
};
export default SinglePerson;
