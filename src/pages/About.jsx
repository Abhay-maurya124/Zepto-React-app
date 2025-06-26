import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      {/* Hero Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
        About <span className="text-red-600">Zeptro</span>
      </h1>
      
      {/* Introduction */}
      <section className="mb-8 md:mb-10">
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
          Welcome to <span className="font-semibold text-red-600">Zeptro</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we're here to power up your tech life with premium products and unbeatable service.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">
          <span className="border-b-2 border-red-500 pb-1">Our Mission</span>
        </h3>
        <p className="text-base md:text-lg text-gray-700">
          At Zeptro, our mission is to make innovative technology accessible to everyone. We're passionate about connecting people with the tools and tech they need to thrive in a digital world—all at competitive prices and delivered with speed and care.
        </p>
      </section>

      {/* Why Choose Zeptro */}
      <section className="mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">
          <span className="border-b-2 border-red-500 pb-1">Why Choose Zeptro</span>
        </h3>
        <ul className="list-disc pl-5 md:pl-6 space-y-2 text-base md:text-lg text-gray-700">
          <li>Top-quality electronics products from trusted brands</li>
          <li>Competitive pricing with regular discounts and offers</li>
          <li>Fast and reliable shipping with real-time tracking</li>
          <li>Exceptional customer service with 24/7 support</li>
          <li>30-day hassle-free return policy</li>
          <li>Expert-curated product selections</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">
          <span className="border-b-2 border-red-500 pb-1">Our Vision</span>
        </h3>
        <p className="text-base md:text-lg text-gray-700">
          We envision a future where technology enhances every aspect of life without complexity or excessive cost. Zeptro aims to be the bridge between cutting-edge innovation and everyday consumers, making advanced technology intuitive, affordable, and accessible to all.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">
          <span className="border-b-2 border-red-500 pb-1">Our Team</span>
        </h3>
        <p className="text-base md:text-lg text-gray-700">
          Behind Zeptro is a team of tech enthusiasts, customer service experts, and logistics professionals who share a common passion for technology and customer satisfaction. We're constantly researching, testing, and selecting the best products to add to our collection.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mt-8 md:mt-12 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">
          <span className="border-b-2 border-red-500 pb-1">Join the Zeptro Family</span>
        </h3>
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 max-w-2xl mx-auto">
          Become part of our growing community of tech enthusiasts. Sign up for our newsletter to receive exclusive deals, early access to new products, and tech tips straight to your inbox.
        </p>
        <NavLink to="/product">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm md:text-base">
            Start Shopping Now →
          </button>
        </NavLink>
      </section>
    </div>
  );
};

export default About;