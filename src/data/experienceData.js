import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3,
  FaUnity,
  FaAngular,
} from "react-icons/fa";
import cSharp from "../asssets/images/cLogo.png";
import sqlLogo from "../asssets/images/sqlLogo.jpg";
import { TbBrandTypescript  } from 'react-icons/tb';

const experienceData = [
  {
    fromDate: "August 2, 2023",
    toDate: "Present",
    company: "DTRG Network",
    description:
      "Working as a full stack C# developer to develop a multi-tenant Electronic Health Record (EHR) system and a multi-tenant ERP system.",
      details:[
        "Integrated a JWT token system to track user menus and actions.",
        "Created a gateway using Ocelot to reduce the complexity of microservice architecture and organize communication between services.",
        "Optimized SQL queries, improving overall application performance by 60%.",
        "Redesigned UX of pages, significantly improving client satisfaction and increasing user engagement by 20%."
      ],
    technologiesUsed: [
      <FaHtml5 style={{ color: "#E34F26", fontSize: "24px" }} />,
      <FaCss3 style={{ color: "#1572B6", fontSize: "24px" }} />,
      <FaJs style={{ color: "#F7DF1E", fontSize: "24px" }} />,
      <FaAngular style={{ color: "#1572B6", fontSize: "24px" }} />,
      <img src={cSharp} width={28} />,
      <img src={sqlLogo} width={28} />,
      <TbBrandTypescript  style={{ color: '#1572B6', fontSize: '24px' }} />
    ],
  },
  {
    fromDate: "26 July, 2022",
    toDate: "25 November, 2022",
    company: "PL Multimedia Services",
    description:
      "Worked as a front-end developer to develop a responsive UI/UX website for the company.",
    details:[
        "Designed webpages and wireframes using Figma.",
        "Developed a fully functional user interface for the web application."
    ],
    technologiesUsed: [
      <FaHtml5 style={{ color: "#E34F26", fontSize: "24px" }} />,
      <FaCss3 style={{ color: "#1572B6", fontSize: "24px" }} />,
      <FaJs style={{ color: "#F7DF1E", fontSize: "24px" }} />,
      <FaReact
        style={{ color: "#61DBFB", fontSize: "24px", backgroundColor: "black" }}
      />,
    ],
  },
];
export default experienceData;
