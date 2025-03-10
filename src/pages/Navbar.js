import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <>
      {/* Google Font Import */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

      <nav className="navbar navbar-light bg-white px-md-5 px-3 shadow-sm fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap">
          
          {/* ✅ Logo (Now Always Centered) */}
          <button className="btn btn-link p-0 d-flex align-items-center" onClick={() => navigate("/")}>
            <img 
              src="	https://react-first-app-five.vercel.app/assets/logo.png"  // ✅ Replace this with your logo path
              alt="Logo"
              className="logo-img"
            />
          </button>

          {/* ✅ Navigation & Cart (Perfectly Aligned) */}
          <div className="d-flex align-items-center gap-3 flex-nowrap"> 
            
            {/* ✅ Navigation Buttons (Never Breaks in Mobile) */}
            <div className="d-flex gap-3 align-items-center">
              <button className="nav-link btn btn-link nav-btn" onClick={() => navigate("/home")}>
                Home
              </button>
              <button className="nav-link btn btn-link nav-btn" onClick={() => navigate("/product")}>
                Product
              </button>
              <button className="nav-link btn btn-link nav-btn" onClick={() => navigate("/about")}>
                About
              </button>
            </div>

            {/* ✅ Cart Icon with Badge */}
            <button 
              className="btn btn-link text-dark position-relative cart-btn"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* ✅ Custom Styles for Better Alignment */}
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
          }

          /* ✅ Logo Styling (Always Aligned) */
          .logo-img {
            width: 150px;
            height: auto;
            display: block;
          }

          /* ✅ Navigation Buttons */
          .nav-btn {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            transition: color 0.3s ease, transform 0.2s ease;
            position: relative;
            padding: 5px 10px;
            display: flex;
            align-items: center;
          }

          /* ✅ Hover Effect */
          .nav-btn::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            background-color: #007bff;
            left: 50%;
            bottom: -5px;
            transition: width 0.3s ease, left 0.3s ease;
          }

          .nav-btn:hover {
            color: #007bff;
            transform: scale(1.05);
          }

          .nav-btn:hover::after {
            width: 100%;
            left: 0;
          }

          /* ✅ Cart Icon & Badge */
          .cart-btn {
            position: relative;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
          }

          .cart-badge {
            position: absolute;
            top: -5px;
            right: -10px;
            background: red;
            color: white;
            font-size: 12px;
            padding: 3px 7px;
            border-radius: 50%;
            font-weight: bold;
          }

          /* ✅ Small Screen Fix (Logo Alignment) */
          @media (max-width: 768px) {
            .container-fluid {
              padding-left: 15px;
              padding-right: 15px;
            }

            .logo-img {
              width: 45px;  /* ✅ Smaller logo for mobile */
            }

            .nav-btn {
              font-size: 15px;
            }

            .cart-btn {
              font-size: 16px;
            }

            .cart-badge {
              font-size: 10px;
              padding: 2px 6px;
              top: -3px;
              right: -7px;
            }
          }
        `}
      </style>
    </>
  );
}
