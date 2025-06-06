import { Button, Form } from "react-bootstrap";
import { Upload } from "react-bootstrap-icons";

function ChangePhoto({ img, submit, prew }) {
  console.log(prew);
  return (
    <div>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label></Form.Label>
        <div className="d-flex mb-3">
          <Form.Control type="file" onChange={img} />
          <Button variant="dark" type="submit" onClick={submit}>
            <Upload />
          </Button>
        </div>
        <div className="text-center">{prew && <img src={URL.createObjectURL(prew)} alt="" className="img-fluid" width="100%" />}</div>
      </Form.Group>
    </div>
  );
}

export default ChangePhoto;
