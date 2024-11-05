import Header from "../../components/Header/Header";
import "./Skills.css";
import skills from "../../data/skillsData";
import projects from "../../data/projectsData";
import { useState } from "react";
import arrow from "../../asssets/images/curvedArrow.png";
import { FaArrowRight } from "react-icons/fa";

function SkillsAndProjects() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  return (
    <div className="page-container xl:h-[85vh] lg:h-[110vh]">
      <Header name="MY SKILLSET & PROJECTS" />
      <div className="skills-projects">
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 h-4/5 items-center lg:gap-14">
          <div className="skills-container relative">
            {skills.map((skill, index) => (
              <div
                className="skill"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                key={index}
              >
                <div className="ml-3 z-10 bg-white">{skill.icon}</div>
                <div className="ml-3 z-10 font-semibold">{skill.name}</div>
                {hoveredSkill === index && (
                  <div
                    className="fill z-[5]"
                    style={{ "--profiency-width": `${skill.proficiency}` }}
                  />
                )}
              </div>
            ))}
            <div className="skill-directive xl:ml-10 lg:ml-32 flex gap-1 absolute w-96 top-[-30px]">
              <img className="mt-2" src={arrow} alt="arrow" width={40} />
              <span className="font-SofadiOne ml-3">
                Hover to see my proficiency
              </span>
            </div>
          </div>
          <div className="projects-container lg:max-w-[80vw] lg:ml-12">
            {projects.map((project, index) => (
              <div className="project flex gap-5" key={index}>
                <div className="img-container">{project.image}</div>
                <div className="description p-1 flex flex-col gap-1 pr-5">
                  <p className="font-semibold text-base">{project.name}</p>
                  <p className="text-sm text-secondary">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {project.apps &&
                      project.apps.map((app, appIndex) => (
                        <div className="appCapsule" key={appIndex}>
                          {app}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
            {/* <a
              href="/MoreProjects"
              className="more-projects flex gap-2 justify-center items-center w-40 border-2 border-[#1089FF] rounded-[20px] text-[#1089FF] p-2.5 px-1.5 cursor-pointer font-bold"
            >
              More projects
              <div className="arrow flex items-center">
                <FaArrowRight />
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndProjects;
