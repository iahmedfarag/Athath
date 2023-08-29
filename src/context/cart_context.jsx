import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer.jsx";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };
  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { id, value } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("cart", JSON.stringify(state.cart));
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
