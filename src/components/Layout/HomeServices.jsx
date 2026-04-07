import React from "react";
import "./HomeServices.css";
import { homeServiceList } from "../../utils/HomeService";
import HSCard from "./HSCard";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="HomeServices-Container">
      <h2 className="HomeserviceHead">Our Services</h2>
      <br />
      <span className="homeservicePara">
        <span className="mechfusion">Mechfusion</span> delivers professional engineering services focused on precision, reliability, and manufacturability. By combining technical expertise with modern engineering tools, we help streamline development processes and bring ideas to life with confidence.
      </span>
      <div className="HomeserviceWrapper">
        {homeServiceList.map((HS) => (
          <Link to={`/services/${HS.urlname}`}
           key={HS.servicesName}>
            <HSCard image={HS.image} 
            name={HS.servicesName} 
            alttext={HS.alttext} 
              para={HS.para}
            urlname={HS.urlname}  />
          </Link>
        ))}
      </div>
      <Link to={"/services "}>
        <button> View All Services</button>
      </Link>
    </div>
  );
};

export default HomeServices;
