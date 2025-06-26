import React from "react";
import { useCart } from "../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Cart = ({ location = {}, getlocation }) => {
  const { CartItem, updateQuantity, removeItem } = useCart();
  const { user, isLoaded } = useUser();

  const totalPrice = CartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isLoaded) {
    return (
      <div className="text-center py-10 md:py-20">Loading user data...</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4">
      {CartItem.length > 0 ? (
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            My Cart (
            {CartItem.reduce((total, item) => total + item.quantity, 0)})
          </h1>
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 mb-6 sm:mb-8">
            <div className="mt-2 sm:mt-4 space-y-4 sm:space-y-6">
              {CartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 sm:pb-4 gap-2 sm:gap-0"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <img
                      src={item.image || "default-image.jpg"}
                      alt={item.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h1 className="font-medium text-sm sm:text-base truncate">
                        {item.title}
                      </h1>
                      <p className="text-gray-600 text-sm">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-normal gap-2 sm:gap-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 text-sm sm:text-base"
                      >
                        -
                      </button>
                      <span className="text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 text-sm sm:text-base"
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-1 sm:ml-4">
                      <FaRegTrashAlt
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-lg sm:text-xl cursor-pointer hover:text-red-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Delivery Info Section */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h1 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <MdOutlineDeliveryDining className="text-blue-500" />
                Delivery Info
              </h1>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user?.fullName || ""}
                    readOnly
                    className="w-full p-2 text-sm sm:text-base border rounded-md bg-gray-100"
                  />
                </div>
                {/* Other form fields with similar mobile adjustments */}

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base mt-2 sm:mt-4">
                  Submit
                </button>
                <div className="flex items-center my-4 sm:my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-2 sm:mx-4 text-gray-500 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={getlocation}
                    className="bg-green-600 text-white py-2 px-4 sm:px-6 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
                  >
                    Detect Current Location
                  </button>
                </div>
              </div>
            </div>

            {/* Bill Details Section */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-700">
                Bill Details
              </h1>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {/* Bill items with mobile adjustments */}
              </div>

              <hr className="my-3 sm:my-4 border-gray-200" />

              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h1 className="text-base sm:text-lg font-bold text-gray-700">
                  Grand total
                </h1>
                <p className="text-base sm:text-lg font-bold">
                  ${(totalPrice + 5).toFixed(2)}
                </p>
              </div>

              <button className="w-full bg-purple-600 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium text-base sm:text-lg">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 sm:py-20">
          <p className="text-red-500 text-3xl sm:text-5xl">
            Your cart is empty
          </p>
          <div className="flex flex-col justify-center items-center mt-6 sm:mt-10">
            <FaCartShopping className="text-5xl sm:text-7xl text-red-500" />
            <NavLink to="/product" className="mt-5 sm:mt-7">
              <button className="bg-blue-500 h-12 sm:h-[50px] w-40 sm:w-[200px] rounded-3xl text-sm sm:text-md text-white font-bold sm:font-extrabold hover:bg-blue-900 transition-all">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
