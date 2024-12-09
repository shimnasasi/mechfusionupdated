import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeServices from "../Layout/HomeServices";
import HomeContact from "../Layout/HomeContact";
import HomeAbout from "../Layout/HomeAbout";

const Home = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <HomeAbout/>
        <HomeServices/>
        <HomeContact/>
      </>
    </Layout>
  );
};

export default Home;
