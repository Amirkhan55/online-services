import React from "react";
import "../cart/cart.css";

const PortfolioCard = (props) => {
  return (
    <div className="grid max-w-[fit-content] rounded-md max-w-[409px] max-h-[378px] h-full text-white font-robotoCondensed justify-center items-center card_shadow">
      <div className="inner">
        <div className="text-left justify-center items-center">
          <img
            src={props.image}
            height="378px"
            width="409px"
            alt=""
            className="rounded-md"
          />
          {/* <div className=" text-[14px] py-2 text-red-500">{props.title}</div>
          <div className="text-[23px] leading-[34px] text-[#C4CFDE] font-[600] transition-colors">
            {props.description}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
