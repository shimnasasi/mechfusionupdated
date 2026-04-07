import React from "react";
import "./ServiceSidebanner.css";

const data = [
  {
    title: "ARCHITECTURAL ENGINEERING",
    items: [
      "Architectural Drawings",
      "2D & 3D Floor plans",
      "Presentation Drawings",
      "Millwork Drawings",
      "3D Modeling",
      "3D Walk-through Animation",
      "MicroStation Drafting & Modeling",
      "Revit Services",
      "Point Cloud Modeling",
    ],
  },
  {
    title: "Building Information Modeling",
    items: [
      "CAD Conversion",
      "CAD Migration",
      "2D Drafting and Drawing",
      "3D Modeling",
      "3D Rendering",
    ],
  },
];

const ServiceSidebanner = () => {
  return (
    <aside className="service-sidebanner" aria-label="Services sidebar">
      {data.map((section, si) => (
        <div className="service-section" key={si}>
          <h4 className="section-title">{section.title}</h4>
          <ul className="service-list">
            {section.items.map((it, i) => (
              <li
                className={`service-item ${i === 0 && si === 0 ? "first-item" : ""}`}
                key={i}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {it}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default ServiceSidebanner;