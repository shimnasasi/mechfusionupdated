import React from "react";
import "./HSCard.css";

const HSCard = ({ image, name }) => {
  return (
    <div className="HSCardContainer">
      <img src={image} alt="" className="HSimg" />
      <span className="Hshead">{name}</span>
    </div>
  );
};

export default HSCard;
