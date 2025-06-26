import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Calculate original price if there's a discount
  const originalPrice =
    product.discount > 0
      ? Math.round((product.price * 100) / (100 - product.discount))
      : null;

  const handleImageClick = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  const handleTitleClick = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm md:shadow-md overflow-hidden hover:shadow-md md:hover:shadow-lg transition-shadow duration-300 mb-4 md:mb-6">
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="w-full sm:w-1/3 md:w-1/4 p-3 md:p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 md:h-48 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={handleImageClick}
          />
        </div>

        {/* Product Details */}
        <div className="w-full sm:w-2/3 md:w-3/4 p-3 md:p-4 flex flex-col justify-between">
          <div>
            <h1
              className="font-bold text-lg md:text-xl line-clamp-2 hover:text-red-500 transition-colors duration-200 mb-1 md:mb-2 cursor-pointer"
              onClick={handleTitleClick}
            >
              {product.title}
            </h1>

            {/* Price Section */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2 md:mb-3">
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                ${product.price}
              </span>
              {originalPrice && (
                <span className="text-base md:text-lg line-through text-gray-500">
                  ${originalPrice}
                </span>
              )}
              {product.discount > 0 && (
                <span className="text-xs md:text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Delivery Info */}
            <div className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
              <p className="mb-1">
                Free delivery <span className="font-semibold">Fri, 18 Apr</span>
              </p>
              <p>
                or Fastest delivery{" "}
                <span className="font-semibold">Tomorrow, 17 Apr</span>
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-2 md:mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 md:py-2 px-4 md:px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;