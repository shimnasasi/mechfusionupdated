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
        <div className="mf-layout">

          {/* LEFT SIDEBAR */}
          {/* LEFT SIDEBAR */}
          <div className="mf-sidebar">
            <h3 className="sidebar-title">ELECTRICAL ENGINEERING</h3>

            <div className="sidebar-box-active">
              <h4 className="sidebar-active-head">➜ Electrical Design Services</h4>
              <ul className="sidebar-active-list">
                <li>Electrical Instrumentation</li>
                <li>Electrical Schematic Drawing</li>
                <li>Electronic Circuit Design</li>
                <li>Smart Panel Layout Drawings</li>
                <li>Electrical 2D Drafting</li>
                <li>Electrical Drafting Services</li>
              </ul>
            </div>

            <h4 className="sidebar-head">CAD Conversion</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">CAD Migration</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">2D Drafting and Drawing</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">3D Modeling</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">3D Rendering</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">3D Animation</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">3D SketchUp Modeling</h4>
            <hr className="sidebar-line" />

            <h4 className="sidebar-head">3D Printing Support</h4>
            <hr className="sidebar-line" />
          </div>

          <div>

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


            {/* <div className="serviceWrapper">
              <h3 className="subHead">{name}</h3>
              <div className="labelList">
                {service.map((list, index) => (
                  <h4 className="serviceLabel" key={index}>
                    {list.service}
                  </h4>
                ))}
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MFsingleService;
