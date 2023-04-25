import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterContextProvider } from "./context/filters_context.jsx";
import { CartContextProvider } from "./context/cart_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </FilterContextProvider>
  </ProductsProvider>
);
