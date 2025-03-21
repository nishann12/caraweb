import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [singlePro, setSinglePro] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://react-ecomm-demo-backend-prosevo.onrender.com";


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/product/${id}`);
        
        const productData = response.data?.product || response.data;
        setSelectedImage(productData.image );
        setSinglePro(productData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product data.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, location.state]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;
  if (!singlePro) return <p className="text-center mt-5">No product found.</p>;

  return (
    <div className="container mt-5 px-5">
      <div className="row align-items-center">

        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="bg-light p-4" style={{ width: "400px" }}>
            <img
              src={selectedImage}
              
              className="img-fluid rounded"
              alt={singlePro.name || "No image available"}
            />
          </div>
        </div>

        <div className="col-md-6 mt-5">
          <p className="fw-bold text-uppercase text-secondary">
            <span className="text-dark">{singlePro.brand || "Unknown Brand"}</span> / Category
          </p>

          <h2 className="fw-bolder mt-3">{singlePro.name || "No Name"}</h2>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="fw-bold mb-0">Rating: ⭐ {singlePro.rating || "N/A"}</p>
            <p className="fw-bold mb-0 text-end">Sold Count: {singlePro.sold || "0"}</p>
          </div>

          <p className="text-muted mt-4">{singlePro.description || "No description available"}</p>

          <h4 className="fw-bold mt-3">₹{singlePro.price || "0.00"}</h4>

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
