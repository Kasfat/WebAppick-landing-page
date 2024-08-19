import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCardImage1 from "../../../assets/images/productCardImg01.png";
import ProductCardImage2 from "../../../assets/images/productCardImg02.png";
import ProductCardImage3 from "../../../assets/images/productCardImg03.png";
import PersonImage1 from "../../../assets/images/cardPerson1.png";
import PersonImage2 from "../../../assets/images/cardPerson2.png";
import PersonImage3 from "../../../assets/images/cardPerson3.png";
import ParticipantIcon from "../../../assets/images/participantIcon.png";
import PlayBtnIcon from "../../../assets/images/playBtn.png";
import OrngeIcon from "../../../assets/images/orangeSquare.png";
import CircleIcon from "../../../assets/images/circle.png";
import Slider from "react-slick";

function PopulerCourses() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="populer-courses-section">
      
        <div className="course-info">
          <h1>Popular courses of the week</h1>
          <p>
            List of the most popular lists that are often studied by our members
          </p>
        </div>
    
      <div className="orange-shape">
        <img src={OrngeIcon} />
      </div>
      <div className="circle-shape">
        <img src={CircleIcon} />
      </div>
      <div className="row card-section">
        <div className="col-md-12">
          <Slider {...settings} className="productSlider">
            <div className="item">
              <div className="product-card">
                <div className="card-img">
                  <img src={ProductCardImage1} />
                  <div className="play-btn">
                    <img src={PlayBtnIcon} />
                  </div>
                </div>
                <div className="card-body">
                  <h2>Basics of learning team management</h2>
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mt-2">
                      <img src={PersonImage1} />
                      <div className="person-info">
                        <h3>Jone Owel</h3>
                        <p>IT Manager</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={ParticipantIcon} />
                      <div className="person-info">
                        <h3>120</h3>
                        <p>Participant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center card-buy-course">
                  <button className="buy-btn">Buy Now</button>
                  <div className="buy-price">
                    <p>
                      $120<span>/25 Video</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="product-card">
                <div className="card-img">
                  <img src={ProductCardImage2} />
                  <div className="play-btn">
                    <img src={PlayBtnIcon} />
                  </div>
                </div>
                <div className="card-body">
                  <h2>Basics of learning team management</h2>
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mt-2">
                      <img src={PersonImage2} />
                      <div className="person-info">
                        <h3>Jone Owel</h3>
                        <p>IT Manager</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={ParticipantIcon} />
                      <div className="person-info">
                        <h3>120</h3>
                        <p>Participant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center card-buy-course">
                  <button className="buy-btn">Buy Now</button>
                  <div className="buy-price">
                    <p>
                      $120<span>/25 Video</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-card">
                <div className="card-img">
                  <img src={ProductCardImage3} />
                  <div className="play-btn">
                    <img src={PlayBtnIcon} />
                  </div>
                </div>
                <div className="card-body">
                  <h2>Basics of learning team management</h2>
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mt-2">
                      <img src={PersonImage3} />
                      <div className="person-info">
                        <h3>Jone Owel</h3>
                        <p>IT Manager</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={ParticipantIcon} />
                      <div className="person-info">
                        <h3>120</h3>
                        <p>Participant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center card-buy-course">
                  <button className="buy-btn">Buy Now</button>
                  <div className="buy-price">
                    <p>
                      $120<span>/25 Video</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="product-card">
                <div className="card-img">
                  <img src={ProductCardImage1} />
                  <div className="play-btn">
                    <img src={PlayBtnIcon} />
                  </div>
                </div>
                <div className="card-body">
                  <h2>Basics of learning team management</h2>
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mt-2">
                      <img src={PersonImage1} />
                      <div className="person-info">
                        <h3>Jone Owel</h3>
                        <p>IT Manager</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={ParticipantIcon} />
                      <div className="person-info">
                        <h3>120</h3>
                        <p>Participant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center card-buy-course">
                  <button className="buy-btn">Buy Now</button>
                  <div className="buy-price">
                    <p>
                      $120<span>/25 Video</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PopulerCourses;
