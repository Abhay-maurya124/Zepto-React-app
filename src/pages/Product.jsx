import React, { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import FilterSection from "../Component/FilterSection";
import ProductCard from "../Component/Productcard";
import { dataContext } from "../Context/dataContext";
import Pagination from "../Component/Pagination";

const Product = () => {
  const { data, fetchAllProduct, loading, error } = useContext(dataContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const totalPages = Math.ceil((filterData?.length || 0) / 8);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <h3 className="text-xl font-medium text-red-600 mb-4">
              Error loading products
            </h3>
            <button
              onClick={fetchAllProduct}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Retry
            </button>
          </div>
        ) : filterData?.length > 0 ? (
          <>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <FilterSection
                  search={search}
                  setSearch={setSearch}
                  brand={brand}
                  setBrand={setBrand}
                  category={category}
                  setCategory={setCategory}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  handleBrandChange={handleBrandChange}
                  handleCategoryChange={handleCategoryChange}
                />
              </div>
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filterData
                    .slice((page - 1) * 8, page * 8)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Pagination pageHandler={pageHandler} Page={page} dynamicPage={totalPages} />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or check back later
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
