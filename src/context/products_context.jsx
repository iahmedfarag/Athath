import { React, useReducer, useEffect, useContext, createContext } from "react";
import reducer from "../reducers/products_reducer.jsx";
import axios from "axios";
import { products_url as url } from "../data.js";
const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  productsLike: [],
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ! fetch products
  const fetchProducts = async () => {
    dispatch({ type: "GET_PRODUCTS" });
    try {
      const res = await axios(url);
      const products = res.data;
      dispatch({ type: "GOT_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR_PRODUCTS" });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
