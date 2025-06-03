import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SinglePerson = ({ person }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${person._id}`);
  };

  return (
    <div className="d-flex border-bottom my-3">
      <div>
        <img
          src={person.image}
          alt=""
          className="rounded-circle img-fluid"
          width={50}
        />
      </div>
      <div className="border-botton">
        <h5>
          {person.name} {person.surname}
        </h5>
        <p>{person.title}</p>
        <Button
          onClick={handleClick}
          variant="outline-dark"
          className="rounded-pill mb-2"
        >
          Collegati
        </Button>
      </div>
    </div>
  );
};
export default SinglePerson;
