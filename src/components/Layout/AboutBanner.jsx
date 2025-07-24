import React from "react";
import "./AboutBanner.css";
import about from "../../Assets/35.webp";
// import { Helmet } from "react-helmet";

const AboutBanner = () => {
  return (
    <div className="AboutBanner-container">
      {/* <Helmet>
      <title>Home Page</title>
      <meta name="description" content="This is the home page description." />
    </Helmet> */}
      <div className="aboutimgwrapper">
        <img src={about} alt="" className="aboutBannerImg" />
      </div>
      <div className="aboutBanner-wrapper">
        <span className="smallHeading">Mechfusion</span>
        <h2 className="aboutHead">
          Your premier provider of tailored engineering design and manufacturing
          services
        </h2>
        <span className="detailsAbout">
          "With years of industry expertise, we deliver innovative solutions to
          streamline production and bring ideas to life with precision and
          efficiency"
        </span>
      </div>
    </div>
  );
};

export default AboutBanner;
