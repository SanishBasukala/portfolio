import "./Home.css";
// import MyImage from '../../asssets/images/image2.png';
import MyImage from "../../asssets/images/portfolio.png";
import TextAlternator from "../../components/textAlternator/TextAlternator";
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import ImageToPdf from "../../components/ImageToPdf/ImageToPdf";
import sectionRef from "../../components/navbarV2/NavbarV2";
import { useMediaQuery } from "react-responsive";

function Home() {
  const name = "Sanish Basukala";
  const designation = "a Developer";
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 900 });
  return (
    <div className="page-container home-container bg-[#E1E6EA] flex items-center h-[92vh]">
        <div
        className="flex-1 w-4/5 md:max-w-[52vw] sm:max-w-[100%] sm:bg-[#E1E6EA] sm:bg-opacity-60"
        >
        <div className="intro text-[2rem] text-secondary font-semibold md:text-[1.5rem] sm:text-black">
          I'm&nbsp;
          <TextAlternator text1={name} text2={designation} />
        </div>
        <div className="description text-secondary mt-2 text-justify text-base max-w-44 sm:text-black">
          Full-stack developer with 2+ years of experience in building scalable
          web applications using C#, ASP.NET, Angular, and SQL Server. Delivered
          complex healthcare projects like operation theater management and
          commission tracking systems, enhancing efficiency and user experience.
        </div>
        <div className="contact pt-2 pb-1">
          <div className="links">
            <a
              href="https://www.linkedin.com/in/sanish-basukala-609662209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SanishBasukala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:sanishBasukala1@gmail.com">
              <FaGoogle />
            </a>
          </div>
        </div>
        {/* <ImageToPdf></ImageToPdf> */}
      </div>
      {(!isSmallScreen && !isMediumScreen) && (
        <div className="flex-1 w-1/5 h-full flex items-center justify-end">
          <img
            src={MyImage}
            style={{ height: "90%", width: "auto" }}
            alt="MyImage"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
