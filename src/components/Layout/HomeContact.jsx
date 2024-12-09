import React from "react";
import "./HomeContact.css";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="HomeContactContainer">
      <div className="contactWrapper">
        <div className="contactInfo">
          <span className="HomecontactHead">
            Interested in working with us?
          </span>
          <span className="HomeContactPara">Let`s Talk Now</span>
        </div>
        <Link to={"/contact"}>
          <button>Contact </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContact;
