import { Component } from "react";

const SingleComment = (props) => {
  const star = [1, 2, 3, 4, 5];

  return (
    <div>
      <span className="me-3">{props.text}</span>
      {star.map(
        (star) =>
          star <= parseInt(props.value) && (
            <span className="text-primary" key={`${star}-${props.id}`}>
              ★
            </span>
          )
      )}
    </div>
  );
};
export default SingleComment;
