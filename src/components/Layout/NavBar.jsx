import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaBars } from "react-icons/fa6";
import SideIcons from "./SideIcons";
import mfLogo from "../Assets/LOGO/logo.png";

const NavBar = () => {
  const [view, setView] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="NavBar-container">
      <Link to="/">
        <img src={mfLogo} alt="mechfusionLogo" className="logomf" />
      </Link>

      {/* Mobile Icon */}
      <FaBars className="navIcon" onClick={() => setView(!view)} />

      {/* Mobile Menu */}
      {view && (
        <ul className="listmob">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/services"><li>Services</li></Link>
          <Link to="/career"><li>Career</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/contact"><li>Contact us</li></Link>

          <div className="listaddons">
            <div className="navbar-socio-Links">
              <a href="https://www.facebook.com/MechfusionEngineeringSolutions" target="_blank" rel="noreferrer">
                <FaFacebookSquare className="icon" />
              </a>
              <a href="https://www.instagram.com/mechfusion_/" target="_blank" rel="noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/mechfusion/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>
              <FaXTwitter className="icon" />
            </div>
          </div>
        </ul>
      )}

      {/* Desktop Menu */}
      <div className="listdesk">
        <Link to="/" className="listdeskone">Home</Link>
        <Link to="/about" className="listdeskone">About us</Link>

        {/* Services Dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <span className="dropdown-title"><Link to="/services">Services ▾</Link></span>

          {showServices && (
            <div className="dropdown-menu">
              <Link to="/services/mechanical-design">Mechanical Design</Link>
              <Link to="/services/cnc-programming">CNC Programming</Link>
              <Link to="/services/engineering-documentation">Engineering Documentation</Link>
              <Link to="/services/other-services">Other Services</Link>
            </div>
          )}
        </div>
        {/* <Link to="/services" className="listdeskone">Services</Link> */}
        <Link to="/career" className="listdeskone">Career</Link>
        <Link to="/blog" className="listdeskone">Blog</Link>
        <Link to="/contact" className="listdeskone">Contact us</Link>
      </div>

      <SideIcons />
    </div>

  );
};

export default NavBar;