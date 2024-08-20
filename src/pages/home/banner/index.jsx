import React from "react";
import "./style.css";
import InstagramIcon from "../../../assets/images/instagram.png";
import twitterIcon from "../../../assets/images/twitter.png";
import discordIcon from "../../../assets/images/discord.png";
import peopleImage from "../../../assets/images/bannerPerson.png";
import ArrowIcon from "../../../assets/images/upArrow.png";
import PenIcon from "../../../assets/images/iconPen.png";
import CalendarIcon from "../../../assets/images/iconCalendar.png";
import VedioIcon from "../../../assets/images/iconVedio.png";
import SiteButton from "../../../components/button";

function Banner() {
  return (
    <div className="topBanner container-fluid">
      <div className="content-block">
        <div className="pen-icon">
          <img src={PenIcon} />
        </div>
        <div className="calendar-icon">
          <img src={CalendarIcon} />
        </div>
        <div className="vedio-icon">
          <img src={VedioIcon} />
        </div>
        <div className="row">
          <div className=" col-12 col-lg-7">
            <div className="info">
              <h1>
                <span className="text-underline">There is always</span>
                <br /> something new for us to learn
              </h1>

              <p>
                we have created more than 100+ materials on various things that
                will help your career, with mentors who are experienced in their
                fields.
              </p>

              <div className=" d-flex align-items-center gap-4 social-media">
                <SiteButton
                  text="Start Journey"
                  styleClass="start-btn gap-3"
                  icon={ArrowIcon}
                  onClick={() => alert("Start Journey button clicked")}
                />
                {/* <button className="">
                  Start Journey{" "}
                  <span>
                    <img src={ArrowIcon} />
                  </span>
                </button> */}
                <div className=" d-flex gap-3">
                  <img src={InstagramIcon} />
                  <img src={twitterIcon} />
                  <img src={discordIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 person">
            <div className="person-part">
              <img src={peopleImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
