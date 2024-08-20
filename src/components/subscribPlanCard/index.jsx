import React from "react";
import './style.css'

function SubscribePlanCard({
  price,
  duration,
  title,
  description,
  features,
  isPopular,
  buttonText,
  icon,
  onChoosePlan,
}) {
  return (
    <div className={`card ${isPopular ? "active" : ""}`}>
      {isPopular && (
        <div className="d-flex align-items-center justify-content-end mb-2">
          <button className="populer-btn">MOST POPULAR</button>
        </div>
      )}
      <h1>
        ${price}
        <span>/ {duration}</span>
      </h1>
      <div className="card-body">
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-center gap-2">
              <div>
                <img src={icon} alt="Feature Icon" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center justify-content-center">
          <button className="choose-btn" onClick={onChoosePlan}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribePlanCard;
