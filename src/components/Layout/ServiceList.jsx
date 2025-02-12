import React from "react";
import "./ServiceList.css";
// import { servicelist } from "../../utils/servicesList";
import { Link } from "react-router-dom";
import design from "../../Assets/mechanicaldesign.webp";
import documentation from "../../Assets/engineeringdocumentation.webp";
import others from "../../Assets/others.webp";
import cnc from "../../Assets/cncprogramming.jpg";

const ServiceList = () => {
  return (
    <div className="ServiceList-Container">
      <div className="serviceWrapper">
        <span className="mainhead">Mechfusion</span>
        <p>
          With years of expertise in the industry, we pride ourselves on
          delivering innovative solutions that streamline your production
          processes and bring your ideas to life with precision and efficiency.
          Our dedicated team of skilled professionals utilizes cutting-edge
          technology and software to deliver high-quality designs, prototyping,
          and manufacturing services that exceed expectations. We are committed
          to provide personalized attention and customized solutions to help you
          achieve your goals.
        </p>
        {/* {servicelist.map((service) => (
          <Link to={`/services/${service.id}`} className="cardLink">
          <div className="ServiceCard">
            <img src={service.image} alt="" key={service.id} />
            <div className="serviceCardDeatils">
              <span className="head">{service.serviceName}</span>
              <span className="para">
                {service.services.map((list) => (
                  <li key={list.serviceID}>{list.subService}</li>
                ))} */}
        {/* <Link
                  className="servicePageLink"
                  to={`/services/${service.id}`}
                >
                  <span>Explore More</span>
                </Link> */}
        {/* </span>
            </div>
          </div>
          </Link>
        ))} */}

        <div className="servicelist">
          <Link to={"/services/mechanical-design"}>
            <div className="mechanicaldesign">
              <img className="designimg" src={design} alt="" />
              <div className="design">
                <div className="h11">Mechanical Design</div>
                <div className="list">
                  <ul className="service-ul">
                    <li>Jigs and Fixtures</li>
                    <li>Moulds</li>
                    <li>Product Design</li>
                    <li>Gauges</li>
                    <li>Electrode Design</li>
                    <li>Sheet metal</li>
                    <li>2D to 3D Conversion</li>
                    <li>Conceptual Design</li>
                  </ul>
                  <ul className="service-ul">
                    <li>Legacy Data Migration</li>

                    <li>Reverse Engineering</li>
                    <li>Mechanism Designs</li>
                    <li>Prototype Design</li>
                    <li>Machining Stage drawings</li>
                    <li>VAVE Design</li>
                    <li>R&D Design</li>
                    <li>3D to 2D Detailing or Manufacturing Drawing</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/services/cnc-programming"}>
            <div className="cncProgramming">
              <img className="designimg" src={cnc} alt="" />
              <div className="design">
                <div className="h11">CNC Programming</div>
                <div className="list">
                  <ul className="service-ul">
                    <li>Milling</li>
                    <li>Turning</li>
                    <li>CAM Sheet Generation</li>
                    <li>Prototype Support</li>
                    <li>CNC Process Planning</li>
                    <li>CNC Programming Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/services/engineering-documentation"}>
            <div className="cncProgramming">
              <img className="designimg" src={documentation} alt="" />
              <div className="design">
                <div className="h11">Engineering Documentation</div>
                <div className="list">
                  <ul className="service-ul">
                    <li>Work Instruction (WI)</li>
                    <li>Standard Operation Procedure</li>
                    <li>Control Plan</li>
                    <li>Setup Approval Sheet</li>
                    <li>CAM Sheet</li>
                    <li>Inspection Plan / Inspection Report</li>
                    <li>Document Digitalization</li>
                    <li>Design For Manufacturing (DFM)</li>
                    <li>PPT Presentations</li>
                    <li>First Article Inspection Report (FAIR)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/services/other-services"}>
            <div className="cncProgramming">
              <img className="designimg" src={others} alt="" />
              <div className="design">
                <div className="h11">Other Services</div>
                <div className="list">
                  <ul className="service-ul">
                    <li>Mould Flow Analysis</li>
                    <li>Part Costing</li>
                    <li>Fixture Costing</li>
                    <li>Prototype Manufacturing Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
