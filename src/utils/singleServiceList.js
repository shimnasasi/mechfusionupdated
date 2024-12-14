import mechanical from "../Assets/2.jpg";
import cnc from "../Assets/7.jpg";
import documentation from "../Assets/4.jpg";
import other from "../Assets/13.webp";

export const serviceData = [
  {
    name: "Mechanical Design",
    img1: mechanical,
    id: 1,
    services: [
      { service: "Jigs and Fixtures" },
      { service: "Moulds" },
      { service: "Product Design" },
      { service: "Gauges" },
      { service: "Electrode Design" },
      { service: "Sheet metal" },
      { service: "2D to 3D Conversion" },
      { service: "Conceptual Design" },
      { service: "Legacy Data Migration" },
      { service: "3D to 2D Detailing or Manufacturing Drawing" },
      { service: "Reverse Engineering" },
      { service: "Mechanism Designs" },
      { service: "Prototype Design" },
      { service: "Machining Stage drawings" },
      { service: "VAVE Design" },
      { service: "R&D Design" },
    ],
    para: "At Mechfusion, we specialize in providing innovative and precise mechanical design solutions to meet the unique needs of our clients. Our team of experienced engineers combines cutting-edge technology with practical expertise to design and develop high-quality mechanical systems and components that drive efficiency, performance, and sustainability. Whether you need to create custom machinery, improve existing systems, or develop new product prototypes, our mechanical design services encompass the full product development lifecycle—from concept to manufacturing. We work across various industries, including automotive, aerospace, industrial equipment, consumer products, and more.",
  },
  {
    name: "CNC Programming",
    img1: cnc,
    id: 2,
    services: [
      { service: "Milling" },
      { service: "Turning" },
      { service: "CAM Sheet Generation" },
      { service: "Prototype Support" },
      { service: "CNC Process Planning" },
      { service: "CNC Programming Optimization" },
    ],
    para: "Mechfusion specializes in delivering precise and efficient CNC programming services tailored to meet the diverse needs of various industries. With a team of experienced programmers and advanced software tools, we create optimized programs that ensure high-quality machining, improved production efficiency, and minimal waste. Whether it’s for milling, turning, or multi-axis machining, our solutions are designed to enhance operational performance and achieve exceptional accuracy. We work closely with our clients to understand their specific requirements, delivering reliable and cost-effective programming services that drive results and maintain the highest standards of quality.",
  },
  {
    name: "Engineering Documentation",
    id: 3,
    img1: documentation,
    services: [
      { service: "Work Instruction (WI)" },
      { service: "Standard Operation Procedure (SOP)" },
      { service: "Control Plan" },
      { service: "Setup Approval Sheet" },
      { service: "CAM Sheet" },
      { service: "Inspection Plan / Inspection Report" },
      { service: "Document Digitalization" },
      { service: "Design For Manufacturing (DFM)" },
      { service: "PPT Presentations" },
      { service: "First Article Inspection Report (FAIR)" },
    ],
    para: "Mechfusion offers comprehensive engineering documentation services designed to ensure accuracy, consistency, and compliance with industry standards. Our experienced team specializes in creating, reviewing, and managing a wide range of technical documents, including engineering drawings, specifications etc. By leveraging advanced tools and processes, we deliver documentation that supports clear communication, seamless project workflows, and efficient lifecycle management. Tailored to meet the unique needs of each client, our services provide reliable and well-organized records that enhance operational efficiency and support long-term project success.",
  },
  {
    name: "Other Services",
    id: 4,
    img1: other,
    services: [
      { service: "Mould Flow Analysis" },
      { service: "Part Costing" },
      { service: "Fixture Costing" },
      { service: "Prototype Manufacturing Support" },
      
    ],
    para: "Mechfusion your premier provider of Engineering services tailored to meet your design and manufacturing needs. With years of expertise in the industry, we pride ourselves on delivering innovative solutions that streamline your production processes and bring your ideas to life with precision and efficiency. Our dedicated team of skilled professionals utilizes cutting edge technology and software to deliver high quality designs, prototyping, and manufacturing services that exceed expectations. We are committed to provide personalized attention and customized solutions to help you achieve your goals. We deliver professional services including full range of Mechanical CAD/CAM services, Engineering documentation, Costing, etc",
  },
];
