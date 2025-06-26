import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};

const Pagination = ({ Page, dynamicPage, pageHandler }) => {
  return (
    <div className="mt-6 md:mt-10 space-x-2 md:space-x-4 flex items-center justify-center flex-wrap">
      <button
        onClick={() => pageHandler(Page - 1)}
        disabled={Page === 1}
        className={`${
          Page === 1 ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
        } text-white px-2 py-1 md:px-3 md:py-1 rounded-md cursor-pointer transition-colors text-sm md:text-base`}
      >
        Prev
      </button>

      {getPages(Page, dynamicPage).map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          className={`cursor-pointer px-1 md:px-2 ${
            item === Page ? "font-bold text-red-600" : "text-gray-700"
          } text-sm md:text-base`}
        >
          {item}
        </span>
      ))}

      <button
        onClick={() => pageHandler(Page + 1)}
        disabled={Page === dynamicPage}
        className={`${
          Page === dynamicPage ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
        } text-white px-2 py-1 md:px-3 md:py-1 rounded-md cursor-pointer transition-colors text-sm md:text-base`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;