import React from "react";
import "./style.css";
import UberImage from "../../../assets/images/uber.png";
import GoogleImage from "../../../assets/images/google.png";
import PaypalImage from "../../../assets/images/paypal.png";
import MicrosoftImage from "../../../assets/images/microsoft.png";
import drilImage from "../../../assets/images/drib.png";

function TrustedPartner() {
  return (
    <div className="trusted-section">
      <div className="info">
        <h1>
          Trusted more than <span>100+</span> in the world
        </h1>
        <p>
          they have asked us more than 3 times to teach their employees about
          various things. to improve their skills
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap partner-company-logo">
        <img src={UberImage} />
        <img src={GoogleImage} />
        <img src={PaypalImage} />
        <img src={MicrosoftImage} />
        <img src={drilImage} />
      </div>
    </div>
  );
}

export default TrustedPartner;
