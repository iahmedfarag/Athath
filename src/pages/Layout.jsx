import { Outlet } from "react-router-dom";
import { Navbar, Footer, Features } from "../Page.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Features />
      <Footer />
    </>
  );
};

export default Layout;
