import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/dataContext";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Catagory from "./Catagory";

const Carousel = () => {
  const { data, fetchAllProduct } = useContext(dataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only fetch if data is empty
    if (!data || data.length === 0) {
      const loadData = async () => {
        await fetchAllProduct();
        setIsLoading(false);
      };
      loadData();
    } else {
      setIsLoading(false);
    }
  }, [data, fetchAllProduct]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: window.innerWidth > 768, 
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No products available</p>
        <button
          onClick={fetchAllProduct}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        {data.slice(0, 7).map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center h-[400px] md:h-[600px] w-full px-4">
              <div className="space-y-3 md:space-y-6 max-w-md text-center md:text-left px-2">
                <h3 className="text-red-500 font-semibold font-sans text-xs md:text-sm">
                  Powering your World With the best in Electronics
                </h3>
                <h1 className="text-white text-xl md:text-4xl uppercase line-clamp-2 md:line-clamp-3 font-bold">
                  {item.title}
                </h1>
                <p className="line-clamp-2 md:line-clamp-3 text-gray-400 text-sm md:text-base">
                  {item.description || "No description available"}
                </p>
                <NavLink to="/product">
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-md cursor-pointer mt-2 md:mt-4 text-sm md:text-base">
                    Shop Now
                  </button>
                </NavLink>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="object-contain rounded-full w-[200px] h-[200px] md:w-[550px] md:h-[550px] hover:scale-105 transition-all shadow-lg md:shadow-2xl shadow-red-400"
              />
            </div>
          </div>
        ))}
      </Slider>
      <Catagory />
    </div>
  );
};

export default Carousel;
