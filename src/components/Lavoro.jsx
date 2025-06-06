import { Col, Container, Row } from "react-bootstrap";
import ProfileBlock from "./ProfileBlock";
import ElmSvg from "./svg/ElemSvg";
import AddFriend from "./svg/AddFriend";
import { ListUl } from "react-bootstrap-icons";

const Lavoro = () => {
  // https://strive-benchmark.herokuapp.com/api/jobs
  const jobs = [];

  return (
    <Container>
      <Row>
        <Col xs={3} className="p-0">
          <ProfileBlock />
          {/* <div className="d-flex justify-content-between align-items-center bg-white border shadow-sm rounded-3 p-3 mt-3">
          <div>
            <h6>Visualizza tutte le analisi</h6>
            <h6 className="m-0 p-0">Collegamenti</h6>
            <p className="m-0 p-0 text-secondary fw-medium">Espandi la tua rete</p>
          </div>
          <div>
            <AddFriend />
          </div>
        </div> */}
          <div className=" bg-white border rounded-3 shadow-sm p-3 mt-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <ListUl />
              <h6 className="m-0 p-0">Gruppi</h6>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <ElmSvg />
              <h6 className="m-0 p-0">Le mie offerte di lavoro</h6>
            </div>
          </div>
        </Col>
        <Col>
          {jobs?.map((jobData) => (
            <Job key={jobData._id} data={jobData} h={true} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Lavoro;
