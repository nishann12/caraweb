import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-md-5 px-2 shadow-sm">
    <button className="navbar-brand fw-bold btn btn-link" onClick={() => window.location.href = "#"}>𝓒𝓪𝓻𝓪</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><button className="nav-link btn btn-link">Home</button></li>
        <li className="nav-item"><button className="nav-link btn btn-link">Product</button></li>
        <li className="nav-item"><button className="nav-link btn btn-link">About</button></li>
      </ul>
      <button className="btn btn-link text-dark ms-3">
        <FaShoppingCart size={20} />
      </button>
    </div>
  </nav>
  )
}
