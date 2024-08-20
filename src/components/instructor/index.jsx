import React from "react";
import './style.css'

function Instructor({ image, name, title }) {
  return (
    <div className="d-flex align-items-center mt-2">
      <img src={image} alt={title} />
      <div className="person-info">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Instructor;
