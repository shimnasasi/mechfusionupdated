import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <div className="HomeBannerShadow">
        <span className="BannerSmallHead">Mechfusion</span>
        <span className="bannerMainHead">The Art of Engineering</span>
        <span className="bannerMainPara">
          At Mechfusion, we nurture a culture of innovation, collaboration, and
          growth. We’re driven by creativity and a shared passion for
          excellence, empowering our team to solve challenges and shape a better
          future together.
        </span>
        <br />
        <Link to={"/about "}>
          <button>Explore </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
