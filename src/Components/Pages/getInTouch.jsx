import React from "react";

const GetInTouch = () => {
  return (
    <div className="flex bg-[#115d9e] w-[1190px] h-[200px] mx-auto px-5">
      <div className="flex flex-col justify-center items-centers">
        <span className="text-[#eee1e5] font-montserrat font-bold text-[35px]">
          Get In Touch
        </span>
        <span className="text-[#eee1e5] font-montserrat text-[24px]">
          Let's Talk Business
        </span>
      </div>
      <div className="flex h-[fit-content] w-[fit-content] justify-end ">
        <button className="bg-[#FF004F] text-white px-4 py-2 rounded-md mt-[50%]">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
