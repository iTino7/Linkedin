import { Button } from "react-bootstrap";
import AddFriend from "./AddFriend";
import { useNavigate } from "react-router-dom";

const SinglePerson = ({ person }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${person._id}`);
  };
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
        <Button onClick={handleClick()} variant="outline-dark" className="rounded-pill mb-2 d-flex align-items-center gap-1 py-0">
          <AddFriend /> <span>Collegati</span>
        </Button>
      </div>
    </div>
  );
};
export default SinglePerson;
