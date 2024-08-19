import React from "react";
import Banner from "./banner";
import TrustedPartner from "./trustedPartner";
import HappyDiscount from "./happyDiscount";
import WhyWeExit from "./whyWeExit";
import PopulerCourses from "./popularCourses";
import SkillShoot from "./skillShoot";
import SubscribePlane from "./subscribePlan";
import CustomerReview from "./customerReview";

function HomePage() {
  return (
    <>
      <Banner />
      <TrustedPartner />
      <HappyDiscount/>
      <WhyWeExit/>
       <PopulerCourses/>
       <SkillShoot/>
      <SubscribePlane/>
      <CustomerReview/>
    </>
  );
}

export default HomePage;
