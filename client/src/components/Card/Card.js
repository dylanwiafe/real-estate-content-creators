import React from "react";
import "./Card.scss";

const Card = ({ contractor, completion, service, location }) => {
  return (
    <div className="card">
      <p>{contractor}</p>
      <p>{completion}</p>
      <p>{service}</p>
      <p>{location}</p>
    </div>
  );
};

export default Card;
