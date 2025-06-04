import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { idAction } from "../redux/action";

function MyExperiencesInfo({ item }) {
  const dispatch = useDispatch();

  const changeId = () => {
    dispatch(idAction(item._id));
  };

  return (
    <Container
      fluid
      className="bg-white border rounded mt-3 py-3 d-flex flex-column "
    >
      <h4 className="mb-1">Esperienze</h4>
      <Row>
        <Col xs={12} sm={5} md={3} className="d-flex flex-column mt-3 ">
          <p className="mb-0">{item.role}</p>
          <p className="mb-0">{item.company}</p>
          <p className="mb-0">
            {item.startDate.split("-")[0]} - {item.endDate.split("-")[0]}
          </p>
          <p className="mb-2">{item.area}</p>
          <p className="fw-bold">{item.description}</p>
          <Button onClick={() => changeId()}>Modifica</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyExperiencesInfo;
