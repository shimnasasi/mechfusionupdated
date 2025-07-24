import React from "react";
import "./Blog.css";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
// import blog1 from "../../Assets/18.jpg";
import HomeContact from "../Layout/HomeContact";
import { blogPagelist } from "../../utils/bloglist";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title></title>
        <link rel="canonical" href={`${window.location.origin}/blog`} />
        <meta
          name="description"
          content="Mechfusion delivers expert "
        />
        <meta name="keywords" content="Design for Manufacturing (DFM)" />
      </Helmet>
      <PageTop PageName="Blog" />
      <div className="blog-container">
        <div className="blog-card">
          {blogPagelist.map((list) => (
            <div className="card">
              <img className="blog-img" src={list.image} alt="" />

              <h3>{list.blogheading}</h3>
              <p className="card-para">{list.content}</p>

              <Link to={"/blog/" + list.blogName}>
                <button className="card-button">ReadMore</button>
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="blog-card">
          <img className="blog-img" src={blog1} alt="" />
          <div className="card">
            <h3>Mechanical Design</h3>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="card-button">ReadMore</button>
          </div>
        </div> */}
        {/* <div className="blog-card">
          <img className="blog-img" src={blog1} alt="" />
          <div className="card">
            <h3>Mechanical Design</h3>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="card-button">ReadMore</button>
          </div>
        </div> */}
      </div>
      <HomeContact />
    </Layout>
  );
};

export default Blog;
