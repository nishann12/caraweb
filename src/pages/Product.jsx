import React, { useState, useEffect } from "react";
import { ShoppingCart, Star } from "lucide-react";
import Footer from "./Footer";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
          e.stopPropagation();
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://react-ecomm-demo-backend-prosevo.onrender.com/api/products");
        console.log("API Response:", response.data);

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Unexpected response format");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }
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
          {Array.isArray(products) ? (
            products.map((product) => (
              <div key={product._id} className="col-md-3">
                <ProductCard
                  id={product._id}
                  brand={product.brand}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

