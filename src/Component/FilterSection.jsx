import React from "react";
import { getData } from "../Context/dataContext";

const FilterSection = ({
  search,
  setpriceRange,
  brand,
  priceRange,
  setsearch,
  setbrand,
  category,
  handleBrandChange,
  handleCategoryChange,
  setcategory,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-sm space-y-6">
      {/* Search */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800 mb-2 text-center sm:text-left">
          Search
        </h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Categories */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800 mb-2">Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto p-2 border border-gray-100 rounded">
          {categoryOnlyData?.map((item, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded"
            >
              <input
                type="radio"
                name="category"
                className="h-4 w-4 text-blue-600"
                value={item}
                checked={category === item}
                onChange={handleCategoryChange}
              />
              <span className="text-gray-700 text-xs font-medium uppercase">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800 mb-2">Brand</h1>
        <select
          name="brands"
          id="brands"
          value={brand}
          onChange={handleBrandChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          {brandOnlyData?.map((item, idx) => (
            <option key={idx} value={item} className="uppercase">
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800 mb-2">Price Range</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm">
            ${priceRange[0]} — ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) =>
              setpriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full"
          />
        </div>
      </div>

      {/* Reset Button */}
      <button
        className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white font-medium py-2 rounded-md"
        onClick={() => {
          setsearch("");
          setcategory("All");
          setbrand("All");
          setpriceRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
