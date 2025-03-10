import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";  
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import CartPage from "./pages/CartPage";
import AddressPage from "./pages/AddressPage";
import Invoice from "./pages/Invoice";  
import { CartProvider } from "./CartContext";


const App = () => {
  return (
    <Router> 
      <CartProvider>
        <Navbar />  
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />  
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
