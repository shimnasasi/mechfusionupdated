import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-mainWrapper">
      <div className="footer-container">
        <div className="NavigationFooter">
          <div className="mffootwrapper">
            <span className="FooterMainHead">
              Mech<span className="fusion">Fusion</span>
            </span>
            <span>Engineering Solutions</span>
          </div>
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
          <h2>Navigation Links</h2>
          <div className="navLinks">
            <Link to={"/services/1"}>Mechanical Design</Link>
            <Link to={"/services/2"}>CNC Programming</Link>
            <Link to={"/services/3"}>Engineering Documentation</Link>
            <Link to={"/services/4"}>Other Services</Link>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Contact</h2>
          <div className="navLinks">
            <span>+91-9904130316</span>
            <a className="mailid" rel="noreferrer" href="mailto:info@dimark.ae">
              enquiry.mechfusion@gmail.com
            </a>
            <div className="footSocioLinks">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/mechfusion/"
              >
                <FaLinkedin />
              </a>
              <FaXTwitter />
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/MechfusionEngineeringSolutions"
              >
                <FaFacebookSquare />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/mechfusion_/"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
