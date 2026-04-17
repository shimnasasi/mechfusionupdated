import React from "react";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import { Helmet } from "react-helmet-async";
import ServiceBanner from "../Layout/ServiceBanner";
import HomeContact from "../Layout/HomeContact";
import MechanicalDesign from "../Layout/MechanicalDesign";

const Services = () => {
  return (
    <div>
    {/* <Layout> */}
      <Helmet>
        <title>Manufacturing Drawings & DFM Services – At Mechfusion</title>
        <link rel="canonical" href={`${window.location.origin}/services`} />
        <meta
          name="description"
          content="Get detailed manufacturing drawings and DFM services to reduce errors, improve design quality, and meet industry production standards"
        />
        <meta name="keywords" content="Manufacturing Drawings,Design for Manufacturing (DFM)" />
      </Helmet>
      {/* <ServiceBanner /> */}
      {/* <Sidebar /> */}
      <MechanicalDesign/>
      {/* <HomeContact /> */}
    {/* </Layout> */}
    </div>
  );
};

export default Services;
