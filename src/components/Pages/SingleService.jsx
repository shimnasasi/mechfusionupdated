import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import { serviceData } from "../../utils/singleServiceList";
import ServiceBanner from "../Layout/ServiceBanner";
import HomeContact from "../Layout/HomeContact";

const SingleService = () => {
  const { servicename } = useParams();

  const activeService =
    serviceData.find(item => item.urlname === servicename) ||
    serviceData[0];

  return (
    <Layout>
      <Helmet>
        <title>{activeService.title}</title>
        <meta
          name="description"
          content={activeService.description}
        />
        <meta
          name="keywords"
          content={activeService.keyword}
        />
        <link
          rel="canonical"
          href={`${window.location.origin}${activeService.path}`}
        />
      </Helmet>
      <ServiceBanner />
      <Sidebar />
      <HomeContact />
    </Layout>
  );
};

export default SingleService;
