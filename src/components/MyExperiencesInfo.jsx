import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expAction, idAction } from "../redux/action";
import PenIcon from "./PenIcon";
import { useParams } from "react-router-dom";

function MyExperiencesInfo({ item, bigToggle, last }) {
  const dispatch = useDispatch();
  const params = useParams();
  const changeId = () => {
    dispatch(idAction(item._id));
  };
  const handleClick = () => {
    dispatch(expAction(true));
    changeId();
    bigToggle();
  };
  console.log(item);
  return (
    <Container fluid>
      <Row className={!last && "border-bottom "}>
        <Col xs={12} sm={5} md={3} className="w-100 mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <div>
                <img src={item.image} alt="" width={70} />
              </div>
              <div>
                <p className="mb-0 ">{item.role}</p>
                <p className="mb-0">{item.company}</p>
                <p className="mb-0">
                  {item.startDate?.split("-")[0]} - {item.endDate ? item.endDate.split("-")[0] : "Presente"}
                </p>
                <p className="mb-2">{item.area}</p>
                <p className="fw-bold">{item.description}</p>
              </div>
            </div>
            {params.userId === "me" && (
              <PenIcon
                onClick={() => {
                  handleClick();
                }}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyExperiencesInfo;
