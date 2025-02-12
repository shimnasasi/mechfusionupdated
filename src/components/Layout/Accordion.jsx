
import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) =>
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            <span className="accordHead" >
              {item.title}
            </span >
            <span>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`accordion-content ${activeIndex === index
              ? "open"
              : ""}`}
          >
            <p>
              {item.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
