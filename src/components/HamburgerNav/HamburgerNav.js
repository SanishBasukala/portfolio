import { DiVisualstudio } from "react-icons/di";
import { FaHome, FaCode, FaGraduationCap } from "react-icons/fa";
import './HamburgerNav.css'

function HamburgerNav() {
    const currentLocation = window.location.pathname;
  return (
    <div className="ham-menu absolute top-20 left-10 sm:left-6">
      <ul className="flex flex-col gap-4 relative">
        <li className="relative group">
          <a  href={currentLocation === "/" ? `#home` : '/'}>
            <FaHome />
          </a>
          <span className="tooltip">Home</span>
        </li>
        <li className="relative group">
          <a  href={currentLocation === "/" ? `#skills-projects` : '/#skills-projects'}>
            <FaCode />
          </a>
          <span className="tooltip">Skills & Projects</span>
        </li>
        <li className="relative group">
          <a  href={currentLocation === "/" ? `#experience` : '/#experience'}>
            <FaGraduationCap />
          </a>
          <span className="tooltip">Experience</span>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerNav;
