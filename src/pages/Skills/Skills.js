import Header from "../../components/Header/Header";
import "./Skills.css";
import skills from "../../data/skillsData";
import projects from "../../data/projectsData";
import arrow from "../../asssets/images/curvedArrow.png";
import { useMediaQuery } from "react-responsive";
import React, { useState, useRef, useEffect } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function SkillsAndProjects() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const isXLScreen = useMediaQuery({ maxWidth: 2023 }); 
  const isMediumScreen = useMediaQuery({ maxWidth: 900 }); 
  const isLargeScreen = useMediaQuery({ maxWidth: 1200 }); 
  const isSmallScreen = useMediaQuery({ maxWidth: 640 }); 

  let parallax = false; // Default value

if (isLargeScreen || isMediumScreen || isSmallScreen) {
  parallax = false; // Set to true for XL screen
} else if (isXLScreen) {
  parallax = true; // Set to false for other screen sizes
}

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const relativeScroll = scrollTop - containerTop;
      const maxScroll = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, relativeScroll / maxScroll));
      setScrollProgress(progress);

      const newIndex = Math.floor(progress * projects.length);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, projects.length]);
  
  const getCardStyle = (index) => {
    const progress = scrollProgress * (projects.length - 1);
    const relativeProgress = progress - index;
  
    let transform = 'translate3d(0, 0, 0)';
    let zIndex = projects.length + 1;
  
    const position = 'absolute';
  
    // Calculate opacity: fully visible when it's the active card
    let opacity = 0;
    if (relativeProgress === 0) {
      opacity = 1;
    } else {
      const proximity = 1 - Math.abs(relativeProgress);
      opacity = Math.min(1, Math.max(0, proximity));
    }
  
    // Calculate blur: less blur as card approaches active
    let blur = 0;
    if (relativeProgress !== 0) {
      const blurProgress = Math.abs(relativeProgress);
      blur = Math.min(5, Math.max(0, 5 * Math.pow(blurProgress, 1.5))); // Faster reduction in blur closer to active
    }
  
    if (relativeProgress < 0) {
      const entryProgress = Math.abs(relativeProgress);
      if (entryProgress <= 1) {
        const entryScale = 0.98 + 0.02 * (1 - entryProgress);
        const entryY = 98 * entryProgress;
        transform = `translate3d(0, ${entryY}%, 0) scale(${entryScale}) rotateX(${5 * entryProgress}deg)`;
      } else {
        transform = 'translate3d(0, 98%, 0) scale(0.98) rotateX(5deg)';
      }
      zIndex = projects.length - Math.abs(relativeProgress);
    } else if (relativeProgress > 0) {
      const exitProgress = Math.min(1, relativeProgress);
      const exitScale = 1 - 0.05 * exitProgress;
      const exitY = -120 * exitProgress;
      transform = `translate3d(0, ${exitY}%, 0) scale(${exitScale}) rotateX(${-5 * exitProgress}deg)`;
      if (relativeProgress > 1) zIndex = -1;
    }
  
    return {
      position,
      transform,
      zIndex,
      filter: `blur(${blur}px)`,
      opacity,
      transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
      transformOrigin: 'bottom center',
      willChange: 'transform, opacity, filter',
    };
  };

  return (
    <div ref={containerRef} className="page-container xl:h-[350vh] lg:h-[430vh] md:h-[390vh] sm:h-[330vh]">
      <div className="sticky lg:static top-[8rem]">
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
                <div className="ml-3 z-10 font-semibold">{!isSmallScreen? skill.name: skill.shortName}</div>
                {hoveredSkill === index && (
                  <div
                    className="fill z-[5]"
                    style={{ "--profiency-width": `${skill.proficiency}` }}
                  />
                )}
              </div>
            ))}
            <div className="skill-directive xl:ml-10 lg:ml-32 sm:ml-5 flex gap-1 absolute w-96 top-[-30px] sm:w-72">
              <img className="mt-2" src={arrow} alt="arrow" width={40} />
              <span className="font-SofadiOne ml-3">
                Hover to see my proficiency
              </span>
            </div>
          </div>
          <div className="projects-container flex flex-col gap-8 h-[70vh] overflow-hidden lg:overflow-visible lg:max-w-none" >
            {projects.map((project, index) => (
              <a href={project.link !== 'no link' ? project.link : '#'} 
              onClick={(e) => {
                if (project.link === 'no link') {
                  e.preventDefault();
                }
              }} target="blank" className="project flex flex-col gap-5 w-[41vw] min-h-[400px] lg:min-w-[70vw] md:min-h-[350px] self-center mt-14 sm:mt-0" key={index} {...(parallax && { style: getCardStyle(index) })}>
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
              </a>
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
    </div>
  );
}

export default SkillsAndProjects;
