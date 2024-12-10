import React from "react";
import PortfolioCard from "../Portfolio_card/portfolio_card";
import portfolio_image_1 from "../../assests/portfolio_images/portfolio-01.jpg";
import portfolio_image_2 from "../../assests/portfolio_images/portfolio-02.jpg";
import portfolio_image_3 from "../../assests/portfolio_images/portfolio-03.jpg";
import portfolio_image_4 from "../../assests/portfolio_images/portfolio-04.jpg";
import portfolio_image_5 from "../../assests/portfolio_images/portfolio-05.jpg";
import portfolio_image_6 from "../../assests/portfolio_images/portfolio-06.jpg";

const portfolioCardData = [
  {
    image: portfolio_image_1,
    title: "Development",
    description: "The services provide for design",
  },
  {
    image: portfolio_image_2,
    title: "Application",
    description: "Mobile App landing design and maintenance service.",
  },
  {
    image: portfolio_image_3,
    title: "Photoshop",
    description: "Logo design creativity & Application.",
  },
  {
    image: portfolio_image_4,
    title: "Figma",
    description: "Mobile App landing design and Services.",
  },
  {
    image: portfolio_image_5,
    title: "Web Design",
    description: "Design for Technology and Services",
  },
  {
    image: portfolio_image_6,
    title: "Domain",
    description: "Meet your free domain",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col bg-[#222428] pt-[20px] text-center text-white justify-center items-center font-Optima">
      <span className="text-[#FF004F] text-[16px] uppercase">
        Visit My Portfolio And Keep Your Feedback
      </span>
      <h1 className="tracking-widest text-[#C4CFDE] font-bold text-[50px] leading-[60px] uppercase">
        My Portfolio
      </h1>

      <div className="grid grid-cols-3 gap-8 py-4 max-w-[1330px] w-full">
        {portfolioCardData.map((item, index) => (
          <PortfolioCard
            key={index}
            image={item?.image}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
