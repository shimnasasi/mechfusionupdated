import React from "react";
import "./MFsingleService.css";
// import imageintro from "../../Assets/10.jpg";
// import { Link } from "react-router-dom";
import PageTop from "./PageTop";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MFsingleService = ({
  
  para,
  image,
  name,
  service,
  paraSublist,
  title,
  description,
  // paralist,
  // wordToBold,
  heading,
  keyword
}) => {
  return (
    <div>
      <PageTop PageName={name} />

      <div className="mfcontainer">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
           <meta name="keywords" content={keyword} />
        </Helmet>
        <div className="AboutIntro-container">
          <h2 className="service-NameHead">{heading}</h2>
          <div className="aboutIntroWrap">
            <img src={image} alt={name} className="imgmfpage" />

            <div className="wrapDetails">
              {/* <span className="OtherHeads">Our Vision</span> */}
              <h3 className="abIntroPara">{para}</h3>
            </div>
          </div>
        </div>
        <div className="serviceSublist">
          {paraSublist.map((list, index) => (
            <div>
              {/* <h4>{list.paraId}</h4> */}
              <h2 className="sublistHead">
                {/* <Link to={list.link}>{list.paraHead}</Link> */}
              </h2>
              <h2 className="sublistHead">{list.paraHead}</h2>
              <h4 className="sublistPara">
                {/* <p className="sublistPara"> */}
                {list.paraContent.split(list.linkText)[0]}
                <Link to={list.linkTo}>{list.linkText}</Link>
                {/* <strong>{list.wordToBold}</strong> */}
                {list.paraContent.split(list.linkText)[1]}
                {/* {list.paraContent.split(list.wordToBold)[0]}
                  <strong>{list.wordToBold}</strong>
                  {list.paraContent.split(list.wordToBold)[1]} */}
                {/* </p> */}
              </h4>
            </div>
          ))}
        </div>
2
        <div className="serviceWrapper">
          <h3 className="subHead">{name}</h3>
          <div className="labelList">
            {service.map((list, index) => (
              <h4 className="serviceLabel" key={index}>
                {list.service}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MFsingleService;
