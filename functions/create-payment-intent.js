// domain/.netlify/functions/create-payment-intent
const dotenv = require("dotenv");
dotenv.config();
// const stripe = require("stripe")(process.env.VITE_REACT_APP_STRIPE_SECRET_KEY);
const Stripe = require("stripe");
const stripe = Stripe(`${process.env.VITE_REACT_APP_STRIPE_SECRET_KEY}`);
// console.log(process.env.VITE_REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  const { cart, shippingFee, totalAmount } = JSON.parse(event.body);
  const calculateOrderAmount = () => {
    return shippingFee + totalAmount;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    return {
      statusCode: 501,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};
