import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../Component/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../Context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.in/api/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch(console.error);
  }, [id]);

  const originalPrice = product
    ? Math.round((product.price * 100) / (100 - product.discount))
    : 0;

  return (
    <div className="px-4 py-6 bg-white min-h-screen">
      {product ? (
        <>
          <Breadcrums title={product.title} />
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 mt-4">
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <div className="text-gray-600 flex flex-wrap gap-2 text-sm">
                {product.brand?.toUpperCase()} /{" "}
                {product.category?.toUpperCase()} / {product.model}
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold">${product.price}</span>
                <span className="line-through text-gray-500">
                  ${originalPrice}
                </span>
                <span className="text-green-600">{product.discount}% OFF</span>
              </div>
              <p className="text-gray-700">{product.description}</p>

              {/* Quantity & Add Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="block text-sm font-medium">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-20 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto justify-center"
                >
                  <IoCartOutline size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-24 text-gray-500">
          Loading product details...
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
