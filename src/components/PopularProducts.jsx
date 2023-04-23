import React from "react";
import { useProductsContext } from "../context/products_context.jsx";
import { useFilterContext } from "../context/filters_context.jsx";
import { Link } from "react-router-dom";
const PopularProducts = () => {
  const { productsLoading } = useProductsContext();
  const { changeCategory, allProducts, popProducts, activePopCategory } =
    useFilterContext();
  const categoriesArr = allProducts.map((product) => product.category);
  const categories = [...new Set(categoriesArr)];
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
                    return (
                      <article key={id}>
                        <img src={image} alt="" />
                        <div className="info">
                          <Link to={`/products/${id}`}>
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                          </Link>
                          <h3>${price}</h3>
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
