import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  const { cart, updateAddress } = useCart();

  // Load addresses from localStorage on page load
  useEffect(() => {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(savedAddresses);

    const savedSelected = JSON.parse(localStorage.getItem("selectedAddress"));
    if (savedSelected !== null) setSelectedAddress(savedSelected);
  }, []);

  // Update localStorage when addresses change
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  // Update localStorage when selected address changes
  useEffect(() => {
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
  }, [selectedAddress]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addAddress = () => {
    if (!formData.name || !formData.address || !formData.district || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setAddresses([...addresses, formData]);
    setFormData({ name: "", address: "", district: "", phone: "", email: "" });
    toast.success("Address added successfully!");
  };

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
    if (selectedAddress === index) {
      setSelectedAddress(null);
    }
    toast.info("Address deleted.");
  };

  const selectAddress = (index) => {
    setSelectedAddress(index);
  };

  const proceedToBill = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty. Add items before proceeding to billing.");
      return;
    }
    if (selectedAddress === null) {
      toast.error("Please select an address.");
      return;
    }

    updateAddress(addresses[selectedAddress]); // Store selected address globally

    navigate("/invoice"); // Move to Invoice page
  };

  return (
    <div className="container mt-5 d-flex flex-wrap">
      <ToastContainer />
      
      {/* Address Form */}
      <div className="w-50 p-3">
        <h4>Add New Address</h4>
        <div className="mb-2">
          <label>Name :</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>Address :</label>
          <textarea name="address" className="form-control" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>District :</label>
          <select name="district" className="form-control" value={formData.district} onChange={handleChange}>
            <option value="">Choose District</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Thrissur">Thrissur</option>
          </select>
        </div>
        <div className="mb-2">
          <label>Phone No :</label>
          <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>Email :</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <button className="btn btn-primary mt-3 w-100" onClick={addAddress}>
          Add Address
        </button>
      </div>

      {/* Address List & Selected Address */}
      <div className="w-50 p-3">
        
        {addresses.map((addr, index) => (
          <div key={index} className={`card p-3 mb-2 ${selectedAddress === index ? "border-success" : ""}`}>
            <input
              type="radio"
              name="selectedAddress"
              checked={selectedAddress === index}
              onChange={() => selectAddress(index)}
              className="me-2"
            />
            <span>
              <strong>{addr.name}</strong>
              <p>{addr.address}</p>
              <p>District: {addr.district}</p>
              <p>Contact: {addr.phone}</p>
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteAddress(index)}>
              Delete
            </button>
          </div>
        ))}
        <button className="btn btn-success w-100 mt-3" onClick={proceedToBill}>
          Proceed to Bill
        </button>
      </div>

     
    </div>
  );
};

export default AddressPage;
