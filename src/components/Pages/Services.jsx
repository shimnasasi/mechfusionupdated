import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import "./Services.css";
import ServiceList from "../Layout/ServiceList";

const Services = () => {
  return (
    <Layout>
      <PageTop PageName="Services" />
      <ServiceList />
    </Layout>
  );
};

export default Services;
