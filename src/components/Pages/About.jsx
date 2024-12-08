import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
// import AboutVisionMission from "../Layout/AboutVisionMission";
import AboutIntro from "../Layout/AboutIntro";
import AboutBanner from "../Layout/AboutBanner";
import HomeContact from "../Layout/HomeContact";

const About = () => {
  return (
    <Layout>
      <PageTop PageName="About us"/>
      <AboutBanner/>
      <AboutIntro/>
      {/* <AboutVisionMission/> */}
      <HomeContact/>
    </Layout>
  );
};

export default About;
