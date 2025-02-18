import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h2>Repair Services</h2>
        <h3>Up to <span className="highlight">70% off</span> - all t-shirts & Accessories</h3>
        <button style={{color:"red"}}>Explore More</button>
      </div>
    </div>
  );
};

export default Banner;