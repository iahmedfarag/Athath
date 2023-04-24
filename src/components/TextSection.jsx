import React from "react";
import product5 from "../assets/product05.png";
import { Link } from "react-router-dom";
const TextSection = () => {
  return (
    <section className="text">
      <div className="left">
        <div className=""></div>
      </div>
      <div className="right">
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
