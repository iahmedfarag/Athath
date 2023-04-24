import React from "react";
import { Sort } from "../Page.js";
import { useFilterContext } from "../context/filters_context.jsx";
import { Link } from "react-router-dom";
import { formatPrice } from "./../helpers";

const Products = () => {
  const { filteredProducts, gridView } = useFilterContext();
  return (
    <main className="products-container">
      <Sort />
      {gridView ? (
        <>
          <div className="products-list">
            {filteredProducts.map((product) => {
              const { id, name, price, image, description } = product;
              const nPrice = formatPrice(price);
              const newDesc = description.split(" ").slice(0, 18).join(" ");

              return (
                <article className="product-list" key={id}>
                  <img src={image} alt="" className="product-img" />
                  <div className="info">
                    <Link to={`/products/${id}`} className="title">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                    <h4 className="price">{nPrice}</h4>
                    <p>{newDesc}...</p>
                    <Link to={`/products/${id}`}>
                      <button>Details</button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <section className="products">
            {filteredProducts.map((product) => {
              const { id, name, price, image } = product;
              const nPrice = formatPrice(price);
              return (
                <article className="product" key={id}>
                  <img src={image} alt="" className="product-img" />
                  <Link to={`/products/${id}`} className="title">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                  <h4 className="price">{nPrice}</h4>
                </article>
              );
            })}
          </section>
        </>
      )}
    </main>
  );
};

export default Products;
