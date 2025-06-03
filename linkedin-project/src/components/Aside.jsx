import { Button, Container, Row } from "react-bootstrap";

const Aside = () => {
  return (
    <Container className="p-3">
      <div className="px-4 py-2 bg-white rounded-2">
        <div>
          <h5>Lingua del profilo</h5>
          <p className="border-bottom pb-3">italiano</p>
        </div>
        <div>
          <h5>Profilo pubblico e URL</h5>
          <p>www.linkedin.com/me-6e3491f</p>
        </div>
      </div>
      <div className="px-4 mt-2 py-2 bg-white rounded-2">
        <h5>Persone che potresti conoscere</h5>
      </div>
    </Container>
  );
};
export default Aside;
