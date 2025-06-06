import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#FF004F]"></div>
    </div>
  );
};

export default Loader;
