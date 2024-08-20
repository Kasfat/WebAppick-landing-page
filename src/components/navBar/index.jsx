import React, { useState } from "react";
import "./style.css";
import MobileMenuIcon from "../../assets/images/mobileMenu.png";
import SiteButton from "../button";
import CompanyLogo from "../companyLogo";
import { Link } from "react-scroll";

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
                <CompanyLogo
                  text="Skill"
                  spanText="Shoot"
                  styleClass="text-logo"
                />
              </div>
              <div className="col-10 col-md-10">
                <div className="menu-list d-flex align-items-center justify-content-between">
                  <div>
                    <ul className="list list-inline mb-0 d-flex gap-4 menu-item">
                      <Link to="Home">
                        <li className="list-inline-item active">Home</li>
                      </Link>

                      <Link to="Course">
                        <li className="list-inline-item">Course</li>
                      </Link>
                      <Link to="Subscribe">
                        <li className="list-inline-item">Subscribe</li>
                      </Link>
                      <Link to="About">
                        <li className="list-inline-item">About</li>
                      </Link>
                      <Link to="Testimoni">
                        <li className="list-inline-item">Testimoni</li>
                      </Link>
                    </ul>
                  </div>
                  <div className=" d-flex align-items-center gap-4">
                    <span className="log-in">Login</span>
                    <SiteButton
                      text="Register"
                      styleClass="register-btn"
                      onClick={() => alert("Register button clicked")}
                    />
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
                  <Link to="Home">
                    <li className="active">Home</li>
                  </Link>
                  <Link to="Course">
                    <li className="">Course</li>
                  </Link>
                  <Link to="Subscribe">
                    <li className="">Subscribe</li>
                  </Link>
                  <Link to="About">
                    <li className="">About</li>
                  </Link>
                  <Link to="Testimoni">
                    <li className="">Testimoni</li>
                  </Link>
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
