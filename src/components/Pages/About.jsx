import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
// import AboutVisionMission from "../Layout/AboutVisionMission";
import AboutIntro from "../Layout/AboutIntro";
import AboutBanner from "../Layout/AboutBanner";
import HomeContact from "../Layout/HomeContact";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>

          Reverse Engineering Design & Cost Estimation Experts| Mechfusion</title>
        <link rel="canonical" href={`${window.location.origin}/about`} />
        <meta
          name="description"
          content="Offering reverse engineering design and cost estimation services to deliver accurate, efficient, and high-quality project outcomes."
        />

        <meta name="keywords" content="Reverse Engineering Design" />
      </Helmet>
      <PageTop PageName="About us" />
      <AboutBanner />
      <AboutIntro />
      <HomeContact />
    </Layout>
  );
};

export default About;
