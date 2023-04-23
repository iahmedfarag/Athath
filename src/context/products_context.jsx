import { React, useReducer, useEffect, useContext, createContext } from "react";
import reducer from "../reducers/products_reducer.jsx";
import axios from "axios";
import { products_url as url } from "../data.js";

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],
  productsLike: [],
  singleProduct: {},
  singleProductLoading: false,
  singleProductError: false,
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

  // ! fetch single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT" });
    try {
      const res = await axios(url);
      const singleProduct = res.data;
      dispatch({ type: "GOT_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
