import { useEffect, useState } from "react";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const HEADER = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQyYWJkNTM3MTg2MjAwMTVhZjFkOTUiLCJpYXQiOjE3NDkxOTk4MjksImV4cCI6MTc1MDQwOTQyOX0.dvMhplCMJDjPzE_d0MJt3A2CtI_6GPNPiv_fDhQcZ3w",
  "content-type": "application/json",
};

function CommentSection({ elementId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rate, setRate] = useState("5");
  const [editId, setEditId] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await fetch(API_URL + elementId, {
        headers: HEADER,
      });
      if (response.ok) {
        setComments(await response.json());
      } else {
        console.error("errore nel commento");
      }
    } catch (error) {
      console.error("altro errore nei commenti", error);
    }
  };

  const postComment = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: HEADER,
        body: JSON.stringify({
          comment: newComment,
          rate: rate,
          elementId,
        }),
      });
      if (response.ok) {
        setNewComment("");
        fetchComments();
      } else {
        console.error("errore nell'invio");
      }
    } catch (error) {
      console.error("altro errore nell'invio", error);
    }
  };

  const updateComment = async () => {
    try {
      const response = await fetch(API_URL + editId, {
        method: "PUT",
        headers: HEADER,
        body: JSON.stringify({
          comment: newComment,
          rate: rate,
        }),
      });
      if (response.ok) {
        setEditId(null);
        setNewComment("");
        fetchComments();
      } else {
        console.error("errore della modifica");
      }
    } catch (error) {
      console.error("altro errore nella modifica", error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const reposnse = await fetch(API_URL + id, {
        method: "DELETE",
        headers: HEADER,
      });
      if (reposnse.ok) {
        fetchComments();
      } else {
        console.error("errore durante l'eliminazione");
      }
    } catch (erroe) {
      console.error("altro errore nell'eliminazione");
    }
  };

  const handleSubmit = () => {
    if (editId) {
      updateComment();
    } else {
      postComment();
    }
  };

  useEffect(() => {
    fetchComments();
  }, [elementId]);

  return (
    <div className="p-3 border-top">
      <h5>Commenti</h5>
      <ul className="list-unstyled">
        {comments.map((c) => (
          <li key={c._id} className="mb-3">
            <strong>Valutazione:</strong> {c.rate}
            <br />
            <strong>Testo:</strong> {c.comment}
            <div className="mt-1">
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => {
                  setNewComment(c.comment);
                  setRate(c.rate);
                  setEditId(c._id);
                }}
              >
                Modifica
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteComment(c._id)}
              >
                Elimina
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Scrivi un commento"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="form-control mb-2"
        />
        <select value={rate} onChange={(e) => setRate(e.target.value)} className="form-select mb-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {editId ? "Salva modifiche" : "Aggiungi commento"}
        </button>
      </div>
    </div>
  );
}

export default CommentSection;
