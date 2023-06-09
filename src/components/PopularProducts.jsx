import React from "react";
import { useProductsContext } from "../context/products_context.jsx";
import { useFilterContext } from "../context/filters_context.jsx";
import { Link } from "react-router-dom";
import { formatPrice, getUniqueValues } from "./../helpers";
const PopularProducts = () => {
  const { productsLoading } = useProductsContext();
  const { changeCategory, allProducts, popProducts, activePopCategory } =
    useFilterContext();
  const categories = getUniqueValues(allProducts, "category");
  return (
    <>
      <section className="popular">
        <div className="container">
          <header className="section-header">
            <h2>POPULAR PRODUCTS</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
              Libero, culpa. Lorem ipsum dolor sit amet. ipsum dolor sit amet.
            </p>
          </header>
          <div className="products-container">
            {productsLoading ? (
              <h1>Loading....</h1>
            ) : (
              <>
                <div className="btns">
                  {categories.map((category, index) => {
                    if (category === "all") {
                      return;
                    }
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          changeCategory(category);
                        }}
                        className={
                          activePopCategory === category ? "active" : ""
                        }
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    );
                  })}
                </div>

                <div className="products">
                  {popProducts.map((product) => {
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
              </>
            )}
          </div>
          <Link to="/products">
            <button className="discover-btn">DISCOVER ALL</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
