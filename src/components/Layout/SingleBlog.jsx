import React, { useState, useRef, useEffect } from "react";
import "./SingleBlog.css";
import { serviceData } from "../../utils/singleServiceList";
import { sigleblogPagelist } from "../../utils/singlebloglist";
import { MdOutlineArrowRight } from "react-icons/md";
import { useParams, useLocation, Link } from "react-router-dom";
import Layout from "./Layout";
import HomeContact from "./HomeContact";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";


const SingleBlog = () => {
  const { blogName } = useParams();
  const location = useLocation(); // ✅ added

  // 🔹 Find current blog
  const currentBlog = sigleblogPagelist.find(
    item => item.blogName === blogName
  );
  console.log("Param blogName:", blogName);
  console.log("Found blog:", currentBlog);
  const [displayserviceName, setDisplayserviceName] = useState("");
  const contentRef = useRef(null);

  // 🔹 Set service automatically when blog loads
  useEffect(() => {
    if (currentBlog?.relatedService) {
      setDisplayserviceName(currentBlog.relatedService);
    }
  }, [currentBlog]);

  // 🔹 Scroll to top when service changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [displayserviceName]);

  return (
    <Layout>
      <div className="sidebar-container">

        {/* ✅ SEO FIXED */}
        <Helmet>
          <title>{currentBlog?.title}</title>
          <meta
            name="description"
            content={currentBlog?.description}
          />
          <meta name="keywords" content={currentBlog?.keyword} />
          {/* ✅ Correct canonical */}
          <link
            rel="canonical"
            href={`https://mechfusion.in${location.pathname}`}
          />

          {/* Optional but recommended */}
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Mechfusion Engineering Solutions" />
          <meta name="publisher" content="Mechfusion Engineering Solutions" />
        </Helmet>

        <div className="service-main-wrapper">

          {/* ========== LEFT SIDEBAR ========== */}
          <div className="sidebar-wrapper">
            {serviceData
              .filter(service => service.name === displayserviceName)
              .map(service => (
                <div key={service.id}>
                  <div className="mainservice-name active">
                    {service.name}
                  </div>

                  <div className="service-list-container">
                    {service.services.map((s, idx) => (
                      <div key={idx} className="servicename">
                        <MdOutlineArrowRight />
                        {s.service}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* ========== RIGHT CONTENT ========== */}
          <div className="servicecontent-wrapper">
            <h1 ref={contentRef} className="servicename1">
              {currentBlog?.blogheading}
            </h1>

            <div className="servicelist1">
              <img
                src={currentBlog?.image}
                className="blogimgss"
                alt={currentBlog?.blogheading}
              />

              <div className="serviceparagraph">
                {currentBlog?.content}
              </div>
            </div>
            <div>
              {currentBlog?.paralist?.map((sub, idx) => (
                <div key={idx}>
                  <h2 className="subServices">{sub.paraHead}</h2>
                  <p className="subpara">
                    {Array.isArray(sub.paraContent)
                      ? sub.paraContent.map((item, i) => {
                        if (item.type === "link") {
                          return (
                            <Link key={i} to={item.to} className="inline-link">
                              {item.text}
                            </Link>
                          );
                        }

                        if (item.type === "bold") {
                          return (
                            <strong key={i}>{item.text}</strong>
                          );
                        }

                        return <span key={i}>{item.text}</span>;
                      })
                      : sub.paraContent}
                  </p>

                  {sub.subbutton && (
                    <Link to="mailto:enquiry@mechfusion.in?subject=Mechanical Design Requirement" className="servicebtn11">
                      {sub.subbutton}
                    </Link>
                  )}
                  {/* <button>bfdfgdfgdfg</button> */}
                </div>
              ))}

            </div>

            <div className="faqlist">
              <h2 className="faq">{currentBlog?.key}</h2>
              <p>{currentBlog?.keypara}</p>
              {currentBlog?.keylists?.map((section, index) => (
                <div key={index}>

                  <h3 className="subServices">{section.keyhead}</h3>

                  <div className="faqparagraph">

                    {/* ✅ if array */}
                    {Array.isArray(section.keypara) &&
                      section.keypara.map((item, i) => {
                        if (item.type === "text") {
                          return (
                            <span key={i} style={{ whiteSpace: "pre-line" }}>
                              {item.text}
                            </span>
                          );
                        }

                        if (item.type === "link") {
                          return (
                            <Link key={i} to={item.to} className="blogLink">
                              {item.text}
                            </Link>
                          );
                        }

                        return null;
                      })}

                    {/* ✅ if single object */}
                    {!Array.isArray(section.keypara) &&
                      typeof section.keypara === "object" && (
                        <span>{section.keypara.text}</span>
                      )}

                    {/* ✅ if string */}
                    {typeof section.keypara === "string" && (
                      <span>{section.keypara}</span>
                    )}

                  </div>

                </div>
              ))}
              <h2 className="keybutton">
                {currentBlog?.keybutton && (
                  <Link to="mailto:enquiry@mechfusion.in?subject=Mechanical Design Requirement" className="servicebtn11">
                    {currentBlog?.keybutton}
                  </Link>
                )}</h2>
            </div>


            <div>
              {currentBlog?.paralist1?.map((sub1, idx1) => (
                <div key={idx1}>
                  <h2 className="subServices">{sub1.paraHead1}</h2>
                  <p className="subpara">
                    {Array.isArray(sub1.paraContent1)
                      ? sub1.paraContent1.map((item, i) => {
                        if (item.type === "link") {
                          return (
                            <Link key={i} to={item.to} className="inline-link">
                              {item.text}
                            </Link>
                          );
                        }

                        if (item.type === "bold") {
                          return (
                            <strong key={i}>{item.text}</strong>
                          );
                        }

                        return <span key={i}>{item.text}</span>;
                      })
                      : sub1.paraContent1}
                  </p>

                  {sub1.subbutton1 && (
                    <Link to="mailto:enquiry@mechfusion.in?subject=Mechanical Design Requirement" className="servicebtn11">
                      {sub1.subbutton1}
                    </Link>
                  )}
                  {/* <button>bfdfgdfgdfg</button> */}
                </div>
              ))}
            </div>




            <div className="faqlist">
              <h2 className="faq">{currentBlog?.faq}</h2>
              {currentBlog?.faqlists?.map((faq, index) => (
                <div key={index}>

                  <h3 className="subServices">{faq.faqhead}</h3>
                  <div className="faqparagraph">
                    {faq.faqpara}
                  </div>
                </div>
              ))}
            </div>


          </div>


        </div>
      </div>

      <HomeContact />
    </Layout>
  );
};

export default SingleBlog;
