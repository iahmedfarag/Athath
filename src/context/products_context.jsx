import React from "react";
import { useContext, createContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={"alo alo"}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
