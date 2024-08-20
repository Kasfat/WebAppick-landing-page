import React from "react";
import './style.css'
import { Rating } from "@mui/material";


function ReviewCard({ image, name, rating, reviewText }) {
  return (
    <div className="item">
      <div className="card justify-content-center align-items-center">
        <img
          src={image}
          alt={name}
          style={{
            width: "65px",
            height: "65px",
            marginBottom: "10px",
          }}
        />
        <Rating name="half-rating-read" defaultValue={rating} readOnly />
        <div className="card-body">
          <h3>{name}</h3>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
