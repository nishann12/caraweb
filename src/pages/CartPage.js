import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import Product from "./Product";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, toggleCartItem, updateCartQuantity } = useCart();

  const goToProducts = () => {
    navigate("/product");
  };

  const goToAddressPage = () => {
    navigate("/address");
  };

  // 🛒 Calculate Prices
  const discountRate = 0.10; // 10% discount
  const originalTotal = cart.reduce(
    (total, product) => total + parseFloat(product.price) * product.quantity, 0
  );
  const discountAmount = originalTotal * discountRate;
  const totalPrice = originalTotal - discountAmount;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section - Cart Items */}
        <div className="col-md-8 mt-3">
          {cart.length === 0 ? (
            <div className="text-center p-5">
              <h5 className="text-muted">Cart is empty, Please Select a Product First ..!</h5>
              <button className="btn btn-warning mt-3" onClick={goToProducts}>
                Go to Products
              </button>
            </div>
          ) : (
            cart.map((product, index) => (
              <div key={index} className="card mb-3 shadow-sm mt-2" >
                <div className="row g-0">
                  <Link className="col-md-3 " to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid rounded-start "
                      
                    />
                  </Link>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="card-body">
                      <h6 className="card-title">{product.brand}</h6>
                      <p className="card-text">{product.name}</p>
                      <h6 className="text-success">&#8377; {product.price}</h6>
                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateCartQuantity(product.id, product.quantity - 1)}
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateCartQuantity(product.id, product.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => toggleCartItem(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section - Order Summary */}
        <div className="col-md-4 mt-5  ">
          <div className="card shadow-sm p-3">
            <div className="card-body"  >
              <h5 className="fw-bold">Order Summary</h5>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Original Price</span> <span>&#8377; {originalTotal.toFixed(2)}</span>
              </p>
              <p className="d-flex justify-content-between text-success">
                <span>Discount (10%)</span> <span>- &#8377; {discountAmount.toFixed(2)}</span>
              </p>
              <p className="d-flex justify-content-between text-danger">
                <span>Shipping</span> <span>Free</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Coupon Applied</span> <span>None</span>
              </p>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span>Total Amount</span> <span>&#8377; {totalPrice.toFixed(2)}</span>
              </h5>
              <p className="text-muted text-end">Estimated Delivery by Feb 22, 2025</p>

              {/* Remove Saved Address */}
              <button className="btn btn-danger w-100 mt-3" onClick={goToAddressPage}>
                Add Address
              </button>

              <button 
                className="btn btn-primary w-100 mt-2 " onClick={goToAddressPage} 
                disabled={cart.length === 0}
              >
                Buy Now
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
