import React from "react";
import "./MFsingleService.css";
import imageintro from "../../Assets/10.jpg";
import { Link } from "react-router-dom";
import PageTop from "./PageTop";

const MFsingleService = ({ para, image, name, service }) => {
  return (
    <div className="mfcontainer">
      <div className="AboutIntro-container">
        <span className="service-NameHead">{name}</span>
        <div className="aboutIntroWrap">
          <img src={image} alt="" className="imgmfpage" />

          <div className="wrapDetails">
            {/* <span className="OtherHeads">Our Vision</span> */}
            <span className="abIntroPara">{para}</span>
          </div>
        </div>
      </div>

      <div className="serviceWrapper">
        <span className="subHead">{name} Services</span>
        <div className="labelList">
          {service.map((list) => (
            <span className="serviceLabel" key={list.serviceID}>
              {list.service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MFsingleService;
