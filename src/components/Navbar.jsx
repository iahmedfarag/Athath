import React, { useRef, useState } from "react";
import logo from "../assets/logo0.png";
import { nav_links } from "../data.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context.jsx";
import { useUserContext } from "../context/UserContext.jsx";

const Navbar = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const { totalItems, clearCart } = useCartContext();
  const [openNavbar, setOpenNavbar] = useState(false);
  const navbarRef1 = useRef(null);
  const navbarRef2 = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  const showLinks = () => {
    if (openNavbar) {
      setOpenNavbar(false);
      linksRef.current.style.maxHeight = null;
      linksRef.current.style.padding = "0";
    } else {
      setOpenNavbar(true);
      linksRef.current.style.maxHeight =
        linksRef.current.scrollHeight + 20 + "px";
      linksRef.current.style.padding = "10px";
    }
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
      navbarRef2?.current?.classList.add("fixed");
      navbarRef1?.current?.classList.add("fixed");

      navbarRef2?.current?.classList.add("animate__fadeInDown");
      navbarRef1?.current?.classList.add("animate__fadeInDown");
    } else {
      navbarRef2?.current?.classList.remove("animate__fadeInDown");
      navbarRef1?.current?.classList.remove("animate__fadeInDown");

      navbarRef1?.current?.classList.remove("fixed");
      navbarRef2?.current?.classList.remove("fixed");
    }
  });

  return (
    <>
      {/* nav default */}
      <nav className="big animate__animated animate__faster" ref={navbarRef1}>
        {/* nav logo */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
          TEST ALOOOOOOOOOO
        </Link>
        {/* nav links */}

        <button className="menu-btn">
          Menu
          <GiHamburgerMenu />
        </button>

        <ul className="nav-links">
          {nav_links.map((link, index) => {
            const { text, url } = link;
            return (
              <li className="nav-link" key={index}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
          {myUser && (
            <li className="nav-link">
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>

        {/* nav  */}
        <div className="nav-info">
          {myUser ? (
            <button
              className="nav-btn nav-login"
              onClick={() => {
                logout({ returnTo: window.location.origin });
                clearCart();
              }}
            >
              logout
            </button>
          ) : (
            <button className="nav-btn nav-login" onClick={loginWithRedirect}>
              login
            </button>
          )}

          {/* <button className="nav-btn nav-user">
            <MdAccountBox />
          </button> */}
          <Link to="/cart">
            <button className="nav-btn nav-cart">
              <AiOutlineShoppingCart />
              <span>{totalItems}</span>
            </button>
          </Link>
        </div>
      </nav>

      {/* nav for small screens */}
      <nav className="small animate__animated animate__faster" ref={navbarRef2}>
        {/* nav logo */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        {/* nav links */}

        <div className="menu" ref={menuRef} onClick={showLinks}>
          <button>
            Menu <GiHamburgerMenu />
          </button>
        </div>

        {/* nav  */}
        <div className="nav-info">
          {myUser ? (
            <button
              className="nav-btn nav-login"
              onClick={() => {
                logout({ returnTo: window.location.origin });
                clearCart();
              }}
            >
              logout
            </button>
          ) : (
            <button className="nav-btn nav-login" onClick={loginWithRedirect}>
              login
            </button>
          )}
          {/* <button className="nav-btn nav-user">
            <MdAccountBox />
          </button> */}
          <Link to="/cart">
            <button className="nav-btn nav-cart">
              <AiOutlineShoppingCart />
              <span>{totalItems}</span>
            </button>
          </Link>
        </div>

        <ul className="nav-links" ref={linksRef}>
          {nav_links.map((link, index) => {
            const { text, url } = link;
            return (
              <li className="nav-link" key={index}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
          {myUser && (
            <li className="nav-link">
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
