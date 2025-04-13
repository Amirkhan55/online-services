import React from "react";
import free_creative from "../../assests/Free-Creative.png";
const We_are = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-[400px]">
      <h1 className="text-[50px] py-[20px] text-black tracking-widest leading-[60px]">
        Who we are
      </h1>
      <p className="text-[20px] py-[20px] text-black tracking-widest leading-[30px]">
        A digital marketing agency that manifests your desires into reality
      </p>
      <div className="flex justify-center gap-8 items-center text-center w-[80%]">
        <div className="px-[20px] w-1/2 border-l-[6px] border-r-[6px] border-solid border-blue-500 rounded-md">
          <p className="text-[22px] w-[90%] text-left px-[20px] py-5 text-black tracking-widest leading-[30px]">
            Buraqsys is a digital marketing agency that helps brands expand
            their business. We give them a platform to be recognized by
            advertising their utmost capabilities.“We are a zealous group of
            perfectionists and creative technologists that help your business in
            evolving to large summits.”We believe in the manifestation and
            blending of art into something beyond this world. Vintage art with
            modern world technology and mystic ideas are put into the work to
            make it the more appealing and sumptuous state of the art.
            Strategizing effective marketing to win hearts is our only motto”.
          </p>
        </div>
        <div className="flex px-[20px] jusitfy-center items-center ">
          <img src={free_creative} alt="free_creative" />
        </div>
      </div>
    </div>
  );
};

export default We_are;
