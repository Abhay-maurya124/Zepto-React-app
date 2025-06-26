import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Navbar from "./Component/Navbar";
import axios from "axios";
import Footer from "./Component/Footer";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";

function App() {
  const [location, setLocation] = useState(null); // Initialize as null and use proper casing for setLocation

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`; // Fixed typo: log -> lon

        try {
          const response = await axios.get(url);
          const exactLocation = response.data.address;
          setLocation(exactLocation); // Update the state with the location data
        } catch (error) {
          console.log("Error fetching location:", error);
          setLocation(null); // Set to null if there's an error
        }
      },
      (error) => {
        console.log("Error getting geolocation:", error);
        setLocation(null);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar location={location} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/Contact" element={<Contact />}></Route>
          <Route
            path="/category/:category"
            element={<CategoryProduct />}
          ></Route>
          <Route
            path="/Cart"
            element={<Cart location={location} getLocation={getLocation} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
