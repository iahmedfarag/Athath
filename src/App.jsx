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
  AuthWrapper,
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

  return (
    <AuthWrapper>
      <RouterProvider router={router}></RouterProvider>
    </AuthWrapper>
  );
}

export default App;
