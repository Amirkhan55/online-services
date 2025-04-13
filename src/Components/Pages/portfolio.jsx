import React, { useState } from "react";
import PortfolioCard from "../Portfolio_card/portfolio_card";

import portfolio_image_1 from "../../assests/portfolio_images/portfolio-01.jpg";
import portfolio_image_2 from "../../assests/portfolio_images/portfolio-02.jpg";
import portfolio_image_3 from "../../assests/portfolio_images/portfolio-03.jpg";
import portfolio_image_4 from "../../assests/portfolio_images/portfolio-04.jpg";
import portfolio_image_5 from "../../assests/portfolio_images/portfolio-05.jpg";
import portfolio_image_6 from "../../assests/portfolio_images/portfolio-06.jpg";

import web_1 from "../../assests/tab_icon/webiste-tab-1.webp";
import mobile_development from "../../assests/tab_icon/mobile-development.webp";
import ad from "../../assests/tab_icon/ad.webp";
import box from "../../assests/tab_icon/box.webp";
import brand_icon from "../../assests/tab_icon/brand-identity.webp";
import logo_icon from "../../assests/tab_icon/logo.webp";
import calendar from "../../assests/tab_icon/calendar.webp";

const tabs = [
  {
    name: "Websites",
    icon: web_1,
    items: [
      { image: portfolio_image_1 },
      { image: portfolio_image_2 },
      { image: portfolio_image_3 },
      { image: portfolio_image_4 },
      { image: portfolio_image_5 },
      { image: portfolio_image_6 },
    ],
  },
  {
    name: "Mobile Apps",
    icon: mobile_development,
    items: [{ image: portfolio_image_6 }, { image: portfolio_image_5 }],
  },
  {
    name: "Logo Design",
    icon: logo_icon,
    items: [{ image: portfolio_image_4 }, { image: portfolio_image_3 }],
  },
  {
    name: "Brand Identity",
    icon: brand_icon,
    items: [{ image: portfolio_image_2 }, { image: portfolio_image_1 }],
  },
  {
    name: "Social Media",
    icon: calendar,
    items: [{ image: portfolio_image_5 }, { image: portfolio_image_5 }],
  },
  {
    name: "Campaign",
    icon: ad,
    items: [{ image: portfolio_image_4 }, { image: portfolio_image_3 }],
  },
  {
    name: "Packaging",
    icon: box,
    items: [{ image: portfolio_image_1 }, { image: portfolio_image_5 }],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Websites");

  const activeItems = tabs.find((tab) => tab.name === activeTab)?.items || [];

  return (
    <div className="flex flex-col pt-[50px] text-center text-white justify-center items-center font-Optima">
      <h1 className="tracking-widest text-[#C4CFDE] font-bold text-[50px] leading-[60px] uppercase">
        Recent Portfolio
      </h1>
      <h1 className="text-black text-5 leading-[60px]">
        Let us jiggle your eyeballs with our successful projects, here we go!
      </h1>

      <div className="px-[50px] py-[40px] max-w-[1330px] w-full shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
        {/* Tabs */}
        <div className="flex mt-6 mb-8 flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-[20px] py-[14px] text-[18px] font-montserrat font-bold transition-all duration-200 ${
                activeTab === tab.name
                  ? "border-b-[5px] border-blue-400 text-blue-500"
                  : "text-[#929DAF] hover:text-blue-500"
              }`}
            >
              <img src={tab.icon} alt={tab.name} className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeItems.map((item, index) => (
            <PortfolioCard key={index} image={item?.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
