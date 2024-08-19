import React from "react";
import "./style.css";
import UpDownLineIcon from "../../assets/images/upDownLine.png";
import CircleTwo from "../../assets/images/circle2.png";

function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="left-icon">
          <img src={UpDownLineIcon} style={{ width: "68px", height: "20px" }} />
        </div>
        <div className=" footer-content d-flex align-items-center mx-auto">
          <div className="footer-info d-flex flex-column align-items-center">
            <h1>Subscribe to get notified about update</h1>
            <p>
              By subscribing with your mail, you will accept our privacy policy
            </p>
            <div className=" d-flex align-items-center justify-content-center gap-3 mt-4 mail-send">
              <input type="text" placeholder="Enter your email" />
              <button className="sub-us-btn">Subscribe us</button>
            </div>
          </div>
        </div>
        <div className=" right-icon">
          <img src={CircleTwo} style={{ width: "48px", height: "48px" }} />
        </div>
        <div className="footer-menu">
          <div className="row align-items-center justify-content-end">
            <div className=" col-md-2">
              <h1 className="text-logo">
                Skill<span>Shoot</span>
              </h1>
            </div>
            <div className="col-12 col-md-10 menu-part">
              <ul className="all-menu-item-list">
                <li className="menu-item-list active">Home</li>
                <li className="menu-item-list">Course</li>
                <li className="menu-item-list">Subscribe</li>
                <li className="menu-item-list">About</li>
                <li className="menu-item-list">Testimoni</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
