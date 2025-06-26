import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">About Us</h3>
            <p className="text-gray-400 mb-3 text-sm md:text-base">
              We provide the best products at competitive prices.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 md:space-x-4">
              {/* Social icons */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              {['Home', 'Shop', 'About', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition text-sm md:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Customer Service</h3>
            <ul className="space-y-1 md:space-y-2">
              {['My Account', 'Order Tracking', 'Wishlist', 'Returns', 'Shipping'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition text-sm md:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
              <li>123 Main Street, City</li>
              <li>Email: info@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li className="mt-2 md:mt-4">
                <h4 className="font-bold text-white mb-1 md:mb-2">We Accept</h4>
                <div className="flex justify-center sm:justify-start space-x-2">
                  <FaCcVisa className="h-6 w-6 md:h-7 md:w-7" />
                  <FaCcMastercard className="h-6 w-6 md:h-7 md:w-7" />
                  <FaCcPaypal className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
          <div className="flex space-x-3 md:space-x-4">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;