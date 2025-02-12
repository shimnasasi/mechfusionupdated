import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import SideIcons from "./SideIcons";
import mfLogo from '../Assets/LOGO/logo.png';
// import mflogo1 from '../Assets/LOGO/'

const NavBar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="NavBar-container">
      <Link to={"/"}>
      <img src={mfLogo} alt="mechfusionLogo" className="logomf" />
        {/* <div className="mfNavHeadWrapper">
          <div className="mech1">
            Mech<span className="fusion1">fusion</span>
          </div>
          <span className="esWrapper">e n g i n e e r i n g <span className="solution">s o l u t i o n s</span> </span>
        </div> */}
      </Link>
      <FaBars
        className="navIcon"
        onClick={() => {
          setView(!view);
        }}
      />
      {view ? (
        <ul className="listmob">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
          <Link to={"/services"}>
            <li>Services</li>
          </Link>
          <Link to={"/career"}>
            <li>Career</li>
          </Link>
          <Link to={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact us</li>
          </Link>
          <div className="listaddons">
            <span className="navHead">
              Mech<span className="mfusion">Fusion</span>
            </span>
            <br />

            <div className="navbar-socio-Links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/MechfusionEngineeringSolutions"
              >
                <FaFacebookSquare className="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/mechfusion_/"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/mechfusion_/"
              >
                <FaXTwitter className="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/mechfusion/"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </ul>
      ) : null}
      <div className="listdesk">
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/services"}>services</Link>
        <Link to={"/career"}>career</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>contact us</Link>
        {/* <button className="navBtn">
          <RiPhoneFill /> call
        </button> */}
      </div>
      <SideIcons />
    </div>
  );
};

export default NavBar;
