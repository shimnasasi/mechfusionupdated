import image1 from "../Assets/21.webp";
import cnc from "../Assets/3.jpg";
import Engineering from "../Assets/27.webp";
import others from "../Assets/34.webp";


export const servicelist = [
  {
    id: 1,
    serviceName: "Mechanical Design",
    image: image1,
    services: [
      {
        subService: "Jigs and Fixtures",
        serviceID: 1
      },
      {
        subService: "Moulds",
        serviceID: 2
      },
      {
        subService: "Product Design",
        serviceID: 3
      },
      {
        subService: "Gauges",
        serviceID: 4
      },
      {
        subService: "Electrode Design",
        serviceID: 5
      },
      {
        subService: "Sheet metal",
        serviceID: 6
      }
      ,
      {
        subService: "2D to 3D Conversion",
        serviceID: 3
      },
      {
        subService: "Conceptual Design",
        serviceID: 4
      },
      {
        subService: "Legacy Data Migration",
        serviceID: 5
      },
      {
        subService: "3D to 2D Detailing or Manufacturing Drawing",
        serviceID: 6
      }
      ,
      {
        subService: "Reverse Engineering",
        serviceID: 5
      },
      {
        subService: "Mechanism Designs",
        serviceID: 6
      }
      ,
      {
        subService: "Prototype Design",
        serviceID: 3
      },
      {
        subService: "Machining Stage drawings",
        serviceID: 4
      },
      {
        subService: "VAVE Design",
        serviceID: 5
      },
      {
        subService: "R&D Design",
        serviceID: 6
      }
    ]
  },
  {
    id: 2,
    serviceName: "CNC Programming",
    image: cnc,
    services: [
      {
        subService: "Milling",
        serviceID: 7
      },
      {
        subService: "Turning",
        serviceID: 8
      },
      {
        subService: "CAM Sheet Generation ",
        serviceID: 9
      },
      {
        subService: "Prototype Support",
        serviceID: 10
      },
      {
        subService: "CNC Process Planning ",
        serviceID: 11
      },
      {
        subService: "CNC Programming Optimization ",
        serviceID: 12
      }
    ]
  },
  {
    id: 3,
    serviceName: "Engineering Documentation",
    image: Engineering,
    services: [
      {
        subService: "Work Instruction (WI)",
        serviceID: 13
      },
      {
        subService: "Standard Operation Procedure (SOP)",
        serviceID: 14
      },
      {
        subService: "Control Plan",
        serviceID: 15
      },
      {
        subService: "Setup Approval Sheet",
        serviceID: 16
      },
      {
        subService: "CAM Sheet",
        serviceID: 17
      },
      {
        subService: "Inspection Plan / Inspection Report",
        serviceID: 18
      },
      {
        subService: "Document Digitalization",
        serviceID: 15
      },
      {
        subService: "Design For Manufacturing (DFM)",
        serviceID: 16
      },
      {
        subService: "PPT Presentations",
        serviceID: 17
      },
      {
        subService: "First Article Inspection Report (FAIR)",
        serviceID: 18
      }
    ]
  },
  {
    id: 4,
    serviceName: "Other Services",
    image: others,
    services: [
      {
        subService: "Mould Flow Analysis",
        serviceID: 19
      },
      {
        subService: "Part Costing",
        serviceID: 20
      },
      {
        subService: "Fixture Costing",
        serviceID: 21
      },
      {
        subService: "Prototype Manufacturing Support",
        serviceID: 22
      }
    ]
  }
];
