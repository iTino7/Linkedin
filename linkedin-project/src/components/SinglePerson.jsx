import { Button } from "react-bootstrap";
<<<<<<< HEAD
=======
import AddFriend from "./AddFriend";
>>>>>>> aside-fix
import { useNavigate } from "react-router-dom";

const SinglePerson = ({ person }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${person._id}`);
  };
<<<<<<< HEAD

=======
>>>>>>> aside-fix
  return (
    <div className="d-flex border-bottom mt-3 gap-2">
      <div>
<<<<<<< HEAD
        <img
          src={person.image}
          alt=""
          className="rounded-circle img-fluid"
          width={50}
        />
=======
        <img src={person.image} alt="" className="rounded-circle " width={48} height={48} />
>>>>>>> aside-fix
      </div>
      <div>
        <h5>
          {person.name} {person.surname}
        </h5>
        <p>{person.title}</p>
<<<<<<< HEAD
        <Button
          onClick={handleClick}
          variant="outline-dark"
          className="rounded-pill mb-2"
        >
          Collegati
=======
        <Button onClick={handleClick()} variant="outline-dark" className="rounded-pill mb-2 d-flex align-items-center gap-1 py-0">
          <AddFriend /> <span>Collegati</span>
>>>>>>> aside-fix
        </Button>
      </div>
    </div>
  );
};
export default SinglePerson;
