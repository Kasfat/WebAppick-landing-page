import React from "react";
import "./style.css";
import CeoSkillImage from "../../../assets/images/ceoSkill.png";
import MaterialIcon from "../../../assets/images/material.png";
import MentorIcon from "../../../assets/images/pyramid.png";
import VedioIcon from "../../../assets/images/wool-ball.png";
import HighPriceIcon from "../../../assets/images/glass.png";
import ServiceCard from "../../../components/serviceCard";

function WhyWeExit() {
  const services = [
    {
      icon: MaterialIcon,
      title: "Material Limitations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: MentorIcon,
      title: "Unprofessional Mentor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: VedioIcon,
      title: "Video Quality",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: HighPriceIcon,
      title: "High Price",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div id="About" className="why-we-sction">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="info">
            <h1 className="why-title">
              Why do we <span>exist?</span>
            </h1>
            <p>
              Because we know that many people or companies have the same
              problem when it comes to how difficult it is to improve their
              skills
            </p>
            <div className=" d-flex align-items-center ceo-all-part">
              <img src={CeoSkillImage} />
              <div className="ceo-info">
                <h3>Jerony Pulquosta</h3>
                <p>CEO Skill Shoot</p>
              </div>
            </div>
            <div className=" d-flex gap-5 counter-part">
              <div>
                <h1>100+</h1>
                <p className="counter-info">Updated Material</p>
              </div>
              <div>
                <h1>15k</h1>
                <p className="counter-info">Member Join</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className=" row all-skill">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWeExit;
