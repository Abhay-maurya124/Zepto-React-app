import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, CartItem } = useCart();

  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden 
      hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div className="bg-gray-100 w-full aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-3 md:p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        {product.discountPercentage && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {Math.round(product.discountPercentage)}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h2 
          className="font-semibold text-gray-900 line-clamp-2 mb-2 text-sm md:text-base cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title}
        </h2>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <p className="text-base md:text-lg font-bold text-gray-900">
              ${product.price}
            </p>
            {product.rating && (
              <div className="flex items-center bg-blue-100 px-2 py-1 rounded">
                <span className="text-xs md:text-sm font-medium text-blue-800">
                  {product.rating.rate}
                </span>
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            )}
          </div>

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-1 md:py-2 px-3 md:px-4 rounded-md
            flex items-center justify-center gap-1 md:gap-2 transition-colors duration-200 font-medium text-sm md:text-base"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            <IoCartOutline className="text-sm md:text-base" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;