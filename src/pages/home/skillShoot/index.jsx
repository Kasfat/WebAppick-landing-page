import React from "react";
import "./style.css";
import PersonImage from "../../../assets/images/skillShootPerson.png";
import SkillShootIcon1 from "../../../assets/images/skillShootIcon1.png";
import SkillShootIcon2 from "../../../assets/images/skillShootIcon2.png";
import SkillShootIcon3 from "../../../assets/images/skillShootIcon3.png";
import SkillShootIcon4 from "../../../assets/images/skillShootIcon4.png";
import OrangeShapeIcon from "../../../assets/images/orangeSquare.png";

function SkillShoot() {
  return (
    <div className="skill-shoot-section">
      <div className="row align-items-center justify-content-center">
        <div className=" col-md-5 col-lg-6 person">
          <div className="person-img-content">
            <img src={PersonImage} />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <div className="skill-shoot-content">
            <h1>
              Let us <span className="text-underLine">Skill Shoot</span>
            </h1>
            <p className=" content-text">
              We are a company engaged in education with the aim of improving
              the skills of many people and so that younger people can reach the
              career paths they want.
            </p>
            <p className=" content-text">
              we have been around since 2019 with currently 100+ updated
              materials and 15K members who have joined.
            </p>
            <div className="row">
              <div className=" col-6 mt-4">
                <div className=" d-flex align-items-center">
                  <img
                    src={SkillShootIcon1}
                    style={{ width: "36px", height: "36px" }}
                  />
                  <p className="icon-text">15K People Join</p>
                </div>
              </div>
              <div className=" col-6 mt-4">
                <div className=" d-flex align-items-center">
                  <img
                    src={SkillShootIcon2}
                    style={{ width: "36px", height: "36px" }}
                  />
                  <p className="icon-text">Trusted Mentor</p>
                </div>
              </div>
              <div className=" col-6 mt-4">
                <div className=" d-flex align-items-center">
                  <img
                    src={SkillShootIcon3}
                    style={{ width: "36px", height: "36px" }}
                  />
                  <p className="icon-text">30+ Free Videos</p>
                </div>
              </div>
              <div className=" col-6 mt-4">
                <div className=" d-flex align-items-center">
                  <img
                    src={SkillShootIcon4}
                    style={{ width: "36px", height: "36px" }}
                  />
                  <p className="icon-text">100+ Premium Videos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-improve">
        <div className="info">
          <span className="half-circle-left"></span>
          <h1>
            <span>Improve</span> your skills, and reach your career as soon as
            possible
          </h1>
          <div className="btn-group d-flex gap-3">
            <button className="join-btn">Join Now</button>
            <button className="sub-course-btn">Subscribe Course</button>
          </div>
        </div>
        <div className="orange-square">
          <img src={OrangeShapeIcon} />
        </div>
      </div>
    </div>
  );
}

export default SkillShoot;
