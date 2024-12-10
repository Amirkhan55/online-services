import React, { Component } from "react";
import "../cart/cart.css";

const Card = (props) => {
  return (
    <div className="group grid max-w-[600px] max-h-[600px] h-full w-full gap-8 px-[35px] py-[50px] text-left justify-center items-center transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#222428] card_shadow">
      <div className="inner">
        <div className="text-left">
          <span className="text-[#FF004F] text-[30px] max-w-[100px] max-h-[100px] h-full w-full">
            {props.icon}
          </span>
          <div className="font-bold text-[18px] py-4 transition-transform duration-300 group-hover:-translate-y-2">
            {props.title}
          </div>
          <div className="text-[16px] max-w-[300px] transition-transform duration-300 group-hover:-translate-y-2">
            {props.description}
          </div>
          <div className="text-[#FF004F] px-4 mt-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300 ease-in-out">
            ➔
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
