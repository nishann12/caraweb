import React from "react";


const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          {/* Logo and Contact */}
          <div className="col-md-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyF5hXBqwGEg0qUrsXboYN_dNLqGiSDSVy0Q&s" 
              alt="Flipkart Logo" 
              width="150" 
              className="mb-2"
            />
            <p><strong>Contact</strong></p>
            <p>Address: 80/A Sidheekhabadh, Kondotty, Malappuram.</p>
            <p>Phone: 0483 8698620</p>
            <p>Hours: 10 am - 6 pm</p>
          </div>

          {/* About Links */}
          <div className="col-md-2">
            <p><strong>About</strong></p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">About us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Delivery Information</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* My Account Links */}
          <div className="col-md-2">
            <p><strong>My Account</strong></p>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Sign in</a></li>
              <li><a href="#" className="text-dark text-decoration-none">View Cart</a></li>
              <li><a href="#" className="text-dark text-decoration-none">My Wishlist</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Track My Order</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Help</a></li>
            </ul>
          </div>

          {/* App and Payment Options */}
          <div className="col-md-4">
            <p><strong>Install App</strong></p>
            <p>From Apple Store or Google Play</p>
            <div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PHgC6IQOgvyIZdq-DS3jr8VprWjzm7zxnw&s" 
                alt="App Store" 
                width="135" // Same width as Google Play
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                width="135"
                height= "140"
              />
            </div>
            <p className="mt-3"><strong>Secured Payment Gateways</strong></p>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width="50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" width="50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width="50" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEf7GJbNhhYUGPja39bgpNNbeCiTO3wOWFwuShvcyIrjfE9JHo9ETVXEnRuunGzRW_Fi8&usqp=CAU" alt="American Express" width="55" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3 pb-3">
          <p>&copy; 2024, E-commerce Website - MyReact FirstApp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
