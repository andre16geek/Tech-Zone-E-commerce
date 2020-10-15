import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkoutAd" src="/banerAD.jpg" alt="banner"></img>
        <div className="checkoutTitle">
          <h2>Your Shopping Basket</h2>
          {/* shopping items of checkout product */}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
