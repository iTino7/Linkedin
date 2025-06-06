import { Col, Container, Row } from "react-bootstrap";
import ProfileBlock from "./ProfileBlock";
import ElmSvg from "./svg/ElemSvg";
import AddFriend from "./svg/AddFriend";
import { ListUl, PencilSquare } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/action";
import JobSec from "./JobSec";

const Lavoro = () => {
  // https://strive-benchmark.herokuapp.com/api/jobs
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.value);
  const jobs = useSelector((state) => state.job.content.data);
  //   const jobs = useSelector((state) => state.jobs.content.data);

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
            <div className="d-flex align-items-center text-primary gap-2 mb-3 border-top pt-3">
              <PencilSquare />
              <h6 className="m-0 p-0">Pubblica offerta gratuita</h6>
            </div>
          </div>
        </Col>
        <Col>
          <div className="bg-white border rounded-3 shadow-sm  mt-3">
            {jobs?.map((jobData, i) => (
              <JobSec key={jobData._id} data={jobData} last={i === jobs.length - 1} />
            ))}
          </div>
          {jobs?.length < 1 && <h1 className="text-center mt-5 text-primary">NON TROVATO </h1>}
        </Col>
      </Row>
    </Container>
  );
};
export default Lavoro;
