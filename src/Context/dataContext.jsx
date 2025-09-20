import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const dataContext = React.createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // Initialize as empty array

  const fetchAllProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=149");
      setData(res.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setData([]);
    }
  };

  const getUniqueCategory = (data, property) => {
    var newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <dataContext.Provider
      value={{ data, fetchAllProduct, categoryOnlyData, setData, brandOnlyData }}
    >
      {children}
    </dataContext.Provider>
  );
};
export const getData = () => useContext(dataContext);
