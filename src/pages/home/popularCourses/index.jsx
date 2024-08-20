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
import CourseCard from "../../../components/courseCard";

function PopulerCourses() {
  const courses = [
    {
      courseImage: ProductCardImage1,
      playButtonImage: PlayBtnIcon,
      courseTitle: "Basics of learning team management",
      instructor: {
        image: PersonImage1,
        name: "Jone Owel",
        title: "IT Manager",
      },
      participantIcon: ParticipantIcon,
      participantCount: 120,
      price: 120,
      videoCount: 25,
    },
    {
      courseImage: ProductCardImage2,
      playButtonImage: PlayBtnIcon,
      courseTitle: "Basics of learning team management",
      instructor: {
        image: PersonImage2,
        name: "Roynaldo Jr",
        title: "Data Science",
      },
      participantIcon: ParticipantIcon,
      participantCount: 55,
      price: 180,
      videoCount: 25,
    },
    {
      courseImage: ProductCardImage3,
      playButtonImage: PlayBtnIcon,
      courseTitle: "Create dynamic website with basic php",
      instructor: {
        image: PersonImage3,
        name: "Markus Low",
        title: "Programer",
      },
      participantIcon: ParticipantIcon,
      participantCount: 98,
      price: 135,
      videoCount: 20,
    },
  ];

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
    <div id="Course" className="populer-courses-section">
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
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                courseImage={course.courseImage}
                playButtonImage={course.playButtonImage}
                courseTitle={course.courseTitle}
                instructor={course.instructor}
                participantIcon={course.participantIcon}
                participantCount={course.participantCount}
                price={course.price}
                videoCount={course.videoCount}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PopulerCourses;
