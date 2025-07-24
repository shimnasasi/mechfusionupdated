import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeServices from "../Layout/HomeServices";
import HomeContact from "../Layout/HomeContact";
import HomeAbout from "../Layout/HomeAbout";
import HomeAccordion from "../Layout/HomeAccordion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>Mechanical Design Service for Products | Mechfusion  </title>
          <link rel="canonical" href={`${window.location.origin}/`} />
          <meta
            name="description"
            content="Mechfusion offers expert product design backed by mechanical engineering to turn your ideas into accurate, manufacturable solutions."
          />
          <meta name="keywords" content="Product Design" />
        </Helmet>
        <HomeBanner />
        <HomeAbout />
        <HomeServices />
        <HomeAccordion />
        <HomeContact />
      </>
    </Layout>
  );
};

export default Home;
