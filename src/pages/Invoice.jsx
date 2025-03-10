import React, { useRef } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoicePage = () => {
  const { cart, selectedAddress } = useCart();
  const invoiceRef = useRef();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return calculateTotal() * 0.1; // Example: 10% discount
  };

  const finalTotal = calculateTotal() - calculateDiscount();

  const downloadInvoice = () => {
    const input = invoiceRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="container mt-5" ref={invoiceRef}>
      <div className="card ">
        <div className="text-center mb-3 bg-info mt-2">
          <h2>CARA PRIVATE LIMITED</h2>
          <p> Date: {new Date().toDateString()}</p>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Customer Details:</h5>
            <p>Name: {selectedAddress?.name}</p>
            <p>Email: {selectedAddress?.email}</p>
            <p>Phone: {selectedAddress?.phone}</p>
            <p>Address: {selectedAddress?.address}, {selectedAddress?.district}</p>
          </div>
        </div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>SI NO</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>UNIT PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end">
          <p>Price: {calculateTotal().toFixed(2)}</p>
          <p>Discount: {calculateDiscount().toFixed(2)}</p>
          <h4>Total Amount: {finalTotal.toFixed(2)}</h4>
        </div>
        <button className="btn btn-primary w-100 mt-3" onClick={downloadInvoice}>
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoicePage;
