import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../Page.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
