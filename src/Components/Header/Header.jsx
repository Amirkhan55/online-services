import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assests/logo.jpg";
import "../cart/cart.css";
import "./header.css";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center text-center max-h-[122px] h-full text-black w-full">
      <div className="flex w-1/3 justify-start items-center text-center">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] max-h-[100px] rounded-full object-contain"
        />
      </div>

      <div className="flex">
        <ul className="flex flex-row text-[14px] px-1 pr-2 font-montserrat text-navyBlue justify-evenly p-8 gap-4 uppercase items-center">
          <li className="px-2 py-7">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="px-2 py-7">
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="px-2 py-7 group relative">
            <Link
              to="/service"
              className={`${
                isActive("/service")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              Services
            </Link>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-[#33373B] text-white shadow-lg text-left py-5 z-50 w-[250px]">
              <li>
                <Link
                  to="/service/seo"
                  className="block px-4 py-2 text-gray-100"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service/development"
                  className="block px-4 py-2 text-gray-100"
                >
                  Development Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service/social-media"
                  className="block px-4 py-2 text-gray-100"
                >
                  Social Media Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service/design"
                  className="block px-4 py-2 text-gray-100"
                >
                  Design Services
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-2 py-7">
            <Link
              to="/our-process"
              className={`${
                isActive("/our-process")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              Our Process
            </Link>
          </li>
          <li className="px-2 py-7">
            <Link
              to="/portfolio"
              className={`${
                isActive("/portfolio")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li className="px-2 py-7">
            <Link
              to="/team"
              className={`${
                isActive("/team")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              Team
            </Link>
          </li>
          <li className="px-2 py-7">
            <Link
              to="/contactus"
              className={`${
                isActive("/contactus")
                  ? "border-b-2 text-blue-500 border-blue-500 py-6 font-semibold"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
