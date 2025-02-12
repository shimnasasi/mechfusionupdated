import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
const PageNotFound = () => {
  return (
    <Layout>
    <div className="pagenotFound-container">
      <div className="HomeBannerShadow">
        {/* <span className="BannerSmallHead">Mechfusion</span> */}
        <div className="pagenotFound">404</div>
        <span className="oops">Oops!</span>
        <span className="bannerMainPara">
         We're Sorry,Something is Not Working Here
        </span>
        <br />
        <Link to={"/"}>
          <button>Go Back To Home </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
};

export default PageNotFound;
