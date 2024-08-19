import React, { useState } from "react";
import "./style.css";
import MobileMenuIcon from "../../assets/images/mobileMenu.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <>
      <header>
        <div className=" container-fluid ">
          <div className="content-menu">
            <div className="row align-items-center">
              <div className="col-2 col-md-2">
                <h1 className="text-logo">
                  Skill<span>Shoot</span>
                </h1>
              </div>
              <div className="col-10 col-md-10">
                <div className="menu-list d-flex align-items-center justify-content-between">
                  <div>
                    <ul className="list list-inline mb-0 d-flex gap-4 menu-item">
                      <li className="list-inline-item active">Home</li>
                      <li className="list-inline-item">Course</li>
                      <li className="list-inline-item">Subscribe</li>
                      <li className="list-inline-item">About</li>
                      <li className="list-inline-item">Testimoni</li>
                    </ul>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                    <span className="log-in">Login</span>
                    <button className="register-btn">Register</button>
                  </div>
                </div>
                <div className="mobile-menu-icon d-flex justify-content-end">
                  <img
                    src={MobileMenuIcon}
                    style={{ width: "22px", height: "22px" }}
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen ? (
          <div className="mobile-menu">
            <div className="row">
              <div className="col-12">
                <ul className="text-center mobile-menu-item">
                  <li className="active">Home</li>
                  <li className="">Course</li>
                  <li className="">Subscribe</li>
                  <li className="">About</li>
                  <li className="">Testimoni</li>
                </ul>
                <div className=" d-flex align-items-center justify-content-center gap-4 mb-3">
                    <span className="log-in">Login</span>
                    <button className="register-btn">Register</button>
                  </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}

export default NavBar;
