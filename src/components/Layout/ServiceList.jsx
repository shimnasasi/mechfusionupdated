import React from "react";
import "./ServiceList.css";
import mechanicalDesign from "../../Assets/22.webp";

const ServiceList = () => {
  return (
    <div className="ServiceList-Container">
      <div className="ServiceCard">
        <img src={mechanicalDesign} alt="" />
        <div className="serviceCardDeatils">
          <span className="head">Mechanical Design</span>
          <span className="para">
            <span>Jigs and Fixtures</span>
            <span>Moulds</span>
            <span>Product Design</span>
            <span>Gauges</span>
            <span>Electrode Design</span>
            <span>Sheet metal</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
