import React from "react";
import "./AboutIntro.css";
import imageintro from "../../Assets/06.webp";
import { Link } from "react-router-dom";
const AboutIntro = () => {
  return (

    <div className="AboutIntro-container">
     
      <h2 className="Head">Who We Are ?</h2>
      <div className="aboutIntroWrap">
        <img src={imageintro} alt="about" className="imageintro" />

        <div className="wrapDetails">
          <h3 className="OtherHeads">Our Vision</h3>
          <span className="abIntroPara">
          <span className="mechfusion">Mechfusion</span> is committed to providing quality professional
            engineering services to enhance the communities where our clients
            live and work. Our approach combines exceptional design, innovative
            solutions, and proven performance.
          </span>
          <h3 className="OtherHeads">Our mission </h3>
          <span className="abIntroPara">
            To be the leading multi discipline Engineering consulting service
            company providing Mechanical Engineering Services. includes Building
            Healthy Client Loyalty,Adopting Optimal Engineering
            Methodologies,Empowering Effective Corporate Communication Endorsing
            Proactive Planning
          </span>
          <Link to={"/services"}>
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
