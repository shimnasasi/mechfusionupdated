// import React from "react";
// import Layout from "../Layout/Layout";
// import { serviceData } from "../../utils/singleServiceList";
// import { useParams } from "react-router-dom";
// import MFsingleService from "../Layout/MFsingleService";
// import "./Singleservice.css";
// import HomeContact from "../Layout/HomeContact";
// import { Helmet } from "react-helmet-async";
// import PageNotFound from "./PageNotFound";

// const SingleServices = () => {
//   const { servicename } = useParams();

//   const filteredServices = serviceData.filter(
//     (item) => item.urlname === servicename
//   );

//   if (filteredServices.length === 0) {
//     return <PageNotFound />;
//   }

//   return (
//     <Layout>
//       <Helmet>
//         <link
//           rel="canonical"
//           href={`${window.location.origin}/services/${servicename}`}
//         />
//       </Helmet>
//       <div className="servicewrapper">
//         <div>
//           {filteredServices.map((service) => (
//             <MFsingleService
//               key={service.urlname}
//               image={service.img1}
//               para={service.para}
//               paraSublist={service.paralist}
//               name={service.name}
//               service={service.services}
//               description={service.description}
//               title={service.title}
//               heading={service.heading}
//             />
//           ))}
//         </div>
//       </div>
//       <HomeContact />
//     </Layout>
//   );
// };

// export default SingleServices;

import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import MFsingleService from "../Layout/MFsingleService";
import "./Singleservice.css";
import HomeContact from "../Layout/HomeContact";
import { Helmet } from "react-helmet-async";
import PageNotFound from "./PageNotFound";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const SingleServices = () => {
  const { servicename } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const snapshot = await getDocs(collection(db, "services"));
        const services = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const matched = services.find((item) => item.slug === servicename);
        setService(matched || null);
      } catch (error) {
        console.error("Error fetching service:", error);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [servicename]);

  if (loading) return <p>Loading...</p>;
  if (!service) return <PageNotFound />;

  return (
    <Layout>
      <Helmet>
        <title>{service.title} | Mechfusion</title>
        <link
          rel="canonical"
          href={`${window.location.origin}/services/${servicename}`}
        />
        <meta name="description" content={service.intro || service.title} />
      </Helmet>

      <div className="servicewrapper">
        <MFsingleService
          image={service.imageUrl}
          para={service.intro}
          bullets={service.bullets}
          name={service.title}
          service={[]} // if you want to add more details
          description=""
          title={service.title}
          heading="" // use if needed
          sections={service.sections} // optional: pass to component if supported
        />
      </div>

      <HomeContact />
    </Layout>
  );
};

export default SingleServices;
