import React from "react";
import "./style..css";
import CustomerImage1 from "../../../assets/images/customer1.png";
import CustomerImage2 from "../../../assets/images/customer2.png";
import CustomerImage3 from "../../../assets/images/customer3.png";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import GreenShape1 from  "../../../assets/images/greenShape1.png"
import GreenShape2 from  "../../../assets/images/greenShape2.png"

function CustomerReview() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="customer-review-section">
      <div className="content-part">
        <div className="customer-review-header">
          <h1>
            What do they <span>say?</span>
          </h1>
          <p>This is an honest review from members who have joined us</p>
        </div>
        <div className="shape-1">
          <img src={GreenShape1} style={{ width: "30px", height: "30px" }}/>
        </div>
        <div className="shape-2">
          <img src={GreenShape2} />
        </div>
        <div className="row">
          <div className=" col-lg-12">
            <Slider {...settings} className="review-slide">
              <div className="item">
                <div className="card justify-content-center align-items-center">
                  <img
                    src={CustomerImage1}
                    style={{
                      width: "65px",
                      height: "65px",
                      marginBottom: "10px",
                    }}
                  />
                  <Rating name="half-rating-read" defaultValue={5} readOnly />
                  <div className="card-body">
                    <h3>Jason Bay</h3>
                    <p>
                      I am quite satisfied, because the skills I want or dream
                      of can really be mastered
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card justify-content-center align-items-center">
                  <img
                    src={CustomerImage1}
                    style={{
                      width: "65px",
                      height: "65px",
                      marginBottom: "10px",
                    }}
                  />
                  <Rating name="half-rating-read" defaultValue={5} readOnly />
                  <div className="card-body">
                    <h3>Jason Bay</h3>
                    <p>
                      I am quite satisfied, because the skills I want or dream
                      of can really be mastered
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card justify-content-center align-items-center">
                  <img
                    src={CustomerImage2}
                    style={{
                      width: "65px",
                      height: "65px",
                      marginBottom: "10px",
                    }}
                  />
                  <Rating name="half-rating-read" defaultValue={5} readOnly />
                  <div className="card-body">
                    <h3>Nany Brugman</h3>
                    <p>
                      I am quite satisfied, because the skills I want or dream
                      of can really be mastered
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card justify-content-center align-items-center">
                  <img
                    src={CustomerImage3}
                    style={{
                      width: "65px",
                      height: "65px",
                      marginBottom: "10px",
                    }}
                  />
                  <Rating name="half-rating-read" defaultValue={5} readOnly />
                  <div className="card-body">
                    <h3>Alexa Nowan</h3>
                    <p>
                      I am quite satisfied, because the skills I want or dream
                      of can really be mastered
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
