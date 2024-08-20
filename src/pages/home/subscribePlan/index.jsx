import React from "react";
import "./style.css";
import PathIcon from "./../../../assets/images/rightIcon.png";
import PathIcon2 from "../../../assets/images/whiteRightIcon.png";
import SubscribePlanCard from "../../../components/subscribPlanCard";

function SubscribePlane() {
  const plans = [
    {
      price: 50,
      duration: "1 month",
      title: "Base",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Access all videos",
        "Get Certificate",
        "Chat support",
        "Update Notification",
        "Download material",
      ],
      isPopular: false,
      icon: PathIcon,
    },
    {
      price: 100,
      duration: "6 months",
      title: "Pro",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Access all videos",
        "Get Certificate",
        "Chat support",
        "Update Notification",
        "Download material",
      ],
      isPopular: true,
      icon: PathIcon2,
    },
    {
      price: 200,
      duration: "12 months",
      title: "Enterprise",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Access all videos",
        "Get Certificate",
        "Chat support",
        "Update Notification",
        "Download material",
      ],
      isPopular: false,
      icon: PathIcon,
    },
  ];

  return (
    <div id="Subscribe" className="subscribe-plane-section">
      <div className=" d-flex align-items-center justify-content-center flex-column">
        <div className="subscribe-info">
          <h1>
            <span>Subscribe</span> with us now
          </h1>
          <p>
            by subscribing now you will be able to access the material easily
            and cheaply, so you will be very efficient and benefit
          </p>
        </div>
        <div className="sub-plan-card">
          <div className="cards d-flex gap-2">
            {plans.map((plan, index) => (
              <SubscribePlanCard
                key={index}
                price={plan.price}
                duration={plan.duration}
                title={plan.title}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                icon={plan.icon}
                buttonText="Choose plan"
                onChoosePlan={() => alert(`You chose the ${plan.title} plan`)} // Example callback
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribePlane;
