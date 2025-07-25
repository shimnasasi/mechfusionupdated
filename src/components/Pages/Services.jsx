// import React from "react";
// import Layout from "../Layout/Layout";
// import PageTop from "../Layout/PageTop";

// import ServiceList from "../Layout/ServiceList";
// import HomeContact from "../Layout/HomeContact";
// import { Helmet } from "react-helmet-async";

// const Services = () => {
//   return (
//     <Layout>
//       <Helmet>
//         <link rel="canonical" href={`${window.location.origin}/service`} />
//         <meta
//             name="description"
//             content="Mechfusion delivers expert engineering and manufacturing solutions, combining innovation and precision to meet diverse industry needs with unmatched quality."
//           />
//       </Helmet>
//       <PageTop PageName="Services" />
//       <ServiceList />
//       <HomeContact />
//     </Layout>
//   );
// };

// export default Services;
import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import ServiceList from "../Layout/ServiceList";
import HomeContact from "../Layout/HomeContact";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Manufacturing Drawings & DFM Services – At Mechfusion</title>
        <link rel="canonical" href={`${window.location.origin}/services`} />
        <meta
          name="description"
          content="Get detailed manufacturing drawings and DFM services to reduce errors, improve design quality, and meet industry production standards"
        />
        <meta name="keywords" content="Manufacturing Drawings" />
      </Helmet>
      <PageTop PageName="Services" />
      <ServiceList />
      <HomeContact />
    </Layout>
  );
};

export default Services;
