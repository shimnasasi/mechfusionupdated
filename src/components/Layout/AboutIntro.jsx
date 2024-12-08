import React from "react";
import "./AboutIntro.css";
import imageintro from "../../Assets/06.jpg";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <div className="AboutIntro-container">
      <span className="Head">Who We Are ?</span>
      <div className="aboutIntroWrap">
        <img src={imageintro} alt="" className="imageintro" />

        <div className="wrapDetails">
          <span className="OtherHeads">Our Vision</span>
          <span className="abIntroPara">
            Mechfusion is committed to providing quality professional
            engineering services to enhance the communities where our clients
            live and work. Our approach combines exceptional design, innovative
            solutions, and proven performance.
          </span>
          <span className="OtherHeads">Our mission </span>
          <span className="abIntroPara">
            To be the leading multi discipline Engineering consulting service
            company providing Mechanical Engineering Services. includes Building
            Healthy Client Loyalty,Adopting Optimal Engineering
            Methodologies,Empowering Effective Corporate Communication Endorsing
            Proactive Planning
          </span>
          <Link to={"/contact"}>
            <button>Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
