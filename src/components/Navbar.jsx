import React, { useRef, useState } from "react";
import logo from "../assets/logo0.png";
import { nav_links } from "../data.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
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
    if (window.scrollY >= 400) {
      navbarRef2.current.classList.add("fixed");
      navbarRef1.current.classList.add("fixed");
    } else {
      navbarRef2.current.classList.remove("fixed");
      navbarRef1.current.classList.remove("fixed");
    }
  });

  return (
    <>
      {/* nav default */}
      <nav className="big" ref={navbarRef1}>
        {/* nav logo */}
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
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
        </ul>

        {/* nav  */}
        <div className="nav-info">
          <button className="nav-btn nav-register">register</button>
          <button className="nav-btn nav-login">login</button>
          <button className="nav-btn nav-user">
            <MdAccountBox />
          </button>
          <button className="nav-btn nav-cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </button>
        </div>
      </nav>
      {/* nav for small screens */}
      <nav className="small" ref={navbarRef2}>
        {/* nav logo */}
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        {/* nav links */}

        <div className="menu" ref={menuRef} onClick={showLinks}>
          <button>
            Menu <GiHamburgerMenu />
          </button>
        </div>

        {/* nav  */}
        <div className="nav-info">
          <button className="nav-btn nav-register">register</button>
          <button className="nav-btn nav-login">login</button>
          <button className="nav-btn nav-user">
            <MdAccountBox />
          </button>
          <button className="nav-btn nav-cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </button>
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
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
