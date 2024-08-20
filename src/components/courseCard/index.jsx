import React from "react";
import './style.css'
import Instructor from "../instructor";
import SiteButton from "../button";

function CourseCard({
  courseImage,
  playButtonImage,
  courseTitle,
  instructor,
  participantIcon,
  participantCount,
  price,
  videoCount,
}) {
  return (
    <div className="item">
      <div className="product-card">
        <div className="card-img">
          <img src={courseImage} alt={courseTitle} />
          <div className="play-btn">
            <img src={playButtonImage} alt="Play Button" />
          </div>
        </div>
        <div className="card-body">
          <h2>{courseTitle}</h2>
          <div className=" d-flex justify-content-between align-items-center">
            <Instructor
              image={instructor.image}
              name={instructor.name}
              title={instructor.title}
            />
            <div className="d-flex align-items-center">
              <img src={participantIcon} alt="Participants" />
              <div className="person-info">
                <h3>{participantCount}</h3>
                <p>Participant{participantCount > 1 ? "s" : ""}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center card-buy-course">
          <SiteButton text="Buy Now" styleClass="buy-btn"/>
          {/* <button className="buy-btn">Buy Now</button> */}
          <div className="buy-price">
            <p>
              ${price}
              <span>
                /{videoCount} Video{videoCount > 1 ? "s" : ""}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
