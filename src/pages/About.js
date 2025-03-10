import React from "react";
import Footer from "./Footer";
import './about.css';
export default function About() {
  return (
    <div style={{ marginTop: "60px" }} className="containerAbout">
      <div className="knowUs">
        <h1 style={{ fontSize: "150%", fontWeight: "400", textAlign: "center" }}>
          #KnowUs
        </h1>
        <h6 style={{ fontSize: "1.2rem", fontWeight: "300", textAlign: "center" }}>
          Modern Basics. Radical Transparency
        </h6>
      </div>
      <div className="weContainer">
        <div className="imageBox">
          <img
            src="https://www.noiise.com/wp-content/uploads/2023/11/definition-ecommerce.jpg.webp"
            alt="banner"
          />
        </div>
        <div className="textBox">
          <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Who Are We ?</h1>
          <p style={{ fontSize: "18px", fontWeight: "400" }}>
            An e-commerce website is one that allows people to buy and sell
            physical goods, services, and digital products over the internet
            rather than at a brick-and-mortar location. Through an e-commerce
            website, a business can process orders, accept payments, manage
            shipping and logistics, and provide customer service. Create stunning
            images with as much or as little control as you like thanks to a
            choice of Basic and Creative modes.
          </p>
        </div>
      </div>
      <div className="locationContainer">
        <div className="addressBox">
          <h6>GET IN TOUCH</h6>
          <h3>Visit one of our agency today</h3>
          <h6>Head Office</h6>
          <p><i className="bi bi-map"></i> 80/A Sidheekhabadh, Kondotty, Kerala.</p>
          <p><i className="bi bi-envelope-at"></i> EuropianFashion@gmail.com</p>
          <p><i className="bi bi-telephone"></i> +91 9496279843</p>
          <p><i className="bi bi-clock"></i> Monday to Saturday: 9.00am to 16.00pm</p>
        </div>
        <div className="locationBox">
          <div className="Mapp">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.344972085632!2d75.9702723821482!3d11.050901485801319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64c85ebbb2f2b%3A0xb6e65e7eed307b30!2sVengara%2C%20Kerala%20676304!5e0!3m2!1sen!2sin!4v1739944577598!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="fifthContainer">
        <div className="newsletter">
            <div
            style={{paddingLeft:"30px"}}
            className="newsText w-50 d-flex justify-content-center flex-column" 
            >
            <h2 >Sign up for Newsletter</h2>
            <h6 style={{fontWeight:"300"}}>
            Get E-mail updates about out latest shop and{" "}
            <span style={{ color: "#ffbd27" }}>special offers</span>
            </h6>
            </div>
            <div className="newsMail w-50 d-flex justify-content-center alighn-items-center">
                <input
                type="text"
                placeholder="your email address"
                style={{borderRadius:"0px,",height:"38px",width:"50%", padding:"10px"}}
                />
                 <button
              type="button"
              style={{ borderRadius: "0px", margin: 0 }}
              class="btn btn-success "
            >
              SignUp
            </button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
