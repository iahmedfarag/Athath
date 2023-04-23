import React from "react";

const Header = ({ page }) => {
  return (
    <section className="hero header">
      <div className="hero-wrapper">
        <div className="container">
          <h1>{page.toUpperCase()}</h1>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            &gt;
            <li>
              <a href="">{page}</a>
            </li>
          </ul>
        </div>

        <div className="white-overlay"></div>
      </div>
    </section>
  );
};

export default Header;
