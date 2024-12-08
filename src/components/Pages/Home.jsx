import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeServices from "../Layout/HomeServices";
import HomeContact from "../Layout/HomeContact";

const Home = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <HomeServices/>
        <HomeContact/>
      </>
    </Layout>
  );
};

export default Home;
