import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import Footer from "./Footer";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const carouselImages = [
  {
    src: "https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?t=st=1712793690~exp=1712797290~hmac=0303aa102957c9aef495653ea70f42ee7cebbdb00be9f11d515955903632855a&w=1380",
    alt: "Shopping Promo",
    caption: "Buy 1 Get 1 Free",
    subtext: "The best classic dress is on sale",
  },
  {
    src: "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1712802749~exp=1712806349~hmac=1302417c87fda46d775e75771ed840cae677c67a2e969a6659780c6b168e7737&w=1380",
    alt: "Black Friday Sale",
  },
  {
    src: "https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-120529.jpg?t=st=1712802309~exp=1712805909~hmac=ead0bbb9cf4d882e6bc5218e633759ab39e0fadf422ed6267d3d75d884120994&w=1380",
    alt: "Discount Shopping",
    caption: "Buy 1 Get 1 Free",
    subtext: "The best classic dress is on sale",
  },
];

const products = [
  { id: 1, brand: "ARROW", name: "Grey white HM", price: "390", image: "https://react-first-app-five.vercel.app/assets/shirt3.jpg" },
  { id: 2, brand: "ALLEN SOLLY", name: "Red Beach HM", price: "490", image: "https://react-first-app-five.vercel.app/assets/shirt4.jpg" },
  { id: 3, brand: "TOMMY HILFIGER", name: "Blue Beach HM", price: "490", image: "https://react-first-app-five.vercel.app/assets/shirt5.jpg" },
  { id: 4, brand: "ALLEN SOLLY", name: "Black White Line", price: "590", image: "https://react-first-app-five.vercel.app/assets/shirt6.jpg" },
  { id: 5, brand: "RAYMOND", name: "Cream White Line", price: "990", image: "https://react-first-app-five.vercel.app/assets/shirt7.jpg" },
  { id: 6, brand: "LOUISE", name: "Demo Grey Slim", price: "390", image: "https://react-first-app-five.vercel.app/assets/hoodie2.jpg" },
  { id: 7, brand: "Tommy Hilfiger", name: "Deep Blue", price: "390", image: "https://react-first-app-five.vercel.app/assets/hoodie3.jpg" },
  { id: 8, brand: "LOUISE", name: "Demo Grey Slim", price: "390", image: "https://react-first-app-five.vercel.app/assets/hoodie4.jpg" },
  { id: 9, brand: "LOUISE", name: "Silver Hoodie", price: "390", image: "https://react-first-app-five.vercel.app/assets/hoodie5.jpg" },
];

const ProductCard = ({ brand, name, price, image, id }) => {
  const navigate = useNavigate();
  const { cart = [], toggleCartItem } = useCart(); 
  const isInCart = cart.some((item) => item.id === id);
  

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "left",
        position: "relative",
        backgroundColor: "#fff",
      }}
      onClick={() => navigate(`/product/${id}`)}
    >
      <img src={image} alt={name} style={{ width: "100%", objectFit: "cover" }} />
      <h6>{brand}</h6>
      <p>{name}</p>

      <div style={{ display: "flex", color: "grey", gap: "5px" }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="gold" color="gold" />
        ))}
      </div>
      <p>
        <strong>{price}/-</strong>
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents navigation when clicking the cart button
          toggleCartItem({ brand, name, price, image, id });
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        style={{
          backgroundColor: isInCart ? "red" : "transparent",
          color: isInCart ? "white" : "green",
          padding: "8px 12px",
          border: isInCart ? "2px solid red" : "2px solid green",
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
  );
};

export default function Product() {
  return (
    <div>
      <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#promoCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image.src} className="d-block w-100" style={{ height: "80vh", objectFit: "cover" }} alt={image.alt} />
              {image.caption && (
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="text-dark">
                    <strong>{image.caption}</strong>
                  </h2>
                  <p className="text-dark">{image.subtext}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
