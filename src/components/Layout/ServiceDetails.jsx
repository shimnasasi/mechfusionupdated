import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ name, description, img1 }) => {
  return (
    <div className="seviceDetails">
      <div className="ServiceDetalsList">
        <h1>{name}</h1>
        <h3>{description}</h3>
      </div>
      <img className="dImage" src={img1} alt="" />
    </div>
  );
};

export default ServiceDetails;
