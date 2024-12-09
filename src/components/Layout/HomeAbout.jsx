import React from "react";
import "./HomeAbout.css";
import homeaboutimg from "../../Assets/5.jpg";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="AboutIntro-container">
      {/* <span className="Head">Who We Are ?</span> */}
      <div className="aboutIntroWrap">
        <img src={homeaboutimg} alt="" className="homeaboutimg" />

        <div className="wrapDetails">
          <span className="OtherHeads">What we Aimed about?</span>
          <span className="abIntroPara">
          <span className="mechfusion">Mechfusion</span> is your trusted partner for engineering services,
            expertly crafted to address your design and manufacturing
            requirements. With extensive industry experience, we specialize in
            providing innovative solutions that optimize production processes
            and transform your concepts into reality with accuracy and
            efficiency. Our team of skilled professionals leverages
            state-of-the-art technology and software to deliver exceptional
            designs, prototyping, and manufacturing services. Committed to
            excellence, we offer personalized attention and tailored solutions
            to help you achieve your objectives seamlessly.
          </span>

          <Link to={"/about"}>
            <button>About us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
