import React from "react";
import "./style.css";
import PathIcon from "./../../../assets/images/rightIcon.png";
import PathIcon2 from "../../../assets/images/whiteRightIcon.png";

function SubscribePlane() {
  return (
    <div className="subscribe-plane-section">
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
            <div className="card">
              <h1>
                $50<span>/ 1 month</span>
              </h1>
              <div className="card-body">
                <h1>Base</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <ul>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Access all videos
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Get Certificate
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Chat support
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Update Notification
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Download material
                  </li>
                </ul>
                <div className=" d-flex align-items-center justify-content-center">
                  <button className="choose-btn">Choose plan</button>
                </div>
              </div>
            </div>
            <div className="card active">
              <div className=" d-flex align-items-center justify-content-end mb-2">
                <button className="populer-btn">MOST POPULAR</button>
              </div>
              <h1>
                $100<span>/ 6 month</span>
              </h1>
              <div className="card-body">
                <h1>Pro</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <ul>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon2} />
                    </div>
                    Access all videos
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon2} />
                    </div>
                    Get Certificate
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon2} />
                    </div>
                    Chat support
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon2} />
                    </div>
                    Update Notification
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon2} />
                    </div>
                    Download material
                  </li>
                </ul>
                <div className=" d-flex align-items-center justify-content-center">
                  <button className="choose-btn">Choose plan</button>
                </div>
              </div>
            </div>
            <div className="card">
              <h1>
                $200<span>/ 12month</span>
              </h1>
              <div className="card-body">
                <h1>Enterprise</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <ul>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Access all videos
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Get Certificate
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Chat support
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Update Notification
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div>
                      <img src={PathIcon} />
                    </div>
                    Download material
                  </li>
                </ul>
                <div className=" d-flex align-items-center justify-content-center">
                  <button className="choose-btn">Choose plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribePlane;
