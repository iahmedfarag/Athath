import React from "react";
import { Link } from "react-router-dom";

const TextSection = ({ about }) => {
  return (
    <section className={`${about ? "text about" : "text"}`}>
      <div className="left"></div>
      <div className={`${about ? "right about" : "right"}`}>
        <h2>
          BEST FURNITURE <br /> MANUFACTURER
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          <span></span> elit. Eligendi dolore molestiae facilisunde.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur
          <span></span> elit. Eligendi dolore molestiae distinc.
        </p>
        <Link to="/products">
          <button className="discover-btn">DISCOVER MORE</button>
        </Link>
      </div>
    </section>
  );
};

export default TextSection;
