import React from "react";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
  return (
    <section className="hero header">
      <div className="hero-wrapper">
        <div className="container">
          <h1>{page.toUpperCase()}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            &gt;
            <li>
              <p>{page}</p>
            </li>
          </ul>
        </div>

        <div className="white-overlay"></div>
      </div>
    </section>
  );
};

export default Header;
