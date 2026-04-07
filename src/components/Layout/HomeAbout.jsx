import React from "react";
import "./HomeAbout.css";
import homeaboutimg from "../../Assets/engineeringservices.webp";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="AboutIntro-container">
      {/* <span className="Head">Who We Are ?</span> */}
      <div className="aboutIntroWrap">
        <img src={homeaboutimg} alt="engineeringservices" className="homeaboutimg" />

        <div className="wrapDetails">
          <h2 className="aimabout">What We Aim For</h2>
          <span className="abIntroPara">
          <span className="mechfusion">Mechfusion</span>  is a trusted global engineering services partner, delivering practical, production-ready solutions for modern design and manufacturing needs. <br />

           With extensive industry experience, we specialize in mechanical design, CNC programming, and engineering documentation that supports efficient, accurate manufacturing. Our focus is not just on creating designs — but on ensuring those designs work seamlessly in real production environments. <br />
           By combining skilled engineers, advanced technology, and proven workflows, we help clients reduce rework, improve efficiency, and accelerate time to market. Every project is handled with personalized attention and a strong commitment to quality.
          </span>
<h3>
          <Link to={"/about"}>
            <button>About us</button>
          </Link></h3>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
