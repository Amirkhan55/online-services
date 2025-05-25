import React from "react";
import Header from "../Header/Header";
import portfolio from "../../assests/ourProcess/background.jpg";
import PortfolioTab from "../PortfolioTab/portfolioTab";

const MyPortfolio = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex h-[115px] mx-auto bg-[#F0F0F0] w-full">
        <div className="flex w-1/3 justify-center items-center text-center">
          <h1 className="text-[20px] uppercase py-[20px] text-navyBlue tracking-widest font-semibold leading-[60px]">
            Portfolio
          </h1>
        </div>
        <div className="flex w-2/3 justify-center items-center text-center">
          <div className="flex gap-2 text-[18px] text-navyBlue tracking-widest">
            <a href="/" className="flex text-[#FF004F] uppercase gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path d="M 23.958984 4 A 1.50015 1.50015 0 0 0 22.953125 4.4257812 L 3.453125 23.425781 A 1.50015 1.50015 0 1 0 5.546875 25.574219 L 24 7.59375 L 42.453125 25.574219 A 1.50015 1.50015 0 1 0 44.546875 23.425781 L 25.046875 4.4257812 A 1.50015 1.50015 0 0 0 23.958984 4 z M 24 25 C 19.599415 25 16 28.599415 16 33 L 16 41.5 A 1.50015 1.50015 0 1 0 19 41.5 L 19 33 C 19 30.220585 21.220585 28 24 28 C 26.779415 28 29 30.220585 29 33 L 29 41.5 A 1.50015 1.50015 0 1 0 32 41.5 L 32 33 C 32 28.599415 28.400585 25 24 25 z M 8.4765625 25.978516 A 1.50015 1.50015 0 0 0 7 27.5 L 7 41.5 A 1.50015 1.50015 0 1 0 10 41.5 L 10 27.5 A 1.50015 1.50015 0 0 0 8.4765625 25.978516 z M 39.476562 25.978516 A 1.50015 1.50015 0 0 0 38 27.5 L 38 41.5 A 1.50015 1.50015 0 1 0 41 41.5 L 41 27.5 A 1.50015 1.50015 0 0 0 39.476562 25.978516 z"></path>
              </svg>
              Home
            </a>
            <span>/ Portfolio</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px]">
        <img
          src={portfolio}
          alt="service"
          className="w-full h-full object-cover filter"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[72px] font-montserrat font-bold mb-4">
            Our recent work.
          </h2>
          <span className="text-white font-montserrat text-[22px] px-6 py-3 rounded-md font-medium transition">
            Let us jiggle your eyeballs with our successful projects.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center max-[1210px] mx-auto">
        <PortfolioTab />
      </div>
    </div>
  );
};

export default MyPortfolio;
