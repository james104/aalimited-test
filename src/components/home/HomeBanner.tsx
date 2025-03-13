import React, { type FC } from "react";
import banner from "../../assets/images/banner.svg";
import Btn from "../common/Btn";

const HomeBanner: FC = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <p className="bannerText">
        <p>Welcome to the AIO Study Platform</p>
        <h1>All-in-One Platform for Self-Learners</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pellentesque velit id sodales
          et at fermentum. Sed id egestas nec odio sit.
        </p>
        <Btn className="bannerBtn">Read More</Btn>
      </p>
    </div>
  );
};

export default HomeBanner;
