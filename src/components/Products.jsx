import React from "react";
import { Sort } from "../Page.js";
import product from "../assets/product04.png";
const Products = () => {
  return (
    <main className="products-container">
      <Sort />
      <section className="products">
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
        <article className="product">
          <img src={product} alt="" className="product-img" />
          <a href="" className="title">
            Lorem, ipsum dolor.
          </a>
          <h4 className="price">$367</h4>
        </article>
      </section>
    </main>
  );
};

export default Products;
