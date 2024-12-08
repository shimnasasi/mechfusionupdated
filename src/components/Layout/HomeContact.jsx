import React from "react";
import "./HomeContact.css";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="HomeContactContainer">
      <div className="contactWrapper">
        <span className="HomecontactHead">Interested in working with us?</span>
        <span className="HomeContactPara">Let`s Talk Now</span>

        <Link to={"/contact"}>
          <button class="HomeContactBtn">Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContact;
