import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assests/logo.jpg";
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
      className="flex shadow-2xl justify-center text-center max-h-[122px] h-full text-black position-absolute items-center
      w-full"
    >
      <div className="flex w-1/3 b-[gray-500] justify-center items-center text-center">
        <img
          // src={amir_pic}
          src={logo}
          border-gray-500
          className="w-[100px] max-h-[100px] rounded-full object-contain"
        />
      </div>

      <div className="flex">
        <ul className="flex flex-row text-[14px] px-1 pr-2 font-montserrat text-[#777777] justify-evenly p-8 w-[fit-content] h-[122px] gap-4 uppercase items-center text-center">
          <li className="px-2">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="feature" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link to="pricing" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li className="px-2">
            <Link to="blog" smooth={true} duration={500}>
              Our Process
            </Link>
          </li>
          <li className="px-2">
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="px-2">
            <Link to="resume" smooth={true} duration={500}>
              Team
            </Link>
          </li>

          <li className="px-2">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          {/* <a
            href="#"
            className="text-red px-4 py-4 rounded-sm font-bold text-red-500 card_shadow"
          >
            <button className="flex shadow-lg justify-center text-[14px] items-center text-center h-full px-2">
              Buy Now
            </button>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
