import React, { useState } from "react";
import Card from "../cart/card";
import frontend from "../../assests/frontend-developer.jpg";
import ceo from "../../assests/CEO.jpg";
import marketing_manager from "../../assests/Marketing-Manager.jpg";
import graphic_designer from "../../assests/graphic-designer.jpg";

const teams = [
  {
    image: ceo,
    name: "Muhammad Bilal",
    description: "CO Founder & CEO",
  },
  {
    image: marketing_manager,
    name: "Iqra bilal",
    description: "Social media Marketing Manager",
  },
  {
    image: graphic_designer,
    name: "Muhammad Hassan",
    description: "Senior Graphic designer",
  },
  {
    image: frontend,
    name: "Ali Ahmad",
    description: "Senior Frontend developer",
  },
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const prev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const next = () => {
    if (startIndex + cardsPerPage < teams.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const visibleCards = teams.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="flex justify-center items-center w-full bg-white py-10 px-4">
      <div className="max-w-[1200px] w-full text-center">
        <div className="mb-10">
          <span className="uppercase text-navyBlue font-semibold tracking-wide">
            Meet the leaders
          </span>
          <h1 className="text-4xl font-bold mt-2 text-navyBlue ">
            The Best Team
          </h1>
          <p className="mt-4 text-navyBlue max-w-2xl mx-auto">
            With our individualities, we share a common interest in the digital
            world and join hands to build a better virtual world of yours where
            you can stand out. Let us introduce the creative minds behind the
            name <strong>BURAQSYS Studio</strong>.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {visibleCards.map((item, index) => (
              <Card
                key={startIndex + index}
                icon={item.image}
                title={item.name}
                description={item.description}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={startIndex + cardsPerPage >= teams.length}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
