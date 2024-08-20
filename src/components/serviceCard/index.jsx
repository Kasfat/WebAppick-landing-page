import React from "react";
import './style.css'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="col-12 col-md-6 skill-item">
      <img src={icon} alt={title} />
      <h1>{title}</h1>
      <p>
      {description}
      </p>
    </div>
  );
}

export default ServiceCard;
