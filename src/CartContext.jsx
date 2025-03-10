import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null); 

  const toggleCartItem = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === product.id);
      if (exists) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 }); // Reduce quantity
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative or zero quantity
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  

  const updateAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    <CartContext.Provider
      value={{ cart, toggleCartItem, removeFromCart, updateCartQuantity, selectedAddress, updateAddress }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
