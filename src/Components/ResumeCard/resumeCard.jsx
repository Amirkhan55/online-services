import React from "react";
import "../cart/cart.css"; // Ensure this has necessary styles

const ResumeCard = (props) => {
  return (
    <div className="group flex  max-w-[601px] pl-[31px] border-l-4 border-[#17191c] max-h-[296px] w-full h-full gap-2  py-6  text-left transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#111111] hover:to-[#222428]">
      <hr />
      <div className="flex flex-col max-w-[601px] card_shadow p-6 max-h-[297px] w-full h-full">
        <div className="flex flex-row justify-between text-left w-3/4 w-full ">
          <h2 className="text-white text-[22px] font-semibold">
            {props.title}
          </h2>
          <div className="bg-[#222428] text-[#FF004F] py-2 px-4 card_shadow">
            <span className="text-[16px] font-bold">{props.gpa}/5</span>
          </div>
        </div>
        <div className="flex flex-col items-left justify-between w-1/4 w-full">
          <span className="text-[#878E99] text-[16px]">{props.duration}</span>
          <p className="text-[#878E99] text-[16px] mt-4">{props.desc}</p>
        </div>
        <div className="text-[#FF004F] mt-4 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-in-out">
          ➔
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
