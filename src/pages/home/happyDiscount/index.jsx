import React from "react";
import "./style.css";
import HappyStudentImg from "../.././../assets/images/happyStudent.png";
import GreenIcon1 from "../../../assets/images/greenSquare.png";
import GreenIcon2 from "../../../assets/images/greenSquare2.png";
import OrngeIcon from "../../../assets/images/orangeSquare.png";
import CircleIcon from "../../../assets/images/circle.png";
import SiteButton from "../../../components/button";

function HappyDiscount() {
  return (
    <div className="happy-discount-section">
      <div className="happy-text-section">
        <div className="info">
          <span className="half-circle-left"></span>
          <h1>
            Happy <span>Chinese New Year</span>, 20%
            <br />
            discount for you today
          </h1>
          <SiteButton
            text="Subscribe Course"
            styleClass="sub-course-btn"
            onClick={() => alert("Subscribe Course button clicked")}
          />
          {/* <button className="sub-course-btn">Subscribe Course</button> */}
          <span className="half-circle-right"></span>
          <div className="green-shape">
            <img src={GreenIcon1} />
          </div>
          <div className="green-shape2">
            <img src={GreenIcon2} />
          </div>
          <div className="orange-shape">
            <img src={OrngeIcon} />
          </div>
          <div className="circle-shape">
            <img src={CircleIcon} />
          </div>
        </div>
      </div>

      <div className="img-part">
        <img src={HappyStudentImg} />
      </div>
    </div>
  );
}

export default HappyDiscount;
