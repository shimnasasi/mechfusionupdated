import React from "react";
import "./HomeContact.css";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="HomeContactContainer">
      <div className="contactWrapper">
        <div className="contactInfo">
          <h5 className="HomecontactHead">
            Interested in working with us?
          </h5>
          <h6 className="HomeContactPara">Let`s Talk Now</h6>
        </div>
        <Link to={"/contact"}>
          <button>Contact </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContact;
