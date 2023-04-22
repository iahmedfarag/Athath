import React from "react";
import product1 from "../assets/product02.png";
import product2 from "../assets/product03.png";
import product3 from "../assets/product04.png";
const ProductsLike = () => {
  return (
    <section className="like">
      <div className="container">
        <header className="section-header">
          <h2>PRODUCTS YOU MAY LIKE</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
            Libero, culpa. Lorem ipsum dolor sit amet. ipsum dolor sit amet.
          </p>
        </header>
        <div className="products-container">
          <div className="products">
            <article>
              <img src={product1} alt="" />
              <div className="info">
                <a href="#">Lorem ipsum dolor sit amet.</a>
                <h3>$367</h3>
              </div>
            </article>
            <article>
              <img src={product2} alt="" />
              <div className="info">
                <a href="#">Lorem ipsum dolor sit amet.</a>
                <h3>$367</h3>
              </div>
            </article>
            <article>
              <img src={product3} alt="" />
              <div className="info">
                <a href="#">Lorem ipsum dolor sit amet.</a>
                <h3>$367</h3>
              </div>
            </article>
          </div>
        </div>
        <button className="discover-btn">DISCOVER ALL</button>
      </div>
    </section>
  );
};

export default ProductsLike;
