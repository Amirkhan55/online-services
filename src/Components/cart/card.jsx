import React from "react";
import "../cart/cart.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="group bg-white shadow-lg overflow-hidden max-w-sm w-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="w-full h-60 overflow-hidden relative group">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bottom-to-top shadow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Text content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-navyBlue group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-navyBlue">{description}</p>

        {/* Arrow on hover */}
        {/* <div className="mt-4 text-blue-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ➔
        </div> */}
      </div>
    </div>
  );
};

export default Card;
