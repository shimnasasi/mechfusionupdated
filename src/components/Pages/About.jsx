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
        <link rel="canonical" href={`${window.location.origin}/about`} />
        <meta
          name="description"
          content="Mechfusion delivers expert engineering and manufacturing solutions, combining innovation and precision to meet diverse industry needs with unmatched quality."
        />
      </Helmet>
      <PageTop PageName="About us" />
      <AboutBanner />
      <AboutIntro />
      <HomeContact />
    </Layout>
  );
};

export default About;
