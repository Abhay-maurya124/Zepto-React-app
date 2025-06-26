import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const itemInCart = CartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      const updateCart = CartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updateCart);
      toast.success("Product Qunatity Increased");
    } else {
      setCartItem([...CartItem, { ...product, quantity: 1 }]);
      toast.success("Product is added to cart");
    }
  };

  const updateQuantity = (productId, action) => {
    setCartItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          let newQuantity = item.quantity;
          if (action === "increase") {
            newQuantity += 1;
            toast.success("Quatity is Increased");
          } else if (action === "decrease") {
            newQuantity = Math.max(1, item.quantity - 1); // Ensure quantity doesn't go below 1
            toast.success("Quatity is decreased");
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (productId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    toast.success("Product is deleted from Cart");
  };

  return (
    <CartContext.Provider
      value={{ CartItem, setCartItem, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
