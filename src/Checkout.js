import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkoutAd" src="/banerAD.jpg" alt="banner"></img>
        <div className="checkoutTitle">
          <h2>Your Shopping Basket</h2>
          {/* shopping items */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
