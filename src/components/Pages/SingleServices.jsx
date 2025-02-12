import React from "react";
import Layout from "../Layout/Layout";
import { serviceData } from "../../utils/singleServiceList";
import { useParams } from "react-router-dom";
import MFsingleService from "../Layout/MFsingleService";
import "./Singleservice.css";
import HomeContact from "../Layout/HomeContact";
import { Helmet } from "react-helmet-async";
import PageNotFound from "./PageNotFound";

const SingleServices = () => {
  const { servicename } = useParams();

  const filteredServices = serviceData.filter(
    (item) => item.urlname === servicename
  );

  if (filteredServices.length === 0) {
    return <PageNotFound />;
  }

  return (
    <Layout>
      <Helmet>
        <link
          rel="canonical"
          href={`${window.location.origin}/services/${servicename}`}
        />
      </Helmet>
      <div className="servicewrapper">
        <div>
          {filteredServices.map((service) => (
            <MFsingleService
              key={service.urlname}
              image={service.img1}
              para={service.para}
              name={service.name}
              service={service.services}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <HomeContact />
    </Layout>
  );
};

export default SingleServices;
