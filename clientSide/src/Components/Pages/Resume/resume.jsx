import React, { Component } from "react";

import ResumeTab from "../Resume/resumeTab";

const Resume = () => {
  return (
    <div className="flex flex-col  max-h-[fit-content] h-full w-full bg-[#222428] text-center justify-center items-center">
      <span className="uppercase  text-red-500 tracking-widest text-[14px]">
        +3 years of experience
      </span>

      <h1 className="text-[50px] py-[20px] text-[#C4CFDE] tracking-widest font-bold font-[600] leading-[60px]">
        My Resume
      </h1>
      <div className="w-full max-w-[1300px] max-h-[fit-content] h-full bg-white">
        <ResumeTab />
      </div>
    </div>
  );
};
export default Resume;
