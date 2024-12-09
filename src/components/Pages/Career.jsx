import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import HomeContact from "../Layout/HomeContact";
import "./Career.css";

const Career = () => {
  return (
    <Layout>
      <PageTop PageName="Career" />
      <div className="CareerContainer">
        <div className="careerIntroWrapper">
          {" "}
          <span className="careerHead">MECHFUSION</span>
          <br />
          <span className="Careerintro">
            At <span className="mechfusion">Mechfusion</span>, we believe in
            fostering a culture of innovation, collaboration, and growth. Our
            team thrives on creativity and the drive to solve complex challenges
            with cutting-edge engineering solutions. We value integrity,
            diversity, and a commitment to excellence in everything we do. By
            creating an environment where ideas are welcomed, skills are honed,
            and contributions are celebrated, we empower our team to achieve
            their full potential. At Mechfusion, every voice matters, and
            together, we shape a future of endless possibilities. Join us and be
            part of a dynamic journey where your talent makes a difference!
          </span>
        </div>
        <span className="applyLine">
          "To apply, send your resume and a cover letter to
          enquiry.mechfusion@gmail.com. Please mention the job title in the subject
          line."
        </span>
      </div>
      <HomeContact />
    </Layout>
  );
};

export default Career;
