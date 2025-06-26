import axios from "axios";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductListView from "../Component/ProductListView";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const category = params.category;
  const [searchData, setsearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getfilterData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      setsearchData(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getfilterData();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : searchData.length > 0 ? (
        <div className="mt-4 sm:mt-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-sm sm:text-base mb-4 text-blue-600 hover:text-blue-800"
          >
            <ChevronLeft className="mr-1" size={20} />
            Back to Products
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {searchData.map((product) => (
              <ProductListView key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <h2 className="text-lg sm:text-xl">No products found in this category</h2>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;