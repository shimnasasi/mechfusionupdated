import React from "react";
import "./HSCard.css";

const HSCard = ({ image, name,alttext,para }) => {
  return (
    <div className="HSCardContainer">
      <img src={image} alt={alttext} className="HSimg" title={name} />
      <h3 className="Hshead">{name}</h3>
      <p className="para">{para}</p>
    </div>
  );
};

export default HSCard;
