import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsProvider } from "./context/products_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
