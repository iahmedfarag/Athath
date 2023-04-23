import {
  HomePage,
  AboutPage,
  CartPage,
  LoginPage,
  ProductsPage,
  RegisterPage,
  SingleProductPage,
  Layout,
} from "./Page.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
