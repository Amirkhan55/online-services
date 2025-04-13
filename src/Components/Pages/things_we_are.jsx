import React, { useState } from "react";
import digital from "../../assests/marketing-icon.webp";
import design from "../../assests/design-icon.webp";
import web from "../../assests/web-icon.webp";
import mobile from "../../assests/mobile-icon.webp";
import social from "../../assests/social-icon.webp";
import seo from "../../assests/seo-icon.webp";
import design_icon from "../../assests/icons/brush.png";
import digital_icon from "../../assests/icons/clipboard.png";
import website_icon from "../../assests/icons/device-laptop.png";
import mobile_icon from "../../assests/icons/device-tablet.png";
import search_icon from "../../assests/icons/search.png";
import social_media_icon from "../../assests/icons/brand-twitter.png";
import content_icon from "../../assests/content-icon.webp"; // assuming separate icon from digital

const ThingsWeAreGoodAt = () => {
  const [activeTab, setActiveTab] = useState("Digital Strategy");

  const tabs = [
    {
      name: "Digital Strategy",
      icon: digital_icon,
    },
    {
      name: "Design",
      icon: design_icon,
    },
    {
      name: "Web",
      icon: website_icon,
    },
    {
      name: "Mobile",
      icon: mobile_icon,
    },
    {
      name: "Social Media",
      icon: social_media_icon,
    },
    {
      name: "SEO",
      icon: search_icon,
    },
    {
      name: "Content Writing",
      icon: content_icon,
    },
  ];

  const renderContent = (tabName) => {
    switch (tabName) {
      case "Digital Strategy":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Digital Strategy
            </strong>
            <div className="flex justify-center items-center max-w-[100%]">
              <div className="flex flex-col gap-4">
                <img src={digital} alt="digital_strategy" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  We provide our phenomenal services at a global level. We
                  foster brands so that they can evolve into something massive.
                  We strive to make marketing easy and convenient for you that
                  your product gets the recognition it deserves. We provide you
                  with a marketing strategy that will prove to be only
                  beneficial for you and your brand.
                </p>
              </div>
            </div>
          </div>
        );
      case "Design":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Brand Construction and Conceptualization
            </strong>
            <div className="flex justify-center items-center max-w-[100%]">
              <div className="flex flex-col">
                <img src={design} alt="design" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex justify-center w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  We establish brands that are fascinating and wholly desirable.
                  Branding is about establishing the company’s personality and
                  experience that reverberates with customers and ensures their
                  satisfaction. A good brand is one that, through its product,
                  can attract customers on a large scale. In comparison, a good
                  digital company like us is the one that contemplates the needs
                  of these brands and brings their imaginations into life.
                  Visualizers and technologists at Buraqsys have helped brands
                  all over the world in making world records.
                </p>
              </div>
            </div>
          </div>
        );
      case "Web":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Creative designing and Development
            </strong>
            <div className="flex justify-center items-center max-w-[100%]">
              <div className="flex flex-col">
                <img src={web} alt="web" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  We are here to develop websites and website content for mobile
                  phones and tablets, desktop screens, and laptops. Our
                  expertise is all over the place, which is an exciting feature
                  for the brands to be fascinated and impressed.
                </p>
              </div>
            </div>
          </div>
        );
      case "Mobile":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Games and Apps
            </strong>
            <div className="flex gap-5 justify-center items-center max-w-[100%]">
              <div className="flex flex-col">
                <img src={mobile} alt="mobile" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  Now that technology has advanced to a shocking level, and we
                  try exploiting it as much as possible. So we create mobile
                  apps with effective user interfaces that provide an intuitive
                  and gratifying experience. No matter what your aim is, we have
                  got your back.
                </p>
              </div>
            </div>
          </div>
        );
      case "Social Media":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Social Media Strategy and Marketing
            </strong>
            <div className="flex gap-5 justify-center items-center max-w-[100%]">
              <div className="flex flex-col">
                <img src={social} alt="social media" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  Social media is everything in today’s time. As we speak,
                  there’s an innovation every second. Social media is a platform
                  that helps brands and businesses to go immensely. Through
                  social media, we help you grow to the point of massive
                  success. What we do is insanely challenging, and many
                  companies do what we do. We only do it better.
                </p>
              </div>
            </div>
          </div>
        );
      case "SEO":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Search Engine Optimization
            </strong>
            <div className="flex gap-5 justify-center items-center max-w-[100%]">
              <div className="flex flex-col">
                <img src={seo} alt="SEO" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  Our only goal is to increase the amount of traffic on your
                  website through organic search results. We assist you in
                  making the right decisions and tell you what works and what
                  doesn’t when it comes to having your brand come to the top.
                </p>
              </div>
            </div>
          </div>
        );
      case "Content Writing":
        return (
          <div className="flex flex-col">
            <strong className="text-[45px] font-montserrat">
              Copy Writing & Content Strategy
            </strong>
            <div className="flex gap-5 justify-center items-center max-w-[100%]">
              <div className="flex flex-col">
                <img src={content_icon} alt="content writing" />
                <button className="border border-gray-500 px-2 py-2">
                  View Details
                </button>
              </div>
              <div className="flex w-1/2">
                <p className="text-[#777777] font-montserrat text-[16px]">
                  Words listen beautifully cast a beautiful spell on the reader.
                  When it comes to the promotion of a company through words, ut
                  becomes even more enchanting. Every word on the website is
                  persuasive and enchanting for the readers. At Buraqsys, every
                  content writer is blessed with the art of fine writing. Every
                  word that our content writers’ type pours magic and a spark of
                  zeal.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full max-w-[1300px] mx-auto p-4 shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
      <h1 className="text-[72px] py-5 mb-6">Things We Are Good at</h1>

      {/* Mobile Dropdown */}
      <select
        className="sm:hidden border px-3 py-2 rounded-md mb-4"
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
      >
        {tabs.map((tab) => (
          <option key={tab.name} value={tab.name}>
            {tab.name}
          </option>
        ))}
      </select>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-2 mb-6">
        {tabs.map((tab) => (
          <span
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${
              activeTab === tab.name ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-5 text-gray-700 text-center max-w-[80%] min-h-[100px]">
        {renderContent(activeTab)}
      </div>

      {/* Desktop Tab Buttons with Icon */}
      <div className="hidden sm:flex border-b w-full justify-center gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 py-[14px] px-[20px] font-medium transition-all ${
              activeTab === tab.name
                ? "border-blue-500 bg-[#F8F8F8] text-[#666666]"
                : "border-transparent bg-[#125D93] text-white hover:text-blue-500"
            }`}
          >
            <img src={tab.icon} alt={tab.name} className="text w-5 h-5" />
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThingsWeAreGoodAt;
