import React from "react";
import { getData } from "../Context/dataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data } = getData();
  
  const getUniqueCategory = (data, property) => {
    if (!data) return [];
    const newVal = data.map((curElem) => curElem[property]);
    return [...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div className="bg-[#101829]">
      <h2 className="flex justify-center items-center max-w-7xl mx-auto py-3 md:py-4 px-4 text-white text-lg md:text-xl uppercase font-bold">
        Product Categories
      </h2>
      {categoryOnlyData.length > 0 ? (
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <ul className="flex justify-start md:justify-evenly items-center gap-2 md:gap-4 py-2 px-4 text-white text-sm md:text-xl uppercase whitespace-nowrap">
            {categoryOnlyData.map((category, index) => (
              <li 
                key={index}
                onClick={() => navigate(`/category/${category}`)}
                className="cursor-pointer hover:text-blue-300 transition-colors px-2 py-1 md:px-0 md:py-0"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-white text-center py-4">No categories found</p>
      )}
    </div>
  );
};

export default Category;