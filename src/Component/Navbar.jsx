import { MapPin, ShoppingCart, Menu } from 'lucide-react';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useCart } from "../Context/CartContext";

const Navbar = ({ location }) => {
  const { CartItem } = useCart();
  const cartItemCount = CartItem.length;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white py-2 md:py-3 shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo and location */}
        <div className="flex gap-4 md:gap-8 items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <Link to="/" className="flex items-center">
            <h1 className="font-bold text-2xl md:text-3xl">
              <span className="text-red-500 font-serif">Z</span>eptro
            </h1>
          </Link>

          <div className="hidden md:flex gap-1 cursor-pointer max-w-xs text-gray-700 items-center">
            <MapPin className="text-red-600" />
            <span className="font-semibold text-sm md:text-base -space-y-1 md:-space-y-2">
              {location ? (
                <>
                  <p className="leading-tight">{location.country}</p>
                  <p className="leading-tight">{location.state || location.city || location.county}</p>
                </>
              ) : (
                "Loading location..."
              )}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-base lg:text-lg">
          {['Home', 'Product', 'Contact', 'About'].map((item) => (
            <NavLink
              key={item}
              to={`/${item === 'Home' ? '' : item}`}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 border-red-500" : "text-gray-700"
                } cursor-pointer hover:text-black transition-colors`
              }
            >
              {item}
            </NavLink>
          ))}
          
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton className="text-sm" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <Link
              to="/Cart"
              className="relative flex items-center hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="text-blue-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile cart and user */}
        <div className="flex md:hidden items-center gap-4">
          <Link
            to="/Cart"
            className="relative flex items-center hover:text-blue-600 transition-colors"
          >
            <ShoppingCart className="text-blue-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount > 9 ? "9+" : cartItemCount}
              </span>
            )}
          </Link>
          <SignedOut>
            <SignInButton className="text-sm" />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <div className="flex flex-col space-y-3">
            {['Home', 'Product', 'Contact', 'About'].map((item) => (
              <NavLink
                key={item}
                to={`/${item === 'Home' ? '' : item}`}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500 font-medium" : "text-gray-700"
                  } cursor-pointer hover:text-black transition-colors py-1`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            {/* Mobile location */}
            <div className="flex gap-1 cursor-pointer text-gray-700 items-center pt-2">
              <MapPin className="text-red-600" />
              <span className="font-semibold text-sm">
                {location ? (
                  <>
                    <p>{location.country}</p>
                    {location.state || location.city || location.county}
                  </>
                ) : (
                  "Loading location..."
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;