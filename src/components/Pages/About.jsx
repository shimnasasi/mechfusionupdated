import React from "react";
import Layout from "../Layout/Layout";
// import PageTop from "../Layout/PageTop";
// import AboutVisionMission from "../Layout/AboutVisionMission";
import AboutIntro from "../Layout/AboutIntro";
import AboutBanner from "../Layout/AboutBanner";
import HomeContact from "../Layout/HomeContact";
import { Helmet } from "react-helmet-async";
import AboutBanner1 from "../Layout/AboutBanner1";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Mechfusion | Engineering Design & Consulting Services</title>
         <meta property="og:title" content="Reverse Engineering Design & Cost Estimation Experts| Mechfusion" />
        <link rel="canonical" href={`${window.location.origin}/about`} />
        <meta
          name="description"
          content=" Mechfusion transforms ideas into accurate, manufacturable designs through precision engineering, innovative solutions, and professional consulting services."
        />

        <meta name="keywords" content="Reverse Engineering Design" />
      </Helmet>
      {/* <PageTop PageName="About us" /> */}
      <AboutBanner1/>
      <AboutBanner />
      <AboutIntro />
      <HomeContact />
    </Layout>
  );
};

export default About;
