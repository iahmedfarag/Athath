import React from "react";

import { StripeCheckout, Header } from "../Page.js";
import { useCartContext } from "../context/cart_context.jsx";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <>
      <Header page={"Checkout"} />
      <section className="checkout">
        <div className="container">
          {cart.length < 1 ? (
            <section className="empty">
              <div className="container">
                <h2>cart is empty...</h2>
                <br />
                <Link to="/products" className="discover-btn">
                  Products
                </Link>
              </div>
            </section>
          ) : (
            <StripeCheckout />
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
