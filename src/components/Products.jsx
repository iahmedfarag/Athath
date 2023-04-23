import React from "react";
import { Sort } from "../Page.js";
import { useProductsContext } from "../context/products_context.jsx";
import { useFilterContext } from "../context/filters_context.jsx";
import { Link } from "react-router-dom";
const Products = () => {
  const { filteredProducts } = useFilterContext();
  return (
    <main className="products-container">
      <Sort />
      <section className="products">
        {filteredProducts.map((product) => {
          const { id, name, price, image } = product;
          return (
            <article className="product" key={id}>
              <img src={image} alt="" className="product-img" />
              <Link to={`/products/${id}`} className="title">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
              <h4 className="price">${price}</h4>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Products;
