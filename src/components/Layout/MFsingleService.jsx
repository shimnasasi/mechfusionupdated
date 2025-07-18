// import React from "react";
// import "./MFsingleService.css";
// // import imageintro from "../../Assets/10.jpg";
// // import { Link } from "react-router-dom";
// import PageTop from "./PageTop";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";

// const MFsingleService = ({

//   para,
//   image,
//   name,
//   service,
//   paraSublist,
//   title,
//   description,
//   // paralist,
//   // wordToBold,
//   heading
// }) => {
//   return (
//     <div>
//       <PageTop PageName={name} />

//       <div className="mfcontainer">
//         <Helmet>
//           <title>{title}</title>
//           <meta name="description" content={description} />
//         </Helmet>
//         <div className="AboutIntro-container">
//           <h2 className="service-NameHead">{heading}</h2>
//           <div className="aboutIntroWrap">
//             <img src={image} alt={name} className="imgmfpage" />

//             <div className="wrapDetails">
//               {/* <span className="OtherHeads">Our Vision</span> */}
//               <span className="abIntroPara">{para}</span>
//             </div>
//           </div>
//         </div>
//         <div className="serviceSublist">
//           {paraSublist.map((list, index) => (
//             <div>
//               {/* <h4>{list.paraId}</h4> */}
//               <h3 className="sublistHead">
//                 {/* <Link to={list.link}>{list.paraHead}</Link> */}
//               </h3>
//               <h3 className="sublistHead">{list.paraHead}</h3>
//               <p className="sublistPara">
//                 {/* <p className="sublistPara"> */}
//                 {list.paraContent.split(list.linkText)[0]}
//                 <Link to={list.linkTo}>{list.linkText}</Link>
//                 {/* <strong>{list.wordToBold}</strong> */}
//                 {list.paraContent.split(list.linkText)[1]}
//                 {/* {list.paraContent.split(list.wordToBold)[0]}
//                   <strong>{list.wordToBold}</strong>
//                   {list.paraContent.split(list.wordToBold)[1]} */}
//                 {/* </p> */}
//               </p>
//             </div>
//           ))}
//         </div>
// 2
//         <div className="serviceWrapper">
//           <span className="subHead">{name}</span>
//           <div className="labelList">
//             {service.map((list, index) => (
//               <span className="serviceLabel" key={index}>
//                 {list.service}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MFsingleService;

import React from "react";
import "./MFsingleService.css";
import PageTop from "./PageTop";
import { Helmet } from "react-helmet-async";

const MFsingleService = ({
  image,
  para,
  name,
  title,
  description,
  sections = [],
  bullets = [],
}) => {
  return (
    <div>
      <Helmet>
        <title>{title} | Mechfusion</title>
        {/* <meta name="description" content={description} /> */}
        <meta name="description" content={description} />
      </Helmet>

      <PageTop PageName={name} />

      <div className="mfcontainer">
        <div className="AboutIntro-container">
          <h2 className="service-NameHead">{title}</h2>
          <div className="aboutIntroWrap">
            <img src={image} alt={name} className="imgmfpage" />
            <div className="wrapDetails">
              <span className="abIntroPara">{para}</span>
            </div>
          </div>
        </div>

        <div className="serviceSublist">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="sublistHead">{section.heading}</h3>
              <p className="sublistPara">{section.content}</p>
            </div>
          ))}
        </div>
        {console.log(bullets)}
        {bullets.length > 0 && (
          <div className="serviceWrapper">
            <span className="subHead">{name}</span>
            <div className="labelList">
              {bullets.map((point, index) => (
                <span key={index} className="serviceLabel">
                  {point}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MFsingleService;
