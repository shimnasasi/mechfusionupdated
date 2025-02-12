import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import mfLogo from '../Assets/LOGO/logo.png';

const Footer = () => {
  return (
    <div className="footer-mainWrapper">
      <div className="footer-container">
        <Link to={"/"}>
        <img src={mfLogo} alt="mechfusionLogo" className="logomf" />
               {/* <div className="mfNavHeadWrapper">
                 <div className="mech1">
                   Mech<span className="fusion1">fusion</span>
                 </div>
                 <span className="esWrapper">e n g i n e e r i n g <span className="solution">s o l u t i o n s</span> </span>
               </div> */}
             </Link>
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
          <h2>Services</h2>
          <div className="navLinks">
            <Link to={"/services/mechanical-design"}>Mechanical Design</Link>
            <Link to={"/services/cnc-programming"}>CNC Programming</Link>
            <Link to={"/services/engineering-documentation"}>Engineering Documentation</Link>
            <Link to={"/services/other-services"}>Other Services</Link>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Contact</h2>
          <div className="navLinks">
            <span>+91 879 222 0030</span>
            <a className="mailid" rel="noreferrer" href="mailto:info@dimark.ae">
            enquiry@mechfusion.in

            </a>
            <div className="footSocioLinks">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/mechfusion/"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://x.com/Mechfusion30088"
              >
              <FaXTwitter />
              </a>
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
