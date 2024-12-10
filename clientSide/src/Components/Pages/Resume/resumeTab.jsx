import React, { useState } from "react";
import "./resumeTab.css"; // Custom styles
import ResumeCard from "../../ResumeCard/resumeCard";
import "../../cart/cart.css";
import "../../../App.css";
import ProfessionalSkillComponent from "../proffesional_skill";

const educaton_data = [
  {
    title: "Personal Portfolio April Fools",
    duration: "University of DVI (1997 - 2001)",
    gpa: "4.30",
    desc: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
  },
  {
    title: "Examples Of Personal Portfolio",
    duration: "College of Studies (2000 - 2002)",
    gpa: "4.50",
    desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
  {
    title: "Tips For Personal Portfolio",
    duration: "University of Studies (1997 - 2001)",
    gpa: "4.80",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quidem.",
  },
  {
    title: "The Personal Portfolio Mystery",
    duration: "Job at Rainbow-Themes (2008 - 2016)",
    gpa: "4.95",
    desc: "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
  {
    title: "Diploma in Computer Science",
    duration: "Works at Plugin Development (2016 - 2020)",
    gpa: "5.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quidem.",
  },
  {
    title: "Diploma in Web Development",
    duration: "BSE In CSE (2004 - 2008)",
    gpa: "4.70",
    desc: "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
];

const job_experience_data = [
  {
    title: "Diploma in Web Development",
    duration: "BSE In CSE (2004 - 2008)",
    gpa: "4.70",
    desc: "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
  {
    title: "The Personal Portfolio Mystery",
    duration: "Job at Rainbow-Themes (2008 - 2016)",
    gpa: "4.95",
    desc: "Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
  {
    title: "Diploma in Computer Science",
    duration: "Works at Plugin Development (2016 - 2020)",
    gpa: "5.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quidem.",
  },
  {
    title: "Diploma in Web Development",
    duration: "BSE In CSE (2004 - 2008)",
    gpa: "4.70",
    desc: "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
  {
    title: "Diploma in Web Development",
    duration: "BSE In CSE (2004 - 2008)",
    gpa: "4.70",
    desc: "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, lobortis mauris hendrerit ante.",
  },
];

const personal_skills = [
  {
    title: "Photoshop",
    value: "100p%",
  },
  {
    title: "Html",
    value: "100%",
  },
  {
    title: "Figma",
    value: "85%",
  },
  {
    title: "Css",
    value: "100%",
  },
  {
    title: "Javascript",
    value: "90%",
  },
  {
    title: "React",
    value: "90%",
  },
  {
    title: "React Native",
    value: "80%",
  },
  {
    title: "Flutter",
    value: "80%",
  },
  {
    title: "Node",
    value: "80%",
  },
  {
    title: "MongoDB",
    value: "70%",
  },
  {
    title: "Git",
    value: "70%",
  },
  {
    title: "Github",
    value: "70%",
  },
  {
    title: "Tailwind",
    value: "70%",
  },
  {
    title: "Bootstrap",
    value: "70%",
  },
  {
    title: "Redux",
    value: "70%",
  },
  {
    title: "Next.js",
    value: "70%",
  },
  {
    title: "Typescript",
    value: "70%",
  },
  {
    title: "Nest",
    value: "70%",
  },
];

const ResumeTab = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full h-full text-center items-center bg-[#222428]">
      <div class="tab bg-[#222428] card_shadow mb-4 text-white text-[16px] justify-left flex w-full gap-8 h-full text-center items-left  flex flex-start items-center">
        <button
          className={`tablinks ${activeTab === "Education" ? "active" : ""} `}
          onClick={() => handleTabChange("Education")}
          style={{ padding: "20px 50px", height: "75px", width: "300px" }}
        >
          Education
        </button>
        <button
          className={`tablinks ${
            activeTab === "Professional Skills" ? "active" : ""
          }`}
          onClick={() => handleTabChange("Professional Skills")}
          style={{ padding: "20px 50px", height: "75px", width: "300px" }}
        >
          Professional Skills
        </button>
        <button
          className={`tablinks ${activeTab === "Experience" ? "active" : ""}`}
          onClick={() => handleTabChange("Experience")}
          style={{ padding: "20px 50px", height: "75px", width: "300px" }}
        >
          Experience
        </button>

        <button
          className={`tablinks ${activeTab === "Interview" ? "active" : ""}`}
          onClick={() => handleTabChange("Interview")}
          style={{ padding: "20px 50px", height: "75px", width: "300px" }}
        >
          Interview
        </button>
      </div>

      <div
        id="Education"
        className="tabcontent grid grid-cols-1 sm:grid-cols-2"
        style={{ display: activeTab === "Education" ? "grid" : "none" }}
      >
        <div className="flex flex-col ml-8 text-left">
          <span className="text-[#FF004F] text-[14px]">2007-2010</span>
          <h2 className="text-[20px] mt-2 font-[500] leading-[24px]">
            Education Quality
          </h2>
        </div>
        <div className="flex flex-col mt-2 ml-8 text-left">
          <span className="text-[#FF004F] text-[14px]">2007-2010</span>
          <h2 className="text-[20px] font-[500] leading-[24px]">
            Job Experience
          </h2>
        </div>

        {educaton_data.map((data, index) => (
          <ResumeCard
            key={index}
            title={data.title}
            gpa={data.gpa}
            duration={data.duration}
            desc={data.desc}
          />
        ))}
      </div>

      <div
        id="Experience"
        className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
        style={{ display: activeTab === "Experience" ? "grid" : "none" }}
      >
        {job_experience_data.map((data, index) => (
          <ResumeCard
            key={index}
            title={data.title}
            gpa={data.gpa}
            duration={data.duration}
            desc={data.desc}
          />
        ))}
      </div>

      <div
        id="Professional Skills"
        className="tabcontent flex  max-h-[fit-content] h-full"
        style={{
          display: activeTab === "Professional Skills" ? "flex" : "none",
        }}
      >
        <ProfessionalSkillComponent />
      </div>

      <div
        id="Interview"
        className="tabcontent flex"
        style={{
          display: activeTab === "Interview" ? "grid" : "none",
        }}
      >
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[#FF004F]">Fearture</span>
              <h1 className="text-white text-[16px]"> Design Skill </h1>
            </div>
            <div className="flex flex-col">
              <span className="text-[#FF004F]">Fearture</span>
              <h1> Development Skill </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <span className="bg-"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTab;
