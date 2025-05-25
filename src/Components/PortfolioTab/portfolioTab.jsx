import React, { useState } from "react";
import ProfessionalSkillComponent from "../Pages/proffesional_skill";
import all_img_1 from "../../assests/portfolio/11.webp";
import all_img_2 from "../../assests/portfolio/22.webp";
import all_img_3 from "../../assests/portfolio/33.webp";
import all_img_4 from "../../assests/portfolio/44.webp";
import all_img_5 from "../../assests/portfolio/55.webp";
import all_img_6 from "../../assests/portfolio/77.webp";
import all_img_8 from "../../assests/portfolio/88.webp";
import all_img_9 from "../../assests/portfolio/99.webp";
import all_img_11 from "../../assests/portfolio/1010.webp";
import all_img_10 from "../../assests/portfolio/1111.webp";
import Footer_div from "../Footer/footer";

const PortfolioTab = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const all_img_array = [
    {
      img: all_img_1,
    },
    {
      img: all_img_2,
    },
    {
      img: all_img_3,
    },
    {
      img: all_img_4,
    },

    {
      img: all_img_6,
    },
    {
      img: all_img_8,
    },
    {
      img: all_img_9,
    },
    {
      img: all_img_10,
    },
    {
      img: all_img_11,
    },
  ];

  return (
    <div className="w-full h-full text-center items-center text-black">
      <div className="w-[1400px] mx-auto h-full text-center items-center text-black">
        <div class="tab card_shadow mb-4 text-black text-[16px] justify-left flex w-full h-full text-center items-left flex-center items-center ">
          <button
            className={`tablinks ${activeTab === "ALL" ? "active" : ""}`}
            onClick={() => handleTabChange("ALL")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">ALL</span>
          </button>

          <button
            className={`tablinks ${
              activeTab === "BRAND IDENTITY" ? "active" : ""
            }`}
            onClick={() => handleTabChange("BRAND IDENTITY")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">BRAND IDENTITY</span>
          </button>

          <button
            className={`tablinks ${activeTab === "CALENDAR" ? "active" : ""}`}
            onClick={() => handleTabChange("CALENDAR")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">CALENDAR</span>
          </button>

          <button
            className={`tablinks ${activeTab === "CAMPAIGNS" ? "active" : ""}`}
            onClick={() => handleTabChange("CAMPAIGNS")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">CAMPAIGNS</span>
          </button>
          <button
            className={`tablinks ${
              activeTab === "LOGO DESIGNS" ? "active" : ""
            }`}
            onClick={() => handleTabChange("LOGO DESIGNS")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">LOGO DESIGNS</span>
          </button>
          <button
            className={`tablinks ${
              activeTab === "MOBILE APPS" ? "active" : ""
            }`}
            onClick={() => handleTabChange("MOBILE APPS")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">MOBILE APPS</span>
          </button>
          <button
            className={`tablinks ${
              activeTab === "MOBILE APPS" ? "active" : ""
            }`}
            onClick={() => handleTabChange("MOBILE APPS")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">PACKAGING</span>
          </button>
          <button
            className={`tablinks ${
              activeTab === "MOBILE APPS" ? "active" : ""
            }`}
            onClick={() => handleTabChange("MOBILE APPS")}
            style={{
              padding: "20px 30px",
              height: "75px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <span className="text-[#999999]">WEBSITES</span>
          </button>
        </div>

        <div
          id="ALL"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2"
          style={{ display: activeTab === "ALL" ? "grid" : "none" }}
        >
          {all_img_array.map((items, index) => (
            <img
              key={index}
              src={items.img}
              alt="Portfolio"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ))}
        </div>

        <div
          id="BRAND IDENTITY"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{ display: activeTab === "BRAND IDENTITY" ? "grid" : "none" }}
        >
          {all_img_array.map((items, index) => (
            <img key={index} src={items.img} alt="Portfolio" />
          ))}
        </div>

        <div
          id="CALENDAR"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{
            display: activeTab === "CALENDAR" ? "grid" : "none",
          }}
        >
          {all_img_array.map((items, index) => (
            <img key={index} src={items.img} alt="Portfolio" />
          ))}
        </div>

        <div
          id="CAMPAIGNS"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{
            display: activeTab === "CAMPAIGNS" ? "grid" : "none",
          }}
        >
          {all_img_array.map((items, index) => (
            <img key={index} src={items.img} alt="Portfolio" />
          ))}
        </div>
        <div
          id="LOGO DESIGNS"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{
            display: activeTab === "LOGO DESIGNS" ? "grid" : "none",
          }}
        >
          {all_img_array.map((items, index) => (
            <img key={index} src={items.img} alt="Portfolio" />
          ))}
        </div>
        <div
          id="MOBILE APPS"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{
            display: activeTab === "MOBILE APPS" ? "grid" : "none",
          }}
        >
          {all_img_array.map((items, index) => (
            <img key={index} src={items.img} alt="Portfolio" />
          ))}
        </div>
        <div
          id="PACKAGING"
          className="tabcontent grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{
            display: activeTab === "PACKAGING" ? "grid" : "none",
          }}
        >
          {all_img_array.map((items, index) => (
            <img key={index} src={items.img} alt="Portfolio" />
          ))}
        </div>
      </div>
      <Footer_div />
    </div>
  );
};

export default PortfolioTab;
