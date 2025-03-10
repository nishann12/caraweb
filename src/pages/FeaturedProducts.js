import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, brand, name, price, image }) => {
  const navigate = useNavigate();
  const { cart = [], toggleCartItem } = useCart();
  const added = cart.some((item) => item.id === id);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toggleCartItem({ id, brand, name, price, image });
  };

  const handleViewProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      style={{
        width: "18rem",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "15px",
        border: "1px solid #dee2e6",
        transition: "all 0.3s ease",
        backgroundColor: "white",
        boxShadow: isHovered
          ? "rgba(0, 0, 0, 0.35) 0px 5px 15px"
          : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewProduct}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      />
      <div style={{ position: "relative" }}>
        <div style={{ color: "#0d6efd", fontSize: "0.9rem", fontWeight: "500", marginBottom: "8px" }}>
          {brand}
        </div>
        <div style={{ fontSize: "1.25rem", fontWeight: "500", marginBottom: "8px", color: "#212529" }}>
          {name}
        </div>
        <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="gold" color="gold" />
          ))}
        </div>
        <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#212529" }}>
          ₹{price}/-
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart()
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          style={{
            backgroundColor: added ? "red" : "transparent",
            color: added ? "white" : "green",
            padding: "8px 12px",
            border: `2px solid ${added ? "red" : "green"}`,
            borderRadius: "18px",
            position: "absolute",
            bottom: "10px",
            right: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};



const FeaturedProducts = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 1rem",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const subtitleStyle = {
    color: "#6c757d",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
  };


  const products = [
    {
      id: 1,
      brand: "RAYMOND",
      name: "Dyno White HM",
      price: "1290",
      image: "https://react-first-app-five.vercel.app/assets/tshirt1.jpg",
      rating: 5,
    },
    {
      id: 11,
      brand: "BLACK BERRYS",
      name: "Diamond Blue HM",
      price: "290",
      image: "https://react-first-app-five.vercel.app/assets/tshirt2.jpg",
      rating: 5,
    },
    {
      id: 12,
      brand: "LOUISE",
      name: "Demo Grey Slim",
      price: "390",
      image: "https://react-first-app-five.vercel.app/assets/tshirt3.jpg",
      rating: 5,
    },
    {
      id: 13,
      brand: "Black Berrys",
      name: "Demo Blue Slim",
      price: "390",
      image: "https://react-first-app-five.vercel.app/assets/tshirt4.jpg",
      rating: 5,
    },
    {
      id: 14,
      brand: "Peter England",
      name: "Black Hoodie HM",
      price: "990",
      image: "https://react-first-app-five.vercel.app/assets/hoodie1.jpg",
      rating: 5,
    },
    {
      id: 15,
      brand: "LOUISE",
      name: "SILVER HOODIE",
      price: "7790",
      image: "https://react-first-app-five.vercel.app/assets/hoodie2.jpg",
      rating: 5,
    },
    {
      id: 16,
      brand: "TOMMY HILFIGER",
      name: "Demo Blue Hoodie HM",
      price: "990",
      image: "https://react-first-app-five.vercel.app/assets/hoodie3.jpg",
      rating: 5,
    },
    {
      id: 17,
      brand: "BLACK BERRYS",
      name: "Nebula Red Hoodie",
      price: "1190",
      image: "https://react-first-app-five.vercel.app/assets/hoodie4.jpg",
      rating: 5,
    },
    {
      id: 18,
      brand: "ARROE",
      name: "Classic Hoodie HM",
      price: "790",
      image: "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
      rating: 5,
    },
  ];


  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Featured Products</h2>
        <p style={subtitleStyle}>Summer Collection New Modern Design</p>
      </div>
      <div style={gridStyle}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
