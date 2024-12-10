import React, { useState } from "react";
import { Link } from "react-scroll";
import amir_pic from "../../assests/Amir-Khan-1.jpg";
import "../cart/cart.css";
import "./header.css";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex shadow-2xl justify-evenly items-center text-center max-h-[122px] h-full text-white position-absolute items-center ${
        isHovered ? "bg-black" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-1/3 b-[gray-500] justify-left items-center text-center ">
        <img
          src={amir_pic}
          border-gray-500
          className="w-[50px] max-h-[50px] rounded-full object-contain"
        />
        <p> Amir Khan</p>
      </div>

      <div className="flex">
        <ul className="flex flex-row text-[14px] font-robotoCondensed justify-evenly p-8 w-[fit-content] h-[122px] gap-8 uppercase justify-evenly items-center text-center h-[122px] text-white">
          <li className="px-2">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="feature" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li className="px-2">
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="px-2">
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
          <li className="px-2">
            <Link to="clients" smooth={true} duration={500}>
              Clients
            </Link>
          </li>
          <li className="px-2">
            <Link to="pricing" smooth={true} duration={500}>
              Pricing
            </Link>
          </li>
          <li className="px-2">
            <Link to="blog" smooth={true} duration={500}>
              Blog
            </Link>
          </li>
          <li className="px-2">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <a
            href="#"
            className="text-red px-4 py-4 rounded-sm font-bold text-red-500 card_shadow"
          >
            <button className="flex shadow-lg justify-center text-[14px] items-center text-center h-full px-2">
              Buy Now
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
