import React from "react";
import { useCartContext } from "../context/cart_context.jsx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddToCart = ({ amount, setAmount, mainColor, singleProduct }) => {
  const { addToCart } = useCartContext();
  const { id, name, stock } = singleProduct;

  const increase = () => {
    if (amount === stock) {
      setAmount(stock);
    } else {
      setAmount(amount + 1);
    }
  };
  const decrease = () => {
    if (amount === 1) {
      return;
    }
    setAmount(amount - 1);
  };

  if (stock < 1) {
    return <></>;
  }
  return (
    <div className="add">
      <div className="amount-control">
        <button className="minus" onClick={decrease}>
          <AiOutlineMinus />
        </button>
        <p className="amount">{amount}</p>
        <button className="plus" onClick={increase}>
          <AiOutlinePlus />
        </button>
      </div>
      <Link to="/cart">
        <button
          className="discover-btn"
          onClick={() => {
            addToCart(id, mainColor, amount, singleProduct);
          }}
        >
          ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default AddToCart;
