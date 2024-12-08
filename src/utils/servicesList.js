import image1 from "../Assets/02.jpg";
import other from '../Assets/34.webp' 
import engineering from '../Assets/27.webp'
import cnc from '../Assets/3.jpg'

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
    image: engineering,
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
      }
    ]
  },
  {
    id: 4,
    serviceName: "Other Services",
    image: other,
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
      },
      {
        subService: "IT Training",
        serviceID: 23
      }
    ]
  }
];
