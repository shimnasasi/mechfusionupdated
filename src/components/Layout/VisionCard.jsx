import React from "react";
import "./VisionCard.css";
import vision from "../../Assets/8.jpg";

const VisionCard = () => {
  return (
    <div className="VisionCardContainer">
      <div className="VCardWrapper">
        <img src={vision} alt="Vision" />
        <div className="vsionDetails">
          <span className="visionHead">Our Vision</span>
          <span className="VisionPara">
            Mechfusion is committed to providing quality professional
            engineering services to enhance the communities where our clients
            live and work. Our approach combines exceptional design, innovative
            solutions, and proven performance.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
