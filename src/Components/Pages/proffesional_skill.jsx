import React from "react";

const ProgressBar = ({ percentage }) => (
  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
    <div
      className="h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-red-500"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="text-left rounded-lg max-w-[612px] w-full p-4">
    <h2 className="text-red-500 text-sm mb-4">Features</h2>
    <h3 className="text-[#c4cfde] text-[36px] font-bold mb-6">{title}</h3>
    {skills.map((skill, index) => (
      <div key={index} className="mb-8">
        <div className="flex justify-between text-white text-sm mb-1">
          <span className="text-[#c3cedd] font-[12px] mt-4 mb-4">
            {skill.name.toUpperCase()}
          </span>
          <span>{skill.percentage}%</span>
        </div>
        <ProgressBar percentage={skill.percentage} />
      </div>
    ))}
  </div>
);

const ProfessionalSkillComponent = () => {
  const designSkills = [
    { name: "Photoshop", percentage: 100 },
    { name: "Figma", percentage: 95 },
    { name: "Adobe XD", percentage: 60 },
    { name: "Adobe Illustrator", percentage: 70 },
    { name: "Design", percentage: 90 },
  ];

  const developmentSkills = [
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 90 },
    { name: "Software", percentage: 75 },
    { name: "Plugin", percentage: 70 },
  ];

  return (
    <div className="min-h-screen max-w-[1330px] w-full h-full flex  justify-center ">
      <div className="max-w-7xl w-full  grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Design Skills" skills={designSkills} />
        <SkillCard title="Development Skills" skills={developmentSkills} />
      </div>
    </div>
  );
};

export default ProfessionalSkillComponent;
