import image1 from "../Assets/mechanicaldesign.webp";
import cnc from "../Assets/cncprogramming.webp";
import Engineering from "../Assets/engineeringdocumentation.webp";
import others from "../Assets/others.webp";

export const homeServiceList = [
  { id: 1, servicesName: "Mechanical Design", image: image1 , alttext:"Mechanicaldesign" , urlname:"mechanical-design",para:"Production-ready mechanical designs focused on performance, cost efficiency, and manufacturability, ensuring accurate, reliable solutions ready for real-world manufacturing environments.", },
  { id: 2, servicesName: "CNC Programming", image: cnc , alttext:"CNCProgramming",urlname:"cnc-programming", para:"Optimized CNC programs developed to improve machining accuracy, reduce cycle time, enhance productivity, and ensure consistent, high-quality manufacturing results.", },
  { id: 3, servicesName: "Engineering Documentation", image: Engineering ,alttext:"EngineeringDocumentation", urlname:"engineering-documentation", para:"Clear, accurate engineering drawings and documentation that support seamless manufacturing, effective supplier coordination, and reduced production errors.", },
  { id: 4, servicesName: "Other Services", image: others , alttext:"AllServices" ,urlname:"other-services" , para:"Flexible engineering support tailored to your project needs, providing scalable assistance across design updates, manufacturing support, and ongoing engineering requirements.", }
];
