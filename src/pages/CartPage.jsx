import React, { useEffect } from "react";
import { useCartContext } from "../context/cart_context.jsx";
import { Link } from "react-router-dom";
import { Header } from "../Page.js";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { formatPrice } from "../helpers.js";
import { useUserContext } from "../context/UserContext.jsx";

const CartPage = () => {
  const { myUser, loginWithRedirect } = useUserContext();
  const {
    cart,
    totalAmount,
    shippingFee,
    removeItem,
    toggleAmount,
    clearCart,
  } = useCartContext();

  const increase = (id) => {
    toggleAmount(id, "inc");
  };

  const decrease = (id) => {
    toggleAmount(id, "dec");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cart.length < 1) {
    return (
      <>
        <Header page={"Cart"} />
        <section className="empty">
          <div className="container">
            <h2>cart is empty...</h2>
            <br />
            <Link to="/products" className="discover-btn">
              Products
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header page={"Cart"} />
      <section className="cart">
        <div className="container">
          <div className="columns">
            <ul>
              <li>item</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
              <span></span>
            </ul>
          </div>

          <hr />

          <div className="items">
            {cart.map((item) => {
              const { id, name, image, price, color, amount } = item;
              return (
                <div className="item" key={id}>
                  <div className="info">
                    <img src={image} alt="" />
                    <div className="prd-title">
                      <h5 className="title">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </h5>
                      <p>
                        color: <span style={{ background: color }}></span>
                      </p>
                    </div>
                  </div>
                  <p className="price">{formatPrice(price)}</p>
                  <div className="quantity">
                    <div className="amount-control">
                      <button
                        className="minus"
                        onClick={() => {
                          decrease(id);
                        }}
                      >
                        <AiOutlineMinus />
                      </button>
                      <p className="amount">{amount}</p>
                      <button
                        className="plus"
                        onClick={() => {
                          increase(id);
                        }}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                  <p className="subtotal">{formatPrice(price * amount)}</p>
                  <button
                    className="remove"
                    onClick={() => {
                      removeItem(id);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              );
            })}
          </div>

          <hr />

          <div className="control">
            <Link to="/products">
              <button className="continue">Continue Shopping</button>
            </Link>
            <button className="clear" onClick={clearCart}>
              Clear Shooping Cart
            </button>
          </div>

          <div className="total">
            <ul>
              <li>
                <p>Subtotal:</p>
                <span>{formatPrice(totalAmount)}</span>
              </li>
              <li>
                <p>Shipping Fee:</p>
                <span>{formatPrice(shippingFee)}</span>
              </li>
            </ul>
            <hr />
            <h3>
              <p>Order Total: </p>
              <span>${totalAmount + shippingFee}</span>
            </h3>
          </div>
          {myUser ? (
            <Link to="/checkout">
              <button className="checkout">Proceed to checkout</button>
            </Link>
          ) : (
            <button className="checkout" onClick={loginWithRedirect}>
              Login
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
