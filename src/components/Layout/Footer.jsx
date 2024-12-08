import React from "react";
import "./Footer.css";
// import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-mainWrapper">
      <div className="footer-container">
        <div className="footer-mainDetails">
          <h1>MechFusion</h1>
          <p>Engineering Solutions</p>
        </div>

        <div className="NavigationFooter">
          <h2>Navigation Links</h2>
          <div className="navLinks">
            <Link to={"/"}>home</Link>
            <Link to={"/about"}>about us</Link>
            <Link to={"/services"}>services</Link>
            <Link to={"/contact"}>contact us</Link>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Information</h2>
          <div className="navLinks">
            <span>
              Yelahanka Newtown <br /> Bangalore <br /> Karnataka India – 560064
            </span>
            <br />
            <div className="iconGroup">
              <a title="instagram" href="https://instagram.com/">
                <FaInstagram />
              </a>
              <a title="facebook" href="https://instagram.com/">
                <FaFacebookSquare />
              </a>
              <a title="LinkedIn" href="https://instagram.com/">
                <FaLinkedin />
              </a>
              <a title="twitter" href="https://instagram.com/">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Contact</h2>
          <div className="navLinks">
            <span>+91-9562465095</span>
            <a className="mailid" href="mailto:info@dimark.ae">
            enquiry.mechfusion@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* <hr />

      <p className="copyright">
        Copyright @ Dimark.ae |Dimark Marketing Management LLC
      </p> */}
    </div>
  );
};

export default Footer;
