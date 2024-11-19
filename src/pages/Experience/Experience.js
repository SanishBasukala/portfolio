import React from "react";
import "./Experience.css";
import experienceData from "../../data/experienceData";
import Header from "../../components/Header/Header";

function Experience() {
  return (
    <div className="page-container h-[90vh]">
      <Header name="EXPERIENCE" />
      <div className="flex justify-center mt-14">
        <div className="border-l-2 border-gray-600 pl-10 ml-20 flex flex-col gap-5 sm:pl-3 sm:ml-0">
          {experienceData.map((experience, index) => (
              <div className="experience flex lg:flex-col lg:gap-5 mb-4" key={index}>
                <div className="company w-48 mr-72 sm:mr-0">
                  <div className="circle" />
                  <div className="arrow" />
                  <div className="dateRange">
                    {experience.fromDate} - {experience.toDate}
                  </div>
                  {experience.company}
                </div>
                <div className="description">
                  {experience.description}
                  <ul className="list-disc ml-4">
                  {experience.details.map((detail,index)=>(
                    <li key={index}>{detail}</li>
                  ))}
                  </ul>
                  <br/>
                  <div className="">
                    <strong>Technologies Used:</strong>
                    <div className="flex gap-5 mt-3">
                      {experience.technologiesUsed.map((tech,index)=>(
                        <span key={index}>{tech}</span>
                      ))}
                      </div>
                  </div>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
