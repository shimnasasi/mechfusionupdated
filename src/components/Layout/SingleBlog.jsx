import React from "react";
import "./SingleBlog.css";
// import singleblog1 from "../../Assets/26.webp";
import Layout from "./Layout";
import PageTop from "./PageTop";
import { useParams } from "react-router-dom";
import { sigleblogPagelist } from "../../utils/singlebloglist";
import { Helmet } from "react-helmet-async";

const SingleBlog = () => {
  const { blogName } = useParams();
  return (
    <Layout>
       <Helmet>
              <link
                rel="canonical"
                href={`${window.location.origin}/services/${blogName}`}
              />
              {/* <link rel="canonical" href={`${window.location.origin}/about`} /> */}
            </Helmet>
      <PageTop PageName="Blog" />
      {sigleblogPagelist
        .filter((item) => item.blogName === blogName)
        .map((list) => (
          <div className="singleblog-container">
            <img className="singleblog-img" src={list.image} alt="" />
            <h2 className="singleblog-heading">{list.blogName}</h2>
            {/* <p className="singleblog-para">{list.content}</p> */}
            <div className="ParaContainer">
              {list.paralist.map((paraList) => (
                 
                  <p key={paraList.paraId}>{paraList.paraContent}</p>
                
                 
              ))}
            </div>
          </div>
        ))}
    </Layout>
  );
};

export default SingleBlog;
