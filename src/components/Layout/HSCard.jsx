import React from "react";
import "./HSCard.css";

const HSCard = ({ image, name,alttext }) => {
  return (
    <div className="HSCardContainer">
      <img src={image} alt={alttext} className="HSimg" title={name} />
      <span className="Hshead">{name}</span>
    </div>
  );
};

export default HSCard;
