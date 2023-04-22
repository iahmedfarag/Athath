import React from "react";
import { CiDeliveryTruck, CiMoneyCheck1 } from "react-icons/ci";
import { MdPayment, MdSupportAgent } from "react-icons/md";
const Features = () => {
  return (
    <section className="feats">
      <div className="container">
        <article>
          <div className="icon">
            <CiDeliveryTruck />
          </div>
          <h3>Fast & Free Delivery</h3>
          <p>Free delivery on all orders</p>
        </article>
        <article>
          <div className="icon">
            <MdPayment />
          </div>
          <h3>Secure Payment</h3>
          <p>Free delivery on all orders</p>
        </article>
        <article>
          <div className="icon">
            <CiMoneyCheck1 />
          </div>
          <h3>Money Back Guarantee</h3>
          <p>Free delivery on all orders</p>
        </article>
        <article>
          <div className="icon">
            <MdSupportAgent />
          </div>
          <h3>Online Support</h3>
          <p>Free delivery on all orders</p>
        </article>
      </div>
    </section>
  );
};

export default Features;
