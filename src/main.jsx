import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterContextProvider } from "./context/filters_context.jsx";
import { CartContextProvider } from "./context/cart_context.jsx";
import { UserProvider } from "./context/UserContext.jsx";
// dev-sj4iwz8gd72s1tx1.us.auth0.com
// oKLJqgOBZ6xf5OFF5YMScjnhPbJsT6h3
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.REACT_APP_AUTH_DOMAIN}
    clientId={import.meta.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
