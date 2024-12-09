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
            <span>+91-9562465095</span>
            <a className="mailid" href="mailto:info@dimark.ae">
            enquiry.mechfusion@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
