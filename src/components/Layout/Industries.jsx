import React from "react";
import "./Industries.css";
import {
  FaIndustry,
  FaCar,
  FaBoxOpen,
  FaCogs,
  FaRobot,
  FaPlane
} from "react-icons/fa";

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">

        <div className="industries-header">
          <h2>Industries We Support</h2>
          <p>
            We support a wide range of industries with precision-focused,
            manufacturing-ready engineering solutions.
          </p>
        </div>

        <div className="industries-grid">

          <div className="industry-card">
            <div className="industry-icon"><FaIndustry /></div>
            <h3>Industrial Equipment & Machinery</h3>
          </div>

          <div className="industry-card">
            <div className="industry-icon"><FaCar /></div>
            <h3>Automotive & EV Components</h3>
          </div>

          <div className="industry-card">
            <div className="industry-icon"><FaBoxOpen /></div>
            <h3>Consumer & Commercial Products</h3>
          </div>

          <div className="industry-card">
            <div className="industry-icon"><FaCogs /></div>
            <h3>Manufacturing & Fabrication</h3>
          </div>

          <div className="industry-card">
            <div className="industry-icon"><FaRobot /></div>
            <h3>Automation & General Engineering</h3>
          </div>

          <div className="industry-card">
            <div className="industry-icon"><FaPlane /></div>
            <h3>Aerospace, Medical & Defence</h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Industries;