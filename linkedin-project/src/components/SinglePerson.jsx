import { Button } from "react-bootstrap";

const SinglePerson = ({ person }) => {
  return (
    <div className="d-flex border-bottom mt-3 gap-2">
      <div>
        <img src={person.image} alt="" className="rounded-circle " width={48} height={48} />
      </div>
      <div>
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
