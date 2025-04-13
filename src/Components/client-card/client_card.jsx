import React from "react";

const ClientCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center group bg-white shadow-xl overflow-hidden max-w-sm w-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="flex items-center justify-center w-full h-60 relative">
        <img
          src={image}
          alt={name}
          className="w-[100px] h-[100px] object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bottom-to-top shadow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ClientCard;
