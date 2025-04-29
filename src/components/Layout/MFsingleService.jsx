import React from "react";
import "./MFsingleService.css";
// import imageintro from "../../Assets/10.jpg";
// import { Link } from "react-router-dom";
import PageTop from "./PageTop";
import { Helmet } from "react-helmet";

const MFsingleService = ({
  para,
  image,
  name,
  service,
  paraSublist,
  title,
  description,
  paralist,
}) => {
  return (
    <div>
      <PageTop PageName={name} />

      <div className="mfcontainer">
        <Helmet>
          {/* <title>{title}</title> */}
          <meta name="description" content={description} />
        </Helmet>
        <div className="AboutIntro-container">
          <h2 className="service-NameHead">{name}</h2>
          <div className="aboutIntroWrap">
            <img src={image} alt={name} className="imgmfpage" />

            <div className="wrapDetails">
              {/* <span className="OtherHeads">Our Vision</span> */}
              <span className="abIntroPara">{para}</span>
            </div>
          </div>
        </div>
        <div className="serviceSublist">
          {paraSublist.map((list, index) => (
           <div>
            {/* <h4>{list.paraId}</h4> */}
            <h3 className="sublistHead">{list.paraHead}</h3>
            <p className="sublistPara">{list.paraContent}</p>
           </div>
          ))}
        </div>

        <div className="serviceWrapper">
          <span className="subHead">{name} Services</span>
          <div className="labelList">
            {service.map((list, index) => (
              <span className="serviceLabel" key={index}>
                {list.service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFsingleService;
