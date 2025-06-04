import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ModalExperiences() {
  const [experiences, setExperiences] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: "",
  });

  const handleChange = (value, name) => {
    setExperiences({ ...experiences, [value]: name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    infoUpdateFetch();
  };

  const infoUpdateFetch = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/681479fc1c250400151ab652/experiences",
        {
          method: "POST",
          body: JSON.stringify(experiences),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
          },
        }
      );
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form.Group controlId="formText" className="mb-3">
      <Form.Label>Ruolo:</Form.Label>
      <Form.Control
        type="text"
        placeholder="role..."
        value={experiences.role}
        onChange={(e) => handleChange("role", e.target.value)}
      />
      <Button variant="primary" type="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form.Group>
  );
}

export default ModalExperiences;
