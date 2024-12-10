import React from "react";
import "../cart/cart.css";

const PortfolioCard = (props) => {
  return (
    <div className="grid max-w-[fit-content] rounded-xl max-h-[441px] max-w-[401px] h-full text-white font-robotoCondensed px-[35px] py-[20px] justify-center items-center card_shadow">
      <div className="inner">
        <div className="text-left justify-center items-center">
          <img
            src={props.image}
            height="256px"
            width="341px"
            alt=""
            className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className=" text-[14px] py-2 text-red-500">{props.title}</div>
          <div className="text-[23px] leading-[34px] text-[#C4CFDE] font-[600] transition-colors">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
