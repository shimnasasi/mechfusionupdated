import React from "react";
import "./Blog.css";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import blog1 from "../../Assets/18.jpg";
import blog2 from "../../Assets/11.jpg"
import blog3 from "../../Assets/02.jpg"
import HomeContact from "../Layout/HomeContact";
import { blogPagelist } from "../../utils/bloglist";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HiArrowCircleRight } from "react-icons/hi";
import BlogBanner from "../Layout/BlogBanner";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title> Engineering Blogs & Manufacturing Insights | Mechfusion</title>

        <link rel="canonical" href={`${window.location.origin}/blog`} />
        <meta
          name="description"
          content="Explore Mechfusion’s engineering blog for insights on CNC programming, mechanical design trends, CAM services, jigs, fixtures, and smart manufacturing updates. "
        />
        <meta name="keywords" content="Design for Manufacturing (DFM),CNC Programming" />
      </Helmet>
      {/* <PageTop PageName="Blog" /> */}
      <BlogBanner />
      <div className="blog-container">


        <Link to="/blog/jigs-fixture-design-services-canada">
          <div className="card">
            <img className="blog-img" src={blog1} alt="" />
            {/* <h3>Mechanical Design</h3> */}
            <p className="card-para"> How Jigs and Fixture Design Services Canada Help CNC Manufacturers Improve Productivity and Accuracy

              <HiArrowCircleRight className="arrowicon" /></p>
            {/* <button className="card-button">ReadMore</button> */}
          </div>
        </Link>



        <Link to="/blog/jigs-fixture-design-services-uk-automotive-aerospace">
          <div className="card">
            <img className="blog-img" src={blog2} alt="" />
            {/* <h3>Mechanical Design</h3> */}
            <p className="card-para">
              How Jigs and Fixture Design Services UK Improve Automotive and Aerospace Manufacturing

              <HiArrowCircleRight className="arrowicon" />
            </p>
            {/* <button className="card-button">ReadMore</button> */}
          </div>
        </Link>

        <Link to="/blog/injection-mold-design-services-cost-effective-manufacturing">
          <div className="card">
            <img className="blog-img" src={blog3} alt="" />
            {/* <h3>Mechanical Design</h3> */}
            <p className="card-para">
              Injection Mold Design Services for Cost-Effective Manufacturing


              <HiArrowCircleRight className="arrowicon" />
            </p>
            {/* <button className="card-button">ReadMore</button> */}
          </div>
        </Link>


        {/* <div className="blog-card">
          <div className="card">
            <img className="blog-img" src={blog3} alt="" />

            <p className="card-para">
              Choosing the Right Mold Design Services in USA: Key Factors, Costs, and Industry Best Practices<HiArrowCircleRight className="arrowicon" />
            </p>

          </div>
        </div> */}
      </div>
      <HomeContact />
    </Layout>
  );
};

export default Blog;
