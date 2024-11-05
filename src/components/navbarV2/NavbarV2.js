import "./NavbarV2.css";
import React, { useState } from "react";
import resumePdf from "../../asssets/images/SanishResume.pdf";
import { FaDownload } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function NavbarV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 640 }); 
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 900 }); 
  const isLargeScreen = useMediaQuery({ minWidth: 1200 });
  
  const navItems = [
    { id: "home", name: "Home", path: "/" },
    {
      id: "skills-projects",
      name: "Skills & Projects",
      path: "/#skills-projects",
    },
    { id: "experience", name: "Experience", path: "/#experience" },
  ];

  const currentLocation = window.location.pathname;
  return (
    <div className="n2-navbar flex items-center justify-between px-20 py-4">
      <div className="font-bold text-lg w-2">Developer.</div>
      {isMediumScreen || isSmallScreen? 
            <div></div>
      :
      <ul className="n2-nav-menu flex justify-center gap-10 pt-2 pb-2 rounded-3xl">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`n2-nav-item ${
              activeIndex === index ? "active" : ""
            } cursor-pointer`}
            onClick={() => {
              setActiveIndex(index);
              //  scrollWindow(item);
            }}
          >
            <a
              href={currentLocation === "/" ? `#${item.id}` : item.path}
              className="nav-link"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      }
      {/* <ImageToPdf /> */}
      <div className="w-36">
        <a
          href={resumePdf}
          download="SanishBasukalaResume.pdf"
          className="downloadBtn flex gap-2 items-center w-36 ml-auto"
        >
          <div>
            <FaDownload className="icon" />
          </div>
          <span>Get my resume</span>
        </a>
      </div>
    </div>
  );
}

export default NavbarV2;
