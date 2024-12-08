import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import "./Services.css";
import ServiceList from "../Layout/ServiceList";
import HomeContact from "../Layout/HomeContact";

const Services = () => {
  return (
    <Layout>
      <PageTop PageName="Services" />
      <ServiceList />
      <HomeContact/>
    </Layout>
  );
};

export default Services;
