import React from "react";
import "./HomeServices.css";
import { homeServiceList } from "../../utils/HomeService";
import HSCard from "./HSCard";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="HomeServices-Container">
      <span className="HomeserviceHead">Our Services</span>
      <br />
      <span className="homeservicePara">
        <span className="mechfusion">Mechfusion</span> provides expert
        engineering services, specializing in precision design, prototyping, and
        manufacturing. Using advanced technology, we deliver innovative
        solutions tailored to your needs. Trust us to streamline your processes
        and bring your ideas to life.
      </span>
      <div className="HomeserviceWrapper">
        {homeServiceList.map((HS) => (
          <Link to={`/services/${HS.id}`} key={HS.id}>
            <HSCard image={HS.image} name={HS.servicesName}  />
          </Link>
        ))}
      </div>
      <Link to={"/services "}>
        <button>Services</button>
      </Link>
    </div>
  );
};

export default HomeServices;
