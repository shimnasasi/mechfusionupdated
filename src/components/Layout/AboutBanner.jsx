import React from "react";
import "./AboutBanner.css";
import about from "../../Assets/17.jpg";

const AboutBanner = () => {
  return (
    <div className="AboutBanner-container">
      <div className="aboutimgwrapper">
        <img src={about} alt="" className="aboutBannerImg" />
      </div>
      <div className="aboutBanner-wrapper">
        <span className="smallHeading">MECHFUSION</span>
        <span className="aboutHead">
          Your premier provider of tailored engineering design and manufacturing
          services
        </span>
        <span className="detailsAbout">
        "With years of industry expertise, we deliver innovative solutions to streamline production and bring ideas to life with precision and efficiency"
        </span>
      </div>
    </div>
  );
};

export default AboutBanner;
