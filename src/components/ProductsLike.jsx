import React from "react";
import { useProductsContext } from "../context/products_context.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { formatPrice } from "./../helpers";

const ProductsLike = () => {
  const { productsLike } = useProductsContext();

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
            {productsLike.map((product) => {
              console.log(product);
              const { id, name, price, image } = product;
              const nPrice = formatPrice(price);

              return (
                <article key={id}>
                  <img src={image} alt="" />
                  <div className="info">
                    <Link to={`/products/${id}`}>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                    <h3>{nPrice}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <Link to="/products">
          <button className="discover-btn">DISCOVER ALL</button>
        </Link>
      </div>
    </section>
  );
};

export default ProductsLike;
