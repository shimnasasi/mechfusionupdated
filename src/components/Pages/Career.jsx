import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import HomeContact from "../Layout/HomeContact";
import "./Career.css";
import { Helmet } from "react-helmet-async";

const Career = () => {
  return (
    <Layout>
      <Helmet>
        <title>

          Engineering Careers & Mechanical Design Jobs | Mechfusion</title>
        <link rel="canonical" href={`${window.location.origin}/career`} />
        <meta
          name="description"
          content="Explore engineering careers at Mechfusion. Discover mechanical design jobs and grow with our innovative team in the CAD/CAM industry."
        />
        <meta name="keywords" content="Engineering Careers" />
      </Helmet>
      <PageTop PageName="Career" />
      <div className="CareerContainer">
        <div className="careerIntroWrapper">
          {" "}
          <h2 className="careerHead">Mechfusion</h2>
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
        <h4 className="applyLine">
          "To apply, send your resume and a cover letter to
          enquiry@mechfusion.in. Please mention the job title in the subject
          line."
        </h4>
      </div>
      <HomeContact />
    </Layout>
  );
};

export default Career;
