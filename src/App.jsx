import {
  HomePage,
  AboutPage,
  CartPage,
  LoginPage,
  ProductsPage,
  RegisterPage,
  SingleProductPage,
  Layout,
  Checkout,
  PrivateRoute,
} from "./Page.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.css";
import "./css/style.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "products/:id", element: <SingleProductPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        {
          path: "checkout",
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
