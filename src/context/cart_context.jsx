import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer.jsx";
const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
