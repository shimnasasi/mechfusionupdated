import React from "react";
import "./ServiceList.css";
// import { servicelist } from "../../utils/servicesList";
import { Link } from "react-router-dom";
import design from "../../Assets/mechanicaldesign.webp";
import documentation from "../../Assets/engineeringdocumentation.webp";
import others from "../../Assets/others.webp";
import cnc from "../../Assets/cncprogramming.jpg";
// import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <div className="ServiceList-Container">
      <div className="serviceWrapper">
        <h2 className="mainhead">Mechfusion</h2>
        <h4 className="wrapperpara">
          With years of expertise in the industry, we pride ourselves on
          delivering innovative solutions that streamline your production
          processes and bring your ideas to life with precision and efficiency.
          Our dedicated team of skilled professionals utilizes cutting-edge
          technology and software to deliver <strong> high-quality designs </strong> prototyping,
          and <strong>  manufacturing services </strong> that exceed expectations. We are committed
          to provide personalized attention and customized solutions to help you
          achieve your goals.
        </h4>
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
              <img className="designimg" src={design} alt="mechanical-design" />
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
              <img className="designimg" src={cnc} alt="cnc-programming" />
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
              <img
                className="designimg"
                src={documentation}
                alt="engineering-documentation"
              />
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
              <img className="designimg" src={others} alt="other Services" />
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
      <div className="whycontainer">
        <p className="servicepara">
          Engaged for long years in the industry, we have always taken pride in
          serving globally <strong>recognized CAD CAM services </strong> to clients across the
          globe, including the U.S., Canada, Australia, or Europe. we proudly
          present our innovative solutions to refine your entire production
          processes, making them much more technically capable of bringing your
          idea to life with definite finesse and efficiency. The company that
          designs and prototypes beyond the norm makes sure that an extremely
          well-trained staff of professionals carries out the task using
          state-of-the-art technology and software solutions. Customer-centric
          solutions are offered depending upon the demands of the customers with
          special attention to fulfill all requirements.
        </p>
        <h3>Why Us?</h3>
        <ul>
          <li>🌍 Global Reach: Successfully completed projects worldwide </li>
          <li>
            🧠 Expert Team: A highly qualified and experienced team of
            mechanical engineers
          </li>
          <li>
            💼 10+ Years of Experience: Proven track record of delivery in
            engineering excellence
          </li>
        </ul>
        <p>
          With deep domain knowledge and technical expertise, we offer the
          following services
        </p>
        <ul>
        <Link to={"/services/mechanical-design"}>
          <li>Mechanical design</li></Link>
          <Link to={"/services/cnc-programming"}>
          <li> CNC Programming</li></Link>
          <Link to={"/services/engineering-documentation"}>
          <li> Engineering documentation</li></Link>
          <Link to={"/services/other-services"}>
          <li>Other services</li></Link>

        </ul>
        <h3>End-to-End Support for Engineering Projects</h3>
        <p className="servicepara">
          This company puts everything in its place and manages a project from
          conception to reality during <strong> mechanical engineering </strong> , designing,
          detailing, and drafting with professionalism and precision. Such agile
          workflows help communication, ensure timely delivery of projects, and
          make cost-effective solutions possible.
        </p>
        <h3>Let's Build Something Great Together </h3>
        <p className="servicepara">
          Are you looking for engineering services you can trust to translate
          your concept into a product? Reach out to us for a conversation about
          your next project!
        </p>
      </div>
    </div>
  );
};

export default ServiceList;
