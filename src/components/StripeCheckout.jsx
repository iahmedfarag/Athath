import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context.jsx";
import { useUserContext } from "../context/UserContext.jsx";
import { formatPrice } from "../helpers.js";

const promise = loadStripe(
  `${import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY}`
);

const CheckoutForm = () => {
  return <h2>hello from stripe checkout</h2>;
};
const StripeCheckout = () => {
  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
