import React from "react";
import { Button, Form } from "react-bootstrap";

function ChangePhoto({ img, submit }) {
  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label></Form.Label>
      <Form.Control type="file" onChange={img} />
      <Button variant="primary" type="submit" onClick={submit}>
        Submit 
      </Button>
    </Form.Group>
  );
}

export default ChangePhoto;
