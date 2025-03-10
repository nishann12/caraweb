import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const newId = parseInt(id);

  const products = [
    {
      id: 1,
      brand: "ARROW",
      name: "Grey White HM",
      price: "390",
      image: "https://react-first-app-five.vercel.app/assets/shirt3.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/shirt3.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt31.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt32.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt33.jpg",
      ],
      rating: 4.5,
      sold: 980,
      description:
        "Indulge in effortless sophistication with our Grey White HM, a timeless essential that blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed for all-day comfort.",
    },
    {
      id: 2,
      brand: "ALLEN SOLLY",
      name: "Red Beach HM",
      price: "490",
      image: "https://react-first-app-five.vercel.app/assets/shirt4.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/shirt4.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt41.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt42.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt43.jpg",
      ],
      rating: 4.2,
      sold: 850,
      description:
        "Stay stylish with our Red Beach HM shirt, designed for ultimate comfort and breathability. Perfect for casual outings and beachwear.",
    },
    {
      id: 3,
      brand: "TOMMY HILFIGER",
      name: "Blue Beach HM",
      price: "490",
      image: "https://react-first-app-five.vercel.app/assets/shirt5.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/shirt5.jpg",
        "	https://react-first-app-five.vercel.app/assets/shirt51.jpg",
        "	https://react-first-app-five.vercel.app/assets/shirt52.jpg",
        "	https://react-first-app-five.vercel.app/assets/shirt53.jpg"
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id:4,
      brand: "ALLEN SOLLY",
      name: "Black White Line",
      price: "590",
      image: "https://react-first-app-five.vercel.app/assets/shirt6.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/shirt6.jpg",
        "		https://react-first-app-five.vercel.app/assets/shirt61.jpg",
        "	https://react-first-app-five.vercel.app/assets/shirt62.jpg",
        "	https://react-first-app-five.vercel.app/assets/shirt63.jpg",
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id:5,
      brand: "RAYMOND",
      name: "Cream White Line",
      price: "990",
      image: "https://react-first-app-five.vercel.app/assets/shirt7.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/shirt7.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt71.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt72.jpg",
        "https://react-first-app-five.vercel.app/assets/shirt73.jpg",
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id:6,
      brand: 'LOUISE',
      name: 'Demo Grey Slim',
      price: '390',
      image: 'https://react-first-app-five.vercel.app/assets/hoodie2.jpg',
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie2.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie21.jpg",
        "https://react-first-app-five.vercel.app/assets/hoodie22.jpg",
        "https://react-first-app-five.vercel.app/assets/hoodie23.jpg",
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id:7,
      brand: 'LOUISE',
      name: 'Demo Grey Slim',
      price: '390',
      image: '	https://react-first-app-five.vercel.app/assets/hoodie3.jpg',
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie3.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie31.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie32.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie33.jpg",
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id:8,
      brand: 'LOUISE',
      name: 'Demo Grey Slim',
      price: '390',
      image: 'https://react-first-app-five.vercel.app/assets/hoodie4.jpg',
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie4.jpg",
      	"https://react-first-app-five.vercel.app/assets/hoodie41.jpg",
        "https://react-first-app-five.vercel.app/assets/hoodie42.jpg",
        "https://react-first-app-five.vercel.app/assets/hoodie43.jpg",
        
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id:9,
      brand: 'LOUISE',
      name: 'Demo Grey Slim',
      price: '390',
      image: 'https://react-first-app-five.vercel.app/assets/hoodie5.jpg',
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 4.8,
      sold: 1200,
      description:
        "Experience luxury with our Blue Beach HM, a stylish and modern shirt crafted from high-quality fabric to ensure comfort and durability.",
    },
    {
      id: 11,
      brand: "BLACK BERRYS",
      name: "Diamond Blue HM",
      price: "290",
      image: "https://react-first-app-five.vercel.app/assets/tshirt2.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 12,
      brand: "LOUISE",
      name: "Demo Grey Slim",
      price: "390",
      image: "https://react-first-app-five.vercel.app/assets/tshirt3.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 13,
      brand: "Black Berrys",
      name: "Demo Blue Slim",
      price: "390",
      image: "https://react-first-app-five.vercel.app/assets/tshirt4.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 14,
      brand: "Peter England",
      name: "Black Hoodie HM",
      price: "990",
      image: "https://react-first-app-five.vercel.app/assets/hoodie1.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 15,
      brand: "LOUISE",
      name: "SILVER HOODIE",
      price: "7790",
      image: "https://react-first-app-five.vercel.app/assets/hoodie2.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 16,
      brand: "TOMMY HILFIGER",
      name: "Demo Blue Hoodie HM",
      price: "990",
      image: "https://react-first-app-five.vercel.app/assets/hoodie3.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 17,
      brand: "BLACK BERRYS",
      name: "Nebula Red Hoodie",
      price: "1190",
      image: "https://react-first-app-five.vercel.app/assets/hoodie4.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    {
      id: 18,
      brand: "ARROE",
      name: "Classic Hoodie HM",
      price: "790",
      image: "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
      thumbnails: [
        "https://react-first-app-five.vercel.app/assets/hoodie5.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie51.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie52.jpg",
        "	https://react-first-app-five.vercel.app/assets/hoodie53.jpg",

        
      ],
      rating: 5,
    },
    
];
  const singlePro = products.find((item) => item.id === newId);
  const [selectedImage, setSelectedImage] = useState(singlePro ? singlePro.image : "");
  if (!singlePro) {
   
  }

  return (
    <div className="container mt-5 px-5">
      <div className="row align-items-center">
        {/* Left: Product Image & Thumbnails */}
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="bg-light p-4" style={{ width: "400px" }}>
            <img
              src={selectedImage}
              className="img-fluid rounded"
              alt={singlePro.name}
            />
          </div>

          {/* Thumbnail Images */}
          <div className="d-flex mt-3">
            {singlePro.thumbnails &&
              singlePro.thumbnails.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(img)}
                  className="img-thumbnail mx-1"
                  style={{
                    width: "70px",
                    height: "70px",
                    cursor: "pointer",
                    border:
                      img === selectedImage
                        ? "2px solid #3aa39f"
                        : "2px solid transparent",
                  }}
                />
              ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="col-md-6 mt-5">
          <p className="fw-bold text-uppercase text-secondary">
            <span className="text-dark">{singlePro.brand}</span> / Men Shirt
          </p>

          <h2 className="fw-bolder mt-3">{singlePro.name}</h2>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="fw-bold mb-0">Rating: ⭐ {singlePro.rating}</p>
            <p className="fw-bold mb-0 text-end">Sold Count: {singlePro.sold}</p>
          </div>

          <p className="text-muted mt-4">{singlePro.description}</p>

          <h4 className="fw-bold mt-3">₹{singlePro.price}</h4>

          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn px-4 py-2 fw-bold shadow-sm"
              style={{ backgroundColor: "#3aa39f", color: "white" }}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-3">
            <p className="mt-2 fw-medium text-center">
              Free 3-5 days shipping ▪ Tool-free assembly ▪ 30-day trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
