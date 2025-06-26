import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto my-4 md:my-10 px-4">
      <div className="text-sm md:text-base text-gray-500 font-semibold overflow-x-auto whitespace-nowrap">
        <span 
          className="cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => navigate('/')}
        >
          Home
        </span>
        <span className="mx-1 md:mx-2">/</span>
        <span 
          className="cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => navigate('/Product')}
        >
          Product
        </span>
        <span className="mx-1 md:mx-2">/</span>
        <span className="text-gray-700 line-clamp-1 inline-block max-w-[150px] md:max-w-none">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Breadcrums;