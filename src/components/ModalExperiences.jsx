import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

function ModalExperiences() {
  const [experiences, setExperiences] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const handleChange = (name, value) => {
    setExperiences({ ...experiences, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form inviato:", experiences);
    infoUpdateFetch();
  };

  const id = useSelector((state) => state.id.id);

  const URL =
    "https://striveschool-api.herokuapp.com/api/profile/681479fc1c250400151ab652/experiences" +
    id;

  const infoUpdateFetch = async () => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/681479fc1c250400151ab652/experiences",
        {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzlmYzFjMjUwNDAwMTUxYWI2NTIiLCJpYXQiOjE3NDkwMjIxODQsImV4cCI6MTc1MDIzMTc4NH0.7Szsao5jVpzG3jKFYe1rXQQEQaQboxVSvHLIzlnp8Ew",
          },
          body: JSON.stringify(experiences),
        }
      );
      const data = await resp.json();
      if (resp.ok) {
        console.log("Esperienza salvata con successo:", data);
        setExperiences({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        throw new Error("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Ruolo</Form.Label>
        <Form.Control
          type="text"
          placeholder="role"
          value={experiences.role}
          onChange={(e) => handleChange("role", e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Azienda</Form.Label>
        <Form.Control
          type="text"
          placeholder="role"
          value={experiences.company}
          onChange={(e) => handleChange("company", e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data inizio</Form.Label>
        <Form.Control
          type="date"
          value={experiences.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data fine</Form.Label>
        <Form.Control
          type="date"
          value={experiences.endDate}
          onChange={(e) => handleChange("endDate", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Scrivi qui..."
          value={experiences.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Area geografica</Form.Label>
        <Form.Control
          type="text"
          placeholder="città..."
          value={experiences.area}
          onChange={(e) => handleChange("area", e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Invia esperienza
      </Button>
    </Form>
  );
}

export default ModalExperiences;
