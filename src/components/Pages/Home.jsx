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
          <link rel="canonical" href={`${window.location.origin}/`} />
          <meta
            name="description"
            content="Mechfusion delivers expert engineering and manufacturing solutions, combining innovation and precision to meet diverse industry needs with unmatched quality."
          />
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
