import React from "react";
import "./style..css";
import CustomerImage1 from "../../../assets/images/customer1.png";
import CustomerImage2 from "../../../assets/images/customer2.png";
import CustomerImage3 from "../../../assets/images/customer3.png";
import Slider from "react-slick";
import GreenShape1 from "../../../assets/images/greenShape1.png";
import GreenShape2 from "../../../assets/images/greenShape2.png";
import ReviewCard from "../../../components/reviewCard";

function CustomerReview() {
  const reviews = [
    {
      image: CustomerImage1,
      name: "Jason Bay",
      rating: 5,
      reviewText:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: CustomerImage2,
      name: "Nany Brugman",
      rating: 5,
      reviewText:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: CustomerImage3,
      name: "Alexa Nowan",
      rating: 5,
      reviewText:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      image: CustomerImage2,
      name: "Nany Brugman",
      rating: 5,
      reviewText:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
  ];

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
    <div id="Testimoni" className="customer-review-section">
      <div className="content-part">
        <div className="customer-review-header">
          <h1>
            What do they <span>say?</span>
          </h1>
          <p>This is an honest review from members who have joined us</p>
        </div>
        <div className="shape-1">
          <img src={GreenShape1} style={{ width: "30px", height: "30px" }} />
        </div>
        <div className="shape-2">
          <img src={GreenShape2} />
        </div>
        <div className="row">
          <div className=" col-lg-12">
            <Slider {...settings} className="review-slide">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  image={review.image}
                  name={review.name}
                  rating={review.rating}
                  reviewText={review.reviewText}
                />
              ))}
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
