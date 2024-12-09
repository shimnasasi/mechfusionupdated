import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import SideIcons from "./SideIcons";

const NavBar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="NavBar-container">
      <Link to={"/"}>
        <span className="navHead">
          Mech<span className="mfusion">Fusion</span>
        </span>
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
          <Link to={"/contact"}>
            <li>Contact us</li>
          </Link>
          <div className="listaddons">
            <h1>MF</h1>

            <div className="navbar-socio-Links">
              <a href="https://www.facebook.com/share/158CHpRx3o/">
                <FaFacebookSquare className="icon" />
              </a>
              <a href="https://www.instagram.com/dimark_marketing_management/">
                <FaInstagram className="icon" />
              </a>
              <a href="https://x.com/DimarkMM">
                <FaXTwitter className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/dimark-marketing-management-llc/">
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
