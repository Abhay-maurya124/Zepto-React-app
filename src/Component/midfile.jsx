import { Parallax } from "react-parallax";
import laptop from "../assets/laptop.jpg";
import { NavLink } from "react-router-dom";

const Midfile = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={laptop}
      bgImageAlt="parallax background"
      strength={-200}
    >
      <div className="flex flex-col items-center justify-center h-[300px] md:h-[500px] lg:h-[600px] text-white px-4">
        <div className="text-center bg-black bg-opacity-50 p-4 md:p-6 lg:p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4">
            Next Gen Electronics At your Finger Tips
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-3 md:mb-4">
            Discover our amazing deals
          </p>
          <NavLink to="/Product">
            <button className="mt-2 md:mt-4 px-4 py-1 md:px-5 md:py-2 lg:px-6 lg:py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform text-sm md:text-base">
              View All Deals
            </button>
          </NavLink>
        </div>
      </div>
    </Parallax>
  );
};

export default Midfile;