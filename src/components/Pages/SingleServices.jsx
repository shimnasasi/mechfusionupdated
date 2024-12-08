import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import { serviceData } from "../../utils/singleServiceList";
import { useParams } from "react-router-dom";
import MFsingleService from "../Layout/MFsingleService";
import "./Singleservice.css";
import HomeContact from "../Layout/HomeContact";

const SingleServices = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div className="servicewrapper">
        <PageTop PageName={"Services"}/>
        <div>
          {serviceData
            .filter((item) => item.id == id)
            .map((service) => (
              <MFsingleService
                image={service.img1}
                para={service.para}
                name={service.name}
                service={service.services }
              />
            ))}
        </div>
      </div>
      <HomeContact/>
    </Layout>
  );
};

export default SingleServices;
