import React from "react";

const TestimonialCard = ({ image, title, rating, description }) => {
  return (
    <div className="flex flex-col gap-4 items-start bg-[#f0f0f0] p-4 h-[250px] max-w-[580px]">
      <div className="flex items-center gap-4 mb-2">
        <img src={image} alt={title} className="w-20 h-20 object-cover" />
        <div>
          <span className="block font-semibold text-lg text-navyBlue">
            {title}
          </span>
          <p className="text-yellow-500 font-bold">⭐⭐⭐⭐⭐ {rating}</p>
        </div>
      </div>
      <p className="text-navyBlue">{description}</p>
    </div>
  );
};

export default TestimonialCard;
